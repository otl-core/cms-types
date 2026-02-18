import { LocalizedString } from "../api.types";
import { PasswordProtection } from "../pages.types";

/**
 * Organization info for JSON-LD structured data
 */
export interface OrganizationInfo {
  name?: string;
  legal_name?: string;
  logo?: string;
  url?: string;
  email?: string;
  phone?: string;
  description?: string;
  address?: PostalAddress;
  social_profiles?: SocialProfile[];
}

/**
 * Postal address for structured data
 */
export interface PostalAddress {
  street?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
}

/**
 * Social media profile link
 */
export interface SocialProfile {
  platform: string;
  url: string;
}

/**
 * Security.txt configuration (RFC 9116)
 */
export interface SecurityTxtConfig {
  contact_email?: string;
  policy_url?: string;
  encryption_url?: string;
  hiring_url?: string;
  acknowledgments_url?: string;
}

/**
 * Configurable text for the password prompt component.
 * All fields are optional -- English defaults are used as fallbacks.
 */
export interface PasswordPromptTexts {
  incorrect_password?: string;
  error_message?: string;
  default_title?: string;
  default_message?: string;
  password_label?: string;
  password_placeholder?: string;
  verifying_label?: string;
  submit_label?: string;
}

/**
 * Website configuration
 */
export interface WebsiteConfig {
  version: number;
  deployment_id: string;
  config_type: "website";
  site_name: string | LocalizedString;
  tagline?: string | LocalizedString;
  description?: string | LocalizedString;
  timezone: string;
  organization?: OrganizationInfo;
  password_protection?: PasswordProtection;
  password_prompt_texts?: PasswordPromptTexts;
  custom_fields?: Record<string, unknown>;

  // Social media
  twitter_handle?: string;

  // Crawling and discovery
  robots_txt_custom_rules?: string;
  ads_txt_content?: string;
  security_txt?: SecurityTxtConfig;

  created_at: string;
  updated_at: string;
}
