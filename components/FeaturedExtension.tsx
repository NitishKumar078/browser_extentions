import Link from "next/link";
import { ArrowUpRight, Check, ImageIcon } from "lucide-react";
import type { Extension } from "@/lib/types";
import { extensionStatusLabels } from "@/lib/extensions";
import { BrowserBadge, ExtensionIcon, ExtensionMedia } from "./ExtensionVisual";

export default function FeaturedExtension({
  extension,
}: {
  extension: Extension;
}) {
  return (
    <section
      className="featured-section container-site"
      aria-labelledby="featured-heading"
    >
      <div className="featured-content">
        <span className="eyebrow">
          <span className="status-dot" /> In the spotlight{" "}
          <span className={`release-badge status-${extension.status}`}>
            {extensionStatusLabels[extension.status]}
          </span>
        </span>
        <div className="featured-name">
          <ExtensionIcon extension={extension} />
          <h2 id="featured-heading">{extension.name}</h2>
        </div>
        <p className="featured-tagline">{extension.tagline}.</p>
        <p>{extension.description}</p>
        <div className="featured-benefits">
          {extension.features.slice(0, 2).map((feature) => (
            <span key={feature.title}>
              <Check size={15} />
              {feature.title}
            </span>
          ))}
        </div>
        <div className="featured-actions">
          <Link
            className="button button-dark"
            href={`/extensions/${extension.slug}`}
          >
            Explore {extension.name} <ArrowUpRight size={18} />
          </Link>
          <div className="browser-list">
            {extension.browsers.map((browser) => (
              <BrowserBadge browser={browser} key={browser} />
            ))}
          </div>
        </div>
      </div>
      <div className="featured-visual">
        <div className="feature-visual-top">
          <span>
            <ImageIcon size={15} /> A closer look at {extension.name}
          </span>
          <span>Product preview</span>
        </div>
        <ExtensionMedia extension={extension} priority />
      </div>
    </section>
  );
}
