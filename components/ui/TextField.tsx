import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
};

export function TextField({
  id,
  label,
  error,
  className,
  ...props
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={id} className="text-label-s text-neutral-950">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-13 w-full rounded-xl border bg-white px-6 text-body-l text-neutral-950 outline-none transition-colors",
          "placeholder:text-neutral-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-neutral-50",
          error
            ? "border-danger-600 focus:border-danger-600 focus:ring-danger-600/20"
            : "border-neutral-100 focus:border-primary-800 focus:ring-primary-800/20",
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-body-xs text-danger-600">
          {error}
        </p>
      )}
    </div>
  );
}
