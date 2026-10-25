import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Extension } from "@/lib/types";
import { BrowserBadge, ExtensionIcon, ExtensionMedia } from "./ExtensionVisual";

export default function ExtensionCard({ extension }: { extension: Extension }) {
  return (
    <article className="extension-card">
      <Link
        className="card-preview-link"
        href={`/extensions/${extension.slug}`}
        aria-label={`Explore ${extension.name}`}
      >
        <ExtensionMedia extension={extension} />
        <span className="preview-arrow">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="card-content">
        <div className="card-title">
          <ExtensionIcon extension={extension} />
          <div>
            <h3>
              <Link href={`/extensions/${extension.slug}`}>
                {extension.name}
              </Link>
            </h3>
            <span>{extension.category}</span>
          </div>
          <span className="price-label">
            {extension.pricing || "See details"}
          </span>
        </div>
        <p>{extension.tagline}.</p>
        <div className="card-bottom">
          <div className="browser-list">
            {extension.browsers.map((browser) => (
              <BrowserBadge key={browser} browser={browser} />
            ))}
          </div>
          <Link
            href={`/extensions/${extension.slug}`}
            className="card-detail-link"
            aria-label={`${extension.name} details`}
          >
            Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
