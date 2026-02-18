/**
 * Script and Consent Management Configuration Types
 *
 * Comprehensive script management and cookie consent system
 * following IAB TCF conventions.
 */

export type ConsentCategory =
  | "necessary"
  | "analytics"
  | "marketing"
  | "preferences"
  | "social";

export type ScriptPlacement = "head" | "body_start" | "body_end";

export type ScriptLoadingStrategy =
  | "beforeInteractive"
  | "afterInteractive"
  | "lazyOnload"
  | "worker";

export type ScriptContext =
  | "all"
  | "pages"
  | "blog_listings"
  | "blog_posts"
  | "forms";

export type CustomScriptType = "script_tag" | "inline_js";

export type AnalyticsProviderType =
  | "google_analytics_4"
  | "google_tag_manager"
  | "matomo"
  | "plausible"
  | "fathom"
  | "umami"
  | "pirsch"
  | "simple_analytics"
  | "adobe_analytics"
  | "mixpanel"
  | "amplitude"
  | "heap"
  | "posthog"
  | "segment"
  | "microsoft_clarity";

export type MarketingProviderType =
  | "meta_pixel"
  | "google_ads"
  | "linkedin_insight"
  | "tiktok_pixel"
  | "pinterest_tag"
  | "twitter_pixel"
  | "snapchat_pixel"
  | "reddit_pixel"
  | "bing_uet"
  | "criteo"
  | "outbrain"
  | "taboola";

export type SessionRecordingProviderType =
  | "hotjar"
  | "fullstory"
  | "logrocket"
  | "mouseflow"
  | "lucky_orange"
  | "smartlook"
  | "crazy_egg";

export type EngagementProviderType =
  | "hubspot"
  | "intercom"
  | "drift"
  | "zendesk"
  | "crisp"
  | "tawk_to"
  | "livechat";

export type ABTestingProviderType = "optimizely" | "vwo" | "ab_tasty";

export type ConsentPlatformProviderType =
  | "cookiebot"
  | "onetrust"
  | "usercentrics"
  | "iubenda";

// Union of all provider types
export type ScriptProviderType =
  | AnalyticsProviderType
  | MarketingProviderType
  | SessionRecordingProviderType
  | EngagementProviderType
  | ABTestingProviderType
  | ConsentPlatformProviderType;

export interface CustomScriptConfig {
  src?: string;
  async?: boolean;
  defer?: boolean;
  crossorigin?: string;
  referrerpolicy?: string;
  integrity?: string;
  code?: string;
}

interface ManagedScriptBase {
  id: string;
  enabled: boolean;
  label: string;
  description?: string;
  consent_category: ConsentCategory;
  loading_strategy: ScriptLoadingStrategy;
  placement: ScriptPlacement;
  contexts: ScriptContext[];
  locale_filter?: string[];
  attributes?: Record<string, string>;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface ProviderManagedScript extends ManagedScriptBase {
  type: "provider";
  provider: ScriptProviderType;
  provider_config: Record<string, string>;
}

export interface CustomManagedScript extends ManagedScriptBase {
  type: "custom";
  custom_type: CustomScriptType;
  custom_config: CustomScriptConfig;
}

export type ManagedScript = ProviderManagedScript | CustomManagedScript;

export interface ConsentCategoryLabel {
  title: string;
  description: string;
}

export interface ConsentBannerTexts {
  title: string;
  description: string;
  accept_all_label: string;
  reject_all_label: string;
  preferences_label: string;
  save_preferences_label: string;
  category_labels: Record<ConsentCategory, ConsentCategoryLabel>;
  privacy_policy_label?: string;
  cookie_policy_label?: string;
  imprint_label?: string;
  close_button_label?: string;
}

export type ConsentBannerPosition =
  | "top"
  | "bottom"
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right"
  | "center";

export type ConsentBannerLayout = "bar" | "box" | "modal" | "sheet";

export interface ConsentBannerConfig {
  enabled: boolean;
  position: ConsentBannerPosition;
  layout: ConsentBannerLayout;
  consent_mode: "opt_in" | "opt_out";
  show_reject_all: boolean;
  show_preferences: boolean;
  show_close_button: boolean;
  block_interaction: boolean;
  respect_dnt: boolean;
  respect_gpc: boolean;
  auto_dismiss_seconds?: number;
  re_consent_days?: number;
  cookie_name: string;
  cookie_lifetime_days: number;
  google_consent_mode_enabled: boolean;
  privacy_policy_url?: string;
  cookie_policy_url?: string;
  imprint_url?: string;
  logo_url?: string;
  custom_css_class?: string;
  texts: Record<string, ConsentBannerTexts>;
}

import type { AutoEventSettings, EventRule } from "./script-events.types";

export interface ScriptConfig {
  version: number;
  deployment_id: string;
  config_type: "scripts";
  scripts: ManagedScript[];
  consent_banner: ConsentBannerConfig;
  auto_events?: AutoEventSettings;
  advanced_event_rules?: EventRule[];
  created_at: string;
  updated_at: string;
}
