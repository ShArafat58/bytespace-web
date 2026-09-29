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
          "font-heading text-heading-s text-vulcan-950 md:text-heading-m",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="text-body-m text-neutral-400 md:text-body-l">
        {description}
      </p>
    </div>
  );
}
