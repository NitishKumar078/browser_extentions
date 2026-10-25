"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Extension } from "@/lib/types";
import { ProductPreview } from "./ExtensionVisual";

export default function ScreenshotGallery({
  extension,
}: {
  extension: Extension;
}) {
  const [index, setIndex] = useState(0);
  const count = extension.isSample ? 2 : extension.screenshots.length;
  const screenshot = extension.screenshots[index];
  if (!count) return null;
  return (
    <figure className="detail-gallery">
      {extension.isSample ? (
        <ProductPreview extension={extension} variant={index} />
      ) : (
        <div className="product-preview real-preview">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(max-width: 799px) 95vw, 85vw"
            priority
          />
        </div>
      )}
      <figcaption className="gallery-controls">
        <span aria-live="polite">
          {extension.isSample
            ? `Illustrative concept ${index + 1} of ${count}`
            : `${index + 1} / ${count} - ${screenshot.caption || extension.name}`}
        </span>
        {count > 1 && (
          <div>
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
          </div>
        )}
      </figcaption>
    </figure>
  );
}
