/**
 * Page types (public/engine-facing)
 */

import type { SchemaInstance } from "./schema.types";

/**
 * Schema.org page type for structured data
 */
export type SchemaPageType =
  | "WebPage"
  | "FAQPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage";

/**
 * SEO configuration for pages and blog posts
 */
export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  canonical?: string;
  no_index: boolean;
  no_follow: boolean;
  schema_type?: SchemaPageType;
  structured_data_override?: Record<string, unknown>;
}

/**
 * Page variant info
 */
export interface PageVariant {
  id: string;
  label: string;
  draft_id?: string;
  live_id?: string;
}

/**
 * Password entry
 */
export interface PasswordEntry {
  id: string;
  label: string;
  created: string;
}

/**
 * Password protection configuration
 */
export interface PasswordProtection {
  enabled: boolean;
  password_count: number;
  passwords?: PasswordEntry[];
}

/**
 * Page locale-specific content configuration
 */
export interface PageLocaleContent {
  locale: string;
  title?: string;
  slug: string;
  enabled: boolean;
  inherits_from?: string;
  inherited_by?: string[];
  seo?: SEOConfig;
  variants: PageVariant[];
  active_version: string;
  publish_at?: string;
  expires_at?: string;
  password_protection?: PasswordProtection;
  header_preset_id?: string;
  footer_preset_id?: string;
}

/**
 * System page role identifiers
 */
export type SystemPageRole =
  | "home"
  | "not-found"
  | "error"
  | "forbidden"
  | "unauthorized";

/**
 * Page entity with locale support
 */
export interface Page {
  id: string;
  deployment_id: string;
  title: string;
  locale_content: PageLocaleContent[];
  is_system: boolean;
  system_role?: SystemPageRole;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Page document (content stored in DynamoDB)
 */
export interface PageDocument {
  document_id: string;
  sections: SchemaInstance[];
  updated_by: string;
  updated_at: string;
  created_by: string;
  created_at: string;
}

/**
 * Page with content (page metadata + document)
 */
export interface PageWithContent {
  page: Page;
  document: PageDocument;
  current_locale: string;
  current_variant_id: string;
  current_version_type: "draft" | "live";
}

/**
 * Schedule status type
 */
export type ScheduleStatus = "live" | "scheduled" | "expired" | "draft";
