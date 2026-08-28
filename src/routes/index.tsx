import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { EntryCard, Page, SectionHeading, Badge } from "@/components/heritage";
import { categories, entries, eras, trails } from "@/data/heritage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khmer Heritage — Digital Encyclopedia of Khmer Civilisation" },
      {
        name: "description",
        content:
          "Explore Khmer temples, sculpture, music, rituals, script and textiles in a source-cited digital archive of Cambodian cultural heritage.",
      },
      { property: "og:title", content: "Khmer Heritage — បេតិកភណ្ឌខ្មែរ" },
      {
        property: "og:description",
        content:
          "A museum-grade encyclopedia of Khmer civilisation: Angkor, Apsara, Pinpeat, Reamker and more.",
      },
    ],
  }),
  component: Discovery,
});

function Discovery() {
  const featured = entries[0]!;
  const [activeEra, setActiveEra] = useState("golden");
  const era = eras.find((e) => e.id === activeEra)!;

  return (
    <AppShell>
      <section className="relative">
        <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <img
            src={featured.coverMedia.url}
            alt={featured.coverMedia.title.en}
            width={1600}
            height={1008}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto w-full max-w-6xl px-5 pb-8 md:px-8 md:pb-12">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Featured Today</Badge>
                <Badge tone="stone">{featured.era}</Badge>
              </div>
              <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
                Angkor Wat: The Cosmic Temple Mountain
              </h1>
              <p className="font-khmer mt-2 text-base text-primary/90">ប្រាសាទអង្គរវត្ត</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {featured.summary.en}
              </p>
              <Link
                to="/entry/$slug"
                params={{ slug: featured.slug }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Explore Journey <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Page>
        <SectionHeading
          eyebrow="Eight Pillars"
          title="Pillars of Heritage"
          km="សសរស្តម្ភនៃបេតិកភណ្ឌ"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/search"
              search={{ q: c.title.en }}
              className="kbach-frame group flex flex-col justify-between gap-4 p-4 transition-colors hover:bg-secondary/50"
            >
              <div>
                <h3 className="text-base leading-snug text-foreground">{c.title.en}</h3>
                <p className="font-khmer mt-1 text-[11px] text-muted-foreground">{c.title.km}</p>
              </div>
              <div>
                <div className="gold-rule mb-2" />
                <p className="text-[11px] text-muted-foreground">{c.count} entries</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Chronology"
            title="The Era Ribbon"
            km="ខ្សែសម័យកាល"
          />
          <div className="scroll-rail -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
            {eras.map((e) => (
              <button
                key={e.id}
                onClick={() => setActiveEra(e.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs transition-colors ${
                  e.id === activeEra
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {e.label.en}
              </button>
            ))}
          </div>
          <div className="surface-card mt-4 p-6">
            <p className="text-eyebrow">{era.range}</p>
            <h3 className="mt-2 text-2xl">{era.label.en}</h3>
            <p className="font-khmer text-sm text-muted-foreground">{era.label.km}</p>
            <div className="gold-rule my-4" />
            <p className="text-sm leading-relaxed text-muted-foreground">{era.note.en}</p>
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Curated"
            title="Exploration Trails"
            km="ដំណើររុករក"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {trails.map((t) => (
              <article key={t.id} className="surface-card overflow-hidden">
                <div className="relative aspect-video">
                  <img src={t.coverUrl} alt={t.title.en} loading="lazy" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80">
                    {t.stops} stops
                  </p>
                  <h3 className="mt-1 text-lg leading-snug">{t.title.en}</h3>
                  <p className="font-khmer text-xs text-muted-foreground">{t.title.km}</p>
                  <p className="mt-2 text-[13px] text-muted-foreground">{t.blurb.en}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Archive" title="Recently Catalogued" km="ចំណារថ្មី" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.slice(1).map((e) => (
              <EntryCard key={e.id} entry={e} />
            ))}
          </div>
        </div>
      </Page>
    </AppShell>
  );
}
