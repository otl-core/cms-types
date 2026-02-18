import type { BlockTarget } from "../schema.types";

/**
 * Simple rule for conditional field behavior
 */
export type RuleType = "visible_when" | "disabled_when";

/**
 * Conditional logic types for form fields
 */
export type ConditionOperator =
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "starts_with"
  | "ends_with"
  | "greater_than"
  | "less_than"
  | "greater_than_or_equal"
  | "less_than_or_equal"
  | "between"
  | "is_empty"
  | "is_not_empty"
  | "is_checked"
  | "is_not_checked"
  | "includes"
  | "not_includes"
  | "includes_all"
  | "includes_any";

export interface Rule {
  type: RuleType;
  field: string; // ID of another field
  operator: ConditionOperator;
  value?: unknown;
}

/**
 * Base configuration that all input fields must extend
 */
export interface BaseInputField {
  id: string; // Unique identifier for the field
  label: string; // Display label in the UI
  description?: string; // Optional help text
  required?: boolean; // Whether the field is mandatory
  responsive?: boolean; // Whether the field supports responsive values per breakpoint
  defaultValue?: unknown; // Default value for the field
  validation?: ValidationRule[]; // Optional validation rules
  rules?: Rule[]; // Conditional rules for visibility and disabled state
  group?: string; // Optional group name for UI grouping (doesn't affect data structure)
}

/**
 * Validation rules for input fields
 */
export interface ValidationRule {
  type: "min" | "max" | "pattern" | "custom";
  value: string | number;
  message: string;
}

// ============================================================================
// SPECIFIC INPUT FIELD TYPES
// ============================================================================

export interface TextInputField extends BaseInputField {
  type: "text";
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
}

export interface TextareaInputField extends BaseInputField {
  type: "textarea";
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

export interface NumberInputField extends BaseInputField {
  type: "number";
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export interface BooleanInputField extends BaseInputField {
  type: "boolean";
  defaultValue?: boolean;
}

export interface SelectInputField extends BaseInputField {
  type: "select";
  defaultValue?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  multiple?: boolean;
}

export interface ColorInputField extends BaseInputField {
  type: "color";
  defaultValue?: string; // Hex color code (can pick from theme colors but stores hex)
}

export interface ThemeColorInputField extends BaseInputField {
  type: "theme-color";
  defaultValue?: { type: "theme" | "custom" | "variable"; value: string }; // ColorReference
}

export interface ThemeBackgroundColorInputField extends BaseInputField {
  type: "theme-background-color";
  defaultValue?: { type: "theme" | "custom" | "variable"; value: string }; // ColorReference
}

export interface ThemeForegroundColorInputField extends BaseInputField {
  type: "theme-foreground-color";
  defaultValue?: { type: "theme" | "custom" | "variable"; value: string }; // ColorReference
}

export interface ImageInputField extends BaseInputField {
  type: "image";
  defaultValue?: string; // Image URL
  accept?: string; // Accepted file types
  maxSize?: number; // Max file size in bytes
}

export interface MarkdownInputField extends BaseInputField {
  type: "markdown";
  defaultValue?: string;
  placeholder?: string;
}

export interface HtmlInputField extends BaseInputField {
  type: "html";
  defaultValue?: string;
  placeholder?: string;
}

export interface RichTextInputField extends BaseInputField {
  type: "richtext";
  defaultValue?: string; // HTML or markdown
  format?: "html" | "markdown";
}

export interface LocalizedTextInputField extends BaseInputField {
  type: "localized-text";
  defaultValue?: Record<string, string>; // { en: "Hello", de: "Hallo" }
  supportedLocales: string[];
}

export interface ArrayInputField extends BaseInputField {
  type: "array";
  defaultValue?: unknown[];
  itemLabel?: string; // Label for each item (e.g., "Team Member", "Slide")
  fields: InputField[]; // Array of fields for each array item
  minItems?: number;
  maxItems?: number;
}

export interface ObjectInputField extends BaseInputField {
  type: "object";
  defaultValue?: Record<string, unknown>;
  properties: InputField[]; // Array of nested input fields
}

export interface GroupInputField extends BaseInputField {
  type: "group";
  defaultValue?: Record<string, unknown>;
  fields: InputField[]; // Array of nested input fields (like object, but for UI grouping)
  collapsible?: boolean; // Whether to render in a collapsible section
  collapsedByDefault?: boolean; // Whether the collapsible section starts collapsed
}

export interface DateInputField extends BaseInputField {
  type: "date";
  defaultValue?: string; // ISO date string
  min?: string;
  max?: string;
}

export interface JsonInputField extends BaseInputField {
  type: "json";
  defaultValue?: unknown; // Any JSON-serializable value
}

export interface UrlInputField extends BaseInputField {
  type: "url";
  defaultValue?: string;
  placeholder?: string;
}

export interface CodeInputField extends BaseInputField {
  type: "code";
  defaultValue?: string;
  language?: "json" | "javascript" | "typescript" | "html" | "css" | "markdown";
  height?: string; // e.g., "400px"
}

export interface BlocksInputField extends BaseInputField {
  type: "blocks";
  defaultValue?: Array<{
    id: string;
    type: string;
    config: Record<string, unknown>;
  }>;
  maxBlocks?: number; // Maximum number of blocks allowed
  minBlocks?: number; // Minimum number of blocks required
  allowedBlockTypes?: string[]; // If specified, only these block types are allowed
  allowedTargets?: BlockTarget[]; // If specified, only blocks with these targets are allowed
}

export interface FormPageInputField extends BaseInputField {
  type: "form-page";
  defaultValue?: string; // Page ID or "next"/"prev"
  placeholder?: string;
  help?: string;
}

export interface FormSelectorInputField extends BaseInputField {
  type: "form-selector";
  defaultValue?: string; // Form ID
  placeholder?: string;
}

export interface GridColumnsInputField extends BaseInputField {
  type: "columns";
  defaultValue?: Record<string, string>; // ResponsiveValue<string>
}

export interface CssValueInputField extends BaseInputField {
  type: "css-value";
  defaultValue?: string;
  placeholder?: string;
}

export interface SpacingInputField extends BaseInputField {
  type: "spacing";
  defaultValue?: string; // "1rem" or "1rem 2rem 3rem 4rem" (per-side)
  placeholder?: string;
}

export interface ContainerBehaviorInputField extends BaseInputField {
  type: "container-behavior";
  defaultValue?: "boxed" | "edged" | "ignore";
}

/**
 * Union type of all possible input fields
 */
export type InputField =
  | TextInputField
  | TextareaInputField
  | NumberInputField
  | BooleanInputField
  | SelectInputField
  | ColorInputField
  | ThemeColorInputField
  | ThemeBackgroundColorInputField
  | ThemeForegroundColorInputField
  | ImageInputField
  | MarkdownInputField
  | HtmlInputField
  | RichTextInputField
  | LocalizedTextInputField
  | ArrayInputField
  | ObjectInputField
  | GroupInputField
  | DateInputField
  | JsonInputField
  | UrlInputField
  | CodeInputField
  | BlocksInputField
  | FormPageInputField
  | FormSelectorInputField
  | GridColumnsInputField
  | CssValueInputField
  | SpacingInputField
  | ContainerBehaviorInputField;

/**
 * Map of input field types for type-safe lookups
 */
export type InputFieldType = InputField["type"];
