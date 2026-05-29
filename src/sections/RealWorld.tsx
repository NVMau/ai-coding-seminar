import {
  Code2,
  TestTube2,
  FileSearch,
  MessageSquare,
  Sparkles,
  Bot,
  Wrench,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function RealWorld() {
  return (
    <div>
      <SectionTitle
        eyebrow="// thực tế — ứng dụng agent"
        title="Agent trong thế giới thực"
        desc="Những ví dụ cụ thể về cách Agent đang thay đổi cách chúng ta làm việc với phần mềm."
      />

      {/* Agent Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <AgentCard
          icon={Code2}
          title="Coding Agent"
          agent="Devin, GitHub Copilot, Cursor"
          desc="Viết code, fix bug, refactor, tạo PR. Hiểu codebase và thực thi end-to-end."
          tasks={["Viết feature mới", "Fix bug từ issue", "Code review", "Tạo test"]}
          color="accent"
        />
        <AgentCard
          icon={TestTube2}
          title="Testing Agent"
          agent="QA Agent, Playwright Agent"
          desc="Tự động test UI, tìm bug, viết test case. Thay thế manual testing lặp lại."
          tasks={["UI testing", "Regression test", "Bug detection", "Test generation"]}
          color="emerald"
        />
        <AgentCard
          icon={FileSearch}
          title="Research Agent"
          agent="Perplexity, Deep Research"
          desc="Tìm kiếm, tổng hợp thông tin từ nhiều nguồn. Tạo báo cáo chi tiết."
          tasks={["Web research", "Tổng hợp tài liệu", "Fact checking", "Report"]}
          color="blue"
        />
        <AgentCard
          icon={MessageSquare}
          title="Customer Support"
          agent="Intercom AI, Zendesk AI"
          desc="Trả lời khách hàng, phân loại ticket, escalate khi cần."
          tasks={["Trả lời FAQ", "Phân loại ticket", "Tìm solution", "Escalation"]}
          color="purple"
        />
        <AgentCard
          icon={Wrench}
          title="DevOps Agent"
          agent="Infra Agent, Deploy Agent"
          desc="Quản lý infrastructure, deploy, monitoring và incident response."
          tasks={["Auto-deploy", "Incident response", "Log analysis", "Scaling"]}
          color="orange"
        />
        <AgentCard
          icon={Users}
          title="Personal Assistant"
          agent="AI Assistant, Copilot"
          desc="Quản lý calendar, email, task. Tự động hóa workflow cá nhân."
          tasks={["Schedule meeting", "Draft email", "Task management", "Summarize"]}
          color="cyan"
        />
      </div>

      {/* Real workflow example */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Ví dụ workflow thực tế
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Coding Agent xử lý một bug report
        </h3>

        <div className="space-y-3">
          <WorkflowStep
            n={1}
            action="Đọc bug report"
            detail='Agent đọc issue "Login button không hoạt động trên mobile"'
            type="input"
          />
          <WorkflowStep
            n={2}
            action="Phân tích codebase"
            detail="Tìm kiếm file liên quan: LoginButton.tsx, auth.ts, mobile.css"
            type="think"
          />
          <WorkflowStep
            n={3}
            action="Tìm root cause"
            detail="Phát hiện CSS media query bị thiếu cho viewport < 768px"
            type="think"
          />
          <WorkflowStep
            n={4}
            action="Viết fix"
            detail="Thêm responsive styles và fix event handler cho touch events"
            type="act"
          />
          <WorkflowStep
            n={5}
            action="Chạy test"
            detail="Chạy test suite, viết thêm test case cho mobile viewport"
            type="act"
          />
          <WorkflowStep
            n={6}
            action="Tạo PR"
            detail="Commit, push, tạo PR với description chi tiết và link issue"
            type="result"
          />
        </div>
      </div>

      {/* Impact stats */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          Tác động thực tế
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Agent thay đổi năng suất ra sao?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="40%" label="Tăng tốc coding" desc="Viết code nhanh hơn với AI agent" />
          <StatCard value="60%" label="Giảm manual test" desc="Tự động hóa test lặp lại" />
          <StatCard value="3x" label="Nhanh hơn debug" desc="Agent tìm root cause nhanh hơn" />
          <StatCard value="24/7" label="Hoạt động liên tục" desc="Không cần nghỉ ngơi" />
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-400">
          <span className="text-accent">$</span> Agent không thay thế con người —
          nó <span className="text-white">amplify</span> khả năng của con người.
        </div>
      </div>
    </div>
  );
}

/* Helper components */

function AgentCard({
  icon: Icon,
  title,
  agent,
  desc,
  tasks,
  color,
}: {
  icon: LucideIcon;
  title: string;
  agent: string;
  desc: string;
  tasks: string[];
  color: string;
}) {
  const colorMap: Record<string, { border: string; bg: string; text: string }> = {
    accent: { border: "border-accent/20", bg: "bg-accent/5", text: "text-accent" },
    emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400" },
    blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", text: "text-blue-400" },
    purple: { border: "border-purple-500/20", bg: "bg-purple-500/5", text: "text-purple-400" },
    orange: { border: "border-orange-500/20", bg: "bg-orange-500/5", text: "text-orange-400" },
    cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/5", text: "text-cyan-400" },
  };
  const c = colorMap[color] ?? colorMap.accent;

  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5 hover:border-accent/30 transition`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${c.text}`} />
        <span className="text-white font-semibold">{title}</span>
      </div>
      <div className="font-mono text-[10px] text-zinc-500 mb-2">{agent}</div>
      <p className="text-xs text-zinc-400 leading-relaxed mb-3">{desc}</p>
      <div className="flex flex-wrap gap-1">
        {tasks.map((task, i) => (
          <span
            key={i}
            className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5"
          >
            {task}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkflowStep({
  n,
  action,
  detail,
  type,
}: {
  n: number;
  action: string;
  detail: string;
  type: string;
}) {
  const typeColors: Record<string, string> = {
    input: "border-blue-500/30 bg-blue-500/5",
    think: "border-accent/30 bg-accent/5",
    act: "border-emerald-500/30 bg-emerald-500/5",
    result: "border-green-500/30 bg-green-500/5",
  };
  const typeIcons: Record<string, LucideIcon> = {
    input: FileSearch,
    think: Bot,
    act: Wrench,
    result: Sparkles,
  };
  const TypeIcon = typeIcons[type] ?? Bot;

  return (
    <div className={`rounded-lg border p-4 flex items-start gap-3 ${typeColors[type] ?? ""}`}>
      <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-mono text-accent shrink-0">
        {n}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <TypeIcon className="w-3.5 h-3.5 text-accent" />
          <span className="text-white font-semibold text-sm">{action}</span>
        </div>
        <div className="text-xs text-zinc-400">{detail}</div>
      </div>
      {n < 6 && <ArrowRight className="w-4 h-4 text-zinc-700 mt-1.5 shrink-0 hidden md:block" />}
    </div>
  );
}

function StatCard({
  value,
  label,
  desc,
}: {
  value: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-4 text-center">
      <div className="text-3xl font-bold text-accent mb-1">{value}</div>
      <div className="text-white font-semibold text-sm mb-1">{label}</div>
      <div className="text-[10px] text-zinc-500">{desc}</div>
    </div>
  );
}
