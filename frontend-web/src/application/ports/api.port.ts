/**
 * API Port Interface
 * Defines the contract for API communication
 * This is the outer layer dependency that will be implemented by Infrastructure layer
 */
export interface IApiService {
  /**
   * Make a GET request
   */
  get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T>;

  /**
   * Make a POST request
   */
  post<T>(endpoint: string, body?: unknown): Promise<T>;

  /**
   * Make a PUT request
   */
  put<T>(endpoint: string, body?: unknown): Promise<T>;

  /**
   * Make a PATCH request
   */
  patch<T>(endpoint: string, body?: unknown): Promise<T>;

  /**
   * Make a DELETE request
   */
  delete<T>(endpoint: string): Promise<T>;

  /**
   * Set authentication token
   */
  setAuthToken(token: string | null): void;

  /**
   * Set refresh token
   */
  setRefreshToken(token: string | null): void;

  /**
   * Get current auth token
   */
  getAuthToken(): string | null;
}

/**
 * API Error
 */
export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  /**
   * Check if error is unauthorized
   */
  isUnauthorized(): boolean {
    return this.statusCode === 401;
  }

  /**
   * Check if error is forbidden
   */
  isForbidden(): boolean {
    return this.statusCode === 403;
  }

  /**
   * Check if error is not found
   */
  isNotFound(): boolean {
    return this.statusCode === 404;
  }

  /**
   * Check if error is validation error
   */
  isValidationError(): boolean {
    return this.statusCode === 400;
  }

  /**
   * Check if error is server error
   */
  isServerError(): boolean {
    return this.statusCode >= 500;
  }
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Paginated Response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
