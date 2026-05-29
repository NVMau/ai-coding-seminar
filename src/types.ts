import type { LucideIcon } from "lucide-react";

export type SlideId =
  | "intro"
  | "what-is-agent"
  | "how-agents-think"
  | "architecture"
  | "tools"
  | "real-world"
  | "best-practices"
  | "outro";

export interface SlideMeta {
  id: SlideId;
  index: number;
  label: string;
  icon: LucideIcon;
  section: string;
  title: string;
  nextLabel?: string;
}
