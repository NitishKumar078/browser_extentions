import { ArrowUpRight, Puzzle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-site footer-top">
        <div>
          <Link href="/" className="brand">
            <span className="brand-icon">
              <Puzzle size={22} />
            </span>
            <span>nish / extensions</span>
          </Link>
          <p>
            Thoughtful little tools.
            <br />
            Made with care by {siteConfig.author.name}.
          </p>
        </div>
        <div className="footer-links">
          <span>Explore the collection</span>
          {siteConfig.nav.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <span>Elsewhere on the web</span>
          <a
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            My portfolio <ArrowUpRight size={16} />
          </a>
          <a
            href={siteConfig.demosUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelance Demo Lab <ArrowUpRight size={16} />
          </a>
          {siteConfig.social.github && (
            <a href={siteConfig.social.github}>
              GitHub <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
      <div className="container-site footer-bottom">
        <span>&copy; 2026 {siteConfig.author.name}</span>
        <span>Independent by design. Useful by intention.</span>
        <a href="#main-content">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
