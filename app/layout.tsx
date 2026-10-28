import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site-config';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = { themeColor: '#123b36' };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Chrome Extensions & Edge Add-ons by Nitish Kumar',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name, url: siteConfig.portfolioUrl }],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Nish Extensions: browser tools by Nitish Kumar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <SiteNav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
