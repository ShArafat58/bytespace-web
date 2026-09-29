import { heroHighlight } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

export function CategoryHighlightCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-52 flex-col justify-center rounded-2xl bg-white p-4",
        className,
      )}
    >
      <p className="text-label-m text-neutral-950">{heroHighlight.title}</p>
      <p className="flex items-center gap-2 text-body-xs text-neutral-500">
        <span>{heroHighlight.courses}</span>
        <span
          aria-hidden="true"
          className="size-1 rounded-full bg-neutral-400"
        />
        <span>{heroHighlight.students}</span>
      </p>
    </div>
  );
}
