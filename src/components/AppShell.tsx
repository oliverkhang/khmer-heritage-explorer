import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Compass, Landmark, Map, Music4, Search } from "lucide-react";

const NAV = [
  { to: "/", label: "Discover", km: "រុករក", icon: Compass },
  { to: "/map", label: "Map", km: "ផែនទី", icon: Map },
  { to: "/music", label: "Sound", km: "សំឡេង", icon: Music4 },
  { to: "/search", label: "Search", km: "ស្វែងរក", icon: Search },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-8 border-r border-border/70 px-6 py-8">
        <Brand />
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "!bg-secondary !text-primary" }}
            >
              <item.icon className="size-4" strokeWidth={1.5} />
              <span>{item.label}</span>
              <span className="font-khmer ml-auto text-[11px] opacity-50">{item.km}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-[11px] leading-relaxed text-muted-foreground">
          A curated, source-cited archive of Khmer civilisation. Media licensed
          CC BY-SA 4.0 unless noted.
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-5 py-3.5">
            <Brand compact />
            <Link to="/search" search={{ q: undefined }} aria-label="Search the archive" className="rounded-full border border-border p-2 text-muted-foreground">
              <Search className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </header>

        <main className="pb-28 lg:pb-16">{children}</main>

        <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex flex-col items-center gap-1 py-3 text-[10px] tracking-wide text-muted-foreground"
                activeProps={{ className: "!text-primary" }}
              >
                <item.icon className="size-5" strokeWidth={1.5} />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-md border border-primary/40 text-primary">
        <Landmark className="size-4" strokeWidth={1.4} />
      </span>
      <span className="leading-tight">
        <span className="block font-[family-name:var(--font-title)] text-[13px] tracking-[0.2em] text-foreground">
          KHMER HERITAGE
        </span>
        {!compact && (
          <span className="font-khmer block text-[11px] text-muted-foreground">បេតិកភណ្ឌខ្មែរ</span>
        )}
      </span>
    </Link>
  );
}
