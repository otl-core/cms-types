import type { ColorReference } from "../responsive.types";

/**
 * Font configuration
 */
export interface FontConfig {
  version: number;
  site_id: string;
  config_type: "fonts";
  fonts: Font[];
  created_at: string;
  updated_at: string;
}

/**
 * Font definition
 */
export interface Font {
  id: string;
  name: string;
  family: string;
  source: "google" | "custom";
  variants: string[];
  subsets?: string[];
  /** CSS font-stretch keyword (e.g. "condensed", "expanded"). Omitted or "normal" for normal-width fonts. */
  stretch?: string;
  files?: Record<string, string>;
}

/**
 * Font override for text modifiers
 */
export interface FontOverride {
  fontId?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontSize?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
}

/**
 * Font assignment for typography
 */
export interface FontAssignment {
  fontId: string;
  fontWeight: string;
  fontStyle?: string;
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
  color?: ColorReference;

  // Text modifier overrides
  strong?: FontOverride;
  emphasis?: FontOverride;
  inlineCode?: FontOverride;
}

/**
 * Typography settings for all text elements
 */
export interface TypographySettings {
  h1?: FontAssignment;
  h2?: FontAssignment;
  h3?: FontAssignment;
  h4?: FontAssignment;
  h5?: FontAssignment;
  h6?: FontAssignment;
  paragraph?: FontAssignment;
  blockquote?: FontAssignment;
  code?: FontAssignment;
  small?: FontAssignment;
  link?: LinkTypography;
}

/**
 * Link typography settings
 */
export interface LinkTypography {
  color?: ColorReference;
  hoverColor?: ColorReference;
  textDecoration?: string;
  hoverTextDecoration?: string;
  fontWeight?: string;
}
