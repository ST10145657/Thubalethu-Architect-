import React from "react";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, Layers, Building2, ShieldCheck } from "lucide-react";
import SectionTag from "@/components/SectionTag";
import TenderButton from "@/components/TenderButton";

const STUDIO = "https://media.base44.com/images/public/6a6bd0049d39b9dd138a98bd/2518281a8_generated_222e0b16.png";

const VALUES = [
  { icon: Compass, t: "Context First", d: "Every site speaks before we draw. We listen to the land, the climate and the community." },
  { icon: Layers, t: "Drawn to Deliver", d: "Our drawings are contracts — clear, buildable and accountable to budget and time." },
  { icon: Building2, t: "Public Good", d: "Architecture is infrastructure. We design for dignity, endurance and use." },
  { icon: ShieldCheck, t: "Managed End-to-End", d: "From first sketch to final handover, we manage risk, cost and programme as one." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <SectionTag code="03">The Studio</SectionTag>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
              A firm of<br />architects, urban<br />designers &amp; <span className="text-burgundy">project managers.</span>
            </h1>
            <p className="lg:col-span-4 font-mono text-sm text-muted-foreground leading-relaxed">
              Based at 215 Greyling Street, Pietermaritzburg, Thubalethu has shaped the built
              environment of KwaZulu-Natal for over two decades — from civic landmarks to social housing.
            </p>
          </div>
        </div>
      </section>

      {/* Image + caption */}
      <section className="border-b border-obsidian/15">
        <div className="relative">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <Image src={STUDIO} alt="Thubalethu studio interior" className="h-full w-full" fittingType="fill" />
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-obsidian/80 to-transparent p-6 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-concrete/80">
              The Drawing Board · 215 Greyling Street
            </span>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionTag code="03.1">Position</SectionTag>
            <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05]">
              We build the city, not just the building.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-mono text-base text-foreground/80 leading-relaxed">
            <p>
              Thubalethu means "for the nation" — and that charge guides every line we draw. We are
              a multi-disciplinary practice: architects who think like urbanists, urban designers who
              think like builders, and project managers who keep all of it accountable.
            </p>
            <p>
              Our portfolio spans civic and institutional buildings, commercial developments, residential
              estates and social housing. We work at the scale of the detail and the scale of the district,
              always asking the same question: does this serve the people who will inherit it?
            </p>
            <p>
              We believe in restraint, in the honesty of materials, and in the discipline of the grid.
              Our drawings are precise because our buildings must be. Our management is rigorous because
              our clients' trust is finite.
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-24">
          <SectionTag code="03.2">Operating Principles</SectionTag>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/15 border border-obsidian/15">
            {VALUES.map((v, i) => (
              <div key={v.t} className="bg-concrete p-8 md:p-10 group hover:bg-obsidian transition-colors duration-500">
                <div className="flex items-center justify-between">
                  <v.icon className="h-8 w-8 text-burgundy" strokeWidth={1.5} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-concrete/60">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-heading font-bold uppercase text-xl tracking-tight group-hover:text-concrete">{v.t}</h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground group-hover:text-concrete/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-obsidian/15 bg-obsidian text-concrete">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-24">
          <SectionTag code="03.3" className="!text-concrete/50">Build Sequence</SectionTag>
          <h2 className="mt-6 font-heading font-bold uppercase text-[clamp(1.8rem,4vw,3rem)] leading-[1.05]">
            From brief to handover.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              ["01", "Brief", "We listen, survey the site and define the problem worth solving."],
              ["02", "Concept", "We test ideas against context, budget and programme on the drawing board."],
              ["03", "Develop", "We detail, coordinate consultants and tender the works to contractors."],
              ["04", "Handover", "We manage construction to completion and deliver a building that endures."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-l border-burgundy pl-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-burgundy">{n}</div>
                <h3 className="mt-4 font-heading font-bold uppercase text-xl">{t}</h3>
                <p className="mt-2 font-mono text-sm text-concrete/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-24 text-center">
          <p className="font-mono text-sm text-muted-foreground max-w-md mx-auto">
            Want to know who drafts the lines?
          </p>
          <Link to="/team" className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.15em] text-sm text-burgundy hover:gap-3 transition-all">
            Meet the Team <ArrowUpRight className="h-4 w-4" />
          </Link>
          <div className="mt-12 flex justify-center">
            <TenderButton to="/contact" variant="solid" className="!bg-burgundy">Start a Brief</TenderButton>
          </div>
        </div>
      </section>
    </div>
  );
}