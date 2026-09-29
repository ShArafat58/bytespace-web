import Link from "next/link";
import { CartIcon } from "@/components/icons/CartIcon";
import { Logo } from "@/components/icons/Logo";
import { MobileMenu } from "@/components/sections/header/MobileMenu";
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
      <Container className="flex h-20 items-center justify-between lg:grid lg:h-30 lg:grid-cols-[1fr_auto_1fr]">
        {/* The logo sits slightly above the nav baseline in the design */}
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="justify-self-start rounded-sm text-neutral-50 focus-ring-inverse lg:-translate-y-1.5"
        >
          <Logo aria-hidden="true" className="h-7 w-auto lg:h-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
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

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
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

        <MobileMenu currentPath={currentPath} />
      </Container>
    </header>
  );
}
