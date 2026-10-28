"use client";

import { useState } from "react";
import { ArrowDownWideNarrow, Search, SearchX, X } from "lucide-react";
import type { Extension } from "@/lib/types";
import ExtensionCard from "./ExtensionCard";

export default function ExtensionCatalog({
  extensions,
}: {
  extensions: Extension[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All tools");
  const [browser, setBrowser] = useState("all");
  const [sort, setSort] = useState("featured");
  const categories = [
    "All tools",
    ...new Set(extensions.map((item) => item.category)),
  ];
  const filtered = extensions
    .filter(
      (item) =>
        (category === "All tools" || item.category === category) &&
        (browser === "all" ||
          item.browsers.some((value) => value === browser)) &&
        [item.name, item.tagline, ...item.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .sort((a, b) =>
      sort === "name"
        ? a.name.localeCompare(b.name)
        : sort === "updated"
          ? (b.updatedAt || "").localeCompare(a.updatedAt || "")
          : Number(b.featured) - Number(a.featured),
    );
  function reset() {
    setQuery("");
    setCategory("All tools");
    setBrowser("all");
    setSort("featured");
  }

  return (
    <section
      className="catalog-section container-site"
      id="extensions"
      aria-labelledby="catalog-heading"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">The collection</span>
          <h2 id="catalog-heading">Find your next little upgrade.</h2>
        </div>
        <p>
          For the tabs you open.
          <br />
          And the things you want to get done.
        </p>
      </div>
      <div className="catalog-toolbar">
        <label className="search-field">
          <Search size={19} />
          <span className="sr-only">Search extensions</span>
          <input
            type="search"
            placeholder="Search tools, tasks, or ideas..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              className="icon-button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              <X size={16} />
            </button>
          )}
        </label>
        <div className="catalog-selects">
          <label>
            <span className="sr-only">Browser</span>
            <select
              aria-label="Browser"
              value={browser}
              onChange={(event) => setBrowser(event.target.value)}
            >
              <option value="all">All browsers</option>
              <option value="chrome">Google Chrome</option>
              <option value="edge">Microsoft Edge</option>
            </select>
          </label>
          <label className="sort-control">
            <ArrowDownWideNarrow size={17} />
            <span className="sr-only">Sort extensions</span>
            <select
              aria-label="Sort extensions"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Featured first</option>
              <option value="updated">Recently updated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
      </div>
      <div className="filter-line">
        <div
          className="category-filters"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
              {item === "All tools" && <span>{extensions.length}</span>}
            </button>
          ))}
        </div>
        <span className="result-count" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "extension" : "extensions"}
        </span>
      </div>
      {filtered.length ? (
        <div className="extension-grid">
          {filtered.map((extension) => (
            <ExtensionCard key={extension.slug} extension={extension} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SearchX size={36} />
          <h3>No tools match just yet.</h3>
          <p>
            Try another keyword or clear your filters to see the whole
            collection.
          </p>
          <button className="button button-dark" onClick={reset}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
