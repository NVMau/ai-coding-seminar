import {
  Bot,
  Wrench,
  Plug,
  CheckCircle2,
  XCircle,
  Rocket,
  MessageCircle,
  Repeat2,
  UserPlus,
  ListChecks,
  ShieldAlert,
  Lock,
  Crosshair,
  PenLine,
  Download,
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Tag } from "../components/Card";
import { AiPlatformLogo } from "../components/AiPlatformLogo";

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
            <Li icon={Repeat2}>Test manual lặp đi lặp lại nhiều lần</Li>
            <Li icon={UserPlus}>Onboard QC mới (skill = tài liệu sống)</Li>
            <Li icon={ListChecks}>Việc tedious cần đúng convention team</Li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-bg-card/60 p-5">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-zinc-400" />
            <h3 className="text-white font-semibold">Khi KHÔNG thay thế</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-400">
            <Li icon={ShieldAlert} muted>Logic critical cần review kỹ</Li>
            <Li icon={Lock} muted>Security · Payment · Auth</Li>
            <Li icon={Crosshair} muted>Yêu cầu độ chính xác tuyệt đối</Li>
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
          <Action n="01" icon={PenLine}>
            Viết 1 skill cho task QC hay lặp nhất tuần này.
          </Action>
          <Action n="02" icon={Download}>
            Cài thử Playwright MCP cho project đang test.
          </Action>
          <Action n="03" icon={Share2}>
            Share skill hữu ích cho team dùng chung.
          </Action>
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
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          <Tag>#AIQCTeam</Tag>
          <Tag>#Agent</Tag>
          <Tag>#Skill</Tag>
          <Tag>#MCP</Tag>
          <Tag>#Playwright</Tag>
          <Tag>#ManualTest</Tag>
        </div>

        {/* Signature */}
        <div className="inline-flex flex-col items-center gap-2 pt-6 border-t border-white/5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            brought to you by
          </span>
          <AiPlatformLogo size="md" />
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

function Li({
  icon: Icon,
  muted = false,
  children,
}: {
  icon: LucideIcon;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-2">
      <Icon
        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
          muted ? "text-zinc-500" : "text-accent"
        }`}
      />
      <span>{children}</span>
    </li>
  );
}

function Action({
  n,
  icon: Icon,
  children,
}: {
  n: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-3 flex items-start gap-3">
      <div className="shrink-0 w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div>
        <div className="font-mono text-[10px] text-accent mb-0.5">{n}</div>
        <span>{children}</span>
      </div>
    </div>
  );
}
