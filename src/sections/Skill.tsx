import {
  Wrench,
  AlertTriangle,
  Sparkles,
  Globe,
  TestTube2,
  CheckCircle2,
  FileCode2,
} from "lucide-react";
import { Card, SectionTitle } from "../components/Card";

export function Skill() {
  return (
    <div>
      <SectionTitle
        eyebrow='// "Playbook" cho Agent'
        title="Skill — đóng gói kinh nghiệm team thành thứ Agent đọc được"
        desc="Mỗi task QC lặp lại = một skill có sẵn. Tái sử dụng, chuẩn hoá theo convention team."
      />

      {/* Problem -> Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card
          icon={AlertTriangle}
          title="Vấn đề"
          description="Task lặp lại (login, setup repo, viết test theo convention…) — mỗi lần agent phải mò lại từ đầu. Prompt dài cũng không phải giải pháp tốt."
          badge="PAIN"
        />
        <Card
          icon={Sparkles}
          title="Khái niệm Skill"
          description="Một bộ instruction / checklist có sẵn, agent load ra dùng khi gặp đúng tình huống. Giống 'SOP' của team — nhưng viết cho agent đọc."
          badge="SOLUTION"
          accentBorder
        />
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <Benefit text="Tái sử dụng giữa nhiều session" />
        <Benefit text="Chuẩn hoá theo convention team" />
        <Benefit text="Giảm lỗi · giảm token · tăng tốc" />
      </div>

      {/* Demo skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SkillDemo
          icon={Globe}
          name="playwright-login"
          purpose="Tự động login app, verify đã vào dashboard."
          trigger='"khi cần đăng nhập app X"'
          steps={[
            "Mở URL login",
            "Fill username / password (từ secret)",
            "Click submit",
            "Verify URL = /dashboard",
            "Save cookies cho session sau",
          ]}
        />
        <SkillDemo
          icon={TestTube2}
          name="write-test-case"
          purpose="Viết test case đúng convention team."
          trigger='"khi user yêu cầu viết test"'
          steps={[
            "Đặt file theo cấu trúc team (*.test.ts)",
            "Naming: describe/it · AAA pattern",
            "Mock theo helper sẵn có",
            "Chạy lint + test trước khi commit",
            "Đảm bảo coverage không giảm",
          ]}
        />
      </div>

      <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 flex items-center gap-3">
        <FileCode2 className="w-5 h-5 text-accent shrink-0" />
        <div className="text-sm text-zinc-300">
          <span className="font-semibold text-white">Key takeaway:</span> Skill
          biến <em>kinh nghiệm team</em> thành thứ agent dùng được.
        </div>
      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-bg-card/40 px-3 py-2 text-sm text-zinc-300">
      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
      {text}
    </div>
  );
}

function SkillDemo({
  icon: Icon,
  name,
  purpose,
  trigger,
  steps,
}: {
  icon: typeof Wrench;
  name: string;
  purpose: string;
  trigger: string;
  steps: string[];
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-bg-card/60 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-accent" />
        <code className="font-mono text-sm text-white">{name}</code>
        <span className="ml-auto text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
          DEMO
        </span>
      </div>
      <p className="text-sm text-zinc-400 mb-3">{purpose}</p>
      <div className="font-mono text-[11px] text-zinc-500 mb-3">
        trigger: <span className="text-zinc-300">{trigger}</span>
      </div>
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="font-mono text-[11px] text-accent mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
