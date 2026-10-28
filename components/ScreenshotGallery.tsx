"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Extension } from "@/lib/types";

export default function ScreenshotGallery({
  extension,
}: {
  extension: Extension;
}) {
  const [index, setIndex] = useState(0);
  const count = extension.screenshots.length;
  const screenshot = extension.screenshots[index];
  if (!screenshot) return null;
  return (
    <figure className="detail-gallery">
      <div className="product-preview real-preview">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 799px) 95vw, 1240px"
          priority
        />
      </div>
      <figcaption className="gallery-controls">
        <span aria-live="polite">
          {index + 1} / {count} - {screenshot.caption || extension.name}
        </span>
        <div>
          <a
            className="icon-button"
            href={screenshot.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open full-size screenshot"
            title="Open full-size screenshot"
          >
            <ExternalLink size={18} />
          </a>
          {count > 1 && (
            <>
              <button
                className="icon-button"
                aria-label="Previous screenshot"
                onClick={() => setIndex((index - 1 + count) % count)}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="icon-button"
                aria-label="Next screenshot"
                onClick={() => setIndex((index + 1) % count)}
              >
                <ArrowRight size={18} />
              </button>
            </>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
