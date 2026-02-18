/**
 * Footer configuration types - Section-based architecture
 */

import type { BlockInstance } from "../blocks/block-schema.types";
import type {
  BorderConfig,
  ColorReference,
  ResponsiveValue,
  ShadowConfig,
} from "../responsive.types";

/**
 * Footer configuration
 */
export interface FooterConfig {
  version: 1;
  deployment_id: string;
  config_type: "footer";
  sections: FooterSection[];
  style: FooterStyle;
  created_at: string;
  updated_at: string;
}

/**
 * Global footer styling (defaults for all sections)
 */
export interface FooterStyle {
  container: "boxed" | "edged" | "ignore";
  // boxed = footer boxed in container; items boxed in container
  // edged = footer full-width; items edged in container
  // ignore = footer full-width; items full-width

  layout: {
    margin: ResponsiveValue<string>;
    padding: ResponsiveValue<string>;
    sectionGap: ResponsiveValue<string>;
  };

  background: ColorReference;
  text: ColorReference;

  link: {
    color: ColorReference;
    hoverColor: ColorReference;
  };

  border: ResponsiveValue<BorderConfig>;
  shadow?: ResponsiveValue<ShadowConfig>;
}

/**
 * Section-level style configuration
 */
export interface FooterSectionStyle {
  // Layout properties
  align: "flex-start" | "center" | "flex-end" | "stretch";
  justify:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  flex?: string; // e.g., "1", "0 1 auto"
  gap?: string; // e.g., "1rem", "24px"

  // Visual styling (can override footer-level defaults)
  background?: ColorReference;
  border?: ResponsiveValue<BorderConfig>;
  padding?: ResponsiveValue<string>;
}

/**
 * Base section - has nested sections (rows/columns), NO blocks
 * row = flex-direction: row (horizontal layout)
 * column = flex-direction: column (vertical layout)
 */
export interface FooterSection {
  id: string;
  order: number;
  type: "row" | "column";
  style: FooterSectionStyle;
  sections?: FooterContentSection[];
}

/**
 * Leaf section - has blocks instead of nested sections
 */
export interface FooterContentSection extends Omit<FooterSection, "sections"> {
  blocks?: BlockInstance[];
}
