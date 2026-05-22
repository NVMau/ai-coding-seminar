import type { LucideIcon } from "lucide-react";

export type SlideId =
  | "intro"
  | "agent"
  | "skill"
  | "mcp"
  | "demo"
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
