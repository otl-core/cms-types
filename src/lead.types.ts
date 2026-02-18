/**
 * Lead types (public/engine-facing)
 */

export interface Lead {
  id: string;
  organization_id: string;
  deployment_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message?: string;
  form_type: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  category_id?: string;
  utm_data?: UTMData;
  custom_fields?: Record<string, unknown>;
  notes?: LeadNote[];
  created_at: string;
  updated_at: string;
}

export interface UTMData {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface LeadNote {
  id: string;
  content: string;
  created_by: string;
  created_at: string;
}

export interface LeadCaptureRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message?: string;
  form_type: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  custom_fields?: Record<string, unknown>;
}
