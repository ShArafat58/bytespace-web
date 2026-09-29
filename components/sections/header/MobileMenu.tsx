"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CartIcon } from "@/components/icons/CartIcon";
import { CloseIcon, MenuIcon } from "@/components/icons/MenuIcons";
import { Container } from "@/components/ui/Container";
import { authNavLinks, mainNavLinks } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

const linkStyles =
  "block rounded-sm py-3 text-neutral-50 transition-colors hover:text-secondary-400 focus-ring-inverse";

export function MobileMenu({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-10 items-center justify-center rounded-sm text-neutral-50 focus-ring-inverse"
      >
        {isOpen ? (
          <CloseIcon aria-hidden="true" />
        ) : (
          <MenuIcon aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-white/20 bg-primary-800 shadow-lg"
        >
          <Container className="flex flex-col py-4">
            <nav aria-label="Mobile">
              <ul>
                {mainNavLinks.map((link) => {
                  const isActive = link.href === currentPath;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          linkStyles,
                          isActive ? "text-label-l" : "text-body-l",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-2 flex items-center gap-6 border-t border-white/20 pt-4">
              {authNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(linkStyles, "text-body-l")}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                aria-label="Cart"
                className="ml-auto rounded-sm text-neutral-50 focus-ring-inverse"
              >
                <CartIcon aria-hidden="true" />
              </button>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
