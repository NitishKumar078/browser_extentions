# Nish / Extensions

A Next.js showcase for Nitish Kumar's Chrome extensions and Microsoft Edge add-ons. The homepage includes a featured concept, searchable collection, category/browser filters, sorting, maker section, FAQs, and links to the portfolio and Demo Lab. Each extension has a shareable detail page.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. To use another port: `npm run dev -- --port 3001`.

```sh
npm run lint
npm run build
npm start
```

## Current projects and future releases

The collection contains Text Extractor (In review, undergoing store verification) and Pure Anime (unpublished, Coming soon). Neither has installation links enabled. Copy, permissions, versions, icons, and screenshots come from their local project documentation and assets. Project versions may differ from eventual store releases. No pricing, ratings, install counts, or release dates have been invented.

Edit `lib/extensions.ts`. Each entry drives its card, detail page, features, screenshots, release notes, FAQs, and related products.

1. Add an entry with a unique `slug`, `name`, `tagline`, `description`, `category`, and `tags`.
2. Put real PNG/WebP icons and screenshots in `public/extensions/your-slug/`.
3. Set `icon` and `screenshots[].src` to public paths such as `/extensions/your-slug/icon.png`. Add accurate alternative text and captions.
4. Set `browsers` to `['chrome']`, `['edge']`, or `['chrome', 'edge']`.
5. Set `storeUrl` to the Chrome Web Store listing and `edgeStoreUrl` to the Microsoft Edge Add-ons listing. Use `null` for missing links, never `#`.
6. Replace `privacySummary`, `permissions`, `privacyPolicyUrl`, and `supportUrl` with verified information.
7. Update `version`, `updatedAt`, `pricing`, `features`, `gettingStarted`, `changelog`, and `faqs`.
8. Use `status: 'coming-soon'` for development projects and `status: 'in-review'` during store verification. After publication, set `status: 'available'` and add the real store links. Install links require an `available` or `beta` status and a configured store URL; adding a URL alone does not enable installation for a project awaiting release.
9. Keep one entry `featured: true`. Update `relatedSlugs` to valid product slugs.

The featured section automatically uses the selected product's name, tagline, description, first screenshot, and features.

Global FAQ and maker copy live in `app/page.tsx`. Update the store-link explanation when Text Extractor's listing URLs are supplied. Verify the published version's features against the project documentation before promoting a release.

## Branding and links

- `lib/site-config.ts`: name, author, production URL, external links, navigation.
- `app/globals.css`: colors, typography, spacing, responsive rules, component styling.
- `app/layout.tsx`: metadata and font.
- `app/opengraph-image.tsx`: generated social-preview artwork.
- `app/icon.svg`: browser icon.
- `components/ExtensionVisual.tsx`: actual product imagery and browser badges.

Portfolio: https://www.nishkumar.dev
Demo Lab: https://www.demos.nishkumar.dev

The canonical production URL is https://www.extensions.nishkumar.dev. The Next.js configuration permanently redirects the non-www hostname to this address while preserving the path and query. Keep both hostnames connected to this hosting project with valid HTTPS certificates.

The site generates `/sitemap.xml`, `/robots.txt`, individual canonical URLs, social metadata, and structured data from the real extension catalog. Unknown extension slugs return 404. Submit `https://www.extensions.nishkumar.dev/sitemap.xml` in Google Search Console after deploying. Indexing and rankings are not guaranteed.

## Browser checks

```sh
npx playwright install chromium
npm run test:ui
```

On Windows with Edge installed:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm run test:ui
```

Tests cover the collection and each product page at 360, 768, 1024, 1440, and 1920 pixels; filtering/sorting; empty-state recovery; mobile navigation; FAQs; galleries; direct routes and refreshes; missing pages; external links; reduced motion; and social metadata. Regression checks confirm the six former dummy routes return 404 and Pure Anime has no installation links.

Tests start a server automatically or reuse port 3000. Screenshots and traces are in the ignored `test-results/` directory.

When another project occupies port 3000, set `$env:PLAYWRIGHT_PORT = '3002'` before running tests to target the showcase on that port instead.

## Product assets

Active assets are in `public/extensions/text-extractor/` and `public/extensions/pure-anime/`. Text Extractor uses its existing marketing overview and real workbench/OCR captures. Pure Anime uses development-build screenshots with test site data. Source projects were not modified. The sample-preview generator has been removed.

Text Extractor's existing privacy HTML is served at `/extensions/text-extractor/privacy.html`. Pure Anime's policy remains a draft in its source project and is not presented here as a finalized policy.

## Deploy

Deploy this directory as a Next.js project on Vercel or another compatible host. Build with `npm run build`; use `npm start` for a Node server. Extension paths are generated from data, so direct visits and refreshes work without a Vite-style rewrite file.

No backend, authentication, analytics, payments, or newsletter service is included. Installations happen on the official stores. Contact links point to the existing portfolio; no email address has been invented.
