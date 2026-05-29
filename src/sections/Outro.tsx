import {
  Bot,
  Brain,
  Layers,
  Wrench,
  Globe,
  Shield,
  Rocket,
  MessageCircle,
  PenLine,
  Download,
  Share2,
  CheckCircle2,
  XCircle,
  Repeat2,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Tag } from "../components/Card";
import { AiPlatformLogo } from "../components/AiPlatformLogo";

export function Outro() {
  return (
    <div>
      {/* Recap */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <RecapCard
          icon={Bot}
          title="Agent là gì?"
          desc="LLM + Tools + Context. Hệ thống tự chủ, suy luận và hành động."
        />
        <RecapCard
          icon={Brain}
          title="Cách suy nghĩ"
          desc="ReAct loop: Reason → Act → Observe → Repeat."
        />
        <RecapCard
          icon={Layers}
          title="Kiến trúc"
          desc="Single, Multi-Agent, Hierarchical. Memory + Tool + Knowledge."
        />
        <RecapCard
          icon={Wrench}
          title="Công cụ"
          desc="Function Calling, MCP, Tool Registry. Agent tương tác với thế giới thực."
        />
        <RecapCard
          icon={Globe}
          title="Ứng dụng"
          desc="Coding, Testing, Research, DevOps, Support — agent khắp nơi."
        />
        <RecapCard
          icon={Shield}
          title="Best Practices"
          desc="Rõ ràng, chia nhỏ, cung cấp context, review, bảo mật."
        />
      </div>

      {/* Key takeaways */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <h3 className="text-white font-semibold">Điểm mấu chốt</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-300">
            <Li icon={Lightbulb}>Agent = LLM + Tools + Context Window — không hơn, không kém</Li>
            <Li icon={Repeat2}>Vòng lặp ReAct là trái tim: Suy luận → Hành động → Quan sát</Li>
            <Li icon={Wrench}>Tool là cách duy nhất agent chạm vào thế giới thực</Li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-bg-card/60 p-5">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-zinc-400" />
            <h3 className="text-white font-semibold">Đừng quên</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-400">
            <Li icon={ShieldAlert} muted>Agent không phải AGI — vẫn có giới hạn và sai sót</Li>
            <Li icon={Shield} muted>Bảo mật là ưu tiên hàng đầu khi sử dụng agent</Li>
            <Li icon={Brain} muted>Human-in-the-loop cho các quyết định quan trọng</Li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.06] to-transparent p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="w-5 h-5 text-accent" />
          <h3 className="text-white font-semibold text-lg">Bước tiếp theo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-zinc-300">
          <Action n="01" icon={PenLine}>
            Thử sử dụng một coding agent cho task bạn đang làm hôm nay.
          </Action>
          <Action n="02" icon={Download}>
            Viết một skill/playbook cho quy trình bạn lặp lại nhiều nhất.
          </Action>
          <Action n="03" icon={Share2}>
            Chia sẻ kinh nghiệm với team — giúp mọi người cùng hiểu và áp dụng.
          </Action>
        </div>
      </div>

      {/* Thanks */}
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 bg-accent/10 text-accent mb-4">
          <MessageCircle className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Cảm ơn đã lắng nghe!
        </h2>
        <p className="text-zinc-400 mb-5">Q&A — Hỏi bất cứ điều gì, không có câu hỏi nào quá nhỏ.</p>
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          <Tag>#AIAgent</Tag>
          <Tag>#LLM</Tag>
          <Tag>#ReAct</Tag>
          <Tag>#Tools</Tag>
          <Tag>#MCP</Tag>
          <Tag>#Architecture</Tag>
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
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-4 flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <div>
        <div className="font-mono text-[10px] text-accent mb-1">{n}</div>
        <div className="text-sm text-zinc-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
