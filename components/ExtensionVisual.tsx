import Image from "next/image";
import {
  Bookmark,
  BookOpen,
  Check,
  Circle,
  Clipboard,
  Clock3,
  Folder,
  Layers,
  LayoutGrid,
  Palette,
  Plus,
  Puzzle,
  Search,
  ShieldCheck,
  Timer,
  X,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { Extension } from "@/lib/types";

const icons = {
  "tab-harbor": Layers,
  "focus-lane": Timer,
  clipnote: Clipboard,
  "palette-pocket": Palette,
  "readwise-view": BookOpen,
  "link-sweep": Bookmark,
};

export function ExtensionIcon({
  extension,
  small = false,
}: {
  extension: Extension;
  small?: boolean;
}) {
  const Icon = icons[extension.slug as keyof typeof icons] || Puzzle;
  return (
    <span
      className={`extension-icon ${small ? "small" : ""}`}
      style={{ "--accent": extension.accentColor } as CSSProperties}
    >
      {!extension.isSample && extension.icon ? (
        <Image src={extension.icon} alt="" width={48} height={48} />
      ) : (
        <Icon size={small ? 19 : 26} strokeWidth={1.8} />
      )}
    </span>
  );
}

export function BrowserBadge({ browser }: { browser: "chrome" | "edge" }) {
  return (
    <span className="browser-badge">
      <span className={`browser-mark ${browser}`} aria-hidden="true" />
      {browser === "chrome" ? "Chrome" : "Edge"}
    </span>
  );
}

// Code-native concept visuals are replaced by supplied screenshots for real listings.
export function ProductPreview({
  extension,
  variant = 0,
}: {
  extension: Extension;
  variant?: number;
}) {
  return (
    <div
      className={`product-preview preview-${extension.slug}`}
      role="img"
      aria-label={`${extension.name} illustrative concept preview`}
    >
      {extension.slug === "tab-harbor" ? (
        <div className="mock-workspace">
          <div className="mock-title">
            <span>
              <Layers size={14} /> Tab Harbor
            </span>
            <span>
              <Search size={12} />
              <Plus size={12} />
            </span>
          </div>
          <div className="mock-workspace-body">
            <aside>
              <span>My spaces</span>
              <b>
                <Folder size={12} />{" "}
                {variant ? "Reading list" : "Design project"}
              </b>
              <span>
                <Folder size={12} /> Research
              </span>
              <span>
                <Folder size={12} /> Personal
              </span>
            </aside>
            <div>
              <span className="mock-caption">
                {variant ? "Saved for later" : "Pick up where you left off"}
              </span>
              <strong>
                {variant ? "A little inspiration" : "Good things in one place."}
              </strong>
              {(variant
                ? [
                    "The creative independent",
                    "A guide to slower work",
                    "Interface inspiration",
                  ]
                : ["Brand exploration", "Website inspiration", "Project notes"]
              ).map((label, i) => (
                <div className="mock-tab" key={label}>
                  <span className={`tiny-logo tiny-${i}`}>
                    {["F", "A", "N"][i]}
                  </span>
                  <span>
                    {label}
                    <small>{["figma.com", "are.na", "notion.so"][i]}</small>
                  </span>
                  <X size={10} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : extension.slug === "focus-lane" ? (
        <div className="mock-focus">
          <span>
            <span className="status-dot" /> Focus session
          </span>
          <div className="timer-ring">
            <Timer size={18} />
            <strong>{variant ? "50:00" : "25:00"}</strong>
            <small>One thing at a time.</small>
          </div>
          <div className="mock-focus-bottom">
            <ShieldCheck size={13} /> 4 distractions blocked <span>Pause</span>
          </div>
        </div>
      ) : extension.slug === "clipnote" ? (
        <div className="mock-clips">
          <div className="mock-title">
            <span>
              <Clipboard size={14} /> My clips
            </span>
            <Search size={13} />
          </div>
          <div className="mock-quote">
            <span>Design notes</span>
            <p>
              &ldquo;The details are not the details. They make the
              design.&rdquo;
            </p>
            <small>Charles Eames / saved just now</small>
          </div>
          <div className="mock-clip-row">
            <span className="clip-marker" />
            <span>
              {variant
                ? "A better way to collect ideas"
                : "Ideas worth coming back to"}
              <small>From your reading list</small>
            </span>
            <Check size={14} />
          </div>
        </div>
      ) : extension.slug === "palette-pocket" ? (
        <div className="mock-palette">
          <div className="mock-title">
            <span>
              <Palette size={14} /> Weekend palette
            </span>
            <span>5 colors</span>
          </div>
          <div className="swatches">
            {["#264B40", "#A6D9C5", "#F2E8CD", "#EE947A", "#725A79"].map(
              (color) => (
                <span key={color} style={{ background: color }} />
              ),
            )}
          </div>
          <div className="color-labels">
            <span>#264B40</span>
            <span>#A6D9C5</span>
            <span>#F2E8CD</span>
            <span>#EE947A</span>
            <span>#725A79</span>
          </div>
          <div className="mock-palette-bottom">
            <span>
              <Check size={12} /> Saved to your collection
            </span>
            <span>Copy CSS</span>
          </div>
        </div>
      ) : extension.slug === "readwise-view" ? (
        <div className="mock-reader">
          <div className="reader-tools">
            <BookOpen size={14} />
            <span>
              Aa <span className="reader-dot" /> <Circle size={12} />
            </span>
          </div>
          <small>8 minute read</small>
          <h3>
            {variant
              ? "Make room for a good read."
              : "The quiet joy of doing less."}
          </h3>
          <p>
            Some ideas deserve your full attention. A little space, a slower
            pace, and a page with nothing in the way.
          </p>
          <div className="text-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="mock-links">
          <div className="mock-title">
            <span>
              <Bookmark size={14} /> Your collections
            </span>
            <Plus size={14} />
          </div>
          <div className="collection-tiles">
            <div>
              <BookOpen size={19} />
              <b>Read later</b>
              <span>12 links</span>
            </div>
            <div>
              <LayoutGrid size={19} />
              <b>Inspiration</b>
              <span>24 links</span>
            </div>
          </div>
          <div className="mock-clip-row">
            <Clock3 size={14} />
            <span>A few good things for later</span>
            <Check size={14} />
          </div>
        </div>
      )}
    </div>
  );
}

export function ExtensionMedia({ extension }: { extension: Extension }) {
  const screenshot = extension.screenshots[0];
  if (screenshot)
    return (
      <div
        className={`product-preview real-preview ${extension.isSample ? "sample-preview" : ""}`}
      >
        <Image
          src={screenshot.src}
          alt={
            extension.isSample
              ? `${extension.name} illustrative concept preview`
              : screenshot.alt
          }
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
    );
  return <ProductPreview extension={extension} />;
}
