// Site-wide settings — update these when going live

export const siteConfig = {
  name: 'Nish / Extensions',
  shortName: 'Nish',
  tagline: 'Useful browser tools by an independent developer',
  description:
    'A collection of focused Chrome extensions built by Nitish Kumar — tools for productivity, reading, design, and browsing.',
  url: 'https://extensions.nishkumar.dev', // update when deployed
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
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
