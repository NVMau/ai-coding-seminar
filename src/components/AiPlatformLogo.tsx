interface Props {
  size?: "sm" | "md" | "lg";
  tone?: "accent" | "white";
  className?: string;
}

/**
 * "AI Platform TEAM" logo — vẽ lại từ logo gốc do team cung cấp.
 * Khung chữ nhật bao quanh "AI Platform"; chữ "TEAM" cắt qua viền dưới.
 *
 * tone="accent" → viền cam, chữ trắng (default cho dark theme)
 * tone="white"  → toàn bộ trắng, dùng khi cần neutral
 *
 * Sizes:
 *  sm  → 96 × 36   (top nav)
 *  md  → 180 × 68  (badge ở hero / outro)
 *  lg  → 280 × 105 (full hero)
 */
export function AiPlatformLogo({
  size = "md",
  tone = "accent",
  className = "",
}: Props) {
  const dims = {
    sm: { w: 96, h: 36 },
    md: { w: 180, h: 68 },
    lg: { w: 280, h: 105 },
  }[size];

  const frame = tone === "accent" ? "rgb(255 106 0)" : "rgb(244 244 245)";
  const text = "rgb(244 244 245)";
  const teamColor = tone === "accent" ? "rgb(255 106 0)" : "rgb(244 244 245)";

  return (
    <svg
      width={dims.w}
      height={dims.h}
      viewBox="0 0 240 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI Platform Team"
      role="img"
      className={className}
    >
      {/* Top */}
      <line x1="8" y1="12" x2="232" y2="12" stroke={frame} strokeWidth="2.2" />
      {/* Left */}
      <line x1="8" y1="12" x2="8" y2="66" stroke={frame} strokeWidth="2.2" />
      {/* Right */}
      <line
        x1="232"
        y1="12"
        x2="232"
        y2="66"
        stroke={frame}
        strokeWidth="2.2"
      />
      {/* Bottom — broken by TEAM */}
      <line x1="8" y1="66" x2="76" y2="66" stroke={frame} strokeWidth="2.2" />
      <line
        x1="164"
        y1="66"
        x2="232"
        y2="66"
        stroke={frame}
        strokeWidth="2.2"
      />

      {/* "AI Platform" */}
      <text
        x="120"
        y="48"
        textAnchor="middle"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={text}
        letterSpacing="-0.5"
      >
        AI Platform
      </text>

      {/* "TEAM" — cắt qua viền dưới */}
      <text
        x="120"
        y="82"
        textAnchor="middle"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="20"
        fontWeight="500"
        fill={teamColor}
        letterSpacing="6"
      >
        TEAM
      </text>
    </svg>
  );
}
