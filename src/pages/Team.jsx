import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/SectionTag";

// B&W-treated architectural portraits rendered via generated imagery.
const TEAM = [
  {
    name: "Principal Architect",
    role: "Architect / Director",
    discipline: "Architecture",
    experience: "25Y",
    registration: "SACAP Pr.Arch",
    focus: "Civic · Institutional",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/4acf362d3_generated_6e9553cd.png",
  },
  {
    name: "Lead Urban Designer",
    role: "Urban Designer",
    discipline: "Urban Design",
    experience: "18Y",
    registration: "SACAP Pr.Planner",
    focus: "Masterplanning · Public Realm",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/adf69d4f7_generated_1d430a59.png",
  },
  {
    name: "Senior Project Manager",
    role: "Project Manager",
    discipline: "Project Management",
    experience: "20Y",
    registration: "PMISA",
    focus: "Delivery · Cost & Programme",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/a582b43bc_generated_e8a93c47.png",
  },
  {
    name: "Design Architect",
    role: "Architect",
    discipline: "Architecture",
    experience: "12Y",
    registration: "SACAP Pr.Arch",
    focus: "Residential · Commercial",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/c99916992_generated_058ec0a1.png",
  },
  {
    name: "Technologist & BIM Lead",
    role: "Architectural Technologist",
    discipline: "Technical",
    experience: "15Y",
    registration: "SACAP Pr.Tech",
    focus: "Documentation · BIM",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/f7f59a85c_generated_244adaf8.png",
  },
  {
    name: "Junior Architect",
    role: "Candidate Architect",
    discipline: "Architecture",
    experience: "4Y",
    registration: "SACAP Cand.Arch",
    focus: "Concept · Visualisation",
    img: "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/488389ed1_generated_80eb9862.png",
  },
];

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <SectionTag code="04">Human Infrastructure</SectionTag>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
              The people<br />behind the <span className="text-burgundy">grid.</span>
            </h1>
            <p className="lg:col-span-4 font-mono text-sm text-muted-foreground leading-relaxed">
              Our practice is its people. Each member is presented as a structural profile —
              discipline, experience and registration set out like a drafting schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-obsidian/15 border border-obsidian/15">
            {TEAM.map((m, i) => (
              <article key={i} className="group bg-concrete overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/0 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-concrete bg-obsidian/50 px-2 py-1">
                    Profile 0{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold uppercase text-xl leading-tight">{m.name}</h3>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-burgundy">{m.role}</div>

                  <dl className="mt-5 divide-y divide-obsidian/15 border-t border-b border-obsidian/15 font-mono text-[11px]">
                    {[
                      ["Discipline", m.discipline],
                      ["Experience", m.experience],
                      ["Registration", m.registration],
                      ["Focus", m.focus],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 py-2">
                        <dt className="uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                        <dd className="text-right text-obsidian">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-24 text-center">
          <SectionTag code="04.1" className="justify-center">Open Roster</SectionTag>
          <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] max-w-2xl mx-auto">
            We're always drafting the next team member.
          </h2>
          <p className="mt-5 font-mono text-sm text-muted-foreground max-w-md mx-auto">
            Architects, technologists and project managers are welcome to submit a portfolio for future openings.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.15em] text-sm text-burgundy hover:gap-3 transition-all">
            Submit a Portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}