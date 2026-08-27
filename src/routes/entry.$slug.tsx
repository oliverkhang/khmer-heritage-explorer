import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BookMarked, MapPin, X } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge, EntryCard, LicenseBadge, Page, SectionHeading } from "@/components/heritage";
import { entries, entryById, entryBySlug } from "@/data/heritage";
import { LICENSE_LABEL, type MediaAsset } from "@/data/types";

export const Route = createFileRoute("/entry/$slug")({
  loader: ({ params }) => {
    const entry = entryBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Entry unavailable — Khmer Heritage" }, { name: "robots", content: "noindex" }] };
    }
    const { entry } = loaderData;
    const title = `${entry.title.en} — Khmer Heritage`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.summary.en.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.summary.en.slice(0, 155) },
      ],
    };
  },
  component: EntryReader,
});

function EntryReader() {
  const { entry } = Route.useLoaderData();
  const [zoom, setZoom] = useState<MediaAsset | null>(null);
  const [showSources, setShowSources] = useState(false);
  const related = entry.relatedEntryIds.map(entryById).filter(Boolean);

  return (
    <AppShell>
      <div className="relative h-[46vh] min-h-[320px] overflow-hidden">
        <img
          src={entry.coverMedia.url}
          alt={entry.coverMedia.title.en}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      <Page>
        <div className="-mt-24 relative">
          <div className="flex flex-wrap gap-2">
            <Badge>{entry.era}</Badge>
            {entry.coordinates && (
              <Badge tone="stone">
                <MapPin className="mr-1 size-3" /> {entry.coordinates.latitude.toFixed(3)}°N{" "}
                {entry.coordinates.longitude.toFixed(3)}°E
              </Badge>
            )}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl">{entry.title.en}</h1>
          <p className="font-khmer mt-1 text-xl text-primary/90">{entry.title.km}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {entry.summary.en}
          </p>
        </div>

        <div className="surface-card mt-8 grid grid-cols-2 gap-px overflow-hidden bg-border/40 md:grid-cols-4">
          {[
            ["Era", entry.era.split("·")[0].trim()],
            ["Category", entry.categoryId],
            ["Media assets", `${entry.gallery.length + 1}`],
            ["Sources", `${entry.citations.length} verified`],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80">{k}</p>
              <p className="mt-1.5 text-sm capitalize text-foreground">{v}</p>
            </div>
          ))}
        </div>

        <article className="mt-12 max-w-3xl">
          {entry.content.sections.map((s) => (
            <section key={s.id} className="mb-10">
              <h2 className="text-2xl">{s.heading.en}</h2>
              <p className="font-khmer text-sm text-muted-foreground">{s.heading.km}</p>
              <div className="gold-rule my-4" />
              <p className="text-[15px] leading-[1.85] text-foreground/85">{s.body.en}</p>
              <p className="font-khmer mt-4 text-sm leading-loose text-muted-foreground">
                {s.body.km}
              </p>
            </section>
          ))}
        </article>

        <div className="mt-6">
          <SectionHeading eyebrow="Media" title="Gallery & Sound" km="វិចិត្រសាល" />
          <div className="grid gap-3 sm:grid-cols-3">
            {entry.gallery.map((g) => (
              <button
                key={g.id}
                onClick={() => setZoom(g)}
                className="surface-card group relative overflow-hidden text-left"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={g.url}
                    alt={g.title.en}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-background to-transparent p-3">
                  <p className="text-xs text-foreground">{g.title.en}</p>
                  <div className="mt-1">
                    <LicenseBadge asset={g} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="surface-card mt-4 flex items-center gap-4 p-4">
            <Link
              to="/music"
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
            >
              Play soundscape
            </Link>
            <div className="min-w-0">
              <p className="text-sm">Ambient temple soundscape · Pinpeat ensemble</p>
              <p className="text-[11px] text-muted-foreground">
                Synthesised tones · In-house Original
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => setShowSources((v) => !v)}
            className="flex w-full items-center gap-3 rounded-lg border border-border px-4 py-3 text-left text-sm hover:bg-secondary/50"
          >
            <BookMarked className="size-4 text-primary" strokeWidth={1.5} />
            Academic citations & bibliography
            <span className="ml-auto text-xs text-muted-foreground">
              {showSources ? "Hide" : `${entry.citations.length} sources`}
            </span>
          </button>
          {showSources && (
            <ul className="surface-card mt-3 divide-y divide-border/60">
              {entry.citations.map((c) => (
                <li key={c.id} className="p-4">
                  <p className="text-sm text-foreground">{c.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.author}
                    {c.year ? ` · ${c.year}` : ""}
                    {c.publisher ? ` · ${c.publisher}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Relational Web"
            title="Explore Related Heritage"
            km="បេតិកភណ្ឌពាក់ព័ន្ធ"
          />
          <div className="scroll-rail -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
            {related.map((r) => (
              <EntryCard key={r!.id} entry={r!} wide />
            ))}
          </div>
        </div>
      </Page>

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-5 backdrop-blur"
          onClick={() => setZoom(null)}
        >
          <div className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={zoom.url} alt={zoom.title.en} className="max-h-[70vh] w-full rounded-lg object-contain" />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm">{zoom.title.en}</p>
                <p className="font-khmer text-xs text-muted-foreground">{zoom.title.km}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {zoom.creator} · {zoom.source} · {LICENSE_LABEL[zoom.license]}
                </p>
              </div>
              <button onClick={() => setZoom(null)} aria-label="Close viewer" className="rounded-full border border-border p-2">
                <X className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export const allEntries = entries;
