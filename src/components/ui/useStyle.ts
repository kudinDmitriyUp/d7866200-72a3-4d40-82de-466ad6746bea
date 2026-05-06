"use client";

import { createContext, useContext } from "react";

export type ButtonVariant =
  | "default"
  | "arrow"
  | "bounce"
  | "bubble"
  | "elastic"
  | "expand"
  | "magnetic"
  | "shift"
  | "stagger";

export type SiteBackgroundVariant =
  | "none"
  | "gridDots"
  | "gridLines"
  | "noise"
  | "noiseGradient"
  | "floatingGradient"
  | "aurora";

export type HeroBackgroundVariant =
  | "none"
  | "lightRaysCenter"
  | "lightRaysCorner"
  | "gradientBars"
  | "radialGradient"
  | "cornerGlow"
  | "horizonGlow";

export interface StyleContextValue {
  buttonVariant: ButtonVariant;
  siteBackground: SiteBackgroundVariant;
  heroBackground: HeroBackgroundVariant;
}

export const DEFAULT_STYLE_VALUE: StyleContextValue = {
  buttonVariant: "default",
  siteBackground: "none",
  heroBackground: "none",
};

export const StyleContext = createContext<StyleContextValue>(DEFAULT_STYLE_VALUE);

export function useStyle(): StyleContextValue {
  return useContext(StyleContext);
}
