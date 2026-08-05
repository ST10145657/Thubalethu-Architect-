import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/SectionTag";

const PROJECTS = [
  {
    code: "P-01",
    title: "Civic Bridge Pavilion",
    typology: "Civic · Infrastructure",
    year: "2023",
    location: "Pietermaritzburg, KZN",
    status: "Completed",
    materials: "Steel · Concrete · Timber",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/4acf362d3_generated_6e9553cd.png",
    desc: "A pedestrian bridge pavilion mediating two civic precincts, expressing the structural junction of steel and concrete.",
  },
  {
    code: "P-02",
    title: "Brutalist Brise Tower",
    typology: "Commercial · Office",
    year: "2022",
    location: "Durban, KZN",
    status: "Completed",
    materials: "Raw Concrete · Aluminium louvres",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/adf69d4f7_generated_1d430a59.png",
    desc: "A commercial tower whose louvered facade moderates solar gain while asserting a monumental concrete language.",
  },
  {
    code: "P-03",
    title: "Greyling Pavilion",
    typology: "Cultural · Public",
    year: "2021",
    location: "Pietermaritzburg, KZN",
    status: "Completed",
    materials: "Concrete · Glass · Timber",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/a582b43bc_generated_e8a93c47.png",
    desc: "A low-slung cultural pavilion with horizontal concrete planes opening to the KZN landscape at golden hour.",
  },
  {
    code: "P-04",
    title: "Faceted Mixed-Use Tower",
    typology: "Mixed-Use · Residential",
    year: "2024",
    location: "Durban, KZN",
    status: "In Construction",
    materials: "Glass · Steel",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/c99916992_generated_058ec0a1.png",
    desc: "A faceted glass-and-steel tower stitching residential, retail and public realm into a single vertical street.",
  },
  {
    code: "P-05",
    title: "Rhythmic Social Housing",
    typology: "Residential · Social",
    year: "2020",
    location: "KZN Midlands",
    status: "Completed",
    materials: "Concrete · Greenery",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/f7f59a85c_generated_244adaf8.png",
    desc: "Social housing with a rhythmic concrete balcony system and integrated planting — dignity through repetition.",
  },
  {
    code: "P-06",
    title: "Civic Dusk Building",
    typology: "Civic · Institutional",
    year: "2023",
    location: "Pietermaritzburg, KZN",
    status: "Completed",
    materials: "Glass · Concrete",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/488389ed1_generated_80eb9862.png",
    desc: "A modern glass-and-concrete civic building emerging from the urban landscape at blue hour.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const typologies = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.typology.split(" · ")[0])))];
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.typology.startsWith(filter));

  return (
    <div>
      {/* Header */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <SectionTag code="02">Gallery of Progress</SectionTag>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
              Built work,<br />pinned to the line.
            </h1>
            <p className="lg:col-span-4 font-mono text-sm text-muted-foreground leading-relaxed">
              A vertical register of selected projects. Each entry reads like a drafting sheet —
              pinned, dimensioned, and tendered for your review.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap gap-px border border-obsidian/15">
            {typologies.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  filter === t ? "bg-obsidian text-concrete" : "bg-concrete text-obsidian hover:bg-steel/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project register */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 md:py-20 space-y-px bg-obsidian/15 border-x border-b border-obsidian/15">
          {list.map((p) => (
            <article key={p.code} className="group bg-concrete">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-7 relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                    <Image src={p.img} alt={p.title} className="h-full w-full transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
                  </div>
                  {/* drafting reveal overlay */}
                  <div className="reveal-layer absolute inset-0 bg-obsidian/60">
                    <div className="absolute inset-0 p-6 font-mono text-[10px] uppercase tracking-[0.2em] text-concrete/80 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <span>{p.code} · Drafting View</span>
                        <span>SCALE 1:200</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-w-xs">
                        <span>↔ STRUCTURAL GRID: 7.5m</span>
                        <span>↕ FLOOR-FLOOR: 3.6m</span>
                        <span>◯ SITE AREA: 2,400m²</span>
                        <span>◇ GFA: 6,800m²</span>
                      </div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#fff" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#fff" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                {/* Spec sheet */}
                <div className="lg:col-span-5 p-8 md:p-10 flex flex-col">
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-burgundy">{p.code}</div>
                  <h2 className="mt-4 font-heading font-bold uppercase text-3xl md:text-4xl leading-[1]">{p.title}</h2>
                  <p className="mt-5 font-mono text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <dl className="mt-8 divide-y divide-obsidian/15 border-t border-b border-obsidian/15 font-mono text-xs">
                    {[
                      ["Typology", p.typology],
                      ["Location", p.location],
                      ["Year", p.year],
                      ["Materials", p.materials],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 py-3">
                        <dt className="uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                        <dd className="text-right text-obsidian">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link to="/contact" className="mt-8 inline-flex items-center gap-3 self-start group/btn">
                    <span className="inline-flex items-center gap-2 bg-obsidian/5 border border-obsidian/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-obsidian">
                      <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                      {p.status}
                    </span>
                    <span className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.15em] text-sm text-burgundy group-hover/btn:gap-3 transition-all">
                      Request Project Brief <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 text-center">
          <p className="font-mono text-sm text-muted-foreground max-w-md mx-auto">
            Have a project in mind? Let's draft it together.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.15em] text-sm text-burgundy hover:gap-3 transition-all">
            Initiate Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}