import {
  Brain,
  MemoryStick,
  Wrench,
  Eye,
  User,
  MessageSquare,
  Bot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, SectionTitle } from "../components/Card";

export function WhatIsAgent() {
  return (
    <div>
      <SectionTitle
        eyebrow="// khái niệm cốt lõi"
        title="Agent = Bộ não + Đôi tay + Bộ nhớ"
        desc="Agent không chỉ là chatbot — nó tự suy nghĩ, hành động và học từ kết quả."
      />

      {/* 3 pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <Card
          icon={Brain}
          title="LLM — Bộ não"
          description="Trung tâm suy nghĩ. Hiểu ngôn ngữ, phân tích vấn đề, quyết định bước tiếp theo."
          badge="BRAIN"
        />
        <Card
          icon={Wrench}
          title="Tools — Đôi tay"
          description="Đọc file, chạy code, gọi API, duyệt web… Tool là cách agent tương tác với thế giới thực."
          badge="HANDS"
        />
        <Card
          icon={MemoryStick}
          title="Context — Bộ nhớ"
          description="Chứa toàn bộ hội thoại + kết quả trong phiên. Đầy → thông tin cũ bị mất."
          badge="MEMORY"
        />
      </div>

      {/* Chatbot vs Agent */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Eye className="w-3.5 h-3.5" />
          So sánh
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Chatbot vs. Agent
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* CHATBOT */}
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
              Hỏi → trả lời text. Không gọi tool, không lặp.
            </div>
          </div>

          {/* AGENT */}
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
                <path d="M 195 5 Q 195 25 100 25 Q 5 25 5 5" stroke="rgb(255 106 0 / 0.5)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <path d="M 10 9 L 5 5 L 10 1" stroke="rgb(255 106 0 / 0.7)" strokeWidth="1.5" fill="none" />
              </svg>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-accent uppercase tracking-widest">
                quan sát → suy luận
              </div>
            </div>
            <div className="text-xs text-zinc-300 leading-relaxed mt-6">
              Nhận mục tiêu → gọi tool → quan sát → lặp lại cho đến khi xong.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helpers */

function NodePill({ icon: Icon, label, accent = false, subtle = false }: {
  icon: LucideIcon; label: string; accent?: boolean; subtle?: boolean;
}) {
  return (
    <div className={`shrink-0 flex flex-col items-center gap-1 px-2.5 py-2 rounded-lg border ${
      accent ? "border-accent/40 bg-accent/10" : subtle ? "border-white/10 bg-bg-base/60" : "border-white/10 bg-bg-base/40"
    }`}>
      <Icon className={`w-4 h-4 ${accent ? "text-accent" : "text-zinc-300"}`} />
      <span className={`font-mono text-[9px] uppercase tracking-widest ${accent ? "text-accent" : "text-zinc-400"}`}>{label}</span>
    </div>
  );
}

function FlowArrow({ label, reverse = false, accent = false }: {
  label?: string; reverse?: boolean; accent?: boolean;
}) {
  return (
    <div className="flex-1 flex flex-col items-center min-w-[40px]">
      {label && <span className={`font-mono text-[9px] uppercase tracking-widest ${accent ? "text-accent" : "text-zinc-500"}`}>{label}</span>}
      <svg viewBox="0 0 60 8" className="w-full h-3" preserveAspectRatio="none" aria-hidden="true">
        {reverse ? (
          <>
            <line x1="55" y1="4" x2="5" y2="4" stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 10 1 L 5 4 L 10 7" stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"} strokeWidth="1" fill="none" />
          </>
        ) : (
          <>
            <line x1="5" y1="4" x2="55" y2="4" stroke={accent ? "rgb(255 106 0 / 0.6)" : "rgb(161 161 170 / 0.4)"} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 50 1 L 55 4 L 50 7" stroke={accent ? "rgb(255 106 0 / 0.8)" : "rgb(161 161 170 / 0.6)"} strokeWidth="1" fill="none" />
          </>
        )}
      </svg>
    </div>
  );
}
