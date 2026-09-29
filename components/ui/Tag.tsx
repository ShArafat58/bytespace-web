import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagProps = ComponentProps<"button"> & {
  active?: boolean;
};

export function Tag({
  active = false,
  className,
  type = "button",
  ...props
}: TagProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={cn(
        "rounded-3xl px-4 py-3 text-label-m transition-colors focus-ring",
        active
          ? "bg-secondary-400 text-neutral-950"
          : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}
