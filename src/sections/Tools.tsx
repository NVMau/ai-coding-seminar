import {
  Wrench,
  FileText,
  Terminal,
  Globe,
  Database,
  Code2,
  MessageSquare,
  Search,
  Plug,
  GitBranch,
  ChevronRight,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "../components/Card";

export function Tools() {
  return (
    <div>
      <SectionTitle
        eyebrow="// tools & actions — tay chân của agent"
        title="Agent sử dụng công cụ như thế nào?"
        desc="Không có tool, LLM chỉ tạo text. Tool là cách agent tương tác với thế giới thực."
      />

      {/* Tool overview */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5" />
          Bộ công cụ cơ bản
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Mỗi tool = một hành động cụ thể
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ToolBlock icon={FileText} name="Đọc file" sample='read("README.md")' category="File I/O" />
          <ToolBlock icon={Code2} name="Sửa code" sample='edit("app.ts", diff)' category="File I/O" />
          <ToolBlock icon={Terminal} name="Chạy lệnh" sample="pnpm test" category="Shell" />
          <ToolBlock icon={Search} name="Tìm kiếm" sample='grep("TODO", "src/")' category="Search" />
          <ToolBlock icon={Globe} name="Duyệt web" sample="navigate(url)" category="Browser" />
          <ToolBlock icon={Database} name="Query DB" sample="SELECT * FROM users" category="Database" />
          <ToolBlock icon={GitBranch} name="Git" sample="git commit -m ..." category="VCS" />
          <ToolBlock icon={MessageSquare} name="Hỏi user" sample="confirm(question)" category="I/O" />
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 font-mono text-[11px] text-zinc-400">
          <span className="text-accent">$</span> LLM chỉ tạo text.{" "}
          <span className="text-white">Tool</span> = cách duy nhất agent chạm vào hệ thống thực.
        </div>
      </div>

      {/* Function Calling Flow */}
      <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          Function Calling Flow
        </div>
        <h3 className="text-lg font-semibold text-white mb-5">
          Agent gọi tool ra sao?
        </h3>

        <div className="flex items-start gap-2 flex-wrap">
          <FlowStep
            n="1"
            title="LLM nhận prompt"
            desc="Bao gồm danh sách tool definitions (schema) trong system prompt"
          />
          <StepArrow />
          <FlowStep
            n="2"
            title="LLM chọn tool"
            desc="Trả về JSON với tên tool và tham số cần truyền"
          />
          <StepArrow />
          <FlowStep
            n="3"
            title="Runtime thực thi"
            desc="Hệ thống chạy tool với tham số, trả kết quả về cho LLM"
          />
          <StepArrow />
          <FlowStep
            n="4"
            title="LLM xử lý"
            desc="Đọc kết quả, quyết định gọi tool tiếp hoặc trả lời user"
          />
        </div>

        {/* Code example */}
        <div className="mt-6 rounded-lg border border-white/5 bg-bg-base/60 p-4 font-mono text-xs">
          <div className="text-zinc-500 mb-2">{"// Tool definition (JSON Schema)"}</div>
          <div className="text-zinc-300">
            <span className="text-accent">{"{"}</span>{" "}
            <span className="text-blue-400">"name"</span>:{" "}
            <span className="text-emerald-400">"read_file"</span>,
          </div>
          <div className="text-zinc-300 ml-2">
            <span className="text-blue-400">"parameters"</span>:{" "}
            <span className="text-accent">{"{"}</span>
          </div>
          <div className="text-zinc-300 ml-4">
            <span className="text-blue-400">"path"</span>:{" "}
            <span className="text-accent">{"{"}</span>{" "}
            <span className="text-blue-400">"type"</span>:{" "}
            <span className="text-emerald-400">"string"</span>{" "}
            <span className="text-accent">{"}"}</span>
          </div>
          <div className="text-zinc-300 ml-2">
            <span className="text-accent">{"}"}</span>
          </div>
          <div className="text-zinc-300">
            <span className="text-accent">{"}"}</span>
          </div>
        </div>
      </div>

      {/* MCP Introduction */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6 mb-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Plug className="w-3.5 h-3.5" />
          MCP — Model Context Protocol
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          USB-C cho AI Agent
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              <span className="text-white font-semibold">MCP</span> là chuẩn giao tiếp
              mở cho phép agent kết nối với bất kỳ service nào thông qua một giao thức thống nhất —
              giống USB-C kết nối mọi thiết bị.
            </p>
            <div className="space-y-2">
              <MCPFeature
                label="Chuẩn hóa"
                desc="Một protocol duy nhất cho mọi integration"
              />
              <MCPFeature
                label="Plug & Play"
                desc="Thêm service mới không cần sửa agent"
              />
              <MCPFeature
                label="Bảo mật"
                desc="Sandbox permissions cho từng tool"
              />
            </div>
          </div>

          <div className="rounded-lg border border-white/5 bg-bg-base/40 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              Ví dụ MCP Servers
            </div>
            <div className="grid grid-cols-2 gap-2">
              <MCPServer name="Playwright" desc="Browser automation" />
              <MCPServer name="GitHub" desc="Repos & Issues" />
              <MCPServer name="Slack" desc="Messages & Channels" />
              <MCPServer name="Database" desc="SQL queries" />
              <MCPServer name="Filesystem" desc="File operations" />
              <MCPServer name="Notion" desc="Docs & Databases" />
            </div>
          </div>
        </div>
      </div>

      {/* Tool comparison */}
      <div className="rounded-xl border border-white/5 bg-bg-card/60 p-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1 flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5" />
          So sánh các phương thức gọi tool
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Native vs Plugin vs MCP
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Phương thức</th>
                <th className="text-left py-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Cách hoạt động</th>
                <th className="text-left py-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Ưu điểm</th>
                <th className="text-left py-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Nhược điểm</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              <tr className="border-b border-white/5">
                <td className="py-3 text-accent font-semibold">Native</td>
                <td className="py-3 text-xs">Hard-coded trong agent</td>
                <td className="py-3 text-xs text-emerald-400">Nhanh, kiểm soát tốt</td>
                <td className="py-3 text-xs text-red-400">Không flexible</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 text-accent font-semibold">Plugin</td>
                <td className="py-3 text-xs">API riêng mỗi provider</td>
                <td className="py-3 text-xs text-emerald-400">Nhiều lựa chọn</td>
                <td className="py-3 text-xs text-red-400">API không thống nhất</td>
              </tr>
              <tr>
                <td className="py-3 text-accent font-semibold">MCP</td>
                <td className="py-3 text-xs">Protocol chuẩn hóa</td>
                <td className="py-3 text-xs text-emerald-400">Universal, plug & play</td>
                <td className="py-3 text-xs text-red-400">Còn mới, đang phát triển</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Helper components */

function ToolBlock({
  icon: Icon,
  name,
  sample,
  category,
}: {
  icon: LucideIcon;
  name: string;
  sample: string;
  category: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/40 p-3 hover:border-accent/30 transition">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-accent" />
          <span className="text-white text-xs font-semibold">{name}</span>
        </div>
        <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 border border-white/5 px-1 py-0.5 rounded">
          {category}
        </span>
      </div>
      <code className="font-mono text-[10px] text-zinc-500 block truncate">
        {sample}
      </code>
    </div>
  );
}

function FlowStep({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex-1 min-w-[160px] rounded-lg border border-white/5 bg-bg-base/50 p-4">
      <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-mono text-accent mb-2">
        {n}
      </div>
      <div className="text-white font-semibold text-sm mb-1">{title}</div>
      <div className="text-xs text-zinc-500">{desc}</div>
    </div>
  );
}

function StepArrow() {
  return <ChevronRight className="w-5 h-5 text-zinc-700 shrink-0 mt-8" />;
}

function MCPFeature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      <div>
        <span className="text-white text-xs font-semibold">{label}</span>
        <span className="text-xs text-zinc-400"> — {desc}</span>
      </div>
    </div>
  );
}

function MCPServer({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-md border border-white/5 bg-bg-base/60 px-3 py-2 hover:border-accent/30 transition">
      <div className="text-white text-xs font-semibold">{name}</div>
      <div className="text-[10px] text-zinc-500">{desc}</div>
    </div>
  );
}
