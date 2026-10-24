import type { Extension } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// SAMPLE EXTENSION DATA
// These are fictional concepts used for demonstration purposes.
// Replace each entry with your real extension data when publishing.
// See README.md for replacement instructions.
// ─────────────────────────────────────────────────────────────────────────────

export const extensions: Extension[] = [
  // ── 1. Tab Harbor ──────────────────────────────────────────────────────────
  {
    slug: 'tab-harbor',
    name: 'Tab Harbor',
    tagline: 'Organize your tabs into focused workspaces',
    description:
      'Tab Harbor brings order to browser chaos. Group your open tabs into named workspaces — one for research, one for work, one for reading — and switch between them instantly. Sessions are saved automatically so nothing is lost if Chrome closes unexpectedly.',
    category: 'Productivity',
    tags: ['tabs', 'workspaces', 'organization', 'sessions', 'productivity'],
    icon: '/extensions/tab-harbor/icon.svg',
    accentColor: '#2563EB', // cobalt blue
    screenshots: [
      {
        src: '/extensions/tab-harbor/screenshot-workspace.png',
        alt: 'Tab Harbor workspace overview showing grouped tabs',
        caption: 'All your workspaces at a glance',
      },
      {
        src: '/extensions/tab-harbor/screenshot-add.png',
        alt: 'Adding a tab to a workspace in Tab Harbor',
        caption: 'Move any tab to a workspace with one click',
      },
    ],
    features: [
      {
        title: 'Named workspaces',
        description:
          'Create workspaces for any context — "Client Project", "Research", "Shopping". Tabs stay neatly separated so you can focus on what matters.',
      },
      {
        title: 'Auto-save sessions',
        description:
          'Tab Harbor saves your workspaces automatically. Close Chrome without worry — reopen and everything is exactly where you left it.',
      },
      {
        title: 'Instant switching',
        description:
          'Jump between workspaces with a single click or keyboard shortcut. No hunting through dozens of tabs.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Open the extension',
        description: 'Click the Tab Harbor icon in your browser toolbar to open the workspace panel.',
      },
      {
        step: 2,
        title: 'Create your first workspace',
        description: 'Click "New workspace", give it a name, and start moving tabs into it.',
      },
      {
        step: 3,
        title: 'Switch and focus',
        description: 'Click any workspace name to switch to it. Your other tabs are safely stored.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: true,
    isSample: true,
    version: '1.2.0',
    updatedAt: '2026-09-15',
    pricing: 'Free',
    permissions: ['tabs', 'storage'],
    privacySummary:
      'Tab Harbor stores your workspace data locally in Chrome storage. No data is sent to external servers.',
    changelog: [
      {
        version: '1.2.0',
        date: '2026-09-15',
        changes: ['Added keyboard shortcut for workspace switching', 'Improved tab drag-and-drop'],
      },
      {
        version: '1.1.0',
        date: '2026-07-20',
        changes: ['Auto-save sessions on Chrome close', 'Fixed duplicate tab detection'],
      },
      {
        version: '1.0.0',
        date: '2026-05-10',
        changes: ['Initial release with workspace creation and tab grouping'],
      },
    ],
    faqs: [
      {
        question: 'Do workspaces sync across devices?',
        answer:
          'Currently workspaces are stored locally. Cross-device sync via Chrome Sync is on the roadmap.',
      },
      {
        question: 'What happens to pinned tabs?',
        answer: 'Pinned tabs remain visible across all workspaces by default.',
      },
    ],
    relatedSlugs: ['focus-lane', 'link-sweep'],
  },

  // ── 2. Focus Lane ──────────────────────────────────────────────────────────
  {
    slug: 'focus-lane',
    name: 'Focus Lane',
    tagline: 'Block distractions and protect your deep work time',
    description:
      'Focus Lane lets you schedule distraction-free browsing sessions. Define which sites distract you, set a session duration, and Focus Lane quietly blocks them until your timer is up. No gamification, no shame — just a clean barrier between you and procrastination.',
    category: 'Productivity',
    tags: ['focus', 'blocking', 'productivity', 'distraction', 'timer'],
    icon: '/extensions/focus-lane/icon.svg',
    accentColor: '#DC2626', // strong red
    screenshots: [
      {
        src: '/extensions/focus-lane/screenshot-timer.png',
        alt: 'Focus Lane active session timer',
        caption: 'Your focus session, running in the background',
      },
      {
        src: '/extensions/focus-lane/screenshot-blocklist.png',
        alt: 'Focus Lane blocklist management',
        caption: 'Add sites to block with a URL or pattern',
      },
    ],
    features: [
      {
        title: 'Scheduled sessions',
        description:
          'Start a focus session for 25, 50, or any number of minutes. Blocked sites redirect to a calm holding page.',
      },
      {
        title: 'Custom blocklist',
        description:
          'Add any URL or wildcard pattern. Block entire domains or specific paths.',
      },
      {
        title: 'Zero interruptions',
        description:
          'Focus Lane runs silently. No notifications, no pop-ups — just a gentle block page when you wander.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Build your blocklist',
        description: 'Add the sites that pull you away from work most often.',
      },
      {
        step: 2,
        title: 'Start a session',
        description: 'Choose your session length and click "Start focus". That\'s it.',
      },
      {
        step: 3,
        title: 'Work without distraction',
        description: 'Blocked sites show a minimal reminder. Your timer runs in the background.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: false,
    isSample: true,
    version: '2.0.1',
    updatedAt: '2026-10-01',
    pricing: 'Free',
    permissions: ['declarativeNetRequest', 'storage', 'alarms'],
    privacySummary:
      'Focus Lane only stores your blocklist and session preferences locally. No browsing data is collected or transmitted.',
    changelog: [
      {
        version: '2.0.1',
        date: '2026-10-01',
        changes: ['Fixed session timer persisting across browser restarts'],
      },
      {
        version: '2.0.0',
        date: '2026-08-12',
        changes: ['Rebuilt on Manifest V3', 'Added wildcard URL patterns', 'New minimal block page'],
      },
    ],
    faqs: [
      {
        question: 'Can I stop a focus session early?',
        answer: 'Yes — click the extension icon and press "End session". There\'s no penalty.',
      },
      {
        question: 'Does it work in incognito mode?',
        answer: 'You need to allow the extension in incognito mode via Chrome extension settings.',
      },
    ],
    relatedSlugs: ['tab-harbor'],
  },

  // ── 3. Clipnote ────────────────────────────────────────────────────────────
  {
    slug: 'clipnote',
    name: 'Clipnote',
    tagline: 'Capture text snippets from any page, instantly',
    description:
      'Clipnote is a lightweight snippet collector. Highlight any text on any page, press the keyboard shortcut, and it\'s saved with the source URL and date. Search and export your collection whenever you need it. Perfect for researchers, writers, and anyone who reads a lot online.',
    category: 'Writing',
    tags: ['snippets', 'notes', 'clipboard', 'research', 'writing', 'highlight'],
    icon: '/extensions/clipnote/icon.svg',
    accentColor: '#D97706', // amber
    screenshots: [
      {
        src: '/extensions/clipnote/screenshot-panel.png',
        alt: 'Clipnote saved snippets panel',
        caption: 'All your clips in one searchable panel',
      },
      {
        src: '/extensions/clipnote/screenshot-clip.png',
        alt: 'Text highlighted and clipped from a web page',
        caption: 'Highlight and clip in one keystroke',
      },
    ],
    features: [
      {
        title: 'One-keystroke capture',
        description:
          'Highlight text and press your shortcut. Clipnote saves the text, page title, and URL instantly — no popup required.',
      },
      {
        title: 'Searchable library',
        description:
          'Every clip is searchable by content or source URL. Find that quote you saved three weeks ago in seconds.',
      },
      {
        title: 'Export to Markdown or plain text',
        description:
          'Copy your full clip library or a selection to Markdown or plain text for use in any writing tool.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Set your shortcut',
        description:
          'Go to extension settings and choose your clip shortcut (default: Alt+C).',
      },
      {
        step: 2,
        title: 'Start clipping',
        description:
          'Highlight any text on any page and press your shortcut. A brief confirmation appears.',
      },
      {
        step: 3,
        title: 'Review and export',
        description:
          'Open the Clipnote panel to search, review, and export your collection.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: false,
    isSample: true,
    version: '1.4.2',
    updatedAt: '2026-08-30',
    pricing: 'Free',
    permissions: ['contextMenus', 'storage', 'activeTab'],
    privacySummary:
      'Clips are stored locally in Chrome storage. No content is sent to external servers.',
    changelog: [
      {
        version: '1.4.2',
        date: '2026-08-30',
        changes: ['Fixed export not including source URLs', 'Improved search relevance'],
      },
      {
        version: '1.4.0',
        date: '2026-07-01',
        changes: ['Added Markdown export', 'Increased storage limit to 500 clips'],
      },
    ],
    faqs: [
      {
        question: 'How many clips can I save?',
        answer: 'Up to 500 clips are stored locally. Older clips are archived when you reach the limit.',
      },
      {
        question: 'Can I clip images?',
        answer:
          'Clipnote is text-only. Image clipping is planned for a future version.',
      },
    ],
    relatedSlugs: ['readwise-view', 'link-sweep'],
  },

  // ── 4. Palette Pocket ──────────────────────────────────────────────────────
  {
    slug: 'palette-pocket',
    name: 'Palette Pocket',
    tagline: 'Pick and save colors from any website',
    description:
      'Palette Pocket is a color picker for designers and developers. Click any element on a page to capture its color in HEX, RGB, or HSL. Organize saved colors into named palettes and copy them to your clipboard in one click.',
    category: 'Design',
    tags: ['color', 'design', 'picker', 'palette', 'hex', 'css', 'developer'],
    icon: '/extensions/palette-pocket/icon.svg',
    accentColor: '#7C3AED', // violet
    screenshots: [
      {
        src: '/extensions/palette-pocket/screenshot-picker.png',
        alt: 'Palette Pocket color picker eyedropper active on a webpage',
        caption: 'Pick colors directly from the page',
      },
      {
        src: '/extensions/palette-pocket/screenshot-palette.png',
        alt: 'Saved color palette in Palette Pocket',
        caption: 'Organize colors into named palettes',
      },
    ],
    features: [
      {
        title: 'Eyedropper for any element',
        description:
          'Activate the eyedropper and hover over any element to preview its color in real time. Click to capture.',
      },
      {
        title: 'Multiple color formats',
        description:
          'Colors are saved and displayed in HEX, RGB, and HSL. Copy any format to your clipboard instantly.',
      },
      {
        title: 'Named palettes',
        description:
          'Group colors into palettes for each project. Export as CSS variables or JSON.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Activate the eyedropper',
        description: 'Click the Palette Pocket icon and then click "Pick color" to start.',
      },
      {
        step: 2,
        title: 'Hover and capture',
        description: 'Move your cursor over the page. Click any element to save its color.',
      },
      {
        step: 3,
        title: 'Organise into palettes',
        description: 'Drag saved colors into named palettes. Export when ready.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: false,
    isSample: true,
    version: '1.1.0',
    updatedAt: '2026-09-05',
    pricing: 'Free',
    permissions: ['activeTab', 'storage'],
    privacySummary:
      'Palette Pocket stores all color data locally. No data is collected or transmitted.',
    changelog: [
      {
        version: '1.1.0',
        date: '2026-09-05',
        changes: ['Added HSL format support', 'Export palettes as CSS variables'],
      },
      {
        version: '1.0.0',
        date: '2026-06-18',
        changes: ['Initial release with eyedropper and HEX/RGB support'],
      },
    ],
    faqs: [
      {
        question: 'Does the eyedropper work on images?',
        answer: 'Yes — the eyedropper can pick colors from images and backgrounds.',
      },
      {
        question: 'Can I share my palettes?',
        answer: 'Export your palette as JSON and share the file. Direct sharing links are not yet available.',
      },
    ],
    relatedSlugs: ['clipnote'],
  },

  // ── 5. Readwise View ───────────────────────────────────────────────────────
  {
    slug: 'readwise-view',
    name: 'Readwise View',
    tagline: 'Distraction-free reading mode for any article',
    description:
      'Readwise View strips away navigation, ads, and sidebars from any article or blog post. Choose your font size, line length, and background color, then read without distraction. Your preferences are saved per-site.',
    category: 'Reading',
    tags: ['reading', 'reader-mode', 'focus', 'article', 'accessibility', 'typography'],
    icon: '/extensions/readwise-view/icon.svg',
    accentColor: '#059669', // emerald green
    screenshots: [
      {
        src: '/extensions/readwise-view/screenshot-reader.png',
        alt: 'Readwise View clean reading mode on an article page',
        caption: 'Clean, focused reading for any article',
      },
      {
        src: '/extensions/readwise-view/screenshot-settings.png',
        alt: 'Readwise View typography settings panel',
        caption: 'Adjust font, spacing, and background',
      },
    ],
    features: [
      {
        title: 'Instant reader mode',
        description:
          'Click the icon or press the shortcut and the page transforms into a clean reading view in under a second.',
      },
      {
        title: 'Typography controls',
        description:
          'Adjust font size (14–24px), line width, line height, and choose between light, sepia, or dark backgrounds.',
      },
      {
        title: 'Per-site memory',
        description:
          'Readwise View remembers your preferences for each site. Return to your favourite blog and it applies your settings automatically.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Navigate to an article',
        description:
          'Open any article, blog post, or long-form content page you want to read.',
      },
      {
        step: 2,
        title: 'Activate reading mode',
        description: 'Click the Readwise View icon in the toolbar to activate clean view.',
      },
      {
        step: 3,
        title: 'Adjust to your preference',
        description:
          'Use the floating toolbar to change font size, width, or background. Settings are saved automatically.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: false,
    isSample: true,
    version: '1.0.3',
    updatedAt: '2026-10-10',
    pricing: 'Free',
    permissions: ['activeTab', 'storage'],
    privacySummary:
      'Readwise View only accesses the page you activate it on. Your reading preferences are stored locally.',
    changelog: [
      {
        version: '1.0.3',
        date: '2026-10-10',
        changes: ['Improved article detection for news sites', 'Fixed sepia background on dark-mode sites'],
      },
      {
        version: '1.0.0',
        date: '2026-07-25',
        changes: ['Initial release with reader mode and typography controls'],
      },
    ],
    faqs: [
      {
        question: 'Does it work on paywalled articles?',
        answer: 'Readwise View only rearranges the content already loaded in your browser. It does not bypass paywalls.',
      },
      {
        question: 'Can I print in reading mode?',
        answer: 'Yes — use your browser\'s standard print function while reading mode is active for a clean printout.',
      },
    ],
    relatedSlugs: ['clipnote', 'focus-lane'],
  },

  // ── 6. Link Sweep ──────────────────────────────────────────────────────────
  {
    slug: 'link-sweep',
    name: 'Link Sweep',
    tagline: 'Tidy your saved links into useful collections',
    description:
      'Link Sweep helps you process your growing list of bookmarks and saved links. Import from Chrome bookmarks, add links manually, and sort them into named collections. Flag links to review later and archive the ones you\'re done with.',
    category: 'Browsing',
    tags: ['bookmarks', 'links', 'organization', 'browsing', 'archive', 'collections'],
    icon: '/extensions/link-sweep/icon.svg',
    accentColor: '#0891B2', // cyan
    screenshots: [
      {
        src: '/extensions/link-sweep/screenshot-collections.png',
        alt: 'Link Sweep collections overview panel',
        caption: 'Your links, sorted into collections',
      },
      {
        src: '/extensions/link-sweep/screenshot-import.png',
        alt: 'Link Sweep importing bookmarks from Chrome',
        caption: 'Import your existing Chrome bookmarks',
      },
    ],
    features: [
      {
        title: 'Import from Chrome bookmarks',
        description:
          'Bring in your existing Chrome bookmarks with one click and start organizing from there.',
      },
      {
        title: 'Named collections',
        description:
          'Sort links into collections like "Read later", "Reference", or "Projects". Move between collections with drag-and-drop.',
      },
      {
        title: 'Archive and review queue',
        description:
          'Flag links to review and archive the ones you\'ve processed. Keep your active list short and actionable.',
      },
    ],
    gettingStarted: [
      {
        step: 1,
        title: 'Import your bookmarks',
        description:
          'Open Link Sweep and click "Import from Chrome". Choose folders to import.',
      },
      {
        step: 2,
        title: 'Create collections',
        description:
          'Create named collections for your main categories. Drag links into them.',
      },
      {
        step: 3,
        title: 'Review regularly',
        description:
          'Work through your "Review" queue and archive or assign everything. Keep it tidy.',
      },
    ],
    storeUrl: null,
    supportUrl: null,
    privacyPolicyUrl: null,
    status: 'available',
    featured: false,
    isSample: true,
    version: '1.3.1',
    updatedAt: '2026-09-28',
    pricing: 'Free',
    permissions: ['bookmarks', 'storage'],
    privacySummary:
      'Link Sweep reads your Chrome bookmarks with your permission and stores all data locally.',
    changelog: [
      {
        version: '1.3.1',
        date: '2026-09-28',
        changes: ['Fixed import failing for bookmarks with missing titles', 'Improved drag-and-drop on touch screens'],
      },
      {
        version: '1.3.0',
        date: '2026-08-15',
        changes: ['Added archive functionality', 'Review queue sorting by date added'],
      },
    ],
    faqs: [
      {
        question: 'Will it modify my Chrome bookmarks?',
        answer:
          'Link Sweep reads your bookmarks but does not modify them. Your Chrome bookmarks remain unchanged.',
      },
      {
        question: 'How many links can I manage?',
        answer: 'Up to 2,000 links per collection. Storage uses Chrome\'s local storage.',
      },
    ],
    relatedSlugs: ['tab-harbor', 'clipnote'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────────────────────────────────────

export function getExtensionBySlug(slug: string): Extension | undefined {
  return extensions.find((e) => e.slug === slug);
}

export function getFeaturedExtension(): Extension | undefined {
  return extensions.find((e) => e.featured);
}

export function getRelatedExtensions(slugs: string[]): Extension[] {
  return slugs
    .map((slug) => getExtensionBySlug(slug))
    .filter((e): e is Extension => e !== undefined);
}

export function getAllCategories(): string[] {
  const cats = extensions.map((e) => e.category);
  return Array.from(new Set(cats)).sort();
}

export function getAllTags(): string[] {
  const tags = extensions.flatMap((e) => e.tags);
  return Array.from(new Set(tags)).sort();
}
