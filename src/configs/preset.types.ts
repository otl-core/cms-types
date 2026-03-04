/**
 * Preset types (public/engine-facing)
 */

/**
 * Lightweight preset metadata for dropdowns and selectors
 */
export interface PresetMeta {
  id: string;
  label: string;
  is_default: boolean;
}
