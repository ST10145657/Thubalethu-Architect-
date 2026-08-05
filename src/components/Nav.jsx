import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", path: "/", code: "01" },
  { label: "Projects", path: "/projects", code: "02" },
  { label: "Studio", path: "/about", code: "03" },
  { label: "Team", path: "/team", code: "04" },
  { label: "Contact", path: "/contact", code: "05" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-obsidian/15 bg-concrete/70 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid h-9 w-9 place-items-center bg-burgundy">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <g fill="#bf2929">
                  <rect x="2" y="11" width="3.2" height="11" />
                  <rect x="6.4" y="6" width="3.2" height="16" />
                  <rect x="10.8" y="9" width="3.2" height="13" />
                  <rect x="15.2" y="3" width="3.2" height="19" />
                  <rect x="19.6" y="8" width="3.2" height="14" />
                </g>
              </svg>
            </span>
            <div className="leading-none">
              <div className="font-heading font-bold uppercase tracking-[0.18em] text-[15px]">Thubalethu</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Architects · Est. PMB</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  `group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-burgundy" : "text-obsidian hover:text-slate"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-2">
                    <span className="text-muted-foreground">{l.code}</span>
                    {l.label}
                    {isActive && <span className="absolute -bottom-px left-0 h-px w-full bg-burgundy" />}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile floorplan menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-concrete flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-obsidian/15">
            <span className="font-heading font-bold uppercase tracking-[0.2em]">Floorplan</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-6">
            {LINKS.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`flex items-baseline gap-4 py-5 border-b border-obsidian/15 ${
                  location.pathname === l.path ? "text-burgundy" : ""
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground">{l.code}</span>
                <span className="font-heading text-3xl font-bold uppercase tracking-tight">{l.label}</span>
              </Link>
            ))}
          </nav>
          <div className="px-6 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            215 Greyling Street · Pietermaritzburg · 033 342 3992
          </div>
        </div>
      )}
    </>
  );
}