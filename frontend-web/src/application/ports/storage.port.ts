/**
 * Storage Port Interface
 * Defines the contract for persistent storage operations
 * Implementations can use localStorage, sessionStorage, or async storage
 */
export interface IStorageService {
  /**
   * Get an item from storage
   */
  get<T>(key: string): T | null;

  /**
   * Set an item in storage
   */
  set<T>(key: string, value: T): void;

  /**
   * Remove an item from storage
   */
  remove(key: string): void;

  /**
   * Clear all items from storage
   */
  clear(): void;

  /**
   * Check if a key exists in storage
   */
  has(key: string): boolean;

  /**
   * Get all keys in storage
   */
  keys(): string[];
}

/**
 * Storage keys used in the application
 */
export enum StorageKey {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  USER = 'user',
  POMODORO_SETTINGS = 'pomodoro_settings',
  NOTIFICATION_SETTINGS = 'notification_settings',
  THEME = 'theme',
  SIDEBAR_COLLAPSED = 'sidebar_collapsed',
}
