import {
  Brain,
  MemoryStick,
  Wrench,
  RotateCw,
  ChevronRight,
  User,
  MessageSquare,
  Bot,
  Terminal,
  FileText,
  Globe,
  Database,
  Code2,
  Eye,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, SectionTitle } from "../components/Card";

export function Agent() {
  return (
    <div>
      <SectionTitle
        eyebrow="// foundation — quick overview"
        title="Agent = brain + hands + short-term memory"
        desc="A high-level view of how an Agent works — just enough to follow the next sections (Skill, MCP)."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <Card
          icon={Brain}
          title="What is an Agent?"
          description="LLM + tool use + a reasoning loop. Unlike a plain chatbot, it decides the next step itself, calls a tool, observes the result, then decides again."
          badge="LLM"
        />
        <Card
          icon={MemoryStick}
          title="Context Window"
          description="Short-term memory — all chat + tool output lives in this window. When it fills up, things get summarized or dropped. Split tasks small, open fresh sessions when you can."
          badge="MEMORY"
        />
        <Card
          icon={Wrench}
          title="Tool"
          description="The agent's hands: read file, run shell, query DB, browser… The LLM by itself can only generate text — tools are how it touches the real world."
          badge="ACTION"
        />
      </div>

      {/* ============================================
          Visual 1: Chatbot vs Agent
          ============================================ */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Eye className="w-3.5 h-3.5" />
          Side-by-side
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Plain chatbot vs. Agent
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* CHATBOT panel */}
          <div className="rounded-lg border border-white/5 bg-bg-base/40 p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-zinc-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                Chatbot
              </span>
              <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-zinc-500 border border-white/5 px-1.5 py-0.5 rounded">
                1 turn
              </span>
            </div>

            {/* Flow: User -> LLM -> User */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <NodePill icon={User} label="User" />
              <FlowArrow label="message" />
              <NodePill icon={Bot} label="LLM" subtle />
              <FlowArrow label="text" reverse />
              <NodePill icon={User} label="User" />
            </div>

            <div className="text-xs text-zinc-400 leading-relaxed">
              Ask → answer. The LLM returns text. No tool calls, no loop.
              Anything beyond text, the user has to do themselves.
            </div>
          </div>

          {/* AGENT panel */}
          <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-5 relative">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                Agent
              </span>
              <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/30 px-1.5 py-0.5 rounded">
                loops N turns
              </span>
            </div>

            {/* Flow: User -> LLM -> Tool (loop) -> Final */}
            <div className="relative mb-4">
              <div className="flex items-center justify-between gap-2">
                <NodePill icon={User} label="User" />
                <FlowArrow label="goal" />
                <div className="relative">
                  <NodePill icon={Bot} label="LLM" accent />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-bg-base text-[10px] font-bold font-mono flex items-center justify-center border-2 border-bg-card">
                    ↻
                  </span>
                </div>
                <FlowArrow label="call" accent />
                <NodePill icon={Wrench} label="Tool" />
              </div>

              {/* Loop arrow */}
              <svg
                viewBox="0 0 200 30"
                className="absolute -bottom-3 left-[28%] right-[18%] w-[54%] h-6 pointer-events-none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 195 5 Q 195 25 100 25 Q 5 25 5 5"
                  stroke="rgb(255 106 0 / 0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                />
                <path
                  d="M 10 9 L 5 5 L 10 1"
                  stroke="rgb(255 106 0 / 0.7)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-accent uppercase tracking-widest">
                observe → reason
              </div>
            </div>

            <div className="text-xs text-zinc-300 leading-relaxed mt-6">
              Receive a goal → call a tool → observe → decide the next step →
              loop until done. The user just hands off the task; the agent drives.
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          Visual 2: Context Window
          ============================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 rounded-xl border border-white/5 bg-bg-card/60 p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
            <MemoryStick className="w-3.5 h-3.5" />
            Context Window — short-term memory
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Everything the agent "knows" this session lives here
          </h3>

          {/* Window bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 mb-1.5">
              <span>0</span>
              <span className="text-zinc-300">
                <span className="text-accent">12.8K</span> / 32K tokens
              </span>
              <span>max</span>
            </div>
            <div className="h-7 w-full rounded-md overflow-hidden border border-white/10 bg-bg-base/60 flex">
              <ContextSeg w="10%" color="bg-zinc-500/40" label="system" />
              <ContextSeg w="14%" color="bg-blue-500/40" label="user msg" />
              <ContextSeg w="18%" color="bg-accent/40" label="LLM reasoning" />
              <ContextSeg w="22%" color="bg-emerald-500/30" label="tool result" />
              <ContextSeg w="16%" color="bg-accent/30" label="LLM reasoning" />
              <ContextSeg w="20%" color="" label="" free />
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 mt-1">
              <span>conversation start</span>
              <span>now</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 mt-4 text-[11px]">
            <LegendDot color="bg-zinc-500/60" label="System prompt" />
            <LegendDot color="bg-blue-500/60" label="User message" />
            <LegendDot color="bg-accent/60" label="LLM reasoning" />
            <LegendDot color="bg-emerald-500/50" label="Tool result" />
            <LegendDot color="bg-white/10 border border-white/10" label="Free space" />
          </div>
        </div>

        {/* Side notes */}
        <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              When the context fills up
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <FactDot>
              Old messages get <em className="text-white">summarized</em> or
              dropped from context.
            </FactDot>
            <FactDot>
              The agent "forgets" early details → decisions start to drift.
            </FactDot>
            <FactDot>
              Longer context → more tokens, slower responses.
            </FactDot>
          </ul>
          <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            tip: split tasks small — start a new session when old state isn't needed.
          </div>
        </div>
      </div>

      {/* ============================================
          Visual 3: Tool palette
          ============================================ */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5" />
          Tool — what can the Agent actually use?
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Each tool = one "verb" the agent can perform
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <ToolBlock icon={FileText} name="Read file" sample='read("README.md")' />
          <ToolBlock icon={Terminal} name="Run shell" sample="pnpm test" />
          <ToolBlock icon={Globe} name="Open browser" sample="navigate(url)" />
          <ToolBlock icon={Database} name="Query DB" sample="SELECT *" />
          <ToolBlock icon={Code2} name="Edit code" sample="patch(diff)" />
          <ToolBlock icon={MessageSquare} name="Ask user" sample="confirm?" />
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-400">
          <span className="text-accent">$</span> By itself an LLM only generates text.{" "}
          <span className="text-white">Tools</span> are the only way it touches the
          real system.
        </div>
      </div>

      {/* ============================================
          Loop diagram (kept)
          ============================================ */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5" />
          The Agentic Loop
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <LoopStep n="01" label="Reason" desc="Think through the next step" />
          <Arrow />
          <LoopStep n="02" label="Call tool" desc="Take action in the real world" />
          <Arrow />
          <LoopStep n="03" label="Observe" desc="Read the result" />
          <Arrow />
          <LoopStep n="04" label="Repeat" desc="Until the goal is met" />
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 font-mono text-xs text-zinc-400">
          <span className="text-accent">$</span> "Agent = brain{" "}
          <span className="text-white">(LLM)</span> + hands{" "}
          <span className="text-white">(tools)</span> + short-term memory{" "}
          <span className="text-white">(context window)</span>"
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------ */

function NodePill({
  icon: Icon,
  label,
  accent = false,
  subtle = false,
}: {
  icon: LucideIcon;
  label: string;
  accent?: boolean;
  subtle?: boolean;
}) {
  return (
    <div
      className={`shrink-0 flex flex-col items-center gap-1 px-2.5 py-2 rounded-lg border ${
        accent
          ? "border-accent/40 bg-accent/10"
          : subtle
          ? "border-white/10 bg-bg-base/60"
          : "border-white/10 bg-bg-base/40"
      }`}
    >
      <Icon
        className={`w-4 h-4 ${accent ? "text-accent" : "text-zinc-300"}`}
      />
      <span
        className={`font-mono text-[9px] uppercase tracking-widest ${
          accent ? "text-accent" : "text-zinc-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function FlowArrow({
  label,
  reverse = false,
  accent = false,
}: {
  label?: string;
  reverse?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex-1 flex flex-col items-center min-w-[40px]">
      {label && (
        <span
          className={`font-mono text-[9px] uppercase tracking-widest ${
            accent ? "text-accent" : "text-zinc-500"
          }`}
        >
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 60 8"
        className="w-full h-3"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {reverse ? (
          <>
            <line
              x1="55"
              y1="4"
              x2="5"
              y2="4"
              stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"}
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            <path
              d="M 10 1 L 5 4 L 10 7"
              stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"}
              strokeWidth="1"
              fill="none"
            />
          </>
        ) : (
          <>
            <line
              x1="5"
              y1="4"
              x2="55"
              y2="4"
              stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"}
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            <path
              d="M 50 1 L 55 4 L 50 7"
              stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"}
              strokeWidth="1"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
}

function ContextSeg({
  w,
  color,
  label,
  free = false,
}: {
  w: string;
  color: string;
  label: string;
  free?: boolean;
}) {
  return (
    <div
      style={{ width: w }}
      className={`relative h-full border-r border-bg-base/80 last:border-r-0 ${
        free ? "bg-transparent" : color
      }`}
      title={label}
    >
      {free && (
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      )}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-zinc-400">
      <span className={`w-2.5 h-2.5 rounded-sm ${color}`} />
      {label}
    </span>
  );
}

function FactDot({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function ToolBlock({
  icon: Icon,
  name,
  sample,
}: {
  icon: LucideIcon;
  name: string;
  sample: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-3 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-3.5 h-3.5 text-accent" />
        <span className="text-white text-xs font-semibold">{name}</span>
      </div>
      <code className="font-mono text-[10px] text-zinc-500 block truncate">
        {sample}
      </code>
    </div>
  );
}

function LoopStep({
  n,
  label,
  desc,
}: {
  n: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex-1 min-w-[140px] rounded-lg border border-white/5 bg-bg-base/50 p-4">
      <div className="font-mono text-[10px] text-accent mb-2">{n}</div>
      <div className="text-white font-semibold mb-1">{label}</div>
      <div className="text-xs text-zinc-500">{desc}</div>
    </div>
  );
}

function Arrow() {
  return <ChevronRight className="w-5 h-5 text-zinc-700 shrink-0" />;
}
