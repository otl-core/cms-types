/**
 * Favicon configuration for all platforms
 */
export interface FaviconConfig {
  version: number;
  deployment_id?: string;
  config_type?: "favicon";

  // Standard ICO, PNG, and SVG favicons
  favicon_ico?: string;
  favicon_svg?: string;
  favicon16?: string;
  favicon32?: string;
  favicon48?: string;
  favicon96?: string;
  favicon128?: string;
  favicon196?: string;

  // Apple Touch Icons
  apple_touch_icon_57?: string;
  apple_touch_icon_60?: string;
  apple_touch_icon_72?: string;
  apple_touch_icon_76?: string;
  apple_touch_icon_114?: string;
  apple_touch_icon_120?: string;
  apple_touch_icon_144?: string;
  apple_touch_icon_152?: string;
  apple_touch_icon_180?: string;

  // Android Chrome Icons
  android_chrome_36?: string;
  android_chrome_48?: string;
  android_chrome_72?: string;
  android_chrome_96?: string;
  android_chrome_144?: string;
  android_chrome_192?: string;
  android_chrome_256?: string;
  android_chrome_384?: string;
  android_chrome_512?: string;

  // Microsoft Windows Tiles
  ms_application_tile_color?: string;
  ms_application_tile_70?: string;
  ms_application_tile_150?: string;
  ms_application_tile_310?: string;
  ms_application_tile_wide?: string;

  // Safari Pinned Tab
  safari_pinned_tab?: string;
  safari_pinned_tab_color?: string;

  // Web App Manifest Configuration
  manifest_name?: string;
  manifest_short_name?: string;
  manifest_start_url?: string;
  manifest_display?: string;
  manifest_scope?: string;

  // Theme Colors
  theme_color?: string;
  background_color?: string;

  created_at?: string;
  updated_at?: string;
}
