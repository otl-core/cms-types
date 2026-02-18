/**
 * Forms System Types (public/engine-facing)
 */

import type { BlockInstance } from "./blocks";
import type { Rule } from "./sections/input-fields.types";

// ============================================================================
// FORM BLOCK EMBEDDING TYPES
// ============================================================================

export interface FormBlockData {
  definition: FormDefinition;
  document?: FormDocument;
  multivariate?: boolean;
  variants?: Array<{
    id: string;
    weight: number;
    document: FormDocument;
  }>;
}

export interface FormBlockConfig {
  formId: string;
  variantId?: string;
}

// ============================================================================
// FORM STRUCTURE TYPES
// ============================================================================

export interface FormDefinition {
  id: string;
  title: string;
  deployment_id: string;
  settings: FormSettings;
  status: "active" | "inactive";
  locale_content: FormLocaleContent[];
  created_at: string;
  updated_at: string;
}

export interface FormLocaleContent {
  locale: string;
  name: string;
  description?: string;
  enabled: boolean;
  inherits_from?: string;
  inherited_by?: string[];
  variants: FormVariant[];
  active_version: string;
}

export interface FormVariant {
  id: string;
  label: string;
  draft_id?: string;
  live_id?: string;
}

export interface FormPage {
  id: string;
  label?: string;
  blocks: BlockInstance[];
  exclude_from_progress?: boolean;
}

export interface FormDocument {
  document_id: string;
  pages: FormPage[];
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

// ============================================================================
// FORM SETTINGS TYPES
// ============================================================================

export interface FormAnalyticsSettings {
  track_form_start: boolean;
  track_form_submit: boolean;
  track_form_error: boolean;
  track_page_navigation: boolean;
  submit_event_name?: string;
  target_providers?: "all" | string[];
}

export type FormAnalyticsCallback = (
  event: "form_start" | "form_submit" | "form_error" | "form_page_change",
  data: {
    form_id: string;
    form_name?: string;
    page_id?: string;
    page_index?: number;
    total_pages?: number;
    error_count?: number;
    error_fields?: string[];
    custom_event_name?: string;
    target_providers?: "all" | string[];
  }
) => void;

export interface FormSettings {
  progress_indicator?: "bar" | "dots" | "none";
  enable_autosave?: boolean;
  autosave_interval?: number;
  validate_on_blur?: boolean;
  enable_spam_protection?: boolean;
  error_messages?: FormErrorMessages;
  analytics?: FormAnalyticsSettings;
  /** Form type for categorisation, e.g. "general", "contact", "lead_gen", "newsletter" */
  form_type?: string;
}

export interface FormErrorMessages {
  required?: string;
  invalid_email?: string;
  invalid_url?: string;
  invalid_phone?: string;
  invalid_date?: string;
  invalid_time?: string;
  invalid_color?: string;
  min_length?: string;
  max_length?: string;
  min_value?: string;
  max_value?: string;
  check_required?: string;
}

// ============================================================================
// API REQUEST/RESPONSE TYPES
// ============================================================================

export interface FormSubmissionRequest {
  journey_id?: string;
  page_id: string;
  data: Record<string, unknown>;
  submission_type?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  submission_id: string;
  journey_id: string;
  message?: string;
  errors?: Record<string, string>;
}

// ============================================================================
// FORM ADVANCED OPTIONS
// ============================================================================

export interface FormAdvancedOptions {
  rules: Rule[];
}
