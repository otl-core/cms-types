/**
 * Shared TypeScript types for OTL CMS
 * These types are used across engine, management, and navigation components
 */

/**
 * All breakpoints including base
 * Used in responsive value configs
 */
export type BreakpointWithBase = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Tailwind CSS breakpoints (without "base")
 * Used for responsive configurations in UI components
 */
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Responsive configuration object with breakpoint-specific values
 * Base value is required, all others are optional overrides
 */
export interface ResponsiveConfig<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

/**
 * A value that can be either a single value or a responsive config
 */
export type ResponsiveValue<T> = T | ResponsiveConfig<T>;

/**
 * Custom color with paired background and foreground
 */
export interface CustomColor {
  background: string;
  foreground: string;
}

/**
 * Color reference - can be a theme color, custom value, or variable reference
 * Custom colors can be either a simple string or a CustomColor object with bg/fg pair
 *
 * For theme and variable types, the optional target field specifies whether to use:
 * - undefined (default): Both background and foreground as a pair
 * - "background": Only the background color value
 * - "foreground": Only the foreground color value
 */
export type ColorReference =
  | { type: "theme"; value: string; target?: "background" | "foreground" }
  | { type: "variable"; value: string; target?: "background" | "foreground" }
  | { type: "custom"; value: string | CustomColor };

/**
 * Border side configuration
 */
export interface BorderSide {
  width?: string;
  style?: "solid" | "dashed" | "dotted" | "double" | "none";
  color?: ColorReference;
}

/**
 * Complete border configuration
 */
export interface BorderConfig {
  width: string;
  style: "solid" | "dashed" | "dotted" | "double" | "none";
  color?: ColorReference;
  radius?: string;
  top?: BorderSide;
  right?: BorderSide;
  bottom?: BorderSide;
  left?: BorderSide;
}

/**
 * Shadow configuration for box-shadow CSS property
 */
export interface ShadowConfig {
  offsetX: string; // Horizontal offset (e.g., "0", "2px", "-1px")
  offsetY: string; // Vertical offset (e.g., "4px", "0", "-2px")
  blurRadius: string; // Blur radius (e.g., "6px", "0", "10px")
  spreadRadius: string; // Spread radius (e.g., "0", "2px", "-1px")
  color: string; // Shadow color (e.g., "rgba(0,0,0,0.1)", "#000", "hsl(0, 0%, 0%)")
  inset: boolean; // Whether the shadow is inset or outset
}

/**
 * Spacing configuration (padding/margin) with individual sides
 */
export interface SpacingConfig {
  value?: string; // Applies to all sides if individual sides not specified
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

/**
 * Padding configuration alias
 */
export type PaddingConfig = SpacingConfig;

/**
 * Margin configuration alias
 */
export type MarginConfig = SpacingConfig;
