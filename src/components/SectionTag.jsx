import React from "react";

// A small drafting-style section header with index code + label.
export default function SectionTag({ code, children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-burgundy" />
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {code && <span className="text-burgundy">{code} </span>}
        {children}
      </span>
    </div>
  );
}