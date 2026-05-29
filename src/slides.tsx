import {
  Bot,
  Brain,
} from "lucide-react";
import type { SlideMeta } from "./types";

export const SLIDES: SlideMeta[] = [
  {
    id: "what-is-agent",
    index: 1,
    label: "Agent là gì?",
    icon: Bot,
    section: "PHẦN 01",
    title: "Agent là gì?",
    nextLabel: "Cách hoạt động",
  },
  {
    id: "how-it-works",
    index: 2,
    label: "Cách hoạt động",
    icon: Brain,
    section: "PHẦN 02",
    title: "Agent hoạt động như thế nào?",
    nextLabel: "Finish",
  },
];
