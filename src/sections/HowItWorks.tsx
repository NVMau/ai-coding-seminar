import {
  RotateCw,
  ChevronRight,
  Brain,
  Eye,
  Wrench,
  Sparkles,
  FileText,
  Terminal,
  Globe,
  Database,
  Code2,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function HowItWorks() {
  return (
    <div>
      <SectionTitle
        eyebrow="// vòng lặp agentic"
        title="Reason → Act → Observe → Repeat"
        desc="Agent lặp qua vòng suy luận – hành động – quan sát cho đến khi hoàn thành mục tiêu."
      />

      {/* Agentic Loop */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5" />
          The Agentic Loop
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
          <LoopStep n="01" label="Suy luận" desc="Phân tích, lên kế hoạch" icon={Brain} />
          <Arrow />
          <LoopStep n="02" label="Hành động" desc="Gọi tool, thực thi" icon={Wrench} />
          <Arrow />
          <LoopStep n="03" label="Quan sát" desc="Đọc kết quả" icon={Eye} />
          <Arrow />
          <LoopStep n="04" label="Lặp lại" desc="Đến khi xong" icon={RotateCw} />
        </div>

        <svg viewBox="0 0 800 40" className="w-full h-8 mt-2" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 760 5 Q 760 35 400 35 Q 40 35 40 5" stroke="rgb(255 106 0 / 0.3)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
          <path d="M 46 10 L 40 5 L 46 0" stroke="rgb(255 106 0 / 0.6)" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="text-center font-mono text-[9px] text-accent uppercase tracking-widest -mt-1">
          quay lại với thông tin mới
        </div>
      </div>

      {/* ReAct Example */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Ví dụ ReAct
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Agent sửa lỗi port
          </h3>

          <div className="rounded-lg border border-white/5 bg-bg-base/60 p-4 font-mono text-sm space-y-2">
            <CodeLine type="thought" text='Cần tìm file config' />
            <CodeLine type="action" text='search("config", "*.json")' />
            <CodeLine type="observation" text='→ /app/config.json' />
            <CodeLine type="thought" text='Đọc nội dung file' />
            <CodeLine type="action" text='read("/app/config.json")' />
            <CodeLine type="observation" text='→ {"port": 3000}' />
            <CodeLine type="thought" text='Đổi port sang 8080' />
            <CodeLine type="action" text='edit(port: 8080)' />
            <CodeLine type="result" text='Đã sửa xong!' />
          </div>
        </div>

        {/* Tool palette */}
        <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5" />
            Các tool phổ biến
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Mỗi tool = 1 hành động
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <ToolBlock icon={FileText} name="Đọc file" sample='read("README.md")' />
            <ToolBlock icon={Code2} name="Sửa code" sample='edit("app.ts")' />
            <ToolBlock icon={Terminal} name="Chạy lệnh" sample="pnpm test" />
            <ToolBlock icon={Globe} name="Duyệt web" sample="navigate(url)" />
            <ToolBlock icon={Database} name="Query DB" sample="SELECT *" />
            <ToolBlock icon={MessageSquare} name="Hỏi user" sample="confirm?" />
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-400">
            <span className="text-accent">$</span> LLM chỉ tạo text.{" "}
            <span className="text-white">Tool</span> = cách agent chạm vào thực tế.
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helpers */

function LoopStep({ n, label, desc, icon: Icon }: {
  n: string; label: string; desc: string; icon: LucideIcon;
}) {
  return (
    <div className="flex-1 min-w-[140px] rounded-lg border border-white/5 bg-bg-base/50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 text-accent" />
        </div>
        <div className="font-mono text-[10px] text-accent">{n}</div>
      </div>
      <div className="text-white font-semibold mb-1">{label}</div>
      <div className="text-xs text-zinc-500">{desc}</div>
    </div>
  );
}

function Arrow() {
  return <ChevronRight className="w-5 h-5 text-zinc-700 shrink-0" />;
}

function CodeLine({ type, text }: { type: string; text: string }) {
  const colorMap: Record<string, string> = {
    thought: "text-blue-400",
    action: "text-accent",
    observation: "text-emerald-400",
    result: "text-green-400",
  };
  const prefixMap: Record<string, string> = {
    thought: "💭",
    action: "⚡",
    observation: "👁",
    result: "✓",
  };
  return (
    <div className={`${colorMap[type] ?? "text-zinc-400"} flex items-start gap-2`}>
      <span className="shrink-0 w-4 text-center">{prefixMap[type] ?? ">"}</span>
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}

function ToolBlock({ icon: Icon, name, sample }: {
  icon: LucideIcon; name: string; sample: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-3 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-3.5 h-3.5 text-accent" />
        <span className="text-white text-xs font-semibold">{name}</span>
      </div>
      <code className="font-mono text-[10px] text-zinc-500 block truncate">{sample}</code>
    </div>
  );
}
