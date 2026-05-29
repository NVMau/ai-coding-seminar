import {
  Shield,
  CheckCircle2,
  XCircle,
  Lightbulb,
  AlertTriangle,
  Target,
  Split,
  FileText,
  Eye,
  Repeat2,
  Lock,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function BestPractices() {
  return (
    <div>
      <SectionTitle
        eyebrow="// best practices — làm việc hiệu quả"
        title="Làm việc hiệu quả với Agent"
        desc="Những nguyên tắc và mẹo giúp bạn tận dụng tối đa sức mạnh của AI Agent."
      />

      {/* Golden Rules */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Lightbulb className="w-3.5 h-3.5" />
          5 nguyên tắc vàng
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Cách giao việc cho Agent hiệu quả
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <RuleCard
            n="01"
            icon={Target}
            title="Rõ ràng"
            desc="Mô tả mục tiêu cụ thể, không mơ hồ. Agent cần biết chính xác bạn muốn gì."
          />
          <RuleCard
            n="02"
            icon={Split}
            title="Chia nhỏ"
            desc="Task lớn → chia thành nhiều task nhỏ. Mỗi task một session riêng nếu cần."
          />
          <RuleCard
            n="03"
            icon={FileText}
            title="Ngữ cảnh"
            desc="Cung cấp đủ context: file, docs, convention. Agent không đoán được thứ bạn không nói."
          />
          <RuleCard
            n="04"
            icon={Eye}
            title="Kiểm tra"
            desc="Luôn review kết quả. Agent giỏi nhưng không hoàn hảo — bạn là người quyết định cuối."
          />
          <RuleCard
            n="05"
            icon={Repeat2}
            title="Lặp lại"
            desc="Feedback → agent sửa → review lại. Quy trình lặp giúp cải thiện kết quả."
          />
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-white font-semibold text-lg">Nên làm</h3>
          </div>
          <div className="space-y-3">
            <DoItem text="Viết prompt rõ ràng, cụ thể với ví dụ" />
            <DoItem text="Chia task lớn thành nhiều task nhỏ" />
            <DoItem text="Cung cấp context: file paths, docs, convention" />
            <DoItem text="Review kết quả cẩn thận trước khi merge" />
            <DoItem text="Sử dụng skill/playbook cho task lặp lại" />
            <DoItem text="Cho agent biết khi nào cần hỏi lại" />
            <DoItem text="Tận dụng tool có sẵn thay vì yêu cầu agent tự viết" />
          </div>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-400" />
            <h3 className="text-white font-semibold text-lg">Không nên</h3>
          </div>
          <div className="space-y-3">
            <DontItem text="Tin tưởng 100% không kiểm tra" />
            <DontItem text="Giao task quá lớn trong một session" />
            <DontItem text="Để agent tự đoán convention của dự án" />
            <DontItem text="Bỏ qua security review cho code agent viết" />
            <DontItem text="Dùng agent cho task cần absolute precision" />
            <DontItem text="Quên set giới hạn permission cho tools" />
            <DontItem text="Mong agent nhớ context từ session trước" />
          </div>
        </div>
      </div>

      {/* Prompt Engineering Tips */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          Prompt Engineering cho Agent
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          So sánh: Prompt yếu vs. Prompt mạnh
        </h3>

        <div className="space-y-4">
          <PromptCompare
            bad="Fix cái bug login"
            good='Fix bug: Login button trên mobile (viewport < 768px) không trigger onClick event. File: src/components/LoginButton.tsx. Expected: Click → call auth API. Actual: Không phản hồi.'
            tip="Cung cấp context cụ thể: file, expected vs actual behavior"
          />
          <PromptCompare
            bad="Viết test cho app"
            good='Viết unit test cho hàm calculateTotal() trong src/utils/cart.ts. Cover các case: empty cart, single item, multiple items, discount applied. Dùng Vitest, theo pattern test hiện tại trong __tests__/'
            tip="Chỉ rõ scope, framework, pattern cần follow"
          />
          <PromptCompare
            bad="Refactor code cho sạch"
            good='Refactor UserProfile.tsx: tách thành 3 component nhỏ (UserAvatar, UserInfo, UserActions). Giữ nguyên interface, không thay đổi behavior. Chạy lint + test sau khi xong.'
            tip="Mô tả output cụ thể, constraints, và verification steps"
          />
        </div>
      </div>

      {/* Security considerations */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Shield className="w-3.5 h-3.5" />
          Bảo mật khi sử dụng Agent
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Những điều cần lưu ý
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SecurityCard
            icon={Lock}
            title="Quản lý Secrets"
            items={[
              "Không bao giờ paste secrets vào prompt",
              "Sử dụng env variables hoặc secret manager",
              "Review code agent viết — tránh log secrets",
            ]}
          />
          <SecurityCard
            icon={Shield}
            title="Permission & Sandbox"
            items={[
              "Giới hạn tool permissions tối thiểu",
              "Chạy agent trong sandbox environment",
              "Review trước khi cho agent push to production",
            ]}
          />
          <SecurityCard
            icon={Eye}
            title="Code Review"
            items={[
              "Luôn review code agent tạo ra",
              "Chú ý SQL injection, XSS, CSRF",
              "Kiểm tra dependencies agent thêm vào",
            ]}
          />
          <SecurityCard
            icon={AlertTriangle}
            title="Ranh giới"
            items={[
              "Agent không nên deploy trực tiếp production",
              "Cần human approval cho critical actions",
              "Có rollback plan cho mọi thay đổi",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

/* Helper components */

function RuleCard({
  n,
  icon: Icon,
  title,
  desc,
}: {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/50 p-4 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 text-accent" />
        </div>
        <span className="font-mono text-[10px] text-accent">{n}</span>
      </div>
      <div className="text-white font-semibold text-sm mb-1">{title}</div>
      <div className="text-xs text-zinc-500 leading-relaxed">{desc}</div>
    </div>
  );
}

function DoItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-zinc-300">
      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
      {text}
    </div>
  );
}

function DontItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-zinc-400">
      <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
      {text}
    </div>
  );
}

function PromptCompare({
  bad,
  good,
  tip,
}: {
  bad: string;
  good: string;
  tip: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-2">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <XCircle className="w-3 h-3 text-red-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-red-400">Yếu</span>
          </div>
          <div className="rounded-md bg-red-500/5 border border-red-500/10 px-3 py-2 text-xs text-zinc-400 italic">
            "{bad}"
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">Mạnh</span>
          </div>
          <div className="rounded-md bg-emerald-500/5 border border-emerald-500/10 px-3 py-2 text-xs text-zinc-300">
            "{good}"
          </div>
        </div>
      </div>
      <div className="text-[10px] text-zinc-500 flex items-center gap-1.5">
        <Lightbulb className="w-3 h-3 text-accent" />
        <span className="text-accent">Tip:</span> {tip}
      </div>
    </div>
  );
}

function SecurityCard({
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
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
