import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, ShieldAlert, Sparkles } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge, Page, SectionHeading } from "@/components/heritage";
import { sites } from "@/data/heritage";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Heritage Atlas — Khmer Heritage" },
      {
        name: "description",
        content:
          "An interactive atlas of Khmer temples and heritage sites across Cambodia, with era, architectural style and conservation status.",
      },
      { property: "og:title", content: "Heritage Atlas — Khmer Heritage" },
      {
        property: "og:description",
        content:
          "Locate Angkor Wat, the Bayon, Banteay Srei, Preah Vihear and more across an interactive map of Cambodia.",
      },
    ],
  }),
  component: AtlasPage,
});

const BOUNDS = { minLat: 10.4, maxLat: 14.9, minLng: 102.3, maxLng: 107.7 };

const CONDITION_LABEL: Record<string, string> = {
  excellent: "Excellent",
  stable: "Stable",
  at_risk: "At risk",
};

const FILTERS = [
  { id: "all", label: "All sites" },
  { id: "unesco", label: "UNESCO listed" },
  { id: "at_risk", label: "At risk" },
] as const;

function AtlasPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [activeId, setActiveId] = useState(sites[0]!.id);

  const visible = useMemo(
    () =>
      sites.filter((s) =>
        filter === "unesco" ? s.unesco : filter === "at_risk" ? s.condition === "at_risk" : true,
      ),
    [filter],
  );
  const active = sites.find((s) => s.id === activeId) ?? sites[0]!;

  return (
    <AppShell>
      <Page>
        <SectionHeading
          eyebrow="Atlas"
          title="Heritage Map of Cambodia"
          km="ផែនទីបេតិកភណ្ឌ"
        />

        <div className="mb-5 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === f.id
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="surface-card relative overflow-hidden">
            <div className="relative aspect-4/3 w-full bg-secondary/40">
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:40px_40px]" />
              {visible.map((s) => {
                const left =
                  ((s.coordinates.longitude - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 100;
                const top =
                  ((BOUNDS.maxLat - s.coordinates.latitude) / (BOUNDS.maxLat - BOUNDS.minLat)) * 100;
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    aria-label={s.name.en}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "size-4 bg-primary ring-4 ring-primary/25"
                          : s.condition === "at_risk"
                            ? "size-2.5 bg-destructive/80 hover:scale-125"
                            : "size-2.5 bg-primary/60 hover:scale-125"
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wide ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {s.name.en}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="border-t border-border/60 px-4 py-2.5 text-[11px] text-muted-foreground">
              Schematic plot — coordinates are WGS84 decimal degrees, projected linearly across
              Cambodia's bounding box.
            </p>
          </div>

          <div>
            <div className="surface-card p-5">
              <p className="text-eyebrow">{active.province} Province</p>
              <h3 className="mt-1.5 text-2xl">{active.name.en}</h3>
              <p className="font-khmer text-primary/90">{active.name.km}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="stone">{active.style} style</Badge>
                {active.unesco && (
                  <Badge>
                    <Sparkles className="mr-1 size-3" /> UNESCO
                  </Badge>
                )}
                {active.condition === "at_risk" && (
                  <Badge tone="stone">
                    <ShieldAlert className="mr-1 size-3" /> At risk
                  </Badge>
                )}
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    Coordinates
                  </dt>
                  <dd className="mt-1 text-foreground">
                    {active.coordinates.latitude.toFixed(4)}°N,{" "}
                    {active.coordinates.longitude.toFixed(4)}°E
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    Condition
                  </dt>
                  <dd className="mt-1 text-foreground">{CONDITION_LABEL[active.condition]}</dd>
                </div>
              </dl>
              <Link
                to="/entry/$slug"
                params={{ slug: active.entrySlug }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
              >
                <MapPin className="size-3.5" /> Read the entry
              </Link>
            </div>

            <ul className="surface-card mt-4 max-h-[320px] divide-y divide-border/60 overflow-y-auto">
              {visible.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActiveId(s.id)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-secondary/50 ${
                      s.id === activeId ? "text-primary" : "text-foreground"
                    }`}
                  >
                    <MapPin className="size-3.5 shrink-0 opacity-70" strokeWidth={1.5} />
                    <span className="min-w-0 flex-1 truncate">{s.name.en}</span>
                    <span className="text-[11px] text-muted-foreground">{s.province}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Page>
    </AppShell>
  );
}
