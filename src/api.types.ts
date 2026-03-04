/**
 * Core API types shared across all applications
 */

/**
 * Standard API response wrapper
 */
export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: APIError;
  meta?: {
    pagination?: Pagination;
  };
}

/**
 * API Error with optional validation details
 */
export interface APIError {
  message: string;
  code?: string;
  details?: APIErrorDetail[] | APIErrorDetail | Record<string, unknown> | null;
}

/**
 * Individual validation error detail
 */
export interface APIErrorDetail {
  field?: string;
  message?: string;
  value?: unknown;
}

/**
 * Pagination metadata
 */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

/**
 * Standard paginated list response
 * Use this for all list endpoints instead of custom response types
 */
export interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}

/**
 * Internationalization - localized string support
 */
export interface LocalizedString {
  [locale: string]: string;
}
