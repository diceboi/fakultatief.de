"use client";

import { ButtonText } from "./Typography";

/**
 * MainButton – primary CTA (solid fill).
 *
 * <MainButton
 *   color="bg-primary" hoverColor="hover:bg-white"
 *   textColor="text-dark" hoverTextColor="hover:text-dark"
 *   iconBefore={<FaWhatsapp />} iconAfter={<FaArrowRight />}
 *   borderColor="border-primary" borderHoverColor="hover:border-white"
 *   href="https://wa.me/..."
 * />
 */
export function MainButton({
  color = "bg-primary",
  hoverColor = "hover:bg-white",
  textColor = "text-dark",
  hoverTextColor = "hover:text-dark",
  iconBefore = null,
  iconAfter = null,
  borderColor = "border-primary",
  borderHoverColor = "hover:border-white",
  href = null,
  className = "",
  children,
  onClick,
  ...props
}) {
  const classes = `
    group inline-flex items-center gap-2.5 
    px-7 py-3.5 border 
    ${color} ${hoverColor} 
    ${textColor} ${hoverTextColor}
    ${borderColor} ${borderHoverColor}
    transition-all duration-300 ease-out
    cursor-pointer select-none
    ${className}
  `.trim();

  const inner = (
    <>
      {iconBefore && (
        <span className="text-lg transition-transform duration-300 group-hover:scale-110">
          {iconBefore}
        </span>
      )}
      <ButtonText>{children}</ButtonText>
      {iconAfter && (
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          {iconAfter}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {inner}
    </button>
  );
}

/**
 * SecondaryButton – outline/ghost CTA.
 */
export function SecondaryButton({
  color = "bg-transparent",
  hoverColor = "hover:bg-primary",
  textColor = "text-white",
  hoverTextColor = "hover:text-dark",
  iconBefore = null,
  iconAfter = null,
  borderColor = "border-white/30",
  borderHoverColor = "hover:border-primary",
  href = null,
  className = "",
  children,
  onClick,
  ...props
}) {
  const classes = `
    group inline-flex items-center gap-2.5
    px-7 py-3.5 border
    ${color} ${hoverColor}
    ${textColor} ${hoverTextColor}
    ${borderColor} ${borderHoverColor}
    transition-all duration-300 ease-out
    cursor-pointer select-none
    ${className}
  `.trim();

  const inner = (
    <>
      {iconBefore && (
        <span className="text-lg transition-transform duration-300 group-hover:scale-110">
          {iconBefore}
        </span>
      )}
      <ButtonText>{children}</ButtonText>
      {iconAfter && (
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          {iconAfter}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {inner}
    </button>
  );
}
