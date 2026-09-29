import Image from "next/image";
import { cn } from "@/lib/utils";

export type Avatar = {
  src: string;
  alt: string;
};

const sizes = {
  md: {
    pixels: 43,
    item: "size-10.75",
    overlap: "-space-x-4",
    label: "text-body-xs font-bold",
  },
  sm: {
    pixels: 32,
    item: "size-8",
    overlap: "-space-x-2",
    label: "text-label-xs",
  },
} as const;

type AvatarGroupProps = {
  avatars: Avatar[];
  extraLabel: string;
  size?: keyof typeof sizes;
  className?: string;
};

export function AvatarGroup({
  avatars,
  extraLabel,
  size = "md",
  className,
}: AvatarGroupProps) {
  const config = sizes[size];

  return (
    <div className={cn("flex items-center", config.overlap, className)}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          width={config.pixels}
          height={config.pixels}
          className={cn("rounded-full object-cover", config.item)}
        />
      ))}
      <span
        className={cn(
          "relative flex items-center justify-center rounded-full bg-secondary-400 text-neutral-950",
          config.item,
          config.label,
        )}
      >
        {extraLabel}
      </span>
    </div>
  );
}
