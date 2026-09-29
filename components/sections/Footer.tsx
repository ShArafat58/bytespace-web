import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { NewsletterForm } from "@/components/sections/footer/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { footerLinkGroups, legalLinks } from "@/lib/data/footer";

const linkStyles =
  "rounded-sm text-neutral-950 transition-colors hover:text-primary-800 focus-ring";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="flex flex-col gap-12 pb-8 pt-12 xl:gap-32.5 xl:pb-12 xl:pt-17.75">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-23">
          <div className="flex w-full flex-col gap-8 xl:w-132 xl:shrink-0 xl:gap-11.25">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                aria-label="ByteSpace home"
                className="self-start rounded-sm text-neutral-950 focus-ring"
              >
                <Logo aria-hidden="true" />
              </Link>
              <p className="text-body-s text-neutral-950">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>
            <NewsletterForm />
          </div>

          <nav
            aria-label="Footer"
            className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 xl:gap-10"
          >
            {footerLinkGroups.map((group) => (
              <ul
                key={group.label}
                aria-label={group.label}
                className="flex flex-col gap-4 xl:pt-12"
              >
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`${linkStyles} text-body-s`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6 md:flex-row md:items-start md:justify-between">
          <p className="text-body-xs text-neutral-950">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={`${linkStyles} text-body-xs`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
