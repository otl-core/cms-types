/**
 * Component Props Interfaces
 * Core type definitions for section and block components in the engine
 */

import type { ColorReference, ResponsiveValue } from "./responsive.types";

/**
 * Base configuration for all sections
 * Uses flat keys matching the form builder field IDs
 * These properties are available on every section by default
 */
export interface SectionBaseConfig {
  // LAYOUT BEHAVIOR
  container?: "boxed" | "edged" | "ignore";

  // SPACING (responsive CSS values)
  padding?: ResponsiveValue<string>;
  margin?: ResponsiveValue<string>;

  // VISUAL STYLING
  color?: ColorReference; // Background+foreground color
}

export interface SectionComponentProps<TConfig = Record<string, unknown>> {
  config: TConfig;
  deploymentId?: string; // Optional deployment ID for form blocks
}

export interface BlockComponentProps<TConfig = Record<string, unknown>> {
  config: TConfig;
}

// Note: SchemaInstance is exported from schema.types.ts
