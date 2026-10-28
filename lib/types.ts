// Extension data model — centralized types for the entire site

export type ExtensionCategory =
  | "Productivity"
  | "Writing"
  | "Developer Tools"
  | "Browsing"
  | "Design"
  | "Reading";

export type ExtensionStatus =
  "available" | "in-review" | "coming-soon" | "beta" | "discontinued";

export interface Screenshot {
  src: string; // path relative to /public
  alt: string;
  caption?: string;
}

export interface Feature {
  title: string;
  description: string;
  screenshot?: Screenshot;
}

export interface GettingStartedStep {
  step: number;
  title: string;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string; // ISO date string YYYY-MM-DD
  changes: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Extension {
  // Identity
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ExtensionCategory;
  tags: string[];

  // Branding
  icon: string; // path relative to /public, e.g. /extensions/text-extractor/icon.png
  accentColor: string; // CSS color string

  // Media
  screenshots: Screenshot[];

  // Content
  features: Feature[];
  gettingStarted: GettingStartedStep[];

  // Links — use null when not configured
  storeUrl: string | null;
  edgeStoreUrl: string | null;
  browsers: ("chrome" | "edge")[];
  supportUrl: string | null;
  privacyPolicyUrl: string | null;

  // Status
  status: ExtensionStatus;
  featured: boolean;

  // Optional metadata — omit or null when unknown
  version?: string;
  updatedAt?: string; // ISO date string
  pricing?: string; // e.g. "Free", "Free + Pro ($4.99/mo)"
  rating?: number; // only for real, published extensions
  ratingCount?: number;
  userCount?: number;

  // Permissions & Privacy
  permissions?: string[];
  privacySummary?: string;

  // Changelog
  changelog?: ChangelogEntry[];

  // FAQs specific to this extension
  faqs?: FAQ[];

  // Related extensions by slug
  relatedSlugs?: string[];
}
