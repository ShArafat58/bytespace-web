import Link from "next/link";
import type { ReactNode } from "react";
import { AuthIllustration } from "@/components/auth/AuthIllustration";
import { LogoMark } from "@/components/icons/LogoMark";
import { cn } from "@/lib/utils";

type AuthLayoutProps = {
  title: string;
  description: string;
  cardClassName?: string;
  children: ReactNode;
};

export function AuthLayout({
  title,
  description,
  cardClassName,
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary-800 grid-lines">
      {/* Single column below xl, exact 1440 design from xl up */}
      <div className="relative mx-auto flex max-w-144.75 flex-col gap-8 px-5 pb-12 pt-8 md:gap-10 md:pb-16 xl:block xl:h-256 xl:max-w-360 xl:p-0">
        <header className="xl:absolute xl:left-30.5 xl:top-8.75">
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="inline-block rounded-sm focus-ring-inverse"
          >
            <LogoMark aria-hidden="true" />
          </Link>
        </header>

        <div className="flex flex-col gap-4 text-neutral-50 xl:absolute xl:left-30.5 xl:top-30 xl:w-118.75">
          <p className="font-heading text-heading-xs">{title}</p>
          <p className="text-body-m md:text-body-l">{description}</p>
        </div>

        <AuthIllustration className="hidden xl:block" />

        <div
          className={cn(
            "flex w-full flex-col gap-12 rounded-3xl bg-white px-6 pt-8 md:px-15.75 md:pt-15.25",
            "xl:absolute xl:left-185.25 xl:top-30 xl:min-h-196 xl:w-144.75 xl:justify-between xl:gap-0",
            cardClassName,
          )}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
