import Image from "next/image";
import { cn } from "@/lib/utils";

export type Avatar = {
  src: string;
  alt: string;
};

type AvatarGroupProps = {
  avatars: Avatar[];
  extraLabel: string;
  className?: string;
};

export function AvatarGroup({
  avatars,
  extraLabel,
  className,
}: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          width={43}
          height={43}
          className="size-10.75 rounded-full object-cover"
        />
      ))}
      <span className="relative flex size-10.75 items-center justify-center rounded-full bg-secondary-400 text-body-xs font-bold text-neutral-950">
        {extraLabel}
      </span>
    </div>
  );
}
