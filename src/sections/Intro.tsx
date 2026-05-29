import {
  Bot,
  Brain,
  Layers,
  Wrench,
  Globe,
  Shield,
  Users,
  Target,
  Cpu,
} from "lucide-react";
import { Tag } from "../components/Card";
import { AiPlatformLogo } from "../components/AiPlatformLogo";

export function Intro() {
  return (
    <div className="flex flex-col items-center text-center pt-4">
      <div className="mb-6 flex items-center gap-3 flex-wrap justify-center">
        <div className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 text-accent bg-accent/5 inline-flex items-center gap-2">
          <Cpu className="w-3 h-3" />
          AI AGENT DEEP DIVE
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          presented by
        </span>
        <AiPlatformLogo size="md" />
      </div>

      <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
        <span className="text-white">Hiểu về</span>{" "}
        <span className="text-accent text-shadow-glow">AI Agent</span>
      </h2>

      <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed mb-6">
        Từ khái niệm cơ bản đến kiến trúc nâng cao — hiểu cách{" "}
        <span className="text-white font-semibold">Agent</span> hoạt động,{" "}
        <span className="text-white font-semibold">suy nghĩ</span>, sử dụng{" "}
        <span className="text-white font-semibold">công cụ</span>, và{" "}
        <span className="text-accent">ứng dụng trong thực tế</span>.
      </p>

      <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
        <Tag>Agent</Tag>
        <Tag>LLM</Tag>
        <Tag>ReAct</Tag>
        <Tag>Tools</Tag>
        <Tag>Architecture</Tag>
        <Tag>Patterns</Tag>
      </div>

      <div className="font-mono text-xs text-zinc-500 mb-8 inline-flex items-center gap-2">
        <span className="cursor-blink">~/agent-seminar/start</span>
      </div>

      {/* Quick info row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-3xl">
        <InfoBlock icon={Users} label="Đối tượng" value="Dev & AI Engineers" />
        <InfoBlock icon={Target} label="Chủ đề" value="AI Agent Deep Dive" />
        <InfoBlock icon={Bot} label="Focus" value="Agent Architecture" />
      </div>

      {/* Section preview row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-5xl mt-10">
        <PreviewCard icon={Bot} title="Agent là gì?" subtitle="Định nghĩa cốt lõi" />
        <PreviewCard icon={Brain} title="Suy nghĩ" subtitle="ReAct & Reasoning" />
        <PreviewCard icon={Layers} title="Kiến trúc" subtitle="Patterns & Design" />
        <PreviewCard icon={Wrench} title="Công cụ" subtitle="Tools & Actions" />
        <PreviewCard icon={Globe} title="Thực tế" subtitle="Ví dụ thực tế" />
        <PreviewCard icon={Shield} title="Best Practices" subtitle="Làm việc hiệu quả" />
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
