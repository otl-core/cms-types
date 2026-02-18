// ============================================================================
// SECTION CONFIGURATION TYPES (public/engine-facing)
// ============================================================================

/**
 * Base section instance - stored in page documents
 */
export interface SectionInstance {
  id: string;
  type: string;
  config: Record<string, unknown>;
}
