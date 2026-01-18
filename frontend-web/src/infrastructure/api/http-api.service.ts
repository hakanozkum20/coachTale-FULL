import { IApiService, ApiError, ApiResponse } from '../../application/ports/api.port';

/**
 * HTTP API Service Implementation
 * Implements the API port using fetch
 */
export class HttpApiService implements IApiService {
  private authToken: string | null = null;
  private refreshToken: string | null = null;
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];

  constructor(config: { baseUrl: string; defaultHeaders?: Record<string, string> }) {
    this.baseUrl = config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...config.defaultHeaders,
    };

    // Load tokens from localStorage on initialization
    this.loadTokensFromStorage();
  }

  /**
   * Load tokens from localStorage
   */
  private loadTokensFromStorage(): void {
    try {
      const authStorage = localStorage.getItem('auth-storage');
      if (authStorage) {
        const parsed = JSON.parse(authStorage);
        if (parsed?.state?.accessToken) {
          this.authToken = parsed.state.accessToken;
        }
        if (parsed?.state?.refreshToken) {
          this.refreshToken = parsed.state.refreshToken;
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  /**
   * Subscribe to token refresh
   */
  private subscribeToRefresh(callback: (token: string) => void): void {
    this.refreshSubscribers.push(callback);
  }

  /**
   * Notify all subscribers of new token
   */
  private onRefreshed(token: string): void {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  /**
   * Refresh access token
   */
  private async refreshAccessToken(): Promise<string> {
    if (this.isRefreshing) {
      return new Promise((resolve) => {
        this.subscribeToRefresh((token) => resolve(token));
      });
    }

    this.isRefreshing = true;

    try {
      const response = await fetch(`${this.baseUrl}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.refreshToken ? { Authorization: `Bearer ${this.refreshToken}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      const newAccessToken = data.accessToken;

      // Update auth token
      this.authToken = newAccessToken;

      // Update localStorage
      this.updateLocalStorageToken(newAccessToken);

      this.onRefreshed(newAccessToken);
      return newAccessToken;
    } finally {
      this.isRefreshing = false;
    }
  }

  /**
   * Update token in localStorage
   */
  private updateLocalStorageToken(token: string): void {
    try {
      const authStorage = localStorage.getItem('auth-storage');
      if (authStorage) {
        const parsed = JSON.parse(authStorage);
        if (parsed?.state) {
          parsed.state.accessToken = token;
          localStorage.setItem('auth-storage', JSON.stringify(parsed));
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  /**
   * Build full URL from endpoint
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number>): string {
    let url = `${this.baseUrl}${endpoint}`;

    if (params) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, String(value));
      }
      const queryString = searchParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    return url;
  }

  /**
   * Build headers with auth token
   */
  private buildHeaders(): HeadersInit {
    const headers: HeadersInit = { ...this.defaultHeaders };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    return headers;
  }

  /**
   * Parse response and handle errors
   */
  private async parseResponse<T>(response: Response, skipAuthError = false): Promise<T> {
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      let errorMessage = 'An error occurred';
      let details: unknown;

      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
        details = errorData;
      } else {
        errorMessage = await response.text() || errorMessage;
      }

      // Skip throwing 401 errors if flag is set (will be handled by request method)
      if (response.status === 401 && !skipAuthError) {
        throw new ApiError(response.status, errorMessage, details);
      }
      // For 401, throw a special error that won't show toast
      if (response.status === 401 && skipAuthError) {
        throw new ApiError(response.status, '', { silent: true });
      }

      throw new ApiError(response.status, errorMessage, details);
    }

    if (contentType?.includes('application/json')) {
      return await response.json();
    }

    // Return empty object for non-JSON responses
    return {} as T;
  }

  /**
   * Make a request with automatic token refresh on 401
   */
  private async request<T>(
    method: string,
    endpoint: string,
    body?: unknown,
    params?: Record<string, string | number>
  ): Promise<T> {
    const url = this.buildUrl(endpoint, params);

    const makeRequest = (): Promise<Response> => {
      return fetch(url, {
        method,
        headers: this.buildHeaders(),
        body: body ? JSON.stringify(body) : undefined,
      });
    };

    let response = await makeRequest();

    // Handle 401 - try to refresh token and retry
    if (response.status === 401 && this.refreshToken) {
      try {
        await this.refreshAccessToken();
        response = await makeRequest();
      } catch {
        // Token refresh failed, throw the error
        // Don't show toast - let the query cache handler redirect
        throw new ApiError(401, '', { silent: true });
      }
    }

    return await this.parseResponse<T>(response);
  }

  /**
   * Make a GET request
   */
  async get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
    return this.request<T>('GET', endpoint, undefined, params);
  }

  /**
   * Make a POST request
   */
  async post<T>(endpoint: string, body?: unknown): Promise<T> {
    return this.request<T>('POST', endpoint, body);
  }

  /**
   * Make a PUT request
   */
  async put<T>(endpoint: string, body?: unknown): Promise<T> {
    return this.request<T>('PUT', endpoint, body);
  }

  /**
   * Make a PATCH request
   */
  async patch<T>(endpoint: string, body?: unknown): Promise<T> {
    return this.request<T>('PATCH', endpoint, body);
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>('DELETE', endpoint);
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string | null): void {
    this.authToken = token;
  }

  /**
   * Set refresh token
   */
  setRefreshToken(token: string | null): void {
    this.refreshToken = token;
  }

  /**
   * Get current auth token
   */
  getAuthToken(): string | null {
    return this.authToken;
  }

  /**
   * Set base URL
   */
  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  /**
   * Set default header
   */
  setDefaultHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  /**
   * Remove default header
   */
  removeDefaultHeader(key: string): void {
    delete this.defaultHeaders[key];
  }
}

/**
 * Create API service instance
 */
export function createApiService(baseUrl: string): HttpApiService {
  return new HttpApiService({
    baseUrl,
    defaultHeaders: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Singleton API service instance
 */
let apiServiceInstance: HttpApiService | null = null;

/**
 * Get or create API service singleton
 */
export function getApiService(): HttpApiService {
  if (!apiServiceInstance) {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
    apiServiceInstance = createApiService(apiUrl);
  }
  return apiServiceInstance;
}

/**
 * Reset API service singleton (useful for testing)
 */
export function resetApiService(): void {
  apiServiceInstance = null;
}
