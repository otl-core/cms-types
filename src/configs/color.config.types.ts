import { ThemeColor } from "./theme.config.types";

/**
 * Color configuration
 */
export interface ColorConfig {
  version: number;
  site_id: string;
  config_type: "colors";
  colors: ThemeColor[];
  dark_mode_enabled?: boolean;
  created_at: string;
  updated_at: string;
}
