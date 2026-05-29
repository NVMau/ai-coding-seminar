import {
  Layers,
  Bot,
  Brain,
  Database,
  MemoryStick,
  Wrench,
  Users,
  Network,
  ArrowDown,
  Shield,
  GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function Architecture() {
  return (
    <div>
      <SectionTitle
        eyebrow="// kiến trúc — thiết kế hệ thống"
        title="Kiến trúc bên trong Agent"
        desc="Từ single agent đơn giản đến multi-agent phức tạp — hiểu cách các thành phần kết nối với nhau."
      />

      {/* Single Agent Architecture */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Bot className="w-3.5 h-3.5" />
          Kiến trúc Single Agent
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Cấu trúc một Agent hoàn chỉnh
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
          {/* User Input */}
          <ArchBlock
            icon={Users}
            title="Input"
            desc="Prompt / Goal từ user"
            color="zinc"
          />
          <div className="flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-zinc-700 md:rotate-[-90deg]" />
          </div>

          {/* Core Agent */}
          <div className="md:col-span-1 rounded-lg border border-accent/30 bg-accent/[0.06] p-4">
            <div className="text-center">
              <Brain className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-white font-semibold text-sm mb-1">Agent Core</div>
              <div className="text-[10px] text-zinc-400">LLM + Reasoning</div>
              <div className="mt-2 space-y-1">
                <MiniBlock label="Planner" />
                <MiniBlock label="Executor" />
                <MiniBlock label="Evaluator" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-zinc-700 md:rotate-[-90deg]" />
          </div>

          {/* Output */}
          <ArchBlock
            icon={Shield}
            title="Output"
            desc="Kết quả / Action"
            color="accent"
          />
        </div>

        {/* Supporting layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <SupportBlock
            icon={MemoryStick}
            title="Memory System"
            items={["Short-term (context)", "Long-term (vector DB)", "Episodic (lịch sử)"]}
          />
          <SupportBlock
            icon={Wrench}
            title="Tool Registry"
            items={["File operations", "Shell commands", "API calls", "Browser control"]}
          />
          <SupportBlock
            icon={Database}
            title="Knowledge Base"
            items={["RAG documents", "Embeddings", "Domain knowledge"]}
          />
        </div>
      </div>

      {/* Agent Patterns */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Layers className="w-3.5 h-3.5" />
          Các mô hình Agent phổ biến
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          3 mô hình kiến trúc chính
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <PatternCard
            icon={Bot}
            title="Single Agent"
            desc="Một agent duy nhất xử lý mọi thứ. Đơn giản, dễ debug, phù hợp task nhỏ."
            pros={["Đơn giản", "Dễ debug", "Nhanh setup"]}
            cons={["Giới hạn phạm vi", "Context đầy nhanh"]}
            visual={
              <div className="flex justify-center py-2">
                <div className="w-12 h-12 rounded-full border-2 border-accent/40 bg-accent/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
              </div>
            }
          />

          <PatternCard
            icon={Network}
            title="Multi-Agent"
            desc="Nhiều agent chuyên biệt phối hợp. Mỗi agent một chuyên môn riêng."
            pros={["Chuyên biệt hóa", "Scalable", "Song song"]}
            cons={["Phức tạp", "Cần orchestration"]}
            visual={
              <div className="flex justify-center py-2 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-accent" />
                  </div>
                ))}
              </div>
            }
          />

          <PatternCard
            icon={GitBranch}
            title="Hierarchical"
            desc="Agent chính điều phối các agent con. Giống cấu trúc quản lý trong tổ chức."
            pros={["Kiểm soát tốt", "Phân chia rõ ràng"]}
            cons={["Bottleneck ở boss", "Overhead giao tiếp"]}
            visual={
              <div className="flex flex-col items-center py-2">
                <div className="w-8 h-8 rounded-full border-2 border-accent/40 bg-accent/10 flex items-center justify-center mb-1">
                  <Bot className="w-3.5 h-3.5 text-accent" />
                </div>
                <div className="w-px h-3 bg-accent/30" />
                <div className="flex gap-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center">
                      <Bot className="w-2.5 h-2.5 text-accent/60" />
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Memory types */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <MemoryStick className="w-3.5 h-3.5" />
          Hệ thống bộ nhớ
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          3 loại bộ nhớ của Agent
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MemoryCard
            title="Short-term Memory"
            subtitle="Context Window"
            desc="Bộ nhớ trong phiên hiện tại. Chứa cuộc hội thoại, kết quả tool, reasoning."
            capacity="4K–200K tokens"
            icon="🧠"
          />
          <MemoryCard
            title="Long-term Memory"
            subtitle="Vector Database"
            desc="Lưu trữ kiến thức bền vững qua các phiên. Truy xuất bằng semantic search."
            capacity="Không giới hạn"
            icon="💾"
          />
          <MemoryCard
            title="Episodic Memory"
            subtitle="Experience Log"
            desc="Ghi lại kinh nghiệm từ các phiên trước. Agent học từ thành công và thất bại."
            capacity="Lịch sử phiên"
            icon="📝"
          />
        </div>
      </div>
    </div>
  );
}

/* Helper components */

function ArchBlock({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}) {
  const cls = color === "accent"
    ? "border-accent/30 bg-accent/5"
    : "border-white/10 bg-bg-base/40";
  return (
    <div className={`rounded-lg border p-4 text-center ${cls}`}>
      <Icon className={`w-5 h-5 mx-auto mb-2 ${color === "accent" ? "text-accent" : "text-zinc-400"}`} />
      <div className="text-white font-semibold text-sm">{title}</div>
      <div className="text-[10px] text-zinc-500">{desc}</div>
    </div>
  );
}

function MiniBlock({ label }: { label: string }) {
  return (
    <div className="text-[10px] font-mono text-zinc-400 bg-bg-base/60 rounded px-2 py-0.5 border border-white/5">
      {label}
    </div>
  );
}

function SupportBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-accent" />
        <span className="text-white font-semibold text-sm">{title}</span>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PatternCard({
  icon: Icon,
  title,
  desc,
  pros,
  cons,
  visual,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  pros: string[];
  cons: string[];
  visual: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-bg-base/40 p-5 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-accent" />
        <span className="text-white font-semibold">{title}</span>
      </div>
      {visual}
      <p className="text-sm text-zinc-400 leading-relaxed mb-3">{desc}</p>
      <div className="space-y-2">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">Ưu điểm</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {pros.map((p, i) => (
              <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {p}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-red-400">Nhược điểm</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {cons.map((c, i) => (
              <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MemoryCard({
  title,
  subtitle,
  desc,
  capacity,
  icon,
}: {
  title: string;
  subtitle: string;
  desc: string;
  capacity: string;
  icon: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-5 hover:border-accent/30 transition">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-white font-semibold mb-0.5">{title}</div>
      <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{subtitle}</div>
      <p className="text-xs text-zinc-400 leading-relaxed mb-3">{desc}</p>
      <div className="font-mono text-[10px] text-zinc-500">
        Dung lượng: <span className="text-zinc-300">{capacity}</span>
      </div>
    </div>
  );
}
