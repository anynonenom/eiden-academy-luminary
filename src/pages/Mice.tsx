import { useState } from "react";
import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import { motion } from "framer-motion";
import mice from "@/assets/img-mice.jpg";
import hero from "@/assets/img-hero.jpg";
import about from "@/assets/img-about.jpg";

const Mice = () => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <>
      {/* 01 HERO */}
      <section className="relative min-h-screen flex items-end pt-32 pb-16 overflow-hidden grain">
        <img src={mice} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/20" />
        <BigNumber n="01" />
        <div className="container-fluid relative">
          <Reveal><SectionLabel n="— MICE 01" label="Convene · Inspire · Transform" /></Reveal>
          <h1 className="mt-8 h-display text-[clamp(3rem,11vw,11rem)] text-deep">
            <SplitReveal text="Convene." className="block" />
            <SplitReveal text="Inspire." className="block font-italic-serif font-normal text-gold not-italic" delay={0.2} />
            <SplitReveal text="Transform." className="block" delay={0.4} />
          </h1>
        </div>
      </section>

      {/* 02 PILLARS */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="02" />
        <SectionLabel n="— Services 02" label="Four disciplines" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-deep/10">
          {["Meetings","Incentives","Conferences","Events"].map((t,i)=>(
            <Reveal key={t} delay={i*0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-cream p-10 h-72 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                data-cursor="VIEW"
              >
                <div className={`absolute inset-0 bg-deep transition-transform duration-700 ${hover===i?"translate-y-0":"translate-y-full"}`} />
                <div className="relative z-10 group-hover:text-cream transition-colors">
                  <div className="font-italic-serif text-gold text-xl">0{i+1}</div>
                  <h3 className="mt-3 font-display text-3xl font-bold">{t}</h3>
                </div>
                <div className="relative z-10 font-display text-[10px] uppercase tracking-[0.3em] group-hover:text-gold transition-colors">Tailored →</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 PROCESS TIMELINE */}
      <section className="relative bg-deep text-cream py-32 grain overflow-hidden">
        <BigNumber n="03" />
        <div className="container-fluid">
          <SectionLabel n="— Process 03" label="From brief to bow" />
          <div className="mt-20 relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30" />
            {[
              ["Brief","We listen — deeply, editorially."],
              ["Concept","A signature idea, not a template."],
              ["Architecture","Logistics designed like architecture."],
              ["Curtain up","Cinematic execution, hour by hour."],
              ["Encore","Reflection, iteration, mastery."],
            ].map(([t,d],i)=>(
              <Reveal key={t} delay={i*0.1}>
                <div className="relative pl-20 pb-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-gold flex items-center justify-center font-display text-xs text-gold">0{i+1}</div>
                  <h3 className="font-display text-3xl font-bold">{t}</h3>
                  <p className="mt-2 text-cream/70 max-w-md">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 VENUES */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="04" />
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionLabel n="— Venues 04" label="Signature spaces" />
          <span className="font-italic-serif text-2xl text-teal">Casablanca · Marrakech · Paris</span>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[hero,mice,about,about,hero,mice].map((src,i)=>(
            <Reveal key={i} delay={i*0.06}>
              <div className={`overflow-hidden ${i%3===0?"row-span-2 aspect-[3/5]":"aspect-[4/3]"}`} data-cursor="ZOOM">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 05 CAPACITY TABLE */}
      <section className="relative bg-cream py-32 container-fluid">
        <BigNumber n="05" />
        <SectionLabel n="— Spaces 05" label="Capacity & specs" />
        <div className="mt-16 border-t border-deep/15">
          {[
            ["Atrium","850","Theatre","Cream marble · skylight"],
            ["Salon Vert","220","Banquet","Deep green · brass"],
            ["Bibliothèque","80","U-Shape","Library · oak"],
            ["Terrasse","400","Cocktail","Open air · twilight"],
            ["Studio","40","Boardroom","Editorial set"],
          ].map(([n,c,t,d],i)=>(
            <Reveal key={n} delay={i*0.05}>
              <div className="grid grid-cols-12 gap-4 py-6 border-b border-deep/15 group hover:bg-gold/20 transition-colors px-2">
                <div className="col-span-1 font-display text-[10px] uppercase tracking-[0.3em] text-teal pt-1">0{i+1}</div>
                <div className="col-span-4 font-display text-2xl font-bold text-deep">{n}</div>
                <div className="col-span-2 font-display text-2xl text-gold">{c}</div>
                <div className="col-span-2 font-display text-xs uppercase tracking-widest pt-2 text-deep/70">{t}</div>
                <div className="col-span-3 font-italic-serif text-xl text-deep/80">{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 PARTNERS MARQUEE */}
      <section className="bg-deep text-cream py-12 overflow-hidden border-y border-cream/10">
        <Marquee>
          {["LVMH","KERING","CAIRO BIENNALE","UNESCO","HARVARD CLUB","ROYAL OPERA","WORLD ECONOMIC FORUM","MAISON ARABE"].map((b,i)=>(
            <span key={i} className="font-display font-extrabold text-3xl md:text-5xl text-cream/60 uppercase">{b} ·</span>
          ))}
        </Marquee>
      </section>

      {/* 07 ENQUIRY FORM */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="07" />
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel n="— Enquiry 07" label="Begin a brief" />
            <SplitReveal text="Tell us what you're convening." className="mt-6 h-display text-[clamp(1.75rem,4vw,4rem)] text-deep" />
            <p className="mt-6 text-deep/70 max-w-md">Share the broad strokes. We'll respond within 24 hours with a curated proposal.</p>
          </div>
          <Reveal delay={0.2}>
            <form className="space-y-8" onSubmit={e=>e.preventDefault()}>
              {[["Name"],["Organisation"],["Email"],["Date · location"],["Brief"]].map(([l],i)=>(
                <div key={l} className="border-b border-deep/30 pb-2 focus-within:border-gold transition-colors">
                  <label className="block font-display text-[10px] uppercase tracking-[0.3em] text-teal mb-2">0{i+1} · {l}</label>
                  {l==="Brief"
                    ? <textarea rows={3} className="w-full bg-transparent outline-none font-display text-lg" />
                    : <input className="w-full bg-transparent outline-none font-display text-lg" />}
                </div>
              ))}
              <MagneticButton cursor="SEND" className="bg-deep text-cream rounded-full">Send enquiry →</MagneticButton>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 08 CTA */}
      <section className="relative bg-gold/30 py-32 container-fluid grain overflow-hidden">
        <BigNumber n="08" />
        <SplitReveal text="Let's design the unforgettable." className="h-display text-[clamp(2rem,6vw,6rem)] text-deep max-w-5xl" />
        <div className="mt-10"><MagneticButton to="/contact" cursor="GO" className="bg-deep text-cream rounded-full">Speak with our atelier →</MagneticButton></div>
      </section>
    </>
  );
};
export default Mice;
