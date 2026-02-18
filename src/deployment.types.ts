/**
 * Deployment types (public/engine-facing)
 */

/**
 * Deployment entity
 */
export interface Deployment {
  id: string;
  organization_ids: string[];
  department_ids: string[];
  name: string;
  subdomain: string;
  custom_domains?: string[];
  description?: string;
  status: "draft" | "active" | "inactive" | "maintenance";
  supported_locales?: string[];
  default_locale?: string;
  audit_enabled: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
