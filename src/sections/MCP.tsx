import {
  Plug,
  Workflow,
  Network,
  Globe,
  MousePointerClick,
  Camera,
  Code2,
  AlertTriangle,
  KanbanSquare,
  ListTodo,
  PlusSquare,
  ArrowRightLeft,
  MessageSquarePlus,
  UserCheck,
  GitPullRequest,
} from "lucide-react";
import { Card, SectionTitle, Tag } from "../components/Card";

export function MCP() {
  return (
    <div>
      <SectionTitle
        eyebrow="// Model Context Protocol"
        title="MCP — USB-C for AI Agents"
        desc="An open standard for agents to plug into MCP servers (tool · resource · prompt) — connect and go."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card
          icon={AlertTriangle}
          title="The problem"
          description="Every agent / IDE integrates tools its own way — fragmented and hard to reuse. To let agents talk to Jira, GitHub, DBs, browsers… we need a shared standard."
          badge="PAIN"
        />
        <Card
          icon={Plug}
          title="What is MCP?"
          description="Model Context Protocol — an open standard proposed by Anthropic. Agents connect to MCP servers that expose tools, resources and prompts. Think of it as USB-C for AI agents."
          badge="STANDARD"
          accentBorder
        />
      </div>

      {/* Architecture diagram */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5" />
          MCP Architecture
        </div>
        <div className="flex items-stretch justify-between gap-3 flex-wrap">
          <ArchBlock
            icon={Code2}
            title="Agent (Client)"
            sub="Cursor, Claude, Devin…"
          />
          <ArchArrow label="protocol" />
          <ArchBlock
            icon={Network}
            title="MCP Server"
            sub="tool · resource · prompt"
            accent
          />
          <ArchArrow label="exec" />
          <ArchBlock
            icon={Globe}
            title="Real systems"
            sub="Browser · DB · API…"
          />
        </div>
      </div>

      {/* Playwright MCP */}
      <div className="rounded-xl border border-accent/30 bg-accent/[0.03] p-6 mb-6">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Globe className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Playwright MCP</h3>
          <Tag>BROWSER</Tag>
          <Tag>DOM-AWARE</Tag>
          <Tag>FAST</Tag>
        </div>
        <p className="text-sm text-zinc-400 mb-4 max-w-3xl">
          An MCP server that exposes browser-control tools. The agent drives the
          browser like a real user — but reads structure (accessibility tree)
          instead of relying on screenshots alone.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <ToolChip icon={Globe} label="navigate" />
          <ToolChip icon={MousePointerClick} label="click / type" />
          <ToolChip icon={Camera} label="snapshot" />
          <ToolChip icon={Code2} label="evaluate JS" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <Compare label="Faster" detail="vs screenshot-only" />
          <Compare label="Deterministic" detail="DOM > pixel" />
          <Compare label="Easy to assert" detail="text · role · element" />
        </div>
      </div>

      {/* Backlog MCP — second MCP example */}
      <div className="rounded-xl border border-accent/30 bg-accent/[0.03] p-6">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <KanbanSquare className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Backlog MCP</h3>
          <Tag>TASK</Tag>
          <Tag>JIRA · LINEAR · BACKLOG</Tag>
          <Tag>WRITE</Tag>
        </div>
        <p className="text-sm text-zinc-400 mb-4 max-w-3xl">
          An MCP server that plugs into your task tracker. The agent acts on the
          user's behalf{" "}
          <span className="text-white">directly on the backlog</span> — creating
          issues from a test report, updating status, commenting, assigning,
          linking PRs — no need for QC to click through a UI.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
          <ToolChip icon={ListTodo} label="list_issues" />
          <ToolChip icon={PlusSquare} label="create_issue" />
          <ToolChip icon={ArrowRightLeft} label="update_status" />
          <ToolChip icon={MessageSquarePlus} label="add_comment" />
          <ToolChip icon={UserCheck} label="assign" />
          <ToolChip icon={GitPullRequest} label="link_pr" />
        </div>

        {/* Example: terminal-style demo */}
        <div className="rounded-lg border border-white/5 bg-bg-base/60 overflow-hidden mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-bg-card/60 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-[11px] text-zinc-500 ml-2">
              agent + backlog-mcp · example
            </div>
          </div>
          <pre className="font-mono text-[12px] leading-relaxed p-4 text-zinc-300 whitespace-pre-wrap">
            <Line accent>
              {"> "}“Once testing is done, file a bug for each failing case,
              assign Mai, and link them to PR #482.”
            </Line>
            <Line dim>[mcp:backlog] list_issues project=QC-25 status=open</Line>
            <Line dim>[mcp:backlog] → 12 issues (filter to avoid duplicates)</Line>
            <Line>
              [mcp:backlog] create_issue type=bug priority=P1 \
              {"\n          "}title="Mobile login — error message not shown" \
              {"\n          "}assignee=Mai due=2026-05-23
            </Line>
            <Line ok>✓ created BUG-148</Line>
            <Line>
              [mcp:backlog] create_issue →{" "}
              <span className="text-white">BUG-149</span> "Reset password email
              never arrives"
            </Line>
            <Line>
              [mcp:backlog] add_comment BUG-148{" "}
              <span className="text-zinc-500">"attached log + screenshot +
              repro steps"</span>
            </Line>
            <Line>[mcp:backlog] link_pr BUG-148 ↔ PR-482</Line>
            <Line accent>✓ 3 bugs filed + linked, posted to Slack #qc-team</Line>
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <Compare label="No UI clicks" detail="drive everything by command" />
          <Compare label="Auto-link" detail="task ↔ PR ↔ commit" />
          <Compare label="Bulk" detail="20 bugs in one go" />
        </div>
      </div>
    </div>
  );
}

function Line({
  children,
  accent,
  dim,
  ok,
}: {
  children: React.ReactNode;
  accent?: boolean;
  dim?: boolean;
  ok?: boolean;
}) {
  let cls = "text-zinc-300";
  if (accent) cls = "text-accent";
  else if (dim) cls = "text-zinc-500";
  else if (ok) cls = "text-emerald-400";
  return <div className={cls}>{children}</div>;
}

function ArchBlock({
  icon: Icon,
  title,
  sub,
  accent = false,
}: {
  icon: typeof Plug;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex-1 min-w-[180px] rounded-lg border p-4 ${
        accent
          ? "border-accent/40 bg-accent/5"
          : "border-white/5 bg-bg-base/50"
      }`}
    >
      <Icon
        className={`w-5 h-5 mb-2 ${accent ? "text-accent" : "text-zinc-400"}`}
      />
      <div className="text-white font-semibold text-sm">{title}</div>
      <div className="text-xs text-zinc-500 mt-1">{sub}</div>
    </div>
  );
}

function ArchArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-1">
        {label}
      </div>
      <div className="w-12 h-px bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0" />
      <div className="font-mono text-[9px] text-accent mt-1">⇄</div>
    </div>
  );
}

function ToolChip({
  icon: Icon,
  label,
}: {
  icon: typeof Plug;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-white/5 bg-bg-base/50 px-3 py-2">
      <Icon className="w-3.5 h-3.5 text-accent" />
      <code className="font-mono text-xs text-zinc-200">{label}</code>
    </div>
  );
}

function Compare({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-md border border-white/5 bg-bg-base/40 px-3 py-2">
      <div className="text-white text-sm font-semibold">{label}</div>
      <div className="text-zinc-500 text-xs">{detail}</div>
    </div>
  );
}
