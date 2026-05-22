import {
  Bot,
  Wrench,
  Plug,
  CheckCircle2,
  XCircle,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { Tag } from "../components/Card";

export function Outro() {
  return (
    <div>
      {/* Recap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <RecapCard
          icon={Bot}
          title="Agent"
          desc="LLM + tool + context window. Hiểu giới hạn để dùng hiệu quả."
        />
        <RecapCard
          icon={Wrench}
          title="Skill"
          desc="Đóng gói kinh nghiệm team thành checklist agent đọc được."
        />
        <RecapCard
          icon={Plug}
          title="MCP"
          desc="Chuẩn chung để agent cắm vào hệ thống — Playwright MCP cho browser."
        />
      </div>

      {/* When to use / not */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <h3 className="text-white font-semibold">Khi nên dùng</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <Li>Test manual lặp đi lặp lại nhiều lần</Li>
            <Li>Onboard member mới (skill = tài liệu sống)</Li>
            <Li>Việc tedious cần đúng convention team</Li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-bg-card/60 p-5">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-zinc-400" />
            <h3 className="text-white font-semibold">Khi KHÔNG thay thế</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-400">
            <Li>Logic critical cần review kỹ</Li>
            <Li>Security · Payment · Auth</Li>
            <Li>Yêu cầu độ chính xác tuyệt đối</Li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.06] to-transparent p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="w-5 h-5 text-accent" />
          <h3 className="text-white font-semibold text-lg">Call to action</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-zinc-300">
          <Action n="01">Viết 1 skill cho task hay lặp nhất tuần này.</Action>
          <Action n="02">Cài thử Playwright MCP cho project đang làm.</Action>
          <Action n="03">Share skill hữu ích cho team dùng chung.</Action>
        </div>
      </div>

      {/* Thanks */}
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 bg-accent/10 text-accent mb-4">
          <MessageCircle className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Cảm ơn mọi người đã lắng nghe!
        </h2>
        <p className="text-zinc-400 mb-5">Q&A — bao nhiêu câu hỏi cũng được.</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Tag>#AICodingTeam</Tag>
          <Tag>#Agent</Tag>
          <Tag>#Skill</Tag>
          <Tag>#MCP</Tag>
          <Tag>#Playwright</Tag>
        </div>
      </div>
    </div>
  );
}

function RecapCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Bot;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-bg-card/60 p-5">
      <Icon className="w-5 h-5 text-accent mb-3" />
      <div className="text-white font-semibold mb-1">{title}</div>
      <div className="text-sm text-zinc-400 leading-relaxed">{desc}</div>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="font-mono text-[10px] text-accent mt-1">▸</span>
      <span>{children}</span>
    </li>
  );
}

function Action({
  n,
  children,
}: {
  n: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-3 flex items-start gap-3">
      <span className="font-mono text-[10px] text-accent">{n}</span>
      <span>{children}</span>
    </div>
  );
}
