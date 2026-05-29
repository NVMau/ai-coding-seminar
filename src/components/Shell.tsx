import { useEffect, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "../slides";
import { AiPlatformLogo } from "./AiPlatformLogo";

interface ShellProps {
  current: number;
  onChange: (index: number) => void;
  children: ReactNode;
}

export function Shell({ current, onChange, children }: ShellProps) {
  const slide = SLIDES[current];
  const total = SLIDES.length;
  const progress = ((current + 1) / total) * 100;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        if (current < total - 1) onChange(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (current > 0) onChange(current - 1);
      } else if (/^[1-8]$/.test(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (idx < total) onChange(idx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, onChange, total]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <nav className="border-b border-white/5 bg-bg-panel/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-3 leading-tight">
            <AiPlatformLogo size="sm" />
            <div className="flex flex-col font-mono">
              <span className="text-accent text-[11px] font-bold tracking-widest">
                AI AGENT SEMINAR
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                slide {String(current + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-1 flex-wrap">
            {SLIDES.map((s, i) => {
              const Icon = s.icon;
              const active = i === current;
              return (
                <button
                  key={s.id}
                  onClick={() => onChange(i)}
                  className={`group relative font-mono text-[11px] uppercase tracking-wider px-3 py-2 rounded-md flex items-center gap-2 transition-all ${
                    active
                      ? "bg-accent/10 text-accent shadow-glow"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.label}</span>
                  {active && (
                    <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 h-[2px] w-8 bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 relative">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-28">
          {/* Section header */}
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <div className="font-mono text-[11px] text-accent tracking-widest mb-1">
                {slide.section}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
                {slide.title}
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2 min-w-[180px]">
              <div className="font-mono text-[10px] tracking-widest text-zinc-500">
                NEXT{" "}
                <span className="text-zinc-300">
                  {slide.nextLabel ?? "—"}
                </span>
              </div>
              <div className="w-40 h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-500 to-accent-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="divider-gradient mb-10" />

          <div key={slide.id} className="animate-slide-in">
            {children}
          </div>
        </div>

        {/* Bottom nav arrows */}
        <div className="fixed bottom-6 right-6 flex items-center gap-2 z-30">
          <button
            onClick={() => current > 0 && onChange(current - 1)}
            disabled={current === 0}
            className="w-10 h-10 rounded-md border border-white/10 bg-bg-panel/80 backdrop-blur flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/40 disabled:opacity-30 disabled:hover:text-zinc-400 disabled:hover:border-white/10 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => current < total - 1 && onChange(current + 1)}
            disabled={current === total - 1}
            className="w-10 h-10 rounded-md border border-accent/40 bg-accent/10 backdrop-blur flex items-center justify-center text-accent hover:bg-accent/20 disabled:opacity-30 disabled:hover:bg-accent/10 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-bg-panel/60">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>
              status:{" "}
              <span className="text-zinc-300">presenting</span>{" "}
              <span className="text-zinc-700">//</span>{" "}
              <span className="text-accent">live_feed_active</span>
            </span>
          </div>
          <div>
            ai_agent_seminar_2025{" "}
            <span className="text-zinc-700">//</span> AGENT_DEEP_DIVE
          </div>
        </div>
      </footer>
    </div>
  );
}
