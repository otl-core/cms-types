/**
 * Blog types (public/engine-facing)
 */

import type { BlockInstance } from "./blocks";
import type { SEOConfig } from "./pages.types";
import type { SchemaInstance } from "./schema.types";
import type { SectionInstance } from "./sections/section-config.types";
import type { InputField } from "./sections/input-fields.types";

/**
 * Social media link for a blog author
 */
export interface SocialLink {
  platform: string;
  url: string;
}

/**
 * Blog author entity
 */
export interface BlogAuthor {
  id: string;
  blog_id: string;
  name: string;
  slug: string;
  bio?: string;
  excerpt?: string;
  avatar_url?: string;
  social_links?: SocialLink[];
  email?: string;
  website?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Blog settings with nested structure
 */
export interface BlogSettings {
  display: {
    posts_per_page: number;
    show_author: boolean;
    show_date: boolean;
    show_updated_date: boolean;
    show_categories: boolean;
    show_tags: boolean;
    show_excerpt: boolean;
    show_featured_image: boolean;
    show_reading_time: boolean;
  };
  content: {
    excerpt: {
      auto_generate: boolean;
      max_length: number;
      strip_html: boolean;
    };
    featured_image: {
      required: boolean;
      aspect_ratio?: string;
    };
    reading_time_wpm: number;
  };
  seo: {
    title_template: string;
    meta_description_template: string;
  };
}

/**
 * Blog post configuration
 */
export interface BlogPostsConfig {
  custom_fields_schema?: InputField[];
  allowed_block_types?: string;
  default_post_blocks?: BlockInstance[];
  strict_block_structure?: boolean;
}

/**
 * Blog locale configuration
 */
export interface BlogLocaleConfig {
  locale: string;
  title: string;
  base_path: string;
}

/**
 * Blog layouts for different page types
 */
export interface BlogLayouts {
  post: SectionInstance[];
  index: SectionInstance[];
  category: SectionInstance[];
  author: SectionInstance[];
  tag: SectionInstance[];
  search: SectionInstance[];
}

/**
 * Blog layouts per locale with inheritance support
 */
export interface BlogLocaleLayouts {
  locale: string;
  layouts: BlogLayouts;
  inherits_from?: string;
  inherited_by?: string[];
}

/**
 * Blog entity
 */
export interface Blog {
  id: string;
  deployment_id: string;
  name: string;
  locales: BlogLocaleConfig[];
  description?: string;
  settings: BlogSettings;
  posts_config: BlogPostsConfig;
  locale_layouts: BlogLocaleLayouts[];
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Blog category with multi-locale support
 */
export interface BlogCategory {
  id: string;
  blog_id: string;
  parent_id?: string;
  title: string;
  name: Record<string, string>;
  slug: Record<string, string>;
  description?: Record<string, string>;
  sort_order: number;
  depth: number;
  full_path: Record<string, string>;
  seo?: Record<string, SEOConfig>;
  is_visible: boolean;
  children?: BlogCategory[];
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Blog category slug entry (normalized for path resolution)
 */
export interface BlogCategorySlug {
  id: string;
  deployment_id: string;
  blog_id: string;
  category_id: string;
  locale: string;
  slug: string;
  full_path: string;
  created_at: string;
  updated_at: string;
}

/**
 * Blog category tree node (for hierarchical display)
 */
export interface BlogCategoryTreeNode extends BlogCategory {
  children: BlogCategoryTreeNode[];
}

/**
 * Blog post variant info
 */
export interface BlogPostVariant {
  id: string;
  label: string;
  draft_id?: string;
  live_id?: string;
}

/**
 * Blog post locale-specific content configuration
 */
export interface BlogPostLocaleContent {
  locale: string;
  slug: string;
  enabled: boolean;
  inherits_from?: string;
  inherited_by?: string[];
  seo?: SEOConfig;
  variants: BlogPostVariant[];
  active_version: string;
  publish_at?: string;
  expires_at?: string;
  password_protection?: import("./pages.types").PasswordProtection;
  header_preset_id?: string;
  footer_preset_id?: string;
}

/**
 * Blog post with full content
 */
export interface BlogPost {
  // Metadata
  id: string;
  blog_id: string;
  category_id?: string;
  tags: string[];
  author_ids: string[];
  is_featured: boolean;
  featured_priority: number;
  locale_content: BlogPostLocaleContent[];

  // Content (for the current locale/variant/version)
  title: string;
  slug: string;
  blocks?: SchemaInstance[];
  content: string;
  excerpt?: string;
  featured_image?: MediaReference;
  seo?: SEOConfig;
  custom_fields?: Record<string, unknown>;
  custom_field_values?: Record<string, unknown>;

  // Publishing
  status: "draft" | "published" | "scheduled" | "expired";
  published_at?: string;
  scheduled_at?: string;
  expires_at?: string;

  // Stats
  reading_time_minutes: number;

  // Context
  current_locale: string;
  current_variant: string;
  current_version_type: "draft" | "live";

  // Audit
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Media reference for images/videos
 */
export interface MediaReference {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Media asset
 */
export interface Media {
  id: string;
  deployment_id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  url: string;
  alt?: string;
  dimensions?: MediaDimensions;
  metadata?: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

/**
 * Media dimensions
 */
export interface MediaDimensions {
  width: number;
  height: number;
}
