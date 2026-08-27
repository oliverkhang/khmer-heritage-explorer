import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LICENSE_LABEL, type EntryDetail, type MediaAsset } from "@/data/types";

export function SectionHeading({
  eyebrow,
  title,
  km,
  action,
}: {
  eyebrow: string;
  title: string;
  km?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <p className="text-eyebrow">{eyebrow}</p>
        <h2 className="mt-1.5 text-2xl md:text-3xl font-medium text-foreground">{title}</h2>
        {km && <p className="font-khmer mt-1 text-sm text-muted-foreground">{km}</p>}
      </div>
      {action}
    </div>
  );
}

export function Badge({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "stone" | "crimson";
}) {
  const tones = {
    gold: "border-primary/40 text-primary",
    stone: "border-border text-muted-foreground",
    crimson: "border-crimson/60 text-foreground/80 bg-crimson/20",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function LicenseBadge({ asset }: { asset: MediaAsset }) {
  return (
    <span className="rounded-sm bg-background/80 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-primary backdrop-blur">
      {LICENSE_LABEL[asset.license]}
    </span>
  );
}

export function EntryCard({ entry, wide = false }: { entry: EntryDetail; wide?: boolean }) {
  return (
    <Link
      to="/entry/$slug"
      params={{ slug: entry.slug }}
      className={`surface-card group block overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${
        wide ? "w-[264px] shrink-0" : ""
      }`}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={entry.coverMedia.url}
          alt={entry.coverMedia.title.en}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent" />
        <div className="absolute bottom-2 left-2">
          <LicenseBadge asset={entry.coverMedia} />
        </div>
      </div>
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80">{entry.era}</p>
        <h3 className="mt-1.5 text-lg leading-snug text-foreground">{entry.title.en}</h3>
        <p className="font-khmer text-xs text-muted-foreground">{entry.title.km}</p>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {entry.summary.en}
        </p>
      </div>
    </Link>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8 md:py-12">{children}</div>;
}
