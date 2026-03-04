// ============================================================================
// UNIFIED SCHEMA SYSTEM - Public types for engine rendering
// ============================================================================
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
];
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
];
export function isReservedSchemaType(type) {
  return (
    RESERVED_SECTION_TYPES.includes(type) || RESERVED_BLOCK_TYPES.includes(type)
  );
}
export function isReservedSectionType(type) {
  return RESERVED_SECTION_TYPES.includes(type);
}
export function isReservedBlockType(type) {
  return RESERVED_BLOCK_TYPES.includes(type);
}
