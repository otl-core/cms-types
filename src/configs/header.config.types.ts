/**
 * Header configuration types
 */

import type { LocalizedString } from "../api.types";
import type {
  BorderConfig,
  ColorReference,
  ResponsiveValue,
  ShadowConfig,
} from "../responsive.types";

/**
 * Header Configuration Interface
 * Structured type system with proper nesting and discriminated unions
 */
export interface HeaderConfig {
  version: 1;
  deployment_id: string;
  config_type: "header" | "navigation";

  logo: {
    alt: string;
    url: string;
    text?: string;
    width?: number;
    height?: number;
  };

  togglerSectionId: string;
  sections: HeaderSection[];
  style: HeaderStyle;

  created_at: string;
  updated_at: string;
}

export interface HeaderStyle {
  type: "default" | "minimal";
  position?: "static" | "fixed"; // Position behavior: static (normal flow) or fixed (sticky)
  container?: "boxed" | "edged" | "ignore"; // Container behavior: boxed (boxed in container), edged (full-width, edges constrained to container), ignore (full-width, no container constraint)

  safeZone?: ResponsiveValue<string>; // Safe zone for the header (e.g., "3rem" area behind the header where no content can be placed).

  layout: {
    margin: ResponsiveValue<string>;
    padding: ResponsiveValue<string>;
    sectionGap: ResponsiveValue<string>;
  };

  background: ColorReference;
  text: ColorReference;
  logoText: ColorReference;

  link: {
    color: ColorReference;
    hoverColor: ColorReference;
  };

  border: ResponsiveValue<BorderConfig>;
  shadow?: ResponsiveValue<ShadowConfig>;

  burger: {
    button: {
      background: ColorReference;
      backgroundHover: ColorReference;
    };
    icon: {
      color: ColorReference;
      hoverColor: ColorReference;
    };
    toggleIcon: ToggleIconConfig;
    toggleButton?: ToggleButtonConfig;
  };

  dropdown: {
    background: ColorReference;
    border?: BorderConfig;
    textColor: ColorReference;
    link: {
      background: ColorReference;
      color: ColorReference;
      hoverBackground: ColorReference;
      hoverColor: ColorReference;
    };
    sectionGap: ResponsiveValue<string>;
    offset: {
      left: ResponsiveValue<string>;
      right: ResponsiveValue<string>;
      y: ResponsiveValue<string>;
    };
    padding: ResponsiveValue<string>;
    shadow?: ResponsiveValue<ShadowConfig>;
  };
}

export interface HeaderSection {
  id: string;
  order: number;
  align: "flex-start" | "center" | "flex-end";
  justify:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  flex: string;
  gap?: string;
  items?: HeaderNavigationItem[];
  hideWhenEmpty?: boolean; // Hide section when it has no visible items
}

export interface HeaderNavigationItem {
  id: string;
  type: "logo" | "link" | "button" | "dropdown" | "text";
  label?: string | LocalizedString | null;
  collapse?: boolean;
  config?: HeaderNavigationItemConfig;
}

export type HeaderNavigationItemConfig =
  | HeaderNavigationItemLogoConfig
  | HeaderNavigationItemLinkConfig
  | HeaderNavigationItemButtonConfig
  | HeaderNavigationItemDropdownConfig
  | HeaderNavigationItemTextConfig;

export interface HeaderNavigationItemLogoConfig {}

export interface HeaderNavigationItemLinkConfig {
  href: string;
  icon?: string;
  external?: boolean;
}

export interface HeaderNavigationItemButtonConfig {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  external?: boolean;
}

export interface HeaderNavigationItemDropdownConfig {
  content: HeaderDropdownContent[];
  position?: "left" | "right" | "center";
  width?: string;
}

export interface HeaderNavigationItemTextConfig {
  color?: ColorReference;
}

export interface HeaderDropdownContent {
  id: string;
  type:
    | "markdown"
    | "image"
    | "navigation-item"
    | "button"
    | "dropdown"
    | "section"
    | "divider";
  label?: string | LocalizedString;
  config:
    | HeaderDropdownMarkdownConfig
    | HeaderDropdownImageConfig
    | HeaderDropdownNavigationItemConfig
    | HeaderDropdownButtonConfig
    | HeaderDropdownConfig
    | HeaderDropdownSectionConfig
    | HeaderDropdownDividerConfig;
}

export interface HeaderDropdownMarkdownConfig {
  content: string | LocalizedString;
}

export interface HeaderDropdownImageConfig {
  src: string;
  alt?: string;
  width?: string | ResponsiveValue<string>;
  height?: string | ResponsiveValue<string>;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  href?: string;
}

export interface HeaderDropdownNavigationItemConfig {
  label: string | LocalizedString;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface HeaderDropdownButtonConfig {
  label: string | LocalizedString;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  external?: boolean;
}

export interface HeaderDropdownConfig {
  content: HeaderDropdownContent[];
  position?: "left" | "right" | "center";
  width?: string;
}

export interface HeaderDropdownSectionConfig {
  title?: string | LocalizedString;
  content: HeaderDropdownContent[];
  gap?: string;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
}

export interface HeaderDropdownDividerConfig {
  color?: ColorReference;
  thickness?: string;
  margin?: string;
  style?: "solid" | "dashed" | "dotted";
}
/**
 * Toggle icon types
 */
export type ToggleIconType =
  | "hamburger"
  | "kebab"
  | "meatballs"
  | "grid"
  | "plus"
  | "chevron";

/**
 * Animation timing functions
 */
export type ToggleAnimationTiming =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "spring";

/**
 * Toggle icon configuration
 */
export interface ToggleIconConfig {
  type: ToggleIconType;
  animationDuration?: number; // Duration in milliseconds, default 300
  animationTiming?: ToggleAnimationTiming; // Default "ease-in-out"
  size?: number; // Icon size in pixels, default 24
}

/**
 * Toggle button configuration (the button that contains the icon)
 */
export interface ToggleButtonConfig {
  padding?: string; // CSS padding value, e.g., "0.5rem", "8px"
  borderRadius?: string; // CSS border-radius value, e.g., "0.375rem", "6px"
}
