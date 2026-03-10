/**
 * Site types (public/engine-facing)
 */

/**
 * Site entity
 */
export interface Site {
  id: string;
  organization_ids: string[];
  team_ids: string[];
  name: string;
  subdomain: string;
  custom_domains?: string[];
  description?: string;
  status: "draft" | "active" | "inactive" | "maintenance";
  supported_locales?: string[];
  default_locale?: string;
  audit_enabled: boolean;
  storage_used_bytes: number;
  storage_limit_bytes?: number;
  max_file_size_bytes?: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
