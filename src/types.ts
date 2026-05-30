import type { LucideIcon } from "lucide-react";

export type SlideId =
  | "what-is-agent"
  | "how-it-works";

export interface SlideMeta {
  id: SlideId;
  index: number;
  label: string;
  icon: LucideIcon;
  section: string;
  title: string;
  nextLabel?: string;
}
