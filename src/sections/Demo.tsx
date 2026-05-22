import {
  LogIn,
  PlusCircle,
  Search,
  Trash2,
  CheckCheck,
  Clock,
  Zap,
  RefreshCw,
} from "lucide-react";
import { SectionTitle } from "../components/Card";

const steps = [
  {
    icon: LogIn,
    label: "Login",
    detail: "Agent gọi skill `playwright-login`",
    tool: "skill",
  },
  {
    icon: PlusCircle,
    label: "Tạo record",
    detail: "navigate → snapshot → click → type → submit",
    tool: "playwright",
  },
  {
    icon: Search,
    label: "Verify hiển thị",
    detail: "Snapshot accessibility tree · assert text",
    tool: "playwright",
  },
  {
    icon: Trash2,
    label: "Xoá record",
    detail: "Click row → confirm dialog",
    tool: "playwright",
  },
  {
    icon: CheckCheck,
    label: "Verify mất",
    detail: "Snapshot lại · assert không còn",
    tool: "playwright",
  },
];

export function Demo() {
  return (
    <div>
      <SectionTitle
        eyebrow="// 04 phút · live demo"
        title="Flow: Skill + Playwright MCP cho test manual"
        desc="Kịch bản: Login → Tạo record → Verify → Xoá → Verify mất. QA thủ công 15–20 phút → agent vài phút."
      />

      {/* Flow steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="relative rounded-xl border border-white/5 bg-bg-card/60 p-4 hover:border-accent/30 transition"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-accent text-bg-base text-xs font-bold font-mono flex items-center justify-center">
                {i + 1}
              </div>
              <Icon className="w-5 h-5 text-accent mb-2" />
              <div className="text-white font-semibold text-sm mb-1">
                {s.label}
              </div>
              <div className="text-xs text-zinc-500 mb-3 leading-relaxed">
                {s.detail}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-accent border-t border-white/5 pt-2">
                {s.tool}
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl border border-white/5 bg-bg-card/80 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-bg-base/60 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-[11px] text-zinc-500 ml-2">
              agent-session · live
            </div>
          </div>
          <pre className="font-mono text-[12.5px] leading-relaxed p-4 text-zinc-300">
            <Line accent>
              {"> "}run test manual: tạo + xoá record
            </Line>
            <Line dim>[skill] playwright-login → resolved</Line>
            <Line>navigate https://app.example.com/login</Line>
            <Line dim>[mcp:playwright] snapshot → form#login</Line>
            <Line>type input#email "qa@example.com"</Line>
            <Line>type input#password "•••••••"</Line>
            <Line>click button[type=submit]</Line>
            <Line ok>✓ url == /dashboard</Line>
            <Line>navigate /records/new</Line>
            <Line>type input#title "Seminar AI"</Line>
            <Line>click button#save</Line>
            <Line ok>✓ row "Seminar AI" exists</Line>
            <Line>click row#delete · confirm</Line>
            <Line ok>✓ row "Seminar AI" not found</Line>
            <Line accent>✓ test passed in 38.4s</Line>
            <Line dim className="cursor-blink">
              {""}
            </Line>
          </pre>
        </div>

        <div className="rounded-xl border border-white/5 bg-bg-card/60 p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
            Vì sao đáng dùng
          </div>
          <Bullet icon={Zap} title="Tốc độ">
            Vài phút thay vì 15–20 phút QA bấm tay.
          </Bullet>
          <Bullet icon={RefreshCw} title="UI đổi → sửa skill">
            Không phải viết lại script test cứng.
          </Bullet>
          <Bullet icon={Clock} title="Manual có AI">
            Linh hoạt hơn automated test framework — phù hợp exploratory.
          </Bullet>
        </div>
      </div>
    </div>
  );
}

function Line({
  children,
  accent,
  ok,
  dim,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  ok?: boolean;
  dim?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${className ?? ""} ${
        accent
          ? "text-accent"
          : ok
          ? "text-emerald-400"
          : dim
          ? "text-zinc-500"
          : "text-zinc-300"
      }`}
    >
      {!accent && !ok && !dim && (
        <span className="text-zinc-600">$ </span>
      )}
      {children}
    </div>
  );
}

function Bullet({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Zap;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 mb-4 last:mb-0">
      <div className="shrink-0 w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div>
        <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
        <div className="text-xs text-zinc-400 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
