import clsx from "clsx";
import React from "react";
import { HeadingProps } from "./types";

export function Heading({ size = "md", children, as = "h2" }: HeadingProps) {
  return React.createElement(as, {
    size,
    children,
    className: clsx("text-gray-100 font-sans font-bold", {
      "text-lg": size === "sm",
      "text-xlg": size === "md",
      "text-2xlg": size === "lg",
    }),
  });
}

Heading.displayName = "Heading";
