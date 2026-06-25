"use client";

/**
 * Clamped, reusable typography components.
 *
 * Every component accepts:
 *   color     – Tailwind text-color class (e.g. "text-primary")
 *   weight    – Tailwind font-weight class (e.g. "font-bold")
 *   className – extra Tailwind utilities
 *   as        – override rendered HTML tag
 *   children  – content
 */

const base = "font-body leading-tight";

/* ── H1 ── */
export function H1({
  color = "text-white",
  weight = "font-normal",
  className = "",
  as: Tag = "h1",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-heading lowercase tracking-tighter ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-h1)", lineHeight: 1.05 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── H2 ── */
export function H2({
  color = "text-white",
  weight = "font-bold",
  className = "",
  as: Tag = "h2",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-heading lowercase ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-h2)", lineHeight: 1.1 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── H3 ── */
export function H3({
  color = "text-white",
  weight = "font-semibold",
  className = "",
  as: Tag = "h3",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-h3)", lineHeight: 1.2 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── H4 ── */
export function H4({
  color = "text-white",
  weight = "font-semibold",
  className = "",
  as: Tag = "h4",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-h4)", lineHeight: 1.25 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── Paragraph ── */
export function Paragraph({
  color = "text-muted-light",
  weight = "font-normal",
  className = "",
  as: Tag = "p",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-body)", lineHeight: 1.7 }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── Span ── */
export function Span({
  color = "text-white",
  weight = "font-normal",
  className = "",
  as: Tag = "span",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-body)" }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── Small ── */
export function Small({
  color = "text-muted",
  weight = "font-normal",
  className = "",
  as: Tag = "span",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-small)" }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── ButtonText ── */
export function ButtonText({
  color = "text-current",
  weight = "font-semibold",
  className = "",
  as: Tag = "span",
  children,
  ...props
}) {
  return (
    <Tag
      className={`font-body uppercase tracking-wider ${color} ${weight} ${className}`}
      style={{ fontSize: "var(--type-button)" }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ── SectionLabel (thin-line subtitle) ── */
export function SectionLabel({
  color = "text-primary",
  weight = "font-medium",
  className = "",
  children,
  ...props
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <span className="block w-8 h-px bg-primary" />
      <span
        className={`font-body uppercase tracking-[0.2em] ${color} ${weight}`}
        style={{ fontSize: "var(--type-small)" }}
      >
        {children}
      </span>
    </div>
  );
}
