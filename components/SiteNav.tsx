"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Puzzle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 800px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="container-site nav-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Nish Extensions home"
        >
          <span className="brand-icon">
            <Puzzle size={22} strokeWidth={2.2} />
          </span>
          <span>
            nish<span className="brand-divider">/</span>
            <span className="brand-sub">extensions</span>
          </span>
        </Link>
        <button
          className="icon-button menu-trigger"
          ref={trigger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="site-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!header.current?.contains(event.relatedTarget)) setOpen(false);
          }}
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              className={
                pathname === "/" && link.label === "Extensions"
                  ? "nav-active"
                  : ""
              }
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <span className="nav-divider" />
          <a
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Portfolio <ArrowUpRight size={15} />
          </a>
          <a
            href={siteConfig.demosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-demo"
            onClick={() => setOpen(false)}
          >
            Demo Lab <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
