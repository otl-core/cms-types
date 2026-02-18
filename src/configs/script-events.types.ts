/**
 * Analytics Event Tracking Types
 *
 * Defines standard events, auto-event settings, block analytics,
 * event triggers, and advanced event rules.
 */

import type { ScriptContext } from "./script.config.types";

/** Navigation events */
export type NavigationEventName =
  | "page_view"
  | "scroll_depth"
  | "outbound_click"
  | "internal_link_click"
  | "file_download";

/** Engagement events */
export type EngagementEventName =
  | "form_start"
  | "form_submit"
  | "form_error"
  | "search"
  | "video_start"
  | "video_progress"
  | "video_complete"
  | "share"
  | "content_view"
  | "element_visible";

/** Conversion events */
export type ConversionEventName =
  | "generate_lead"
  | "sign_up"
  | "login"
  | "purchase"
  | "add_to_cart"
  | "begin_checkout"
  | "contact"
  | "schedule"
  | "subscribe";

/** Special events */
export type SpecialEventName =
  | "block_click"
  | "block_visible"
  | "experiment_view"
  | "custom";

/** All standard event names */
export type StandardEventName =
  | NavigationEventName
  | EngagementEventName
  | ConversionEventName
  | SpecialEventName;

export interface AutoEventSettings {
  /** Track page views automatically. Default: true */
  page_views: boolean;
  /** Track clicks on external links. Default: false */
  outbound_links: boolean;
  /** Track file download link clicks. Default: false */
  file_downloads: boolean;
  /** File extensions to track as downloads */
  file_extensions: string[];
  /** Track scroll depth at configured thresholds. Default: false */
  scroll_depth: boolean;
  /** Scroll percentage thresholds (e.g., [25, 50, 75, 100]) */
  scroll_thresholds: number[];
  /** Track CMS form submissions. Default: false */
  form_submissions: boolean;
  /** Track time on page at configured thresholds. Default: false */
  time_on_page: boolean;
  /** Time thresholds in seconds (e.g., [30, 60, 180]) */
  time_thresholds: number[];
}

export interface BlockAnalyticsConfig {
  enabled: boolean;
  /** User-defined label, e.g. "hero_cta_click" */
  event_label: string;
  track_type: "click" | "visibility" | "both";
  /** 0-100, default 50 */
  visibility_threshold?: number;
  /** Default true for visibility */
  fire_once?: boolean;
  /** Script IDs, or "all" */
  target_providers?: "all" | string[];
  /** Extra event parameters */
  custom_params?: Record<string, string>;
}

export type EventTriggerType =
  | "page_load"
  | "click"
  | "scroll_depth"
  | "element_visibility"
  | "time_on_page"
  | "form_submission"
  | "outbound_link"
  | "file_download"
  | "custom_js"
  | "data_layer_push";

export interface PageLoadTriggerConfig {
  type: "page_load";
}

export interface ClickTriggerConfig {
  type: "click";
  css_selector: string;
}

export interface ScrollDepthTriggerConfig {
  type: "scroll_depth";
  thresholds: number[];
}

export interface ElementVisibilityTriggerConfig {
  type: "element_visibility";
  css_selector: string;
  threshold: number;
}

export interface TimeOnPageTriggerConfig {
  type: "time_on_page";
  seconds: number;
}

export interface FormSubmissionTriggerConfig {
  type: "form_submission";
  form_id?: string;
}

export interface OutboundLinkTriggerConfig {
  type: "outbound_link";
}

export interface FileDownloadTriggerConfig {
  type: "file_download";
  extensions: string[];
}

export interface CustomJsTriggerConfig {
  type: "custom_js";
  condition: string;
}

export interface DataLayerPushTriggerConfig {
  type: "data_layer_push";
  key: string;
  value?: string;
}

export type EventTriggerConfig =
  | PageLoadTriggerConfig
  | ClickTriggerConfig
  | ScrollDepthTriggerConfig
  | ElementVisibilityTriggerConfig
  | TimeOnPageTriggerConfig
  | FormSubmissionTriggerConfig
  | OutboundLinkTriggerConfig
  | FileDownloadTriggerConfig
  | CustomJsTriggerConfig
  | DataLayerPushTriggerConfig;

export interface EventPageFilter {
  match_type: "exact" | "contains" | "regex" | "starts_with";
  value: string;
}

export interface EventTrigger {
  type: EventTriggerType;
  config: EventTriggerConfig;
  page_filter?: EventPageFilter;
}

export interface ProviderEventOverride {
  event_name_override?: string;
  param_overrides?: Record<string, string>;
}

export interface EventRule {
  id: string;
  enabled: boolean;
  label: string;
  description?: string;
  trigger: EventTrigger;
  event_name: StandardEventName;
  /** Only when event_name === "custom" */
  custom_event_name?: string;
  extra_params?: Record<string, string>;
  target_providers: "all" | string[];
  provider_overrides?: Record<string, ProviderEventOverride>;
  contexts: ScriptContext[];
  locale_filter?: string[];
  created_at: string;
  updated_at: string;
}
