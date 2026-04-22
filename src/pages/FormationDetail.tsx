import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import { Marquee } from "@/components/motion/Marquee";
import formationImg from "@/assets/img-formation.jpg";
import hero from "@/assets/img-hero.jpg";
import about from "@/assets/img-about.jpg";
import contact from "@/assets/img-contact.jpg";
import mice from "@/assets/img-mice.jpg";
import p1 from "@/assets/portrait-1.jpg";
import p2 from "@/assets/portrait-2.jpg";
import p3 from "@/assets/portrait-3.jpg";

type Programme = {
  slug: string; t: string; tag: string; dur: string; price: string;
  italic: string; tagline: string; img: string; faculty: string; portrait: string;
  modules: [string, string][]; outcomes: string[]; schedule: [string, string][];
  heroStyle: "stack" | "grid" | "chart" | "marquee" | "code";
};

const PROGRAMMES: Programme[] = [
  {
    slug: "leadership", t: "Leadership", tag: "Executive", dur: "12 weeks", price: "€ 12,000",
    italic: "Architect of judgement.",
    tagline: "We don't train leaders. We compose them.",
    img: formationImg, faculty: "Pr. Hélène R.", portrait: p3,
    heroStyle: "stack",
    modules: [
      ["Self · Mirror", "Honest portrait of the leader you are."],
      ["Voice · Standing", "Editorial communication, stage and silence."],
      ["Power · Politics", "Map influence; refuse fear."],
      ["Decision · Stakes", "Rules for the rooms that matter."],
      ["Legacy", "Architect what outlasts you."],
    ],
    outcomes: ["Executive presence", "Strategic narrative", "Board readiness", "Mentorship"],
    schedule: [["Week 1–3", "Foundations · studio"], ["Week 4–7", "Cases · live boardrooms"], ["Week 8–10", "Mentorship sprints"], ["Week 11–12", "Final composition"]],
  },
  {
    slug: "strategy", t: "Strategy", tag: "Advanced", dur: "10 weeks", price: "€ 14,000",
    italic: "The disciplined long view.",
    tagline: "Strategy is composition under constraint.",
    img: hero, faculty: "Pr. Karim B.", portrait: p2,
    heroStyle: "grid",
    modules: [
      ["Frame", "What question are we really answering?"],
      ["Field", "Industry as an editorial map."],
      ["Move", "Asymmetric bets, repeatable."],
      ["Counter", "Game theory for adults."],
      ["Cadence", "Rhythm of decision."],
    ],
    outcomes: ["Strategic clarity", "Competitive moats", "Capital allocation", "Board-grade memos"],
    schedule: [["Week 1–2", "Frame · field"], ["Week 3–6", "Live cases"], ["Week 7–8", "War-gaming"], ["Week 9–10", "Strategic memo"]],
  },
  {
    slug: "finance", t: "Finance", tag: "Mastery", dur: "14 weeks", price: "€ 16,000",
    italic: "Capital with conscience.",
    tagline: "Finance, as architecture — not arithmetic.",
    img: about, faculty: "Pr. Aïcha M.", portrait: p1,
    heroStyle: "chart",
    modules: [
      ["Numbers · Truth", "Read statements like literature."],
      ["Valuation", "From DCF to taste."],
      ["Capital", "Structure, cost, conscience."],
      ["M&A", "Deals that compound."],
      ["Risk", "What can kill us, quietly."],
    ],
    outcomes: ["Valuation fluency", "Deal architecture", "Capital strategy", "Risk literacy"],
    schedule: [["Week 1–4", "Financial fluency"], ["Week 5–9", "Valuation labs"], ["Week 10–12", "Deal sprint"], ["Week 13–14", "Final dossier"]],
  },
  {
    slug: "marketing", t: "Marketing", tag: "Editorial", dur: "8 weeks", price: "€ 10,000",
    italic: "Build cult, not noise.",
    tagline: "Marketing is the editorial of an idea.",
    img: contact, faculty: "Pr. Hélène R.", portrait: p3,
    heroStyle: "marquee",
    modules: [
      ["Position", "Own a sentence."],
      ["Voice", "Tone, cadence, courage."],
      ["Story", "Narrative as moat."],
      ["Channel", "Distribution as design."],
      ["Loop", "Compounding attention."],
    ],
    outcomes: ["Brand position", "Editorial voice", "Story architecture", "Growth loops"],
    schedule: [["Week 1–2", "Position · voice"], ["Week 3–5", "Story sprints"], ["Week 6–7", "Channel design"], ["Week 8", "Brand book"]],
  },
  {
    slug: "technology", t: "Technology", tag: "Founder", dur: "12 weeks", price: "€ 13,000",
    italic: "Engineer the inevitable.",
    tagline: "Technology is the leverage of judgement.",
    img: mice, faculty: "Pr. Karim B.", portrait: p2,
    heroStyle: "code",
    modules: [
      ["Stack", "Choose what compounds."],
      ["Build", "Ship, weekly."],
      ["Scale", "Architecture under load."],
      ["AI · Edge", "Frontier tools, sober use."],
      ["Team", "Engineering culture."],
    ],
    outcomes: ["Technical literacy", "Architecture taste", "AI product design", "Engineering leadership"],
    schedule: [["Week 1–3", "Stack literacy"], ["Week 4–7", "Build sprints"], ["Week 8–10", "Scale labs"], ["Week 11–12", "Founding doc"]],
  },
];

const FormationDetail = () => {
  const { slug } = useParams();
  const p = PROGRAMMES.find(x => x.slug === slug);
  const [openMod, setOpenMod] = useState<number | null>(0);
  const [seats, setSeats] = useState(1);

  if (!p) return <Navigate to="/formations" replace />;

  return (
    <>
      {/* 01 HERO — distinct per programme */}
      <section className="relative min-h-screen flex items-end pt-32 pb-20 overflow-hidden grain bg-cream">
        <BigNumber n="01" />
        {/* Hero variants */}
        {p.heroStyle === "stack" && (
          <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        )}
        {p.heroStyle === "grid" && (
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(hsl(var(--deep-green)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--deep-green)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        )}
        {p.heroStyle === "chart" && (
          <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full opacity-25">
            <motion.path d="M0 500 L150 420 L300 460 L450 320 L600 380 L750 220 L900 280 L1050 120 L1200 180" fill="none" stroke="hsl(var(--teal))" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, ease: [0.2, 0.8, 0.2, 1] }} />
            {[150, 300, 450, 600, 750, 900, 1050].map((x, i) => (
              <motion.circle key={x} cx={x} cy={[420, 460, 320, 380, 220, 280, 120][i]} r="6" fill="hsl(var(--gold))"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 * i + 0.5 }} />
            ))}
          </svg>
        )}
        {p.heroStyle === "marquee" && (
          <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-20 overflow-hidden">
            <Marquee>{Array.from({ length: 6 }).map((_, i) => <span key={i} className="font-display font-extrabold text-7xl text-deep uppercase">Position · Voice · Story ·</span>)}</Marquee>
            <Marquee reverse>{Array.from({ length: 6 }).map((_, i) => <span key={i} className="font-italic-serif text-7xl text-gold">Compose · Edit · Ship ·</span>)}</Marquee>
          </div>
        )}
        {p.heroStyle === "code" && (
          <div className="absolute inset-0 opacity-15 font-mono text-xs text-teal leading-tight overflow-hidden p-8 select-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: i * 0.04 }}>
                {`> compose("${["scale", "build", "ship", "refine", "architect"][i % 5]}")  ↳ ${["ok", "✓", "ready", "live"][i % 4]}`}
              </motion.div>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />

        <div className="container-fluid relative">
          <Reveal>
            <Link to="/formations" data-cursor="BACK" className="font-display text-[10px] uppercase tracking-[0.3em] text-teal underline underline-offset-8 decoration-gold">← All formations</Link>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionLabel n={`— ${p.tag} 01`} label={`${p.dur} · cohort 24`} />
          </Reveal>
          <h1 className="mt-8 h-display text-[clamp(3rem,11vw,11rem)] text-deep leading-[0.9]">
            <SplitReveal text={p.t + "."} className="block" />
            <SplitReveal text={p.italic} as="span" className="block font-italic-serif font-normal text-gold not-italic" delay={0.25} />
          </h1>
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-xl text-lg text-deep/80">{p.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* 02 OVERVIEW */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="02" />
        <SectionLabel n="— Overview 02" label="The composition" />
        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <SplitReveal as="p" text={`A ${p.dur} editorial intensive built around ${p.t.toLowerCase()}. Studio over lecture. Project over exam. Mentor over manager.`} className="lg:col-span-8 h-display text-[clamp(1.75rem,3.5vw,3.5rem)] text-deep leading-tight" />
          <Reveal delay={0.2}>
            <div className="lg:col-span-4 space-y-6">
              {[["Format", "Hybrid · Casablanca + remote"], ["Cohort", "24 leaders, hand-picked"], ["Faculty", p.faculty], ["Investment", p.price]].map(([k, v]) => (
                <div key={k} className="border-t border-deep/15 pt-3">
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-teal">{k}</div>
                  <div className="mt-1 font-display text-xl text-deep">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 MODULES — accordion */}
      <section className="relative bg-deep text-cream py-32 grain">
        <BigNumber n="03" />
        <div className="container-fluid">
          <SectionLabel n="— Curriculum 03" label="Five modules" />
          <div className="mt-16 max-w-4xl">
            {p.modules.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <button onClick={() => setOpenMod(openMod === i ? null : i)} className="w-full text-left border-t border-cream/15 py-7 group" data-cursor={openMod === i ? "CLOSE" : "OPEN"}>
                  <div className="flex justify-between items-center gap-6">
                    <div className="flex items-baseline gap-6">
                      <span className="font-italic-serif text-gold text-xl">0{i + 1}</span>
                      <span className="font-display text-2xl md:text-4xl font-bold group-hover:text-gold transition-colors">{t}</span>
                    </div>
                    <span className={`text-3xl text-gold transition-transform ${openMod === i ? "rotate-45" : ""}`}>+</span>
                  </div>
                  <AnimatePresence>
                    {openMod === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                        <p className="pt-5 pl-12 font-italic-serif text-2xl text-cream/80">{d}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
            <div className="border-t border-cream/15" />
          </div>
        </div>
      </section>

      {/* 04 SCHEDULE TIMELINE */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="04" />
        <SectionLabel n="— Schedule 04" label="Twelve weeks of craft" />
        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-deep/20" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {p.schedule.map(([w, what], i) => (
              <Reveal key={w} delay={i * 0.08}>
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-gold border-4 border-cream relative z-10" />
                  <div className="mt-6 font-display text-[10px] uppercase tracking-[0.3em] text-teal">{w}</div>
                  <div className="mt-2 font-display text-xl text-deep font-bold">{what}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 INSTRUCTOR */}
      <section className="relative bg-cream py-32 container-fluid">
        <BigNumber n="05" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={p.portrait} alt={p.faculty} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionLabel n="— Architect 05" label="Lead faculty" />
            <SplitReveal text={p.faculty} className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
            <p className="mt-6 font-italic-serif text-2xl text-gold">{p.italic}</p>
            <p className="mt-6 max-w-md text-deep/70">Twenty years of practice across boardrooms, studios, and faculties. Teaches the way one composes — line by line.</p>
          </div>
        </div>
      </section>

      {/* 06 PRICING / COHORTS + SEATS */}
      <section className="relative bg-deep text-cream py-32 grain">
        <BigNumber n="06" />
        <div className="container-fluid">
          <SectionLabel n="— Cohort 06" label="Investment & seats" />
          <div className="mt-16 grid lg:grid-cols-3 gap-px bg-cream/10">
            {[
              { name: "Foundation", price: p.price, perks: ["Studio access", "All 5 modules", "Mentorship hours"] },
              { name: "Atelier", price: `€ ${parseInt(p.price.replace(/\D/g, "")) + 4000}`, perks: ["Everything in Foundation", "1:1 with lead faculty", "Alumni circle"], featured: true },
              { name: "Patron", price: "On request", perks: ["Bespoke composition", "Private cohort", "Lifetime access"] },
            ].map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div className={`p-10 h-full ${tier.featured ? "bg-gold text-deep" : "bg-deep"}`}>
                  <div className="font-italic-serif text-xl">{tier.featured ? "Most chosen" : `0${i + 1}`}</div>
                  <h3 className="mt-2 font-display text-3xl font-bold">{tier.name}</h3>
                  <div className="mt-6 h-display text-5xl">{tier.price}</div>
                  <ul className="mt-8 space-y-3">
                    {tier.perks.map(x => <li key={x} className="font-display text-sm flex gap-3"><span className={tier.featured ? "text-deep" : "text-gold"}>—</span>{x}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 justify-between">
            <div>
              <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold">Reserve seats</div>
              <div className="mt-2 flex items-center gap-6">
                <button onClick={() => setSeats(s => Math.max(1, s - 1))} className="w-12 h-12 rounded-full border border-cream/30 hover:border-gold transition-colors text-2xl">−</button>
                <span className="font-display text-5xl tabular-nums w-16 text-center">{seats}</span>
                <button onClick={() => setSeats(s => Math.min(24, s + 1))} className="w-12 h-12 rounded-full border border-cream/30 hover:border-gold transition-colors text-2xl">+</button>
                <span className="font-italic-serif text-gold text-xl">/ 24 available</span>
              </div>
            </div>
            <MagneticButton to="/contact" cursor="APPLY" className="bg-gold text-deep rounded-full">Reserve {seats} seat{seats > 1 ? "s" : ""} →</MagneticButton>
          </div>
        </div>
      </section>

      {/* 07 TESTIMONIALS */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="07" />
        <SectionLabel n="— Voices 07" label="Alumni · this programme" />
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {[
            { q: `${p.t} at Eiden re-architected how I work.`, n: "Aïcha M.", r: "CEO, Atlas Ventures", img: p1 },
            { q: `Twelve weeks. A decade of clarity. Worth every hour.`, n: "Karim B.", r: "Partner, K&B Studio", img: p2 },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-t border-deep/15 pt-8">
                <p className="font-italic-serif text-3xl text-deep leading-tight">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.img} alt="" className="w-14 h-14 rounded-full object-cover" />
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-teal">{t.n} · <span className="text-deep/60">{t.r}</span></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 APPLY CTA */}
      <section className="relative bg-gold/30 py-32 container-fluid grain overflow-hidden">
        <BigNumber n="08" />
        <SplitReveal text={`Apply to ${p.t}.`} className="h-display text-[clamp(2.5rem,7vw,7rem)] text-deep max-w-5xl" />
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-deep/80 text-lg">Cohort opens quarterly. Applications are reviewed within 72 hours.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton to="/contact" cursor="WRITE" className="bg-deep text-cream rounded-full">Begin application →</MagneticButton>
          <MagneticButton to="/formations" cursor="BACK" className="border border-deep text-deep rounded-full">Compare programmes</MagneticButton>
        </div>
      </section>
    </>
  );
};

export default FormationDetail;
