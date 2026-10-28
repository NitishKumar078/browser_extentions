import { ArrowUpRight } from "lucide-react";
import type { Extension } from "@/lib/types";
import { BrowserBadge } from "./ExtensionVisual";

export default function StoreLinks({ extension }: { extension: Extension }) {
  return (
    <div className="store-actions">
      {extension.browsers.map((browser) => {
        const url =
          browser === "chrome" ? extension.storeUrl : extension.edgeStoreUrl;
        const canInstall =
          url &&
          (extension.status === "available" || extension.status === "beta");
        return canInstall ? (
          <a
            key={browser}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            {browser === "chrome"
              ? "Chrome Web Store"
              : "Microsoft Edge Add-ons"}
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <div key={browser} className="store-unavailable">
            <BrowserBadge browser={browser} />
            <small>
              {extension.status === "coming-soon"
                ? "Coming soon - not published"
                : extension.status === "in-review"
                  ? "Awaiting store approval"
                  : extension.status === "discontinued"
                    ? "No longer available"
                    : "Store link pending"}
            </small>
          </div>
        );
      })}
    </div>
  );
}
