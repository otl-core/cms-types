// ============================================================================
// UNIFIED SCHEMA SYSTEM - Public types for engine rendering
// ============================================================================

/**
 * Block target - what pages/contexts can a block be added to
 */
export type BlockTarget =
  | "blog.post"
  | "blog.index"
  | "blog.category"
  | "blog.author"
  | "blog.tag"
  | "blog.search"
  | "page"
  | "form"
  | "footer"
  | "*";

/**
 * Schema instance in a page (section) or blog post (block)
 */
export interface SchemaInstance {
  id: string;
  type: string;
  config: Record<string, unknown>;
}

// ============================================================================
// RESERVED/BUILT-IN SCHEMA TYPES
// ============================================================================

export const RESERVED_SECTION_TYPES = [
  "hero-banner",
  "content-blocks",
  "feature-grid",
  "testimonial-carousel",
  "cta-banner",
  "team-grid",
  "faq-accordion",
  "stats-showcase",
  "logo-cloud",
] as const;

export const RESERVED_BLOCK_TYPES = [
  "markdown",
  "html",
  "image",
  "quote",
  "gallery",
  "embed",
  "cta",
  "divider",
  "code",
  "about-the-authors",
  "more-from-the-authors",
  "recommended-posts",
  "related-posts",
] as const;

export type ReservedSectionType = (typeof RESERVED_SECTION_TYPES)[number];
export type ReservedBlockType = (typeof RESERVED_BLOCK_TYPES)[number];
export type ReservedSchemaType = ReservedSectionType | ReservedBlockType;

export function isReservedSchemaType(type: string): type is ReservedSchemaType {
  return (
    (RESERVED_SECTION_TYPES as readonly string[]).includes(type) ||
    (RESERVED_BLOCK_TYPES as readonly string[]).includes(type)
  );
}

export function isReservedSectionType(
  type: string
): type is ReservedSectionType {
  return (RESERVED_SECTION_TYPES as readonly string[]).includes(type);
}

export function isReservedBlockType(type: string): type is ReservedBlockType {
  return (RESERVED_BLOCK_TYPES as readonly string[]).includes(type);
}
