import type { Extension } from "./types";

// Store URLs must be the exact published listing links. Keep missing links null.
export const extensions: Extension[] = [
  {
    slug: "text-extractor",
    name: "Text Extractor",
    tagline: "Good text. Ready to use",
    description:
      "Copy a page element or read the words in an image, edit the result, and take it wherever you work. Text Extractor brings page capture, on-device OCR, text cleanup, and plain-text export into a private browser workbench.",
    category: "Productivity",
    tags: [
      "text",
      "ocr",
      "capture",
      "images",
      "clipboard",
      "research",
      "writing",
      "export",
    ],
    icon: "/extensions/text-extractor/icon.png",
    accentColor: "#2459db",
    screenshots: [
      {
        src: "/extensions/text-extractor/overview.png",
        alt: "Text Extractor product overview with its capture, edit, copy, and export interface",
        caption: "Capture, edit, and export in one workbench",
      },
      {
        src: "/extensions/text-extractor/workbench.png",
        alt: "Text Extractor popup with captured text, cleanup controls, source information, and export buttons",
        caption: "Review your text before copying or exporting",
      },
      {
        src: "/extensions/text-extractor/ocr.png",
        alt: "Text Extractor image recognition workspace with crop selection, language choices, and editable recognized text",
        caption: "Recognize image text locally, then review the result",
      },
    ],
    features: [
      {
        title: "Page-text capture",
        description:
          "Enable the picker and Ctrl+click a paragraph, heading, or section. Or use Copy element text from the right-click menu, independently of the picker.",
      },
      {
        title: "On-device image OCR",
        description:
          "Capture the visible page, select an image region, and recognize its text locally. English is bundled; additional language packs download on demand. Choose up to three languages per image.",
      },
      {
        title: "Clean, edit, and export",
        description:
          "Review the draft, clean extra spaces while preserving paragraphs, and optionally include the source. Copy the result or export it as a .txt file.",
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: "Choose what to capture",
        description:
          "On a supported website, use the element picker or the right-click menu for page text. Choose Capture selection for text inside an image.",
      },
      {
        step: 2,
        title: "Review your words",
        description:
          "For images, select a region and the languages you need, then recognize it. Check the result and edit any OCR mistakes before using the text.",
      },
      {
        step: 3,
        title: "Take it with you",
        description:
          "Choose cleanup and source options, then copy or export. Export important text before restarting the browser: the current draft is session-only.",
      },
    ],
    browsers: ["chrome", "edge"],
    storeUrl:
      "https://chromewebstore.google.com/detail/text-extractor/hbjiehehaaoofpplbhobemlcdlimpmle?pli=1",
    edgeStoreUrl:
      "https://microsoftedge.microsoft.com/addons/detail/text-extractor/plfcnopmeiffknfcmkalaikajaaaohck",
    supportUrl: "https://github.com/NitishKumar078/Text-Extractor/issues",
    privacyPolicyUrl: "/extensions/text-extractor/privacy.html",
    status: "available",
    featured: true,
    version: "1.0.0",
    permissions: [
      "activeTab",
      "scripting",
      "storage",
      "contextMenus",
      "clipboardWrite",
      "http://*/*",
      "https://*/*",
    ],
    privacySummary:
      "Captured text and images are processed locally, without accounts, analytics, or captured-content uploads. The current draft lasts for the browser session. Optional language packs download from jsDelivr, which receives the selected language and normal connection information such as your IP address.",
    faqs: [
      {
        question: "Does OCR need an internet connection?",
        answer:
          "English recognition works offline with the bundled language data. Other language packs need an initial download and can then be reused offline while cached. Browser storage limits or eviction can require another download.",
      },
      {
        question: "Will my captured text survive a browser restart?",
        answer:
          "No. Closing the popup keeps the current draft, but restarting the browser, disabling, updating, or reloading the extension clears it. Copy or export anything you want to keep.",
      },
      {
        question: "Can it read every page or image?",
        answer:
          "Capture works on supported HTTP(S) websites. Browser pages, store pages, the built-in PDF viewer, and local files are outside the documented scope. OCR uses the visible viewport, and blurry text, handwriting, or complex layouts can produce mistakes.",
      },
    ],
    relatedSlugs: ["pure-anime"],
  },
  {
    slug: "pure-anime",
    name: "Pure Anime",
    tagline: "Your sites. A little quieter",
    description:
      "Keep a private shelf of favorite sites, separate from browser bookmarks. Organize links into collections, carry your shelf with JSON backups, and control a small bundled set of ad-filtering rules. Pure Anime is in development and is not yet published.",
    category: "Browsing",
    tags: [
      "sites",
      "bookmarks",
      "collections",
      "backup",
      "links",
      "filtering",
      "anime",
    ],
    icon: "/extensions/pure-anime/icon.png",
    accentColor: "#7164ad",
    screenshots: [
      {
        src: "/extensions/pure-anime/sites.png",
        alt: "Pure Anime development build showing its site shelf, collection filter, search, and backup controls",
        caption: "Development preview: your private site shelf",
      },
      {
        src: "/extensions/pure-anime/protection.png",
        alt: "Pure Anime development build showing filtering switches and site-exception controls",
        caption: "Development preview: filtering and site exceptions",
      },
    ],
    features: [
      {
        title: "A private site shelf",
        description:
          "Save the current website or add a link. Edit names, organize collections, search your shelf, and sort by saved order, name, or newest first.",
      },
      {
        title: "Portable JSON backups",
        description:
          "Export your sites, preview a backup import, and merge new links without replacing existing URLs. Backups contain full URLs, so keep them somewhere private.",
      },
      {
        title: "Filtering you control",
        description:
          "Toggle bundled ad/tracker rules and known ad-destination blocking separately. Pause filtering for a website and its subdomains, then reload the page.",
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: "Build your shelf",
        description:
          "In the development build, open Sites and choose Save current site or Add a link. Give the site a name and an optional collection.",
      },
      {
        step: 2,
        title: "Set your preferences",
        description:
          "Use Protection to review the filtering switches and site exceptions. The bundled rules are deliberately limited, not a comprehensive blocker.",
      },
      {
        step: 3,
        title: "Keep a backup",
        description:
          "Export your shelf through Backup & restore. Local data can be removed by uninstalling the extension or deleting the browser profile.",
      },
    ],
    browsers: ["chrome"],
    storeUrl: null,
    edgeStoreUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: "coming-soon",
    featured: false,
    version: "0.2.0",
    permissions: [
      "storage",
      "activeTab",
      "declarativeNetRequestWithHostAccess",
      "http://*/*",
      "https://*/*",
    ],
    privacySummary:
      "The current development build stores sites, preferences, and exceptions in the local browser profile, with no account, analytics, or developer-operated backend. Filtering uses broad HTTP(S) website access. Exported backups contain full URLs and are not encrypted.",
    faqs: [
      {
        question: "Can I install Pure Anime from a store yet?",
        answer:
          "Not yet. Pure Anime is an unpublished project. These screenshots show the development build; installation links will be added after publication.",
      },
      {
        question: "Does Pure Anime provide anime or streaming sites?",
        answer:
          "No. It is a quick-link shelf for sites you save yourself. It does not provide anime content, recommend streaming sites, or replace browser bookmarks.",
      },
      {
        question: "Does it block every ad or popup?",
        answer:
          "No. It includes a small bundled filter and known ad-destination rules. It does not promise comprehensive ad blocking, YouTube ad removal, malware protection, or interception of every popup.",
      },
      {
        question: "Are my sites synced across devices?",
        answer:
          "No automatic sync is included. Your shelf stays in the current browser profile. JSON export and import let you move or restore your sites manually.",
      },
    ],
    relatedSlugs: ["text-extractor"],
  },
];

export const extensionStatusLabels = {
  available: "Published",
  "in-review": "In review",
  "coming-soon": "Coming soon",
  beta: "Beta",
  discontinued: "Discontinued",
} as const;

export function getExtensionBySlug(slug: string): Extension | undefined {
  return extensions.find((extension) => extension.slug === slug);
}
export function getFeaturedExtension(): Extension | undefined {
  return extensions.find((extension) => extension.featured);
}
export function getRelatedExtensions(slugs: string[]): Extension[] {
  return slugs
    .map(getExtensionBySlug)
    .filter((extension): extension is Extension => extension !== undefined);
}
