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
        eyebrow='// a "Playbook" for the Agent'
        title="Skill — packaging team know-how into something the Agent can read"
        desc="Every repeated QC task = one ready-made skill. Reusable, standardised to the team's conventions."
      />

      {/* Problem -> Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card
          icon={AlertTriangle}
          title="The problem"
          description="Repeated tasks (login, repo setup, writing tests to convention…) — every time, the agent has to figure it out from scratch. Long prompts aren't a great fix either."
          badge="PAIN"
        />
        <Card
          icon={Sparkles}
          title="What is a Skill?"
          description="A pre-written set of instructions / checklist the agent loads when it hits the right situation. Think of it as the team's SOP — but written for an agent to read."
          badge="SOLUTION"
          accentBorder
        />
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <Benefit text="Reusable across sessions" />
        <Benefit text="Standardised to team conventions" />
        <Benefit text="Fewer mistakes · fewer tokens · faster" />
      </div>

      {/* Demo skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SkillDemo
          icon={Globe}
          name="playwright-login"
          purpose="Automatically log into the app and verify the dashboard is up."
          trigger='"when login to app X is needed"'
          steps={[
            "Open the login URL",
            "Fill username / password (from secret)",
            "Click submit",
            "Verify URL = /dashboard",
            "Save cookies for later sessions",
          ]}
        />
        <SkillDemo
          icon={TestTube2}
          name="write-test-case"
          purpose="Write a test case following the team's conventions."
          trigger='"when the user asks for a test"'
          steps={[
            "Place the file per team layout (*.test.ts)",
            "Naming: describe/it · AAA pattern",
            "Mock through existing helpers",
            "Run lint + tests before committing",
            "Ensure coverage doesn't drop",
          ]}
        />
      </div>

      <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 flex items-center gap-3">
        <FileCode2 className="w-5 h-5 text-accent shrink-0" />
        <div className="text-sm text-zinc-300">
          <span className="font-semibold text-white">Key takeaway:</span> A Skill
          turns <em>team know-how</em> into something the agent can actually use.
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
