import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  DatabaseZap,
  EyeOff,
  HardDrive,
  Lock,
  ServerOff,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Privacy policy for browser extensions by Nitish Kumar. We collect zero data, track no browsing activity, and run 100% locally in your browser.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const lastUpdated = "October 25, 2026";

  return (
    <div className="container-site privacy-page">
      <Link href="/" className="breadcrumb">
        <ArrowLeft size={16} /> Back to extensions
      </Link>

      <header className="privacy-header">
        <div className="privacy-badge">
          <ShieldCheck size={18} />
          <span>Strict No-Data-Collection Policy</span>
        </div>
        <h1>Privacy Policy</h1>
        <p className="privacy-lead">
          We believe privacy is a fundamental right. Our browser extensions are
          built as self-contained, offline-first utilities. We do not collect,
          store, sell, or transmit any personal data, browsing history, or user
          activity.
        </p>
        <div className="privacy-meta">
          <span>Effective Date &amp; Last Updated: {lastUpdated}</span>
          <span>•</span>
          <span>Applies to Chrome Extensions &amp; Microsoft Edge Add-ons</span>
        </div>
      </header>

      {/* Highlights / Summary Cards */}
      <section className="privacy-summary-grid" aria-label="Key privacy principles">
        <div className="privacy-summary-card">
          <div className="summary-icon">
            <EyeOff size={24} />
          </div>
          <h3>Zero Data Collection</h3>
          <p>
            No personal information, email addresses, browsing activity,
            keystrokes, or extracted page content is ever collected or tracked.
          </p>
        </div>

        <div className="privacy-summary-card">
          <div className="summary-icon">
            <ServerOff size={24} />
          </div>
          <h3>100% Local Execution</h3>
          <p>
            All scripts, text processing, and extension features execute
            entirely within your browser on your local machine. Nothing is sent
            to external servers.
          </p>
        </div>

        <div className="privacy-summary-card">
          <div className="summary-icon">
            <DatabaseZap size={24} />
          </div>
          <h3>No Remote Tracking</h3>
          <p>
            We do not use Google Analytics, telemetry, cookies, advertising
            SDKs, or third-party web beacons of any kind.
          </p>
        </div>

        <div className="privacy-summary-card">
          <div className="summary-icon">
            <HardDrive size={24} />
          </div>
          <h3>Local Storage Only</h3>
          <p>
            User preferences (such as dark mode or custom settings) are saved
            strictly on your device via the browser&apos;s sandboxed local
            storage API.
          </p>
        </div>
      </section>

      {/* Detailed Policy Content */}
      <div className="privacy-body">
        <section className="privacy-section">
          <h2>1. Introduction &amp; Scope</h2>
          <p>
            This Privacy Policy applies to all browser extensions and add-ons
            developed and published by <strong>{siteConfig.author.name}</strong>{" "}
            (distributed through the Chrome Web Store and Microsoft Edge
            Add-ons catalog).
          </p>
          <p>
            By using our extensions, you enjoy full functionality without
            sacrificing your digital privacy. Our single-purpose tools operate
            autonomously without external databases, servers, or user tracking.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Do NOT Collect</h2>
          <p>
            To be completely clear and unambiguous: <strong>we collect zero data</strong>.
            Specifically, our extensions do NOT collect, monitor, log, or transmit:
          </p>
          <ul className="privacy-checklist">
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>Personally Identifiable Information (PII):</strong> No
                names, email addresses, phone numbers, IP addresses, or account
                credentials.
              </div>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>Browsing History &amp; Web Activity:</strong> No URLs of
                visited pages, tabs opened, search queries, or session metadata.
              </div>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>User Content &amp; Input:</strong> Any text, images, or
                data selected, extracted, or interacted with remains solely on
                the web page in your active browser session.
              </div>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>Clipboard Data:</strong> Extensions only write content
                to your clipboard when you explicitly click a &quot;Copy&quot;
                action. We never read or monitor your clipboard history.
              </div>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>Analytics &amp; Telemetry:</strong> No usage counts,
                click tracking, error logs, or behavioral monitoring.
              </div>
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Permissions We Request and Why</h2>
          <p>
            In accordance with the principle of least privilege, our extensions
            only declare the minimum browser permissions necessary to perform
            their advertised features:
          </p>

          <div className="permission-table-wrapper">
            <table className="permission-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose &amp; Scope</th>
                  <th>Data Stored / Transmitted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>activeTab</code>
                  </td>
                  <td>
                    Grants temporary, scoped access to the current web page only
                    when you interact with the extension (e.g., clicking its
                    toolbar icon).
                  </td>
                  <td>None. Closes when the tab is closed or navigated.</td>
                </tr>
                <tr>
                  <td>
                    <code>scripting</code>
                  </td>
                  <td>
                    Allows injecting helper scripts or CSS styles into the
                    active tab to run functions (such as text extraction or DOM
                    formatting) locally.
                  </td>
                  <td>None. All logic runs in-memory on the page.</td>
                </tr>
                <tr>
                  <td>
                    <code>storage</code>
                  </td>
                  <td>
                    Used to persist your settings, custom options, or state
                    locally on your computer via <code>chrome.storage.local</code>.
                  </td>
                  <td>Stored locally on your device only. Never exported.</td>
                </tr>
                <tr>
                  <td>
                    <code>contextMenus</code>
                  </td>
                  <td>
                    Adds convenient options to your browser&apos;s right-click
                    menu for quick access to extension actions.
                  </td>
                  <td>None.</td>
                </tr>
                <tr>
                  <td>
                    <code>clipboardWrite</code>
                  </td>
                  <td>
                    Allows copying formatted output or extracted text directly
                    to your clipboard when you click a &quot;Copy&quot; button.
                  </td>
                  <td>None. Only writes data upon your direct click.</td>
                </tr>
                <tr>
                  <td>
                    <code>Host Permissions</code>
                  </td>
                  <td>
                    Enables content scripts to function across requested website
                    match patterns when performing user-triggered tasks.
                  </td>
                  <td>None. No URLs or page contents are gathered.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="privacy-section">
          <h2>4. Remote Code &amp; Third-Party Services</h2>
          <p>
            In strict compliance with Google Chrome and Microsoft Edge developer
            policies:
          </p>
          <ul>
            <li>
              <strong>No Remote Code:</strong> All JavaScript, CSS, HTML, and
              bundled assets are entirely contained within the extension zip
              package. We never load scripts dynamically from external CDNs,
              remote URLs, or execute strings via <code>eval()</code>.
            </li>
            <li>
              <strong>No Third-Party SDKs:</strong> There are no third-party
              advertising networks, affiliate trackers, or marketing trackers
              embedded in any extension.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security &amp; Retention</h2>
          <p>
            Because we do not operate backend servers, databases, or cloud sync
            services for extension users, there is no centralized database of
            user information that could ever be compromised, breached, or
            subpoenaed.
          </p>
          <p>
            Any local configuration data (such as user preferences) is managed
            securely by your browser&apos;s internal sandbox and can be wiped at
            any time simply by uninstalling the extension or clearing your
            browser cache.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Our extensions do not address or collect any data from anyone,
            including children under the age of 13. We fully comply with the
            Children&apos;s Online Privacy Protection Act (COPPA) and international
            privacy standards.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Updates to This Policy</h2>
          <p>
            If we make any modifications to this policy, the updated version
            will be posted on this page with a revised &quot;Last Updated&quot;
            date. Because our fundamental architectural philosophy is
            zero-collection, we will never introduce covert tracking or remote
            data harvesting.
          </p>
        </section>

        <section className="privacy-section contact-card">
          <div className="contact-icon">
            <Lock size={26} />
          </div>
          <div>
            <h2>8. Contact &amp; Questions</h2>
            <p>
              If you have any questions, feedback, or concerns about this
              Privacy Policy or our extensions, please reach out via our
              portfolio or developer channels:
            </p>
            <div className="contact-links">
              <a
                href={siteConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Developer Portfolio <ArrowUpRight size={15} />
              </a>
              {siteConfig.author.email && (
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-link"
                >
                  {siteConfig.author.email} <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
