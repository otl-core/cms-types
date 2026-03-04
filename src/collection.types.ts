/**
 * Collection types (public/engine-facing)
 */

import type { BlockInstance } from "./blocks";
import type { SEOConfig } from "./pages.types";
import type { SchemaInstance } from "./schema.types";
import type { SectionInstance } from "./sections/section-config.types";
import type { InputField } from "./sections/input-fields.types";

/**
 * A vocabulary term can be a plain string or a locale-keyed map for i18n.
 */
export type VocabularyTerm = string | Record<string, string>;

/**
 * Feature flags for a collection (which sub-entities are enabled)
 */
export interface CollectionFeatures {
  authors: boolean;
  tags: boolean;
  categories: boolean;
}

/**
 * Social media link for a collection author
 */
export interface SocialLink {
  platform: string;
  url: string;
}

/**
 * Collection author entity
 */
export interface Author {
  id: string;
  collection_id: string;
  name: string;
  slug: string;
  bio?: Record<string, string>;
  excerpt?: Record<string, string>;
  avatar_url?: string;
  social_links?: SocialLink[];
  email?: string;
  website?: string;
  url?: string;
  custom_fields?: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

/**
 * Collection entry configuration
 */
export interface CollectionEntriesConfig {
  custom_fields_schema?: InputField[];
  allowed_block_types?: string;
  default_entry_blocks?: BlockInstance[];
  strict_block_structure?: boolean;
}

/**
 * Collection locale configuration
 */
export interface CollectionLocaleConfig {
  locale: string;
  title: string;
  base_path: string;
}

/**
 * Collection layouts for different page types
 */
export interface CollectionLayouts {
  entry: SectionInstance[];
  index: SectionInstance[];
  category: SectionInstance[];
  category_index: SectionInstance[];
  author: SectionInstance[];
  tag: SectionInstance[];
  author_index: SectionInstance[];
  tag_index: SectionInstance[];
}

/**
 * Collection layouts per locale with inheritance support
 */
export interface CollectionLocaleLayouts {
  locale: string;
  layouts: CollectionLayouts;
  inherits_from?: string;
  inherited_by?: string[];
}

/**
 * Collection type determines the template used to seed vocabulary
 */
export type CollectionType =
  | "blog"
  | "news"
  | "knowledge_base"
  | "changelog"
  | "case_studies"
  | "custom";

/**
 * Customizable vocabulary labels for collection UI
 */
export interface CollectionVocabulary {
  entry_singular: VocabularyTerm;
  entry_plural: VocabularyTerm;
  category_singular: VocabularyTerm;
  category_plural: VocabularyTerm;
  author_singular: VocabularyTerm;
  author_plural: VocabularyTerm;
  tag_singular: VocabularyTerm;
  tag_plural: VocabularyTerm;
}

/**
 * Default vocabulary templates seeded by the backend for each collection type.
 * Kept in sync with backend/cms-main/internal/models/collection.go CollectionTypeTemplates.
 */
export const COLLECTION_TYPE_TEMPLATES: Record<
  CollectionType,
  CollectionVocabulary
> = {
  blog: {
    entry_singular: "Post",
    entry_plural: "Posts",
    category_singular: "Category",
    category_plural: "Categories",
    author_singular: "Author",
    author_plural: "Authors",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
  news: {
    entry_singular: "Article",
    entry_plural: "Articles",
    category_singular: "Topic",
    category_plural: "Topics",
    author_singular: "Reporter",
    author_plural: "Reporters",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
  knowledge_base: {
    entry_singular: "Article",
    entry_plural: "Articles",
    category_singular: "Section",
    category_plural: "Sections",
    author_singular: "Contributor",
    author_plural: "Contributors",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
  changelog: {
    entry_singular: "Release",
    entry_plural: "Releases",
    category_singular: "Product",
    category_plural: "Products",
    author_singular: "Contributor",
    author_plural: "Contributors",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
  case_studies: {
    entry_singular: "Case Study",
    entry_plural: "Case Studies",
    category_singular: "Industry",
    category_plural: "Industries",
    author_singular: "Author",
    author_plural: "Authors",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
  custom: {
    entry_singular: "Entry",
    entry_plural: "Entries",
    category_singular: "Category",
    category_plural: "Categories",
    author_singular: "Author",
    author_plural: "Authors",
    tag_singular: "Tag",
    tag_plural: "Tags",
  },
};

/**
 * Collection entity
 */
export interface Collection {
  id: string;
  site_id: string;
  collection_type: CollectionType;
  name: string;
  vocabulary: CollectionVocabulary;
  features: CollectionFeatures;
  locales: CollectionLocaleConfig[];
  description?: string;
  entries_config: CollectionEntriesConfig;
  author_custom_fields_schema?: InputField[];
  category_custom_fields_schema?: InputField[];
  tag_custom_fields_schema?: InputField[];
  locale_layouts: CollectionLocaleLayouts[];
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Collection category with multi-locale support
 */
export interface Category {
  id: string;
  collection_id: string;
  parent_id?: string;
  title: string;
  name: Record<string, string>;
  slug: Record<string, string>;
  description?: Record<string, string>;
  sort_order: number;
  depth: number;
  full_path: Record<string, string>;
  seo?: Record<string, SEOConfig>;
  custom_fields?: Record<string, unknown>;
  is_visible: boolean;
  children?: Category[];
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Collection tag entity with multi-locale support
 */
export interface Tag {
  id: string;
  collection_id: string;
  title: string;
  name: Record<string, string>;
  slug: Record<string, string>;
  description?: Record<string, string>;
  sort_order: number;
  is_visible: boolean;
  seo?: Record<string, SEOConfig>;
  custom_fields?: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * Collection category slug entry (normalized for path resolution)
 */
export interface CategorySlug {
  id: string;
  site_id: string;
  collection_id: string;
  category_id: string;
  locale: string;
  slug: string;
  full_path: string;
  created_at: string;
  updated_at: string;
}

/**
 * Collection category tree node (for hierarchical display)
 */
export interface CategoryTreeNode extends Category {
  children: CategoryTreeNode[];
}

/**
 * Collection entry variant info
 */
export interface EntryVariant {
  id: string;
  label: string;
  draft_id?: string;
  live_id?: string;
}

/**
 * Collection entry locale-specific content configuration
 */
export interface EntryLocaleContent {
  locale: string;
  slug: string;
  enabled: boolean;
  inherits_from?: string;
  inherited_by?: string[];
  seo?: SEOConfig;
  variants: EntryVariant[];
  active_version: string;
  publish_at?: string;
  expires_at?: string;
  password_protection?: import("./pages.types").PasswordProtection;
  header_preset_id?: string;
  footer_preset_id?: string;
}

/**
 * Collection entry with full content
 */
export interface Entry {
  // Metadata
  id: string;
  collection_id: string;
  category_id?: string;
  tags: string[];
  tag_ids: string[];
  author_ids: string[];
  is_featured: boolean;
  featured_priority: number;
  locale_content: EntryLocaleContent[];

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
  site_id: string;
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
