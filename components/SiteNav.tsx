'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [mobileOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--color-canvas)] border-b border-[var(--color-border)]"
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-[var(--color-ink)] hover:text-[var(--color-cobalt)] transition-colors"
            aria-label="Nish / Extensions — home"
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] text-xs font-bold text-white"
              style={{ background: 'var(--color-cobalt)' }}
              aria-hidden="true"
            >
              N
            </span>
            <span className="text-sm font-bold tracking-tight">Nish / Extensions</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
            >
              Portfolio
              <ExternalLink size={12} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.demosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
            >
              Demos
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            ref={triggerRef}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-ink-2)] hover:bg-[var(--color-canvas-alt)] transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-14 z-40 bg-[var(--color-canvas)]"
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <nav className="container-site pt-6 pb-8 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas-alt)] rounded-md transition-colors border-b border-[var(--color-border)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas-alt)] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.demosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas-alt)] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Client Demos
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
