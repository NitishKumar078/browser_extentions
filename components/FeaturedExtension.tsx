"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Layers } from "lucide-react";
import type { Extension } from "@/lib/types";
import {
  BrowserBadge,
  ExtensionIcon,
  ExtensionMedia,
  ProductPreview,
} from "./ExtensionVisual";

export default function FeaturedExtension({
  extension,
}: {
  extension: Extension;
}) {
  const [workspace, setWorkspace] = useState(0);
  const hasWorkspaceDemo =
    extension.isSample && extension.slug === "tab-harbor";
  return (
    <section
      className="featured-section container-site"
      aria-labelledby="featured-heading"
    >
      <div className="featured-content">
        <span className="eyebrow">
          <span className="status-dot" /> In the spotlight{" "}
          {extension.isSample && <span className="sample-label">Concept</span>}
        </span>
        <div className="featured-name">
          <ExtensionIcon extension={extension} />
          <h2 id="featured-heading">{extension.name}</h2>
        </div>
        <p className="featured-tagline">
          {extension.slug === "tab-harbor"
            ? "Less tab chaos. More headspace."
            : extension.tagline}
        </p>
        <p>
          {extension.slug === "tab-harbor"
            ? "Give every project a place. Save your tabs into tidy workspaces and pick up exactly where you left off."
            : extension.description}
        </p>
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
            <Layers size={15} />{" "}
            {hasWorkspaceDemo
              ? "A place for every project"
              : `A closer look at ${extension.name}`}
          </span>
          <span>
            {extension.isSample ? "Concept preview" : "Product preview"}
          </span>
        </div>
        {hasWorkspaceDemo ? (
          <ProductPreview extension={extension} variant={workspace} />
        ) : (
          <ExtensionMedia extension={extension} />
        )}
        {hasWorkspaceDemo && (
          <div
            className="workspace-switch"
            role="group"
            aria-label="Preview workspace"
          >
            <button
              onClick={() => setWorkspace(0)}
              aria-pressed={workspace === 0}
            >
              Design project
            </button>
            <button
              onClick={() => setWorkspace(1)}
              aria-pressed={workspace === 1}
            >
              Reading list
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
