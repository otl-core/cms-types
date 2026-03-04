/**
 * Path resolution types (public/engine-facing)
 */

export interface PathResolutionResponse {
  path: string;
  type:
    | "redirect"
    | "page"
    | "entry"
    | "category"
    | "category_index"
    | "collection"
    | "author"
    | "author_index"
    | "tag"
    | "tag_index"
    | "not_found"
    | "multiple";
  status_code?: number;
  data?: Record<string, unknown>;
  author_id?: string;
  tag?: string;
  cache_key?: string;
}
