import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  id,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-229.25 flex-col items-center gap-4 text-center",
        className,
      )}
    >
      <h2
        id={id}
        className={cn(
          "font-heading text-heading-m text-vulcan-950",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="text-body-l text-neutral-400">{description}</p>
    </div>
  );
}
