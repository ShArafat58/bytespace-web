"use client";

import type { FormEvent } from "react";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/Button";

export function HeroSearch() {
  // There is no search backend, so submitting brings the course list into view
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
    >
      <div className="flex h-13 w-full items-center gap-2 rounded-3xl bg-white px-6 focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-secondary-400 sm:w-115.25">
        <SearchIcon aria-hidden="true" className="shrink-0 text-neutral-400" />
        <label htmlFor="hero-search" className="sr-only">
          Search courses
        </label>
        <input
          id="hero-search"
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </div>
      <Button type="submit" onDark className="w-full sm:w-auto">
        Search
      </Button>
    </form>
  );
}
