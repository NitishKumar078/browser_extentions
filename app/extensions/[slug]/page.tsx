import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import {
  extensions,
  getExtensionBySlug,
  getRelatedExtensions,
} from "@/lib/extensions";
import { BrowserBadge, ExtensionIcon } from "@/components/ExtensionVisual";
import ExtensionCard from "@/components/ExtensionCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import StoreLinks from "@/components/StoreLinks";

export function generateStaticParams() {
  return extensions.map((extension) => ({ slug: extension.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const extension = getExtensionBySlug((await params).slug);
  if (!extension) return { title: "Extension not found" };
  return {
    title: extension.name,
    description: extension.tagline,
    alternates: { canonical: `/extensions/${extension.slug}` },
  };
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default async function ExtensionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const extension = getExtensionBySlug((await params).slug);
  if (!extension) notFound();
  const related = getRelatedExtensions(extension.relatedSlugs || []);

  return (
    <div className="container-site detail-page">
      <Link href="/#extensions" className="breadcrumb">
        <ArrowLeft size={16} /> All extensions
      </Link>
      <div className="detail-header">
        <div className="detail-intro">
          <div className="detail-title">
            <ExtensionIcon extension={extension} />
            <div>
              <span className="eyebrow">
                {extension.category}
                {extension.isSample && (
                  <span className="sample-label">Sample concept</span>
                )}
              </span>
              <h1>{extension.name}</h1>
            </div>
          </div>
          <p>{extension.tagline}.</p>
          <div className="browser-list">
            {extension.browsers.map((browser) => (
              <BrowserBadge browser={browser} key={browser} />
            ))}
            <span className="price-label">
              {extension.pricing || "See store for pricing"}
            </span>
          </div>
        </div>
        <div>
          {extension.isSample && (
            <p className="detail-sample">
              This is a fictional preview, not a published extension. Product
              details and screens are illustrative.
            </p>
          )}
          <StoreLinks extension={extension} />
        </div>
      </div>
      <ScreenshotGallery extension={extension} />
      <div className="detail-columns">
        <div>
          <section className="detail-section">
            <h2>A little more about {extension.name}.</h2>
            <p>{extension.description}</p>
            <div className="feature-list">
              {extension.features.map((feature) => (
                <div key={feature.title}>
                  <Check size={20} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <h2>From installed to in your flow.</h2>
            <ol className="step-list">
              {extension.gettingStarted.map((step) => (
                <li key={step.step}>
                  <span>{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          {!!extension.changelog?.length && (
            <section className="detail-section">
              <h2>
                {extension.isSample
                  ? "Sample release notes"
                  : "What\u0027s new"}
              </h2>
              {extension.changelog.map((release) => (
                <article key={release.version} className="release-entry">
                  <div>
                    <h3>Version {release.version}</h3>
                    <time dateTime={release.date}>
                      {displayDate(release.date)}
                    </time>
                  </div>
                  <ul>
                    {release.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          )}
          {!!extension.faqs?.length && (
            <section className="detail-section">
              <h2>Good questions.</h2>
              <div className="faq-list">
                {extension.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>
                      {faq.question}
                      <span className="faq-plus">+</span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
        <aside className="detail-sidebar">
          <h2>At a glance</h2>
          <dl>
            <div>
              <dt>Version</dt>
              <dd>{extension.version || "Not specified"}</dd>
            </div>
            {extension.updatedAt && (
              <div>
                <dt>Updated</dt>
                <dd>{displayDate(extension.updatedAt)}</dd>
              </div>
            )}
            <div>
              <dt>Category</dt>
              <dd>{extension.category}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                {extension.isSample
                  ? "Sample concept"
                  : extension.status.replace("-", " ")}
              </dd>
            </div>
          </dl>
          <ShieldCheck size={23} />
          <h3>Privacy &amp; permissions</h3>
          <p>
            {extension.privacySummary ||
              "Review the store listing for privacy information."}
          </p>
          {extension.permissions && (
            <ul className="permission-list">
              {extension.permissions.map((permission) => (
                <li key={permission}>{permission}</li>
              ))}
            </ul>
          )}
          {extension.isSample && (
            <p>
              Sample permissions only. Review the official store listing before
              installing a real extension.
            </p>
          )}
          {extension.privacyPolicyUrl && (
            <a
              className="text-link"
              href={extension.privacyPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy <ArrowUpRight size={14} />
            </a>
          )}
          {extension.supportUrl && (
            <a
              className="text-link"
              href={extension.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get product support <ArrowUpRight size={14} />
            </a>
          )}
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-section">
          <h2>A few other useful things.</h2>
          <div className="extension-grid">
            {related.map((item) => (
              <ExtensionCard extension={item} key={item.slug} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
