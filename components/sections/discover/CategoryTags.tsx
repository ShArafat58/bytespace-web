"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { categoryTagRows } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

export function CategoryTags({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState(categoryTagRows[0][0]);
  const lastRowIndex = categoryTagRows.length - 1;

  return (
    <div
      role="group"
      aria-label="Course categories"
      className={cn("flex flex-col items-center gap-5.25", className)}
    >
      {categoryTagRows.map((row, rowIndex) => (
        <div key={row[0]} className="flex items-center gap-4">
          {row.map((category) => (
            <Tag
              key={category}
              active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Tag>
          ))}
          {rowIndex === lastRowIndex && (
            <button
              type="button"
              className="rounded-sm text-label-m text-primary-800 hover:underline focus-ring"
            >
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
