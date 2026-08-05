import React, { useEffect, useRef, useState } from "react";

export default function CrosshairCursor() {
  const ref = useRef(null);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const move = (e) => {
      const el = ref.current;
      if (el) {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const target = e.target;
      setHot(
        target.closest("a, button, [role='button'], input, textarea, select, label") !== null
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="crosshair-cursor">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className={`transition-transform duration-200 ${hot ? "scale-110" : "scale-100"}`}
        style={{ transformOrigin: "0 0" }}
      >
        <g transform="rotate(45 0 0)">
          <polygon points="0,0 4,4 0,8" fill="#1A1A1A" />
          <polygon points="4,4 8,0 12,4 8,8" fill="#E8C9A0" />
          <rect x="8" y="0" width="14" height="4" fill="#8b1313" />
          <rect x="22" y="0" width="3" height="4" fill="#D1D1D1" />
          <rect x="25" y="0" width="5" height="4" fill="#F2A0A0" />
          <rect x="0" y="0" width="30" height="4" fill="none" stroke="#1A1A1A" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}