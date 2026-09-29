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
      <div className="relative mx-auto h-256 max-w-360">
        <header className="absolute left-30.5 top-8.75">
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="block rounded-sm focus-ring-inverse"
          >
            <LogoMark aria-hidden="true" />
          </Link>
        </header>

        <div className="absolute left-30.5 top-30 flex w-118.75 flex-col gap-4 text-neutral-50">
          <p className="font-heading text-heading-xs">{title}</p>
          <p className="text-body-l">{description}</p>
        </div>

        <AuthIllustration />

        <div
          className={cn(
            "absolute left-185.25 top-30 flex min-h-196 w-144.75 flex-col justify-between rounded-3xl bg-white px-15.75 pt-15.25",
            cardClassName,
          )}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
