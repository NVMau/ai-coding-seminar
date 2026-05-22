import {
  Plug,
  Workflow,
  Network,
  Globe,
  MousePointerClick,
  Camera,
  Code2,
  AlertTriangle,
} from "lucide-react";
import { Card, SectionTitle, Tag } from "../components/Card";

export function MCP() {
  return (
    <div>
      <SectionTitle
        eyebrow="// Model Context Protocol"
        title="MCP — USB-C cho AI Agent"
        desc="Chuẩn mở để Agent kết nối tới các MCP server (tool · resource · prompt) — cắm vào là dùng."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card
          icon={AlertTriangle}
          title="Vấn đề"
          description="Mỗi agent / IDE lại có cách tích hợp tool riêng — fragment, khó tái sử dụng. Muốn agent nói chuyện với Jira, GitHub, DB, browser… cần chuẩn chung."
          badge="PAIN"
        />
        <Card
          icon={Plug}
          title="MCP là gì?"
          description="Model Context Protocol — chuẩn mở do Anthropic đề xuất. Agent kết nối tới các MCP server cung cấp tool, resource, prompt. Ẩn dụ: USB-C cho AI agent."
          badge="STANDARD"
          accentBorder
        />
      </div>

      {/* Architecture diagram */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5" />
          Kiến trúc MCP
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
            title="Hệ thống thật"
            sub="Browser · DB · API…"
          />
        </div>
      </div>

      {/* Playwright MCP */}
      <div className="rounded-xl border border-accent/30 bg-accent/[0.03] p-6">
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
          MCP server expose các tool điều khiển trình duyệt. Agent dùng browser
          như người thật — nhưng có structure (accessibility tree) thay vì chỉ
          screenshot.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <ToolChip icon={Globe} label="navigate" />
          <ToolChip icon={MousePointerClick} label="click / type" />
          <ToolChip icon={Camera} label="snapshot" />
          <ToolChip icon={Code2} label="evaluate JS" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <Compare label="Nhanh hơn" detail="vs screenshot-only" />
          <Compare label="Deterministic" detail="DOM > pixel" />
          <Compare label="Dễ assert" detail="text · role · element" />
        </div>
      </div>
    </div>
  );
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
