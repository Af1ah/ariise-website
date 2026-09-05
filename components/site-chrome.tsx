"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import Link from "next/link";

const navigation = [
  ["Home", "/"],
  ["AIMS", "/aims"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
] as const;

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }, [pathname]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        if (menuRef.current) {
          menuRef.current.open = false;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        if (menuRef.current) {
          menuRef.current.open = false;
        }
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(e.currentTarget.open);
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <>
      <details
        ref={menuRef}
        className="mobile-nav"
        open={isOpen}
        onToggle={handleToggle}
      >
        <summary>
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true" />
        </summary>
        <div className="mobile-nav-panel">
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link href={href} key={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}
          </nav>
          <ArrowFillButton
            size="sm"
            href="/contact"
            btnText="Request a Quote"
            className="w-full mt-4"
            onClick={closeMenu}
          />
        </div>
      </details>

      {isOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function SiteHeader() {
  return (
    <div className="site-header-wrap">
      <header className="site-header">
        <Brand />
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="desktop-cta justify-self-end">
          <ArrowFillButton size="sm" href="/contact" btnText="Request a Quote" />
        </div>
        <MobileNav />
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Brand compact />
      <p>Institutional LMS & management systems for colleges and academies.</p>
      <div className="site-footer-links">
        <a href="mailto:info@ariiseglobal.com">info@ariiseglobal.com</a>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <a
          href="https://www.linkedin.com/company/ariise-global"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
