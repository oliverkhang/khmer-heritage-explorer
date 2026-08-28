import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge, EntryCard, Page, SectionHeading } from "@/components/heritage";
import { categories, entries } from "@/data/heritage";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? (search["q"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Search the Archive — Khmer Heritage" },
      {
        name: "description",
        content:
          "Search source-cited entries on Khmer temples, sculpture, music, ritual, script and textiles across the Khmer Heritage archive.",
      },
      { property: "og:title", content: "Search the Archive — Khmer Heritage" },
      {
        property: "og:description",
        content: "Find Khmer heritage entries by name, era, category or Khmer script.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [category, setCategory] = useState("all");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return entries.filter((e) => {
      if (category !== "all" && e.categoryId !== category) return false;
      if (!needle) return true;
      return [e.title.en, e.title.km, e.summary.en, e.summary.km, e.era, e.categoryId]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [q, category]);

  return (
    <AppShell>
      <Page>
        <SectionHeading eyebrow="Archive" title="Search Khmer Heritage" km="ស្វែងរក" />

        <label className="surface-card flex items-center gap-3 px-4 py-3">
          <SearchIcon className="size-4 text-primary" strokeWidth={1.5} />
          <input
            value={q}
            autoFocus
            onChange={(e) =>
              navigate({ to: ".", search: (prev) => ({ ...prev, q: e.target.value }) })
            }
            placeholder="Temples, apsara, pinpeat, ហូល…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {q && (
            <button
              onClick={() => navigate({ to: ".", search: (prev) => ({ ...prev, q: "" }) })}
              className="text-[11px] text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          )}
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
              category === "all"
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:bg-secondary/60"
            }`}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                category === c.id
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              {c.title.en}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {results.length} {results.length === 1 ? "entry" : "entries"}
        </p>

        {results.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((e) => (
              <EntryCard key={e.id} entry={e} />
            ))}
          </div>
        ) : (
          <div className="surface-card mt-4 p-8 text-center">
            <p className="text-sm text-foreground">No entries match “{q}”.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Try a broader term, or browse a category below.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {categories.slice(0, 4).map((c) => (
                <Link key={c.id} to="/search" search={{ q: c.title.en }}>
                  <Badge tone="stone">{c.title.en}</Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Page>
    </AppShell>
  );
}
