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

## Replace sample products

All six current extensions are fictional concepts. Versions, release notes, permissions, pricing, and previews are sample content. No invented ratings or install counts are displayed. Sample listings cannot link to an installation.

Edit `lib/extensions.ts`. Each entry drives its card, detail page, features, screenshots, release notes, FAQs, and related products.

1. Replace `slug`, `name`, `tagline`, `description`, `category`, and `tags`.
2. Put real PNG/WebP icons and screenshots in `public/extensions/your-slug/`.
3. Set `icon` and `screenshots[].src` to public paths such as `/extensions/your-slug/icon.png`. Add accurate alternative text and captions.
4. Set `browsers` to `['chrome']`, `['edge']`, or `['chrome', 'edge']`.
5. Set `storeUrl` to the Chrome Web Store listing and `edgeStoreUrl` to the Microsoft Edge Add-ons listing. Use `null` for missing links, never `#`.
6. Replace `privacySummary`, `permissions`, `privacyPolicyUrl`, and `supportUrl` with verified information.
7. Update `version`, `updatedAt`, `pricing`, `features`, `gettingStarted`, `changelog`, and `faqs`.
8. Set `isSample: false` only when the listing contains real information. Install links require a real listing, available/beta status, and configured store URL.
9. Keep one entry `featured: true`. Update `relatedSlugs` to valid product slugs.

Tab Harbor has tailored introductory copy and a live illustrative workspace switch in `components/FeaturedExtension.tsx`. Other featured products use their own tagline, description, and screenshot.

Global FAQ and maker copy live in `app/page.tsx`. Update the sample-installation explanation before launch. The collection disclaimer disappears automatically when no sample products remain.

## Branding and links

- `lib/site-config.ts`: name, author, production URL, external links, navigation.
- `app/globals.css`: colors, typography, spacing, responsive rules, component styling.
- `app/layout.tsx`: metadata and font.
- `app/opengraph-image.tsx`: generated social-preview artwork.
- `app/icon.svg`: browser icon.
- `components/ExtensionVisual.tsx`: sample artwork and icon fallbacks.

Portfolio: https://www.nishkumar.dev
Demo Lab: https://www.demos.nishkumar.dev

The configured production URL, https://extensions.nishkumar.dev, is a placeholder until you connect that domain. Set `siteConfig.url` to the actual deployment URL.

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

Tests cover all seven pages at 360, 768, 1024, 1440, and 1920 pixels; filtering/sorting; empty-state recovery; mobile navigation; FAQs; galleries; direct routes and refreshes; missing pages; external links; reduced motion; and social metadata.

Tests start a server automatically or reuse port 3000. Screenshots and traces are in the ignored `test-results/` directory.

## Sample graphics

PNGs in `public/extensions/` come from this project's code-native illustrative screens, not real published products. To regenerate, keep the development server running on port 3000 and run:

```sh
npm run previews
```

The generator uses Node 24's TypeScript loading and Playwright. It only writes images for entries with `isSample: true`. Replace these assets with real screenshots before publishing real listings.

## Deploy

Deploy this directory as a Next.js project on Vercel or another compatible host. Build with `npm run build`; use `npm start` for a Node server. Extension paths are generated from data, so direct visits and refreshes work without a Vite-style rewrite file.

No backend, authentication, analytics, payments, or newsletter service is included. Installations happen on the official stores. Contact links point to the existing portfolio; no email address has been invented.
