import { cn } from "@/lib/utils";

const glowColors = {
  primary: "var(--color-primary-800)",
  secondary: "var(--color-secondary-500)",
} as const;

type GlowProps = {
  color: keyof typeof glowColors;
  /** Peak opacity at the center, in percent */
  intensity: number;
  className?: string;
};

/** Soft blurred radial light used behind light sections */
export function Glow({ color, intensity, className }: GlowProps) {
  const stop = (percent: number) =>
    `color-mix(in srgb, ${glowColors[color]} ${percent}%, transparent)`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[20px]",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(closest-side, ${stop(intensity)} 0%, ${stop(intensity * 0.23)} 53%, ${stop(intensity * 0.06)} 75%, transparent 100%)`,
      }}
    />
  );
}
