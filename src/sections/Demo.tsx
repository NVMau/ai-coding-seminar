import {
  LogIn,
  Filter,
  PlusCircle,
  Trash2,
  UserCheck,
  Clock,
  Zap,
  RefreshCw,
  ExternalLink,
  Bug,
  Terminal,
} from "lucide-react";
import { SectionTitle } from "../components/Card";

const steps = [
  {
    icon: LogIn,
    label: "Login",
    detail: "skill `qc-login` → fill email/password → submit",
    tool: "skill",
  },
  {
    icon: UserCheck,
    label: "Verify welcome",
    detail: "Assert greeting contains display name `QC User`",
    tool: "assert",
  },
  {
    icon: PlusCircle,
    label: "Create task",
    detail: "Open modal → Save → assert toast == `Task created`",
    tool: "playwright",
  },
  {
    icon: Trash2,
    label: "Cancel delete",
    detail: "Count rows · click Cancel · recount — unchanged",
    tool: "playwright",
  },
  {
    icon: Filter,
    label: "Filter High",
    detail: "Tick checkbox → every visible row priority == `High`",
    tool: "playwright",
  },
];

const bugs = [
  {
    id: "BUG-1",
    title: "Greeting shows email instead of display name",
    where: "Dashboard header",
  },
  {
    id: "BUG-2",
    title: "Toast after Create reads `Task updated`",
    where: "Create modal",
  },
  {
    id: "BUG-3",
    title: "`Cancel` on confirm dialog still deletes the task",
    where: "Delete dialog",
  },
  {
    id: "BUG-4",
    title: "Filter `Only High` does not filter",
    where: "List filter bar",
  },
];

export function Demo() {
  return (
    <div>
      <SectionTitle
        eyebrow="// live demo"
        title="Flow: Skill + Playwright MCP testing the QC Tasks app"
        desc="The agent runs one skill — catching 4 bugs planted in the demo app. Each bug represents a common defect QC teams hit in the wild."
      />

      {/* Demo app callout */}
      <div className="rounded-xl border border-accent/30 bg-accent/[0.04] p-5 mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Bug className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
              demo app
            </div>
            <div className="text-white font-semibold text-base">
              QC Tasks · 4 bugs planted for the agent to catch
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              login{" "}
              <code className="font-mono text-[11px] bg-bg-base/60 border border-white/10 rounded px-1.5 py-0.5">
                qc@example.com
              </code>{" "}
              /{" "}
              <code className="font-mono text-[11px] bg-bg-base/60 border border-white/10 rounded px-1.5 py-0.5">
                qc123
              </code>{" "}
              · reset state: append{" "}
              <code className="font-mono text-[11px] bg-bg-base/60 border border-white/10 rounded px-1.5 py-0.5">
                #reset
              </code>
            </div>
          </div>
        </div>
        <a
          href="/demo-app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-accent text-bg-base font-semibold text-sm px-4 py-2 hover:bg-accent-soft transition"
        >
          Open demo app
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Flow steps */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
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

      {/* Terminal + bug list */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 rounded-xl border border-white/5 bg-bg-card/80 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-bg-base/60 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-[11px] text-zinc-500 ml-2">
              agent-session · qc-tasks-smoke-test
            </div>
          </div>
          <pre className="font-mono text-[12px] leading-relaxed p-4 text-zinc-300 whitespace-pre-wrap">
            <Line accent>{"> "}run skill: qc-tasks-smoke-test</Line>
            <Line dim>[skill] qc-tasks-smoke-test → loaded</Line>
            <Line>navigate /demo-app/#reset</Line>
            <Line dim>[mcp:playwright] snapshot · login form</Line>
            <Line>type [data-testid=login-email] "qc@example.com"</Line>
            <Line>click [data-testid=login-submit]</Line>
            <Line ok>✓ wait_for dashboard</Line>
            <Line fail>
              ✗ welcome does NOT contain "QC User" — actual: "qc@example.com"
            </Line>
            <Line>click new-task · type "Smoke test" · save</Line>
            <Line fail>
              ✗ toast == "Task created" — actual: "Task updated"
            </Line>
            <Line>count_rows = 4 · click delete · click cancel</Line>
            <Line fail>✗ rows dropped to 3 after Cancel</Line>
            <Line>tick [data-testid=filter-high]</Line>
            <Line fail>✗ filter "High" — actual: 3 visible (Med/Low/Med)</Line>
            <Line accent>
              ✗ 4 BUGs found — ready to push via Backlog MCP
            </Line>
          </pre>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-white/5 bg-bg-card/60 p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
            <Bug className="w-3.5 h-3.5" />
            Bugs the agent caught
          </div>
          <ol className="space-y-2">
            {bugs.map((b) => (
              <li
                key={b.id}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-bg-base/40 px-3 py-2"
              >
                <span className="font-mono text-[10px] text-accent mt-0.5 shrink-0">
                  {b.id}
                </span>
                <div className="min-w-0">
                  <div className="text-sm text-white leading-snug">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {b.where}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Why */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <Bullet icon={Zap} title="Speed">
          A few minutes instead of QA clicking through for hours.
        </Bullet>
        <Bullet icon={RefreshCw} title="UI changes → patch the skill">
          No need to rewrite brittle test scripts every time.
        </Bullet>
        <Bullet icon={Clock} title="Steady repetition">
          Every build re-runs the same skill — nothing depends on QA remembering what to check.
        </Bullet>
      </div>

      <div className="mt-5 rounded-lg border border-white/5 bg-bg-card/40 p-3 flex items-center gap-3 text-xs text-zinc-400">
        <Terminal className="w-4 h-4 text-accent shrink-0" />
        <span>
          Right after this step the agent pairs with{" "}
          <span className="text-white">Backlog MCP</span> from the previous slide
          to file the 4 bug tickets automatically — closing the loop from "test"
          to "report".
        </span>
      </div>
    </div>
  );
}

function Line({
  children,
  accent,
  ok,
  dim,
  fail,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  ok?: boolean;
  dim?: boolean;
  fail?: boolean;
  className?: string;
}) {
  let cls = "text-zinc-300";
  if (accent) cls = "text-accent";
  else if (ok) cls = "text-emerald-400";
  else if (fail) cls = "text-red-400";
  else if (dim) cls = "text-zinc-500";
  return (
    <div className={`${className ?? ""} ${cls}`}>
      {!accent && !ok && !dim && !fail && (
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
    <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-bg-card/40 px-4 py-3">
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
