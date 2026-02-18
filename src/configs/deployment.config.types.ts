import { Deployment } from "../deployment.types";
import { ColorConfig } from "./color.config.types";
import { FaviconConfig } from "./favicon.config.types";
import { FontConfig } from "./font.config.types";
import { FooterConfig } from "./footer.config.types";
import { HeaderConfig } from "./header.config.types";
import { PresetMeta } from "./preset.types";
import { ScriptConfig } from "./script.config.types";
import { ThemeConfig } from "./theme.config.types";
import { WebsiteConfig } from "./website.config.types";

/**
 * Complete deployment configuration
 */
export interface DeploymentConfig {
  deployment?: Deployment;
  website?: WebsiteConfig;
  scripts?: ScriptConfig;
  colors?: ColorConfig;
  fonts?: FontConfig;
  theme?: ThemeConfig;
  header?: HeaderConfig;
  footer?: FooterConfig;
  favicon?: FaviconConfig;
  header_presets_meta?: PresetMeta[];
  footer_presets_meta?: PresetMeta[];
}
