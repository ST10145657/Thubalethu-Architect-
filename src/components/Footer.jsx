import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-obsidian/20 bg-obsidian text-concrete">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-burgundy">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <g fill="#fff">
                    <rect x="2" y="11" width="3.2" height="11" />
                    <rect x="6.4" y="6" width="3.2" height="16" />
                    <rect x="10.8" y="9" width="3.2" height="13" />
                    <rect x="15.2" y="3" width="3.2" height="19" />
                    <rect x="19.6" y="8" width="3.2" height="14" />
                  </g>
                </svg>
              </span>
              <span className="font-heading font-bold uppercase tracking-[0.18em] text-lg">Thubalethu</span>
            </div>
            <p className="mt-5 font-mono text-sm text-concrete/60 max-w-sm leading-relaxed">
              A firm of Architects, Urban Designers and Project Managers shaping the built
              environment of KwaZulu-Natal and beyond.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="section-tag !text-concrete/50 mb-4">Sitemap</div>
            <ul className="space-y-2 font-mono text-sm">
              {[
                { l: "Home", to: "/" },
                { l: "Projects", to: "/projects" },
                { l: "Studio", to: "/about" },
                { l: "Team", to: "/team" },
                { l: "Contact", to: "/contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-burgundy transition-colors">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="section-tag !text-concrete/50 mb-4">Coordinates</div>
            <ul className="space-y-3 font-mono text-sm text-concrete/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-burgundy" />
                <span>215 Greyling Street, Pietermaritzburg, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-burgundy" />
                <a href="tel:+27333423992" className="hover:text-concrete">033 342 3992</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-burgundy" />
                <a href="https://thubalethu.co.za" target="_blank" rel="noreferrer" className="hover:text-concrete">thubalethu.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-concrete/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-concrete/40">
          <span>© {new Date().getFullYear()} Thubalethu Architects — All rights reserved</span>
          <span>Drafted in Pietermaritzburg · 29°37′S 30°23′E</span>
        </div>
      </div>
    </footer>
  );
}