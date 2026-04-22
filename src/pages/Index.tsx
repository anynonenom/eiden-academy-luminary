import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import logo from "@/assets/eiden-logo.png";
import hero from "@/assets/img-hero.jpg";
import formationImg from "@/assets/img-formation.jpg";
import aboutImg from "@/assets/img-about.jpg";
import p1 from "@/assets/portrait-1.jpg";
import p2 from "@/assets/portrait-2.jpg";
import p3 from "@/assets/portrait-3.jpg";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1800);
        setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="tabular-nums">{val}{suffix}</span>;
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* 01 — HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden grain pt-32 pb-16">
        <motion.img src={hero} alt="" style={{ y: heroY, scale: heroScale }} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/30 to-cream" />
        <BigNumber n="01" />
        <div className="container-fluid relative z-10">
          <Reveal>
            <SectionLabel n="— Index 01" label="Architecture du Savoir" />
          </Reveal>
          <h1 className="mt-10 h-display text-deep text-[clamp(3.5rem,12vw,12rem)]">
            <SplitReveal text="Eiden" className="block" />
            <SplitReveal text="Academy." as="span" className="font-italic-serif font-normal text-gold not-italic" delay={0.3} />
          </h1>
          <Reveal delay={0.6}>
            <div className="mt-8 max-w-xl text-lg text-deep/80 leading-relaxed">
              An editorial leadership academy. Disciplined craft, kinetic ambition — we architect the leaders the next century deserves.
            </div>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl border-t border-deep/15 pt-8">
              {[["500+","Alumni"],["12","Years"],["98%","Placement"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-display text-3xl md:text-5xl font-bold text-deep"><Counter to={parseInt(n)} suffix={n.includes("+") ? "+" : n.includes("%") ? "%" : ""} /></div>
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-teal mt-2">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <motion.img src={logo} alt="" initial={{ opacity:0, rotate:-20 }} animate={{ opacity:0.5, rotate:0 }} transition={{ duration:1.4, delay:1 }} className="absolute right-8 top-32 w-40 md:w-72 animate-spin-slow opacity-40" />
        <div className="absolute bottom-6 inset-x-0 container-fluid flex justify-between text-[10px] font-display uppercase tracking-[0.3em] text-deep/60">
          <span>Scroll to discover</span><span>Est. 2013 · Casablanca</span>
        </div>
      </section>

      {/* 02 — MARQUEE */}
      <section className="bg-deep text-cream py-10 border-y border-cream/10 overflow-hidden">
        <Marquee>
          {Array.from({length:8}).map((_,i)=>(
            <span key={i} className="font-italic-serif text-5xl md:text-7xl text-gold">Excellence · <span className="text-cream">Discipline</span> · Architecture du Savoir ·</span>
          ))}
        </Marquee>
        <div className="mt-2"><Marquee reverse>
          {Array.from({length:8}).map((_,i)=>(
            <span key={i} className="font-display font-extrabold text-3xl md:text-5xl text-cream/40 uppercase tracking-tight">Eiden — Leadership · Strategy · Finance · Marketing · Tech ·</span>
          ))}
        </Marquee></div>
      </section>

      {/* 03 — MANIFESTO */}
      <section className="relative py-32 md:py-48 container-fluid">
        <BigNumber n="02" />
        <Reveal><SectionLabel n="— Manifesto 02" label="What we believe" /></Reveal>
        <div className="mt-16 max-w-5xl">
          <SplitReveal as="p" text="We don't teach business. We sculpt the architecture of judgement — disciplined, editorial, profoundly human." className="h-display text-[clamp(2rem,5vw,5rem)] leading-[1.05] text-deep" />
          <Reveal delay={0.4}>
            <p className="mt-12 max-w-2xl text-lg text-deep/70 leading-relaxed">
              Every cohort is a <span className="font-italic-serif text-teal">deliberate composition</span>. Every module, a chapter in a larger work. We refuse simplicity. We refuse the static. We engineer leaders who design futures.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 — PROGRAMMES */}
      <section className="relative bg-cream py-32 overflow-hidden">
        <BigNumber n="03" />
        <div className="container-fluid">
          <div className="flex justify-between items-end flex-wrap gap-6 mb-16">
            <div>
              <SectionLabel n="— Programmes 03" label="Five architectures" />
              <SplitReveal text="Five paths. One standard." className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
            </div>
            <Link to="/formations" data-cursor="ALL" className="font-display text-xs uppercase tracking-[0.3em] underline underline-offset-8 decoration-gold">View all →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Leadership","Strategy","Finance","Marketing","Technology"].map((t,i)=>(
              <Reveal key={t} delay={i*0.08}>
                <Link to="/formations" data-cursor="OPEN" className="group block relative overflow-hidden bg-deep text-cream aspect-[4/5]">
                  <img src={formationImg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="flex justify-between font-display text-[10px] uppercase tracking-[0.3em] text-gold">
                      <span>0{i+1}</span><span>12 weeks</span>
                    </div>
                    <div>
                      <div className="font-italic-serif text-2xl text-gold">Programme</div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold mt-1">{t}</h3>
                      <div className="mt-6 inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.3em] border-b border-gold pb-1">Discover →</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — NUMBERS BAND */}
      <section className="relative bg-deep text-cream py-32 overflow-hidden grain">
        <BigNumber n="04" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(135deg, hsl(var(--gold)) 0 1px, transparent 1px 80px)" }} />
        <div className="container-fluid relative">
          <SectionLabel n="— Impact 04" label="By the numbers" />
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {[["500","Leaders shaped"],["4","Continents reached"],["98","% Outcome"]].map(([n,l])=>(
              <Reveal key={l}>
                <div className="border-t border-cream/15 pt-8">
                  <div className="h-display text-[clamp(4rem,10vw,9rem)] text-gold leading-none"><Counter to={parseInt(n)} suffix={l.includes("%")?"%":"+"} /></div>
                  <div className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-cream/70">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — METHOD */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="05" />
        <SectionLabel n="— Method 05" label="Four pillars" />
        <SplitReveal text="The Eiden Method." className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-deep/10">
          {[
            ["Frame","Ask the question worth asking."],
            ["Architect","Design with discipline & taste."],
            ["Execute","Ship with editorial precision."],
            ["Refine","Iterate until inevitable."],
          ].map(([t,d],i)=>(
            <Reveal key={t} delay={i*0.08}>
              <div className="bg-cream p-8 md:p-10 h-full group hover:bg-deep hover:text-cream transition-colors">
                <div className="font-italic-serif text-gold text-xl group-hover:text-gold">0{i+1}</div>
                <h3 className="mt-4 font-display text-3xl font-bold">{t}</h3>
                <div className="mt-3 h-px w-10 bg-gold transition-all group-hover:w-20" />
                <p className="mt-6 text-sm leading-relaxed opacity-80">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 — TESTIMONIALS */}
      <section className="relative bg-cream py-32 overflow-hidden">
        <BigNumber n="06" />
        <div className="container-fluid">
          <SectionLabel n="— Voices 06" label="What alumni say" />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {q:"Eiden didn't change my career — it redrew the map.",n:"Aïcha M.",r:"CEO, Atlas Ventures",img:p1},
              {q:"The most disciplined six months of my life. Worth ten years.",n:"Karim B.",r:"Strategy Director",img:p2},
              {q:"They taught me to think editorially, not just analytically.",n:"Hélène R.",r:"Founder, Maison K.",img:p3},
            ].map((t,i)=>(
              <Reveal key={i} delay={i*0.1}>
                <div className="group">
                  <div className="overflow-hidden aspect-[3/4] mb-6">
                    <img src={t.img} alt={t.n} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="font-italic-serif text-2xl md:text-3xl text-deep leading-tight">"{t.q}"</p>
                  <div className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-teal">{t.n} · <span className="text-deep/60">{t.r}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — CTA */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="07" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel n="— Apply 07" label="Begin" />
            <SplitReveal text="Your seat is rare. Earn it." className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-md text-deep/70">Cohorts are limited to 24. Applications open quarterly. Begin a conversation — we'll take it from there.</p>
              <div className="mt-10">
                <MagneticButton to="/contact" cursor="WRITE" className="bg-deep text-cream rounded-full hover:bg-teal transition-colors">Apply now →</MagneticButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={aboutImg} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
