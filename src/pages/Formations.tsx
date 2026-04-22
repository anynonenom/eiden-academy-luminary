import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import { Marquee } from "@/components/motion/Marquee";
import formationImg from "@/assets/img-formation.jpg";
import hero from "@/assets/img-hero.jpg";
import about from "@/assets/img-about.jpg";
import p1 from "@/assets/portrait-1.jpg";
import p2 from "@/assets/portrait-2.jpg";
import p3 from "@/assets/portrait-3.jpg";

const programmes = [
  { slug: "leadership", t: "Leadership", tag: "Executive", dur: "12 wks", desc: "Architect of judgement.", img: formationImg },
  { slug: "strategy",   t: "Strategy",   tag: "Advanced",  dur: "10 wks", desc: "The disciplined long view.", img: hero },
  { slug: "finance",    t: "Finance",    tag: "Mastery",   dur: "14 wks", desc: "Capital with conscience.", img: about },
  { slug: "marketing",  t: "Marketing",  tag: "Editorial", dur: "8 wks",  desc: "Build cult, not noise.", img: formationImg },
  { slug: "technology", t: "Technology", tag: "Founder",   dur: "12 wks", desc: "Engineer the inevitable.", img: hero },
];

const filters = ["All","Leadership","Strategy","Finance","Marketing","Tech"];

const Formations = () => {
  const [active, setActive] = useState("All");
  const [rotate, setRotate] = useState(0);
  const words = ["Architectures","Disciplines","Compositions","Standards","Architectures"];

  return (
    <>
      {/* 01 HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden grain container-fluid">
        <BigNumber n="01" />
        <div className="relative">
          <Reveal><SectionLabel n="— Formations 01" label="Five paths · One standard" /></Reveal>
          <h1 className="mt-8 h-display text-[clamp(3rem,10vw,10rem)] text-deep leading-[0.9]">
            <SplitReveal text="5" as="span" className="text-gold font-italic-serif font-normal not-italic mr-6" />
            <span className="overflow-hidden inline-block align-bottom h-[1em]">
              <AnimatePresence mode="wait">
                <motion.span key={rotate}
                  initial={{ y: "100%" }} animate={{ y:0 }} exit={{ y:"-100%" }}
                  transition={{ duration: 0.6, ease: [0.7,0,0.2,1] }}
                  className="inline-block">{words[rotate % words.length]}</motion.span>
              </AnimatePresence>
            </span>
            <br />
            <SplitReveal text="One standard." className="block" delay={0.3} />
          </h1>
          <Reveal delay={0.6}>
            <button onClick={()=>setRotate(r=>r+1)} data-cursor="NEXT" className="mt-8 font-display text-xs uppercase tracking-[0.3em] underline underline-offset-8 decoration-gold">Cycle word →</button>
          </Reveal>
        </div>
      </section>

      {/* 02 FILTER */}
      <section className="bg-cream py-12 border-y border-deep/10">
        <div className="container-fluid flex flex-wrap gap-3">
          {filters.map(f => (
            <button key={f} onClick={()=>setActive(f)} data-cursor="FILTER"
              className={`px-5 py-2 rounded-full font-display text-xs uppercase tracking-[0.25em] border transition-colors ${active===f ? "bg-deep text-cream border-deep" : "border-deep/30 text-deep hover:border-deep"}`}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* 03 GRID */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="03" />
        <SectionLabel n="— Catalogue 03" label="The five programmes" />
        <div className="mt-16 space-y-px bg-deep/10">
          {programmes
            .filter(p => active==="All" || p.t.toLowerCase().startsWith(active.toLowerCase().slice(0,4)))
            .map((p,i)=>(
            <Reveal key={p.t} delay={i*0.05}>
              <Link to={`/formations/${p.slug}`} className="block bg-cream group hover:bg-deep hover:text-cream transition-colors duration-500 cursor-pointer" data-cursor="OPEN">
                <div className="grid grid-cols-12 items-center px-4 md:px-8 py-8 gap-4">
                  <div className="col-span-1 font-display text-[10px] uppercase tracking-[0.3em] text-gold">0{i+1}</div>
                  <h3 className="col-span-12 md:col-span-4 font-display text-4xl md:text-6xl font-bold tracking-tight">{p.t}</h3>
                  <div className="col-span-6 md:col-span-2 font-display text-[10px] uppercase tracking-[0.3em] opacity-70">{p.tag}</div>
                  <div className="col-span-6 md:col-span-2 font-display text-[10px] uppercase tracking-[0.3em] opacity-70">{p.dur}</div>
                  <div className="col-span-12 md:col-span-3 font-italic-serif text-xl text-gold">{p.desc}</div>
                </div>
                <div className="overflow-hidden h-0 group-hover:h-64 transition-all duration-700">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-64 object-cover" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 COMPARISON */}
      <section className="relative bg-deep text-cream py-32 grain">
        <BigNumber n="04" />
        <div className="container-fluid">
          <SectionLabel n="— Compare 04" label="At a glance" />
          <div className="mt-16 overflow-x-auto">
            <table className="w-full font-display text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-cream/20 text-[10px] uppercase tracking-[0.3em] text-gold">
                  <th className="text-left py-4">Programme</th><th>Format</th><th>Duration</th><th>Cohort</th><th>Investment</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((p,i)=>(
                  <tr key={p.t} className="border-b border-cream/10 hover:bg-cream/5 transition-colors">
                    <td className="py-6 text-2xl font-bold">{p.t}</td>
                    <td className="text-center text-cream/70">Hybrid</td>
                    <td className="text-center">{p.dur}</td>
                    <td className="text-center">24</td>
                    <td className="text-right text-gold">€ {12 + i*2}k</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 05 FACULTY ORBIT */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="05" />
        <SectionLabel n="— Faculty 05" label="Architects of the academy" />
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[p1,p2,p3,p1,p2,p3].map((src,i)=>(
            <Reveal key={i} delay={i*0.06}>
              <div className="text-center group" data-cursor="MEET">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gold/30 group-hover:border-gold transition-colors">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-deep">Faculty {i+1}</h3>
                <div className="font-italic-serif text-teal">Practitioner & mentor</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 PHILOSOPHY */}
      <section className="relative py-32 container-fluid bg-cream">
        <BigNumber n="06" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-32">
            <SectionLabel n="— Philosophy 06" label="How we teach" />
            <SplitReveal text="Editorial. Disciplined. Alive." className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
          </div>
          <div className="space-y-12">
            {["Studio over lecture.","Project over exam.","Mentor over manager.","Composition over checklist."].map((s,i)=>(
              <Reveal key={s} delay={i*0.1}>
                <div className="border-l-2 border-gold pl-6">
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-teal">Principle 0{i+1}</div>
                  <p className="mt-3 font-italic-serif text-3xl md:text-4xl text-deep">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 OUTCOMES */}
      <section className="relative bg-deep text-cream py-32 grain overflow-hidden">
        <BigNumber n="07" />
        <div className="container-fluid">
          <SectionLabel n="— Outcomes 07" label="Where alumni stand" />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[["98%","placement"],["3.4×","salary uplift"],["72","countries"],["500+","alumni"]].map(([n,l])=>(
              <Reveal key={l}>
                <div>
                  <div className="h-display text-7xl text-gold">{n}</div>
                  <div className="mt-3 font-display text-[10px] uppercase tracking-[0.3em] text-cream/60">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 CTA */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="08" />
        <Marquee>
          {Array.from({length:6}).map((_,i)=>(<span key={i} className="font-italic-serif text-5xl md:text-7xl text-gold">Apply · Compose · Lead ·</span>))}
        </Marquee>
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <SplitReveal text="Choose your architecture." className="h-display text-[clamp(2rem,5vw,5rem)] text-deep max-w-3xl" />
          <MagneticButton to="/contact" cursor="APPLY" className="bg-deep text-cream rounded-full">Apply now →</MagneticButton>
        </div>
      </section>
    </>
  );
};
export default Formations;
