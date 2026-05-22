import {
  Brain,
  MemoryStick,
  Wrench,
  RotateCw,
  ChevronRight,
} from "lucide-react";
import { Card, SectionTitle } from "../components/Card";

export function Agent() {
  return (
    <div>
      <SectionTitle
        eyebrow="// 03 phút · nói lướt"
        title="Agent = bộ não + tay chân + trí nhớ ngắn hạn"
        desc="Hiểu sơ bộ Agent hoạt động ra sao, đủ để theo các phần sau (Skill, MCP)."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <Card
          icon={Brain}
          title="Agent là gì?"
          description="LLM + khả năng dùng tool + vòng lặp reasoning. Khác chatbot thường: tự quyết bước tiếp, gọi tool, quan sát kết quả, rồi quyết bước kế."
          badge="LLM"
        />
        <Card
          icon={MemoryStick}
          title="Context Window"
          description="Bộ nhớ ngắn hạn — toàn bộ chat + tool output nằm trong cửa sổ này. Đầy thì bị 'quên' hoặc bị summarize. Chia task nhỏ, mở session mới khi cần."
          badge="MEMORY"
        />
        <Card
          icon={Wrench}
          title="Tool"
          description="Cánh tay của agent: read file, run shell, query DB, browser… LLM không tự làm được gì — mọi action ra ngoài đều qua tool."
          badge="ACTION"
        />
      </div>

      {/* Loop diagram */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5" />
          Vòng lặp Agentic
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <LoopStep n="01" label="Reason" desc="Suy nghĩ bước tiếp theo" />
          <Arrow />
          <LoopStep n="02" label="Call tool" desc="Gọi action ra ngoài" />
          <Arrow />
          <LoopStep n="03" label="Observe" desc="Quan sát kết quả" />
          <Arrow />
          <LoopStep n="04" label="Repeat" desc="Đến khi đạt mục tiêu" />
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 font-mono text-xs text-zinc-400">
          <span className="text-accent">$</span> "Agent = bộ não{" "}
          <span className="text-white">(LLM)</span> + tay chân{" "}
          <span className="text-white">(tools)</span> + trí nhớ ngắn hạn{" "}
          <span className="text-white">(context window)</span>"
        </div>
      </div>
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
