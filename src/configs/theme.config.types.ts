import { ColorReference } from "../responsive.types";
import { TypographySettings } from "./font.config.types";

/**
 * Theme configuration with light/dark modes
 */
export interface ThemeConfig {
  version: number;
  deployment_id: string;
  config_type: "theme";
  light: ThemeSlots;
  dark: ThemeSlots;
  typography: TypographySettings;
  radius: string;
  created_at: string;
  updated_at: string;
}

/**
 * Theme color mode with paired background and foreground
 */
export interface ThemeColorMode {
  background: string;
  foreground: string;
}

/**
 * Theme color definition with light and dark variants
 * Each variant includes both background and foreground for accessibility
 */
export interface ThemeColor {
  id: string;
  name: string;
  light: ThemeColorMode;
  dark: ThemeColorMode;
}

/**
 * Theme slot assignments
 * Each slot references a color that includes both background and foreground
 */
export interface ThemeSlots {
  surface: ColorReference;
  primary: ColorReference;
  secondary: ColorReference;
  accent: ColorReference;
  muted: ColorReference;
  border: ColorReference;
  card: ColorReference;
  destructive: ColorReference;
}
