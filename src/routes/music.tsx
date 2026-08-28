import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Play, Square, Waves } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge, Page, SectionHeading } from "@/components/heritage";
import { instruments } from "@/data/heritage";
import type { Instrument } from "@/data/types";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Sound Archive — Khmer Heritage" },
      {
        name: "description",
        content:
          "Hear the instruments of the Pinpeat, Mohori and Ayai ensembles — Roneat Ek, Chapei, Tro Ou, Sampho, Khloy and Kong Vong — with synthesised tone demonstrations.",
      },
      { property: "og:title", content: "Sound Archive — Khmer Heritage" },
      {
        property: "og:description",
        content:
          "Explore traditional Khmer instruments and ensembles through an interactive sound archive.",
      },
    ],
  }),
  component: SoundPage,
});

const ENSEMBLES = ["All", "Pinpeat", "Mohori", "Ayai", "Kar"] as const;

function SoundPage() {
  const [ensemble, setEnsemble] = useState<(typeof ENSEMBLES)[number]>("All");
  const [playing, setPlaying] = useState<string | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const list = instruments.filter((i) => ensemble === "All" || i.ensemble === ensemble);

  function stop() {
    stopRef.current?.();
    stopRef.current = null;
    setPlaying(null);
  }

  function play(inst: Instrument) {
    stop();
    if (playing === inst.id) return;
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = ctxRef.current ?? new Ctor();
    ctxRef.current = ctx;
    void ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);
    master.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.05);

    const nodes: OscillatorNode[] = [];
    inst.toneHz.forEach((hz, i) => {
      const t = ctx.currentTime + i * 0.42;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = inst.family.includes("flute") || inst.family.includes("Bamboo duct") ? "sine" : "triangle";
      osc.frequency.value = hz;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.6, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
      osc.connect(gain).connect(master);
      osc.start(t);
      osc.stop(t + 0.6);
      nodes.push(osc);
    });

    setPlaying(inst.id);
    const timer = setTimeout(() => setPlaying(null), inst.toneHz.length * 420 + 400);
    stopRef.current = () => {
      clearTimeout(timer);
      nodes.forEach((n) => {
        try {
          n.stop();
        } catch {
          /* already stopped */
        }
      });
      master.disconnect();
    };
  }

  return (
    <AppShell>
      <Page>
        <SectionHeading
          eyebrow="Sound Archive"
          title="Instruments & Ensembles"
          km="ឧបករណ៍ភ្លេងបុរាណ"
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {ENSEMBLES.map((e) => (
            <button
              key={e}
              onClick={() => setEnsemble(e)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                ensemble === e
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((inst) => (
            <article key={inst.id} className="surface-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl">{inst.name.en}</h3>
                  <p className="font-khmer text-primary/90">{inst.name.km}</p>
                </div>
                <button
                  onClick={() => (playing === inst.id ? stop() : play(inst))}
                  aria-label={playing === inst.id ? `Stop ${inst.name.en}` : `Play ${inst.name.en}`}
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  {playing === inst.id ? (
                    <Square className="size-3.5" fill="currentColor" />
                  ) : (
                    <Play className="size-4" fill="currentColor" />
                  )}
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{inst.ensemble}</Badge>
                <Badge tone="stone">{inst.family}</Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{inst.origin.en}</p>
              <p className="font-khmer mt-2 text-sm leading-loose text-muted-foreground">
                {inst.origin.km}
              </p>
              <div className="mt-4 flex items-end gap-1.5">
                {inst.toneHz.map((hz, i) => (
                  <span
                    key={i}
                    className={`w-4 rounded-sm ${playing === inst.id ? "bg-primary" : "bg-primary/30"}`}
                    style={{ height: `${8 + (hz % 240) / 6}px` }}
                  />
                ))}
                <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {inst.toneHz.length} tones
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-[11px] text-muted-foreground">
          <Waves className="size-3.5" strokeWidth={1.5} />
          Tones are synthesised in-house for reference pitch only and are not recordings of
          performances. In-house Original.
        </p>
      </Page>
    </AppShell>
  );
}
