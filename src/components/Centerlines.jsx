import React from "react";

export default function Centerlines() {
  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="centerlines" aria-hidden="true">
        <svg preserveAspectRatio="none">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#8b1313" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.18" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#8b1313" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.18" />
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.05" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.05" />
        </svg>
      </div>
    </>
  );
}