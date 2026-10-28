import type { Metadata } from "next";
import { siteConfig } from '@/lib/site-config';
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import {
  extensions,
  getExtensionBySlug,
  getRelatedExtensions,
  extensionStatusLabels,
} from "@/lib/extensions";
import { BrowserBadge, ExtensionIcon } from "@/components/ExtensionVisual";
import ExtensionCard from "@/components/ExtensionCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import StoreLinks from "@/components/StoreLinks";

export const dynamicParams = false;

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
    description: extension.description,
    alternates: { canonical: `/extensions/${extension.slug}` },
    openGraph: {
      type: 'website', title: `${extension.name} | ${siteConfig.name}`,
      description: extension.description, url: `${siteConfig.url}/extensions/${extension.slug}`,
      images: extension.screenshots[0] ? [{ url: extension.screenshots[0].src, alt: extension.screenshots[0].alt }] : ['/opengraph-image'],
    },
    twitter: { card: 'summary_large_image', title: extension.name, description: extension.description, images: [extension.screenshots[0]?.src ?? '/opengraph-image'] },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@graph': [
          { '@type': 'WebPage', name: extension.name, url: `${siteConfig.url}/extensions/${extension.slug}`, description: extension.description,
            about: { '@type': 'SoftwareApplication', name: extension.name, applicationCategory: 'BrowserApplication', operatingSystem: extension.browsers.map(browser => browser === 'edge' ? 'Microsoft Edge' : 'Google Chrome').join(', '), description: extension.description, creativeWorkStatus: extensionStatusLabels[extension.status], author: { '@type': 'Person', '@id': `${siteConfig.portfolioUrl}/#person`, name: siteConfig.author.name } } },
          { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Extensions', item: `${siteConfig.url}/` }, { '@type': 'ListItem', position: 2, name: extension.name, item: `${siteConfig.url}/extensions/${extension.slug}` } ] },
        ],
      }).replace(/</g, '\\u003c') }} />
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
                <span className={`release-badge status-${extension.status}`}>
                  {extensionStatusLabels[extension.status]}
                </span>
              </span>
              <h1>{extension.name}</h1>
            </div>
          </div>
          <p>{extension.tagline}.</p>
          <div className="browser-list">
            {extension.browsers.map((browser) => (
              <BrowserBadge browser={browser} key={browser} />
            ))}
            {extension.pricing && (
              <span className="price-label">{extension.pricing}</span>
            )}
          </div>
        </div>
        <div>
          {extension.status === "in-review" && (
            <p className="release-notice">
              Store verification is in progress. Installation links will be
              added after approval and publication.
            </p>
          )}
          {extension.status === "coming-soon" && (
            <p className="release-notice">
              Not yet published. These screenshots show the development build.
              Store installation will be available after release.
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
            <h2>
              {extension.status === "coming-soon" ||
              extension.status === "in-review"
                ? "Inside the development build."
                : "From installed to in your flow."}
            </h2>
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
              <h2>What&apos;s new</h2>
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
              <dt>Project version</dt>
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
              <dd>{extensionStatusLabels[extension.status]}</dd>
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
          <p>
            Details reflect the current project. Review the official store
            listing before installing a published version.
          </p>
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
