import {
  RotateCw,
  ChevronRight,
  Brain,
  Eye,
  Wrench,
  MessageSquare,
  Lightbulb,
  ListChecks,
  GitBranch,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function HowAgentsThink() {
  return (
    <div>
      <SectionTitle
        eyebrow="// reasoning — vòng lặp suy luận"
        title="Agent suy nghĩ như thế nào?"
        desc="Hiểu cách agent lặp qua vòng Reason → Act → Observe để giải quyết vấn đề phức tạp."
      />

      {/* The Agentic Loop - visual */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5" />
          Vòng lặp Agentic (The Agentic Loop)
        </div>

        {/* Circular loop visualization */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-full max-w-3xl">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <LoopStep n="01" label="Suy luận" desc="Phân tích vấn đề, lên kế hoạch" icon={Brain} />
              <Arrow />
              <LoopStep n="02" label="Hành động" desc="Gọi tool, thực thi lệnh" icon={Wrench} />
              <Arrow />
              <LoopStep n="03" label="Quan sát" desc="Đọc kết quả, đánh giá" icon={Eye} />
              <Arrow />
              <LoopStep n="04" label="Lặp lại" desc="Đến khi hoàn thành mục tiêu" icon={RotateCw} />
            </div>

            {/* Loop back arrow */}
            <svg
              viewBox="0 0 800 40"
              className="w-full h-8 mt-2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 760 5 Q 760 35 400 35 Q 40 35 40 5"
                stroke="rgb(255 106 0 / 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                fill="none"
              />
              <path
                d="M 46 10 L 40 5 L 46 0"
                stroke="rgb(255 106 0 / 0.6)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="text-center font-mono text-[9px] text-accent uppercase tracking-widest -mt-1">
              quay lại suy luận với thông tin mới
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 font-mono text-xs text-zinc-400">
          <span className="text-accent">$</span> Mỗi vòng lặp, agent{" "}
          <span className="text-white">thu thập thêm thông tin</span> và{" "}
          <span className="text-white">tinh chỉnh kế hoạch</span> cho đến khi đạt mục tiêu.
        </div>
      </div>

      {/* ReAct Pattern */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Pattern chính
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          ReAct Pattern — Reasoning + Acting
        </h3>

        <div className="rounded-lg border border-white/5 bg-bg-base/60 p-5 font-mono text-sm mb-4">
          <div className="space-y-3">
            <CodeLine type="thought" text='Thought: Tôi cần tìm file config để sửa lỗi port' />
            <CodeLine type="action" text='Action: search_files("config", "*.json")' />
            <CodeLine type="observation" text='Observation: Tìm thấy config.json tại /app/config.json' />
            <CodeLine type="thought" text='Thought: Đã tìm thấy file, cần đọc nội dung' />
            <CodeLine type="action" text='Action: read_file("/app/config.json")' />
            <CodeLine type="observation" text='Observation: {"port": 3000, "host": "localhost"}' />
            <CodeLine type="thought" text='Thought: Port đang là 3000, cần đổi sang 8080' />
            <CodeLine type="action" text='Action: edit_file("/app/config.json", port: 8080)' />
            <CodeLine type="result" text='Result: ✓ Đã cập nhật port thành công!' />
          </div>
        </div>

        <div className="text-xs text-zinc-400 leading-relaxed">
          <span className="text-accent font-semibold">ReAct</span> = Kết hợp{" "}
          <span className="text-white">suy luận</span> (Reasoning) và{" "}
          <span className="text-white">hành động</span> (Acting) xen kẽ nhau.
          Agent "nghĩ to" trước khi hành động, giúp giảm sai sót.
        </div>
      </div>

      {/* Thinking patterns comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <PatternCard
          icon={MessageSquare}
          title="Zero-shot"
          desc="Trả lời trực tiếp không cần ví dụ. Nhanh nhưng dễ sai với task phức tạp."
          example="Q: 2+2? → A: 4"
          difficulty="Đơn giản"
        />
        <PatternCard
          icon={Lightbulb}
          title="Chain-of-Thought"
          desc="Suy luận từng bước. Chia bài toán lớn thành các bước nhỏ để giải."
          example="Bước 1 → Bước 2 → ... → Kết quả"
          difficulty="Trung bình"
        />
        <PatternCard
          icon={GitBranch}
          title="Tree-of-Thought"
          desc="Khám phá nhiều hướng giải song song, chọn hướng tốt nhất."
          example="Nhánh A ✓ / Nhánh B ✗ / Nhánh C ✓"
          difficulty="Phức tạp"
        />
      </div>

      {/* Planning strategies */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <ListChecks className="w-3.5 h-3.5" />
          Chiến lược lập kế hoạch
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Agent lập kế hoạch ra sao?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlanCard
            n="01"
            title="Plan-then-Execute"
            desc="Lập kế hoạch đầy đủ trước → thực thi theo thứ tự. Phù hợp task có cấu trúc rõ ràng."
            steps={["Phân tích yêu cầu", "Liệt kê các bước", "Thực thi từng bước", "Kiểm tra kết quả"]}
          />
          <PlanCard
            n="02"
            title="Iterative Refinement"
            desc="Bắt đầu với kế hoạch sơ bộ → điều chỉnh khi có thêm thông tin. Linh hoạt hơn."
            steps={["Kế hoạch sơ bộ", "Thực thi bước 1", "Điều chỉnh kế hoạch", "Tiếp tục..."]}
          />
        </div>
      </div>
    </div>
  );
}

/* Helper components */

function LoopStep({
  n,
  label,
  desc,
  icon: Icon,
}: {
  n: string;
  label: string;
  desc: string;
  icon: LucideIcon;
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

function PatternCard({
  icon: Icon,
  title,
  desc,
  example,
  difficulty,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  example: string;
  difficulty: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-bg-card/60 p-5 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-accent" />
        <span className="text-white font-semibold">{title}</span>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed mb-3">{desc}</p>
      <div className="rounded-md bg-bg-base/60 border border-white/5 px-3 py-2 mb-3">
        <code className="font-mono text-[10px] text-zinc-300">{example}</code>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        Độ phức tạp: <span className="text-accent">{difficulty}</span>
      </div>
    </div>
  );
}

function PlanCard({
  n,
  title,
  desc,
  steps,
}: {
  n: string;
  title: string;
  desc: string;
  steps: string[];
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-5">
      <div className="font-mono text-[10px] text-accent mb-2">{n}</div>
      <div className="text-white font-semibold mb-2">{title}</div>
      <p className="text-xs text-zinc-400 leading-relaxed mb-3">{desc}</p>
      <div className="space-y-1.5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
            <span className="w-4 h-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[9px] font-mono text-accent shrink-0">
              {i + 1}
            </span>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
