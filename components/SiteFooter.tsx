import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-canvas-alt)] mt-auto">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-[var(--color-ink)] hover:text-[var(--color-cobalt)] transition-colors"
              aria-label={`${siteConfig.name} — home`}
            >
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] text-xs font-bold text-white"
                style={{ background: 'var(--color-cobalt)' }}
                aria-hidden="true"
              >
                N
              </span>
              <span className="text-base font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[var(--color-ink-3)] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-4)]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-4)]">
              Connect
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Portfolio (nishkumar.dev)
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.demosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                >
                  Client Demos (demos.nishkumar.dev)
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              {siteConfig.social.github && (
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    GitHub
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.twitter && (
                <li>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    Twitter / X
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.author.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="text-sm text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    Email Support
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-ink-4)]">
          <p>
            © {currentYear} {siteConfig.author.name}. All rights reserved.
          </p>
          <p className="text-[var(--color-ink-4)]">
            Built for modern browsers
          </p>
        </div>
      </div>
    </footer>
  );
}
