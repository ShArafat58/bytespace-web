import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonStyleOptions = {
  onDark?: boolean;
};

/** Shared button styles so links can look like buttons too */
export function buttonStyles({
  onDark = false,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-3xl bg-secondary-400 px-6 py-3 text-label-l text-neutral-950",
    "transition-colors hover:bg-secondary-300 active:bg-secondary-500",
    "disabled:cursor-not-allowed disabled:opacity-60",
    onDark ? "focus-ring-inverse" : "focus-ring",
  );
}

type ButtonProps = ComponentProps<"button"> & ButtonStyleOptions;

export function Button({
  className,
  onDark,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ onDark }), className)}
      {...props}
    />
  );
}
