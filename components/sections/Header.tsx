import Link from "next/link";
import { CartIcon } from "@/components/icons/CartIcon";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/ui/Container";
import { authNavLinks, mainNavLinks } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

type HeaderProps = {
  currentPath?: string;
};

const linkStyles =
  "rounded-sm text-neutral-50 transition-colors hover:text-secondary-400 focus-ring-inverse";

export function Header({ currentPath = "/" }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="grid h-30 grid-cols-[1fr_auto_1fr] items-center">
        {/* The logo sits slightly above the nav baseline in the design */}
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="-translate-y-1.5 justify-self-start rounded-sm text-neutral-50 focus-ring-inverse"
        >
          <Logo aria-hidden="true" />
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-6">
            {mainNavLinks.map((link) => {
              const isActive = link.href === currentPath;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      linkStyles,
                      isActive ? "text-label-m" : "text-body-m",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-6 justify-self-end">
          {authNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(linkStyles, "text-body-m")}
            >
              {link.label}
            </Link>
          ))}
          <button type="button" aria-label="Cart" className={linkStyles}>
            <CartIcon aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}
