import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  MousePointer2,
  Puzzle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { extensions, getFeaturedExtension } from "@/lib/extensions";
import { siteConfig } from "@/lib/site-config";
import ExtensionCatalog from "@/components/ExtensionCatalog";
import FeaturedExtension from "@/components/FeaturedExtension";
import { BrowserBadge } from "@/components/ExtensionVisual";

const faqs = [
  {
    question: "Where can I install an extension?",
    answer:
      "Each product page has separate Chrome Web Store and Microsoft Edge Add-ons links when a release is available. The current collection uses fictional sample products, so installation is not enabled yet.",
  },
  {
    question: "Will these work in both Chrome and Edge?",
    answer:
      "Use the browser filter to find the right version. Each listing shows its supported browsers. When real releases are added, use the matching store link on the product page.",
  },
  {
    question: "What can an extension access?",
    answer:
      "Permissions are listed on each product page alongside a privacy summary. Always review the permissions and privacy policy on the official store before installing. The current permission lists are sample content.",
  },
  {
    question: "Have an idea or need a custom extension?",
    answer:
      "I also build custom web experiences and browser tools. Visit my portfolio to learn about my work and get in touch, or explore the Demo Lab for industry-specific website concepts.",
  },
];

export default function Home() {
  const featured = getFeaturedExtension();
  return (
    <>
      <section className="hero container-site">
        <div className="hero-note">
          <span className="status-dot" /> Independent tools by{" "}
          {siteConfig.author.name}
        </div>
        <div className="hero-layout">
          <h1>
            Small tools.
            <br />
            Better browsing<span className="hero-period">.</span>
          </h1>
          <div className="hero-description">
            <p>
              A collection of thoughtful browser extensions for a more focused,
              organized, and creative everyday.
            </p>
            <div className="hero-browser-line">
              <BrowserBadge browser="chrome" />
              <span className="plus-sign">+</span>
              <BrowserBadge browser="edge" />
            </div>
            <a href="#extensions" className="text-link">
              Explore the collection <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </section>
      {featured && <FeaturedExtension extension={featured} />}
      <div className="principles-strip container-site">
        <span>
          <MousePointer2 size={18} /> Small tools, clear purpose
        </span>
        <span>
          <ShieldCheck size={18} /> Permissions you can understand
        </span>
        <span>
          <Code2 size={18} /> Independently crafted
        </span>
        <a href="#about">
          Meet the maker <ArrowUpRight size={16} />
        </a>
      </div>
      <ExtensionCatalog extensions={extensions} />
      <section className="maker-section" id="about">
        <div className="container-site maker-layout">
          <div className="maker-identity">
            <div className="maker-monogram" aria-hidden="true">
              nk
              <span>
                <Code2 size={23} />
              </span>
            </div>
            <span>{siteConfig.author.name}</span>
            <small>Developer &amp; thoughtful problem-solver</small>
          </div>
          <div className="maker-copy">
            <span className="eyebrow">A person behind the pixels</span>
            <h2>
              I build the little things
              <br />
              that make a difference.
            </h2>
            <p>
              Too many tabs. A color worth saving. An idea you don&apos;t want
              to lose. I&apos;m interested in the small moments where a
              well-made tool can make the web feel a little better.
            </p>
            <p>
              This is home for my browser projects. For the bigger picture, take
              a look at my portfolio or explore the websites I build for
              businesses.
            </p>
            <div className="maker-links">
              <a
                href={siteConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
              >
                Visit my portfolio <ArrowUpRight size={18} />
              </a>
              <a
                href={siteConfig.demosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explore Demo Lab <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section container-site" id="faq">
        <div>
          <span className="eyebrow">Good to know</span>
          <h2>
            A few answers
            <br />
            before you add.
          </h2>
          <p>Less guessing. More informed browsing.</p>
          <a
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
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
      <section className="explore-more container-site">
        <div>
          <Sparkles size={23} />
          <h2>More than browser tools.</h2>
          <p>
            Custom websites, considered interfaces, and ideas brought to life.
          </p>
        </div>
        <a href={siteConfig.demosUrl} target="_blank" rel="noopener noreferrer">
          See what&apos;s in the Demo Lab <ArrowUpRight size={22} />
        </a>
        <div className="mini-mosaic" aria-hidden="true">
          <span>
            <Puzzle size={34} />
          </span>
          <span>
            <MousePointer2 size={34} />
          </span>
          <span>
            <Check size={34} />
          </span>
        </div>
      </section>
    </>
  );
}
