import type { ComponentProps } from "react";

export function SignalIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"
      />
    </svg>
  );
}
