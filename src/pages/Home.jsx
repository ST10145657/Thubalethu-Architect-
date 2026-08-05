import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowUpRight, Ruler, Building2, Layers, Compass } from "lucide-react";
import TenderButton from "@/components/TenderButton";
import SectionTag from "@/components/SectionTag";

const HERO = "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/488389ed1_generated_80eb9862.png";
const DETAIL = "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/4acf362d3_generated_6e9553cd.png";
const CONCRETE = "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/adf69d4f7_generated_1d430a59.png";

const PILLARS = [
  { icon: Building2, title: "Architecture", desc: "Buildings of permanence, drafted with intent." },
  { icon: Layers, title: "Urban Design", desc: "Cities and places shaped for people." },
  { icon: Compass, title: "Project Management", desc: "Delivery, on time, to specification." },
];

export default function Home() {
  return (
    <div>
      {/* HERO — The Threshold */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="Modern civic building at dusk" className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-obsidian/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
        </div>

        {/* Drafting X across hero */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.25" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.25" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 w-full py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-burgundy" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-concrete/70">
                01 / Threshold · Pietermaritzburg
              </span>
            </div>
            <h1 className="font-heading font-bold uppercase tracking-tight text-concrete text-[clamp(2.8rem,8vw,7rem)] leading-[0.95]">
              We draft<br />the city's<br />
              <span className="text-burgundy">next chapter.</span>
            </h1>
            <p className="mt-8 font-mono text-base text-concrete/80 max-w-xl leading-relaxed">
              Thubalethu is a firm of Architects, Urban Designers and Project Managers —
              building the structural fabric of KwaZulu-Natal with precision, restraint and care.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TenderButton to="/contact" variant="solid" className="!bg-burgundy">
                Initiate Consultation
              </TenderButton>
              <TenderButton to="/projects" variant="solid" className="!bg-transparent !border !border-concrete/40 !text-concrete hover:!bg-concrete hover:!text-obsidian">
                View Projects
              </TenderButton>
            </div>
          </div>
        </div>

       
      </section>

      {/* PILLARS */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <SectionTag code="02">Core Disciplines</SectionTag>
          <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl">
            Three disciplines, one drawing board.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-obsidian/15 border border-obsidian/15">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="group bg-concrete p-8 md:p-10 hover:bg-obsidian transition-colors duration-500">
                <div className="flex items-center justify-between">
                  <p.icon className="h-8 w-8 text-burgundy" strokeWidth={1.5} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-concrete/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-heading font-bold uppercase text-2xl tracking-tight group-hover:text-concrete">
                  {p.title}
                </h3>
                <p className="mt-3 font-mono text-sm text-muted-foreground group-hover:text-concrete/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionTag code="03">Position</SectionTag>
            <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05]">
              The drawing is the contract. The building is the proof.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 font-mono text-base text-foreground/80 leading-relaxed">
            <p>
              For over two decades, Thubalethu has translated ambitious briefs into built form —
              civic, commercial, residential and institutional. Our work is grounded in the belief
              that good architecture is public infrastructure: it serves, it endures, it dignifies.
            </p>
            <p>
              We operate across the full project lifecycle — from the first site sketch to the
              final handover — fusing the rigour of urban design with the discipline of project
              management. Every line we draw is accountable to budget, context and time.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.15em] text-sm text-burgundy hover:gap-3 transition-all">
              Read the studio brief <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK PREVIEW */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <SectionTag code="04">Selected Work</SectionTag>
              <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(2rem,5vw,4rem)] leading-[1]">
                Monuments in progress.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-obsidian hover:text-burgundy transition-colors">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-px bg-obsidian/15 border border-obsidian/15">
            {[DETAIL, CONCRETE].map((src, i) => (
              <Link key={i} to="/projects" className="group relative bg-concrete overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image src={src} alt="Project" className="h-full w-full transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
                </div>
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-concrete/70">Project 0{i + 1}</span>
                  <span className="font-heading font-bold uppercase text-concrete text-2xl mt-1">View Brief →</span>
                </div>
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-concrete bg-obsidian/50 px-2 py-1">
                  KZN · SA
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-obsidian/15 bg-obsidian text-concrete">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "25+", l: "Years in practice" },
            { n: "400+", l: "Projects delivered" },
            { n: "3", l: "Core disciplines" },
            { n: "1", l: "Drawing board" },
          ].map((s) => (
            <div key={s.l} className="border-l border-burgundy pl-5">
              <div className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none">{s.n}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-concrete/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-24 md:py-32 text-center">
          <SectionTag code="05" className="justify-center">Initiate</SectionTag>
          <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(2.2rem,6vw,5rem)] leading-[1] max-w-4xl mx-auto text-balance">
            Bring us your site. We'll bring the structure.
          </h2>
          <p className="mt-6 font-mono text-base text-muted-foreground max-w-lg mx-auto">
            Whether it's a single dwelling or a city block, the conversation starts with a brief.
          </p>
          <div className="mt-10 flex justify-center">
            <TenderButton to="/contact" variant="solid" className="!bg-burgundy">
              Submit a Brief
            </TenderButton>
          </div>
        </div>
      </section>
    </div>
  );
}