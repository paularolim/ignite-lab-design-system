import clsx from "clsx";
import React from "react";
import { TextProps } from "./types";

export function Text({ size = "md", children, as = "span" }: TextProps) {
  return React.createElement(as, {
    size,
    children,
    className: clsx("text-gray-100 font-sans", {
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
    }),
  });
}

Text.displayName = "Text";
