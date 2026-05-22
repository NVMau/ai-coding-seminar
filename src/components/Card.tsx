import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
  accentBorder?: boolean;
  badge?: string;
}

export function Card({
  icon: Icon,
  title,
  description,
  children,
  accentBorder = false,
  badge,
}: CardProps) {
  return (
    <div
      className={`group relative rounded-xl border bg-bg-card/60 backdrop-blur p-5 transition hover:bg-bg-card hover:border-accent/30 ${
        accentBorder ? "border-accent/30" : "border-white/5"
      }`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="shrink-0 w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h4 className="text-white font-semibold">{title}</h4>
            {badge && (
              <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-zinc-400 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

interface TagProps {
  children: ReactNode;
}
export function Tag({ children }: TagProps) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-md border border-white/10 text-zinc-300 bg-white/[0.02]">
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="text-center mb-8">
      {eyebrow && (
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
      {desc && <p className="text-zinc-400 max-w-2xl mx-auto">{desc}</p>}
    </div>
  );
}
