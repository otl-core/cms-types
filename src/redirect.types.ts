/**
 * Redirect types (public/engine-facing)
 */

export type RedirectStatusCode = 301 | 302 | 307 | 308;
export type RedirectMatchType = "exact" | "prefix";
export type QueryStringBehavior = "preserve" | "strip" | "append";

export interface Redirect {
  id: string;
  deployment_id: string;
  from_path: string;
  to_path?: string;
  to_url?: string;
  status_code: RedirectStatusCode;
  match_type: RedirectMatchType;
  priority: number;
  is_active: boolean;
  query_string_behavior: QueryStringBehavior;
  active_from?: string;
  active_until?: string;
  headers?: Record<string, string>;
  description?: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
