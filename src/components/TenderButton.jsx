import React from "react";
import { Link } from "react-router-dom";

// A reusable CTA button styled like an architectural tender stamp.
export default function TenderButton({ to, href, onClick, children, variant = "solid", className = "" }) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 px-7 py-4 font-heading font-bold uppercase tracking-[0.18em] text-sm transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-slate text-concrete hover:bg-burgundy"
      : "border border-obsidian text-obsidian hover:bg-obsidian hover:text-concrete";
  const inner = (
    <span className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      {children}
      <span className="font-mono text-[10px] opacity-60">→</span>
    </span>
  );
  if (to)
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {inner}
    </button>
  );
}