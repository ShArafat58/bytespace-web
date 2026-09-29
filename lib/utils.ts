import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const textStyles = [
  "heading-l",
  "heading-m",
  "heading-s",
  "heading-xs",
  "body-l",
  "body-m",
  "body-s",
  "body-xs",
  "label-l",
  "label-m",
  "label-s",
  "label-xs",
];

// Teach tailwind-merge that custom text styles are font sizes, not colors
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: textStyles }],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
