// Site-wide settings — update these when going live

export const siteConfig = {
  name: 'Nish / Extensions',
  shortName: 'Nish',
  tagline: 'Useful browser tools by an independent developer',
  description:
    'Small tools for better browsing. Explore Chrome extensions and Microsoft Edge add-ons by Nitish Kumar.',
  url: 'https://www.extensions.nishkumar.dev',
  portfolioUrl: 'https://www.nishkumar.dev',
  demosUrl: 'https://www.demos.nishkumar.dev',
  author: {
    name: 'Nitish Kumar',
    handle: 'Nish',
    email: null as string | null, // set to e.g. 'hi@nishkumar.dev' to enable support emails
  },
  social: {
    twitter: null as string | null,  // e.g. 'https://twitter.com/yourhandle'
    github: null as string | null,   // e.g. 'https://github.com/yourhandle'
  },
  nav: [
    { label: 'Extensions', href: '/#extensions' },
    { label: 'The maker', href: '/#about' },
    { label: 'FAQs', href: '/#faq' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
