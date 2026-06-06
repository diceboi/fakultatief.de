"use client";

import { motion } from "framer-motion";

/**
 * Section — consistent section wrapper with optional thin border lines.
 *
 * Props:
 *   id        – HTML id for anchor links
 *   bg        – Tailwind bg class (default: bg-dark)
 *   borderTop – show 1px top border
 *   borderBot – show 1px bottom border
 *   className – extra classes
 *   fullWidth – if true, no max-w / px constraint
 *   animate   – enable scroll-triggered fade-in
 */
export default function Section({
  id,
  bg = "bg-dark",
  borderTop = false,
  borderBot = false,
  className = "",
  fullWidth = false,
  animate = true,
  children,
  ...props
}) {
  const Wrapper = animate ? motion.section : "section";
  const animateProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: "easeOut" },
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={`
        ${bg}
        ${borderTop ? "border-t border-border-line" : ""}
        ${borderBot ? "border-b border-border-line" : ""}
        ${className}
      `}
      {...animateProps}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
          {children}
        </div>
      )}
    </Wrapper>
  );
}
