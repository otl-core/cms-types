import { describe, expect, it } from "vitest";
import type {
  BorderConfig,
  ColorReference,
  FooterConfig,
  HeaderConfig,
  LocalizedString,
  ResponsiveValue,
  WebsiteConfig,
} from "../src";

describe("CMS Types", () => {
  it("should export HeaderConfig type", () => {
    const config: Partial<HeaderConfig> = {
      config_type: "header",
      type: "fixed",
    };
    expect(config.type).toBe("fixed");
  });

  it("should export FooterConfig type", () => {
    const config: Partial<FooterConfig> = {
      config_type: "footer",
      type: "minimal",
    };
    expect(config.type).toBe("minimal");
  });

  it("should export WebsiteConfig type", () => {
    const config: Partial<WebsiteConfig> = {
      config_type: "website",
      site_name: "Test Site",
    };
    expect(config.site_name).toBe("Test Site");
  });

  it("should handle ResponsiveValue types", () => {
    const simpleValue: ResponsiveValue<string> = "16px";
    const responsiveValue: ResponsiveValue<string> = {
      base: "16px",
      md: "24px",
    };
    expect(simpleValue).toBe("16px");
    expect(responsiveValue.base).toBe("16px");
  });

  it("should handle LocalizedString types", () => {
    const simpleString: LocalizedString | string = "Hello";
    const localizedString: LocalizedString = {
      en: "Hello",
      de: "Hallo",
    };
    expect(simpleString).toBe("Hello");
    expect(localizedString.en).toBe("Hello");
  });

  it("should handle ColorReference types", () => {
    const customColor: ColorReference = {
      type: "custom",
      value: "#ff0000",
    };
    const themeColor: ColorReference = {
      type: "theme",
      value: "primary",
    };
    expect(customColor.type).toBe("custom");
    expect(themeColor.type).toBe("theme");
  });

  it("should handle BorderConfig types", () => {
    const border: BorderConfig = {
      width: "1px",
      style: "solid",
      color: { type: "custom", value: "#000000" },
      radius: "4px",
    };
    expect(border.width).toBe("1px");
    expect(border.style).toBe("solid");
  });
});
