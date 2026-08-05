import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, MapPin, Globe, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import SectionTag from "@/components/SectionTag";

const CENTER = [-29.6145, 30.3917]; // approx Pietermaritzburg

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const valid = form.name && form.email && form.message;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    // Simulated tender submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Brief received",
        description: "Our studio will respond within two working days.",
      });
      setForm({ name: "", email: "", phone: "", project_type: "", budget: "", message: "" });
    }, 900);
  };

  const inputCls =
    "w-full bg-transparent border-b border-obsidian/30 py-3 font-mono text-sm text-obsidian placeholder:text-muted-foreground focus:border-burgundy focus:outline-none transition-colors";

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-20 md:py-28">
          <SectionTag code="05">The Briefing Room</SectionTag>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
              Submit a <span className="text-burgundy">brief.</span><br />We'll draft a response.
            </h1>
            <p className="lg:col-span-4 font-mono text-sm text-muted-foreground leading-relaxed">
              Whether it's a single dwelling or a city block, the conversation starts here.
              Use the tender form below, or visit us at 215 Greyling Street.
            </p>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="border-b border-obsidian/15">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="relative min-h-[420px] bg-steel/30 border-r border-obsidian/15">
            <MapContainer
              center={CENTER}
              zoom={14}
              scrollWheelZoom={false}
              className="h-full w-full min-h-[420px]"
              style={{ filter: "grayscale(1) contrast(1.1)" }}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={CENTER}>
                <Popup>
                  Thubalethu Architects<br />215 Greyling Street, PMB
                </Popup>
              </Marker>
            </MapContainer>

            <div className="absolute bottom-4 left-4 right-4 bg-obsidian text-concrete p-5 font-mono text-xs">
              <div className="flex items-center gap-2 text-burgundy">
                <MapPin className="h-4 w-4" />
                <span className="uppercase tracking-[0.2em]">Site Coordinates</span>
              </div>
              <div className="mt-2 text-concrete/80">215 Greyling Street, Pietermaritzburg, South Africa</div>
              <div className="mt-1 text-concrete/60">LAT 29°37′S · LON 30°23′E</div>
            </div>
          </div>

          {/* Tender form */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between border-b border-obsidian/15 pb-4">
              <span className="font-heading font-bold uppercase tracking-[0.18em] text-sm">Project Inquiry · Tender Document</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">FORM-01 / Rev A</span>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">01 · Name</label>
                  <input value={form.name} onChange={update("name")} className={inputCls} placeholder="Client name" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">02 · Email</label>
                  <input type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="you@email.com" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">03 · Phone</label>
                  <input value={form.phone} onChange={update("phone")} className={inputCls} placeholder="Optional" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">04 · Project Type</label>
                  <select value={form.project_type} onChange={update("project_type")} className={inputCls}>
                    <option value="">Select type</option>
                    <option>Architecture</option>
                    <option>Urban Design</option>
                    <option>Project Management</option>
                    <option>Combined Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">05 · Indicative Budget</label>
                <select value={form.budget} onChange={update("budget")} className={inputCls}>
                  <option value="">Select range</option>
                  <option>Under R1m</option>
                  <option>R1m – R5m</option>
                  <option>R5m – R25m</option>
                  <option>R25m+</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">06 · The Brief</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Describe the site, scope and ambition…"
                />
              </div>

              <button
                type="submit"
                disabled={!valid || submitting}
                className={`group relative w-full inline-flex items-center justify-center gap-3 px-7 py-4 font-heading font-bold uppercase tracking-[0.18em] text-sm transition-all duration-300 ${
                  valid && !submitting
                    ? "bg-burgundy text-concrete hover:bg-obsidian animate-pulse"
                    : "bg-steel/50 text-muted-foreground"
                }`}
              >
                {submitting ? "Submitting…" : (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                    Submit Brief
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-obsidian/15 border border-obsidian/15">
          {[
            { icon: Phone, label: "Telephone", value: "033 342 3992", href: "tel:+27333423992" },
            { icon: Globe, label: "Web", value: "thubalethu.co.za", href: "https://thubalethu.co.za" },
            { icon: Clock, label: "Studio Hours", value: "Mon–Fri · 08:00–17:00" },
          ].map((c) => (
            <div key={c.label} className="bg-concrete p-8 flex items-start gap-4">
              <c.icon className="h-6 w-6 text-burgundy shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="mt-1 font-heading font-bold uppercase text-lg hover:text-burgundy transition-colors">{c.value}</a>
                ) : (
                  <div className="mt-1 font-heading font-bold uppercase text-lg">{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}