import Image from "next/image";
import { ImageIcon, Puzzle } from "lucide-react";
import type { CSSProperties } from "react";
import type { Extension } from "@/lib/types";

export function ExtensionIcon({
  extension,
  small = false,
}: {
  extension: Extension;
  small?: boolean;
}) {
  return (
    <span
      className={`extension-icon ${small ? "small" : ""}`}
      style={{ "--accent": extension.accentColor } as CSSProperties}
    >
      {extension.icon ? (
        <Image src={extension.icon} alt="" width={48} height={48} />
      ) : (
        <Puzzle size={small ? 19 : 26} />
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

export function ExtensionMedia({
  extension,
  priority = false,
}: {
  extension: Extension;
  priority?: boolean;
}) {
  const screenshot = extension.screenshots[0];
  return (
    <div className="product-preview real-preview">
      {screenshot ? (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 620px"
          priority={priority}
        />
      ) : (
        <span className="media-placeholder">
          <ImageIcon size={28} />
          Screenshots coming soon
        </span>
      )}
    </div>
  );
}
