import { IStorageService, StorageKey } from '../../application/ports/storage.port';

/**
 * Local Storage Service Implementation
 * Implements the storage port using localStorage
 */
export class LocalStorageService implements IStorageService {
  /**
   * Get an item from storage
   */
  get<T>(key: string): T | null {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return null;

      // Try to parse as JSON
      try {
        return JSON.parse(item) as T;
      } catch {
        // Return as string if JSON parsing fails
        return item as T;
      }
    } catch (error) {
      console.error(`Error getting item from storage (${key}):`, error);
      return null;
    }
  }

  /**
   * Set an item in storage
   */
  set<T>(key: string, value: T): void {
    try {
      const item = typeof value === 'string' ? value : JSON.stringify(value);
      window.localStorage.setItem(key, item);
    } catch (error) {
      console.error(`Error setting item in storage (${key}):`, error);
    }
  }

  /**
   * Remove an item from storage
   */
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from storage (${key}):`, error);
    }
  }

  /**
   * Clear all items from storage
   */
  clear(): void {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  /**
   * Check if a key exists in storage
   */
  has(key: string): boolean {
    try {
      return window.localStorage.getItem(key) !== null;
    } catch (error) {
      console.error(`Error checking item in storage (${key}):`, error);
      return false;
    }
  }

  /**
   * Get all keys in storage
   */
  keys(): string[] {
    try {
      return Object.keys(window.localStorage);
    } catch (error) {
      console.error('Error getting keys from storage:', error);
      return [];
    }
  }

  /**
   * Get multiple items
   */
  getMultiple<T>(keys: string[]): Record<string, T | null> {
    const result: Record<string, T | null> = {};
    for (const key of keys) {
      result[key] = this.get<T>(key);
    }
    return result;
  }

  /**
   * Set multiple items
   */
  setMultiple<T>(items: Record<string, T>): void {
    for (const [key, value] of Object.entries(items)) {
      this.set(key, value);
    }
  }

  /**
   * Remove multiple items
   */
  removeMultiple(keys: string[]): void {
    for (const key of keys) {
      this.remove(key);
    }
  }
}

/**
 * Session Storage Service Implementation
 * Uses sessionStorage instead of localStorage
 */
export class SessionStorageService implements IStorageService {
  /**
   * Get an item from session storage
   */
  get<T>(key: string): T | null {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item === null) return null;

      try {
        return JSON.parse(item) as T;
      } catch {
        return item as T;
      }
    } catch (error) {
      console.error(`Error getting item from session storage (${key}):`, error);
      return null;
    }
  }

  /**
   * Set an item in session storage
   */
  set<T>(key: string, value: T): void {
    try {
      const item = typeof value === 'string' ? value : JSON.stringify(value);
      window.sessionStorage.setItem(key, item);
    } catch (error) {
      console.error(`Error setting item in session storage (${key}):`, error);
    }
  }

  /**
   * Remove an item from session storage
   */
  remove(key: string): void {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from session storage (${key}):`, error);
    }
  }

  /**
   * Clear all items from session storage
   */
  clear(): void {
    try {
      window.sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing session storage:', error);
    }
  }

  /**
   * Check if a key exists in session storage
   */
  has(key: string): boolean {
    try {
      return window.sessionStorage.getItem(key) !== null;
    } catch (error) {
      console.error(`Error checking item in session storage (${key}):`, error);
      return false;
    }
  }

  /**
   * Get all keys in session storage
   */
  keys(): string[] {
    try {
      return Object.keys(window.sessionStorage);
    } catch (error) {
      console.error('Error getting keys from session storage:', error);
      return [];
    }
  }
}

/**
 * Create local storage service instance
 */
export function createLocalStorageService(): LocalStorageService {
  return new LocalStorageService();
}

/**
 * Create session storage service instance
 */
export function createSessionStorageService(): SessionStorageService {
  return new SessionStorageService();
}

/**
 * Singleton local storage service instance
 */
let localStorageServiceInstance: LocalStorageService | null = null;

/**
 * Get or create local storage service singleton
 */
export function getLocalStorageService(): LocalStorageService {
  if (!localStorageServiceInstance) {
    localStorageServiceInstance = createLocalStorageService();
  }
  return localStorageServiceInstance;
}

/**
 * Reset local storage service singleton (useful for testing)
 */
export function resetLocalStorageService(): void {
  localStorageServiceInstance = null;
}

/**
 * Convenience function to get auth token
 */
export function getAuthToken(): string | null {
  return getLocalStorageService().get<string>(StorageKey.ACCESS_TOKEN);
}

/**
 * Convenience function to set auth token
 */
export function setAuthToken(token: string): void {
  getLocalStorageService().set(StorageKey.ACCESS_TOKEN, token);
}

/**
 * Convenience function to remove auth token
 */
export function removeAuthToken(): void {
  getLocalStorageService().remove(StorageKey.ACCESS_TOKEN);
}
