import {
  Brain,
  MemoryStick,
  Wrench,
  Eye,
  User,
  MessageSquare,
  Bot,
  AlertTriangle,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, SectionTitle } from "../components/Card";

export function WhatIsAgent() {
  return (
    <div>
      <SectionTitle
        eyebrow="// nền tảng — khái niệm cốt lõi"
        title="Agent = Bộ não + Đôi tay + Bộ nhớ ngắn hạn"
        desc="Agent không chỉ là chatbot — nó là một hệ thống có khả năng tự suy nghĩ, hành động và học từ kết quả."
      />

      {/* 3 pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <Card
          icon={Brain}
          title="LLM — Bộ não"
          description="Large Language Model là trung tâm suy nghĩ. Nó hiểu ngôn ngữ, phân tích vấn đề, và đưa ra quyết định tiếp theo."
          badge="BRAIN"
        />
        <Card
          icon={Wrench}
          title="Tools — Đôi tay"
          description="Công cụ cho phép agent tương tác với thế giới thực: đọc file, chạy code, tìm kiếm web, gọi API..."
          badge="HANDS"
        />
        <Card
          icon={MemoryStick}
          title="Context — Bộ nhớ"
          description="Context window chứa toàn bộ cuộc hội thoại và kết quả. Đây là 'bộ nhớ ngắn hạn' của agent trong phiên làm việc."
          badge="MEMORY"
        />
      </div>

      {/* Chatbot vs Agent comparison */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Eye className="w-3.5 h-3.5" />
          So sánh trực quan
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Chatbot thường vs. Agent
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
                1 lượt
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 mb-4">
              <NodePill icon={User} label="User" />
              <FlowArrow label="hỏi" />
              <NodePill icon={Bot} label="LLM" subtle />
              <FlowArrow label="text" reverse />
              <NodePill icon={User} label="User" />
            </div>

            <div className="text-xs text-zinc-400 leading-relaxed">
              Hỏi → trả lời text. Không gọi tool, không có vòng lặp.
              Mọi thứ ngoài text, người dùng tự làm.
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
                lặp N lượt
              </span>
            </div>

            <div className="relative mb-4">
              <div className="flex items-center justify-between gap-2">
                <NodePill icon={User} label="User" />
                <FlowArrow label="mục tiêu" />
                <div className="relative">
                  <NodePill icon={Bot} label="LLM" accent />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-bg-base text-[10px] font-bold font-mono flex items-center justify-center border-2 border-bg-card">
                    ↻
                  </span>
                </div>
                <FlowArrow label="gọi" accent />
                <NodePill icon={Wrench} label="Tool" />
              </div>

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
                quan sát → suy luận
              </div>
            </div>

            <div className="text-xs text-zinc-300 leading-relaxed mt-6">
              Nhận mục tiêu → gọi tool → quan sát → quyết định bước tiếp →
              lặp lại cho đến khi hoàn thành. User chỉ cần giao việc.
            </div>
          </div>
        </div>
      </div>

      {/* Key differences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <DiffCard
          icon={Zap}
          title="Tự chủ"
          desc="Agent tự quyết định bước tiếp theo, không cần user chỉ dẫn từng bước."
          color="accent"
        />
        <DiffCard
          icon={Heart}
          title="Kiên trì"
          desc="Gặp lỗi → thử cách khác. Agent không dừng lại khi gặp khó khăn."
          color="emerald"
        />
        <DiffCard
          icon={Lightbulb}
          title="Thích ứng"
          desc="Phân tích kết quả và điều chỉnh chiến lược linh hoạt theo tình huống."
          color="blue"
        />
      </div>

      {/* Context window warning */}
      <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-accent" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Lưu ý quan trọng
          </span>
        </div>
        <ul className="space-y-2.5 text-xs text-zinc-300">
          <FactDot>
            Agent <em className="text-white">không phải</em> là AGI — nó vẫn bị giới hạn
            bởi context window và khả năng của LLM.
          </FactDot>
          <FactDot>
            Context đầy → thông tin cũ bị <em className="text-white">mất</em> → quyết
            định sai lệch.
          </FactDot>
          <FactDot>
            Chia nhỏ task, mở session mới khi không cần state cũ →{" "}
            <em className="text-white">hiệu quả hơn</em>.
          </FactDot>
        </ul>
      </div>
    </div>
  );
}

/* Helper components */

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
              x1="55" y1="4" x2="5" y2="4"
              stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"}
              strokeWidth="1" strokeDasharray="3 2"
            />
            <path
              d="M 10 1 L 5 4 L 10 7"
              stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"}
              strokeWidth="1" fill="none"
            />
          </>
        ) : (
          <>
            <line
              x1="5" y1="4" x2="55" y2="4"
              stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"}
              strokeWidth="1" strokeDasharray="3 2"
            />
            <path
              d="M 50 1 L 55 4 L 50 7"
              stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"}
              strokeWidth="1" fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
}

function DiffCard({
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
  const colorMap: Record<string, string> = {
    accent: "border-accent/20 bg-accent/5 text-accent",
    emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  };
  const cls = colorMap[color] ?? colorMap.accent;
  return (
    <div className={`rounded-xl border p-5 ${cls.split(" ").slice(0, 2).join(" ")}`}>
      <Icon className={`w-5 h-5 mb-3 ${cls.split(" ")[2]}`} />
      <div className="text-white font-semibold mb-1">{title}</div>
      <div className="text-sm text-zinc-400 leading-relaxed">{desc}</div>
    </div>
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
