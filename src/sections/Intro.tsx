import {
  Bot,
  Wrench,
  Plug,
  PlayCircle,
  Users,
  TestTube2,
  Target,
} from "lucide-react";
import { Tag } from "../components/Card";
import { AiPlatformLogo } from "../components/AiPlatformLogo";

export function Intro() {
  return (
    <div className="flex flex-col items-center text-center pt-4">
      <div className="mb-6 flex items-center gap-3 flex-wrap justify-center">
        <div className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 text-accent bg-accent/5 inline-flex items-center gap-2">
          <TestTube2 className="w-3 h-3" />
          AI QC SEMINAR DECK
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          presented by
        </span>
        <AiPlatformLogo size="md" />
      </div>

      <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
        <span className="text-white">Applying AI</span>{" "}
        <span className="text-accent text-shadow-glow">for the QC Team</span>
      </h2>

      <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed mb-6">
        A walkthrough of{" "}
        <span className="text-white font-semibold">Agent</span>,{" "}
        <span className="text-white font-semibold">Skill</span>,{" "}
        <span className="text-white font-semibold">MCP</span> — plus a live demo
        using Skill + Playwright MCP for{" "}
        <span className="text-accent">manual testing</span>.
      </p>

      <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
        <Tag>Agent</Tag>
        <Tag>Skill</Tag>
        <Tag>MCP</Tag>
        <Tag>Playwright</Tag>
        <Tag>Dev Tools</Tag>
      </div>

      <div className="font-mono text-xs text-zinc-500 mb-8 inline-flex items-center gap-2">
        <span className="cursor-blink">~/seminar/start</span>
      </div>

      {/* Quick info row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-3xl">
        <InfoBlock icon={Users} label="Audience" value="QC Team" />
        <InfoBlock icon={Target} label="Focus" value="Manual testing" />
        <InfoBlock icon={PlayCircle} label="Live demo" value="Playwright MCP" />
      </div>

      {/* Section preview row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mt-10">
        <PreviewCard icon={Bot} title="Agent" subtitle="LLM + Tool + Context" />
        <PreviewCard icon={Wrench} title="Skill" subtitle="Playbook for the agent" />
        <PreviewCard icon={Plug} title="MCP" subtitle="USB-C for AI agents" />
        <PreviewCard
          icon={PlayCircle}
          title="Demo Flow"
          subtitle="Manual testing with AI"
        />
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="border border-white/5 bg-bg-card/60 rounded-lg px-4 py-3 flex items-center gap-3">
      <Icon className="w-4 h-4 text-accent shrink-0" />
      <div className="text-left">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {label}
        </div>
        <div className="text-sm text-white font-semibold">{value}</div>
      </div>
    </div>
  );
}

function PreviewCard({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Users;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border border-white/5 bg-bg-card/60 rounded-lg p-4 text-left hover:border-accent/30 transition">
      <Icon className="w-5 h-5 text-accent mb-2" />
      <div className="text-white font-semibold text-sm">{title}</div>
      <div className="text-xs text-zinc-500">{subtitle}</div>
    </div>
  );
}
