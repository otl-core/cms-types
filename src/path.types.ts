/**
 * Path resolution types (public/engine-facing)
 */

export interface PathResolutionResponse {
  path: string;
  type: "redirect" | "page" | "blog_post" | "not_found";
  status_code?: number;
  data?: Record<string, unknown>;
  cache_key?: string;
}
