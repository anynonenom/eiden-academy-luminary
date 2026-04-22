import { useState } from "react";
import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import { Marquee } from "@/components/motion/Marquee";
import { motion, AnimatePresence } from "framer-motion";
import contact from "@/assets/img-contact.jpg";

const faqs = [
  ["When do cohorts begin?","Quarterly — January, April, July, October."],
  ["Is the format remote or in-person?","Hybrid. Studio sessions in Casablanca & Paris, weekly remote labs."],
  ["What is the application process?","Written portfolio · interview · final composition exercise."],
  ["Are scholarships available?","Yes — merit-based, covering up to 60% of tuition."],
];

const Contact = () => {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* 01 HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-16 container-fluid grain overflow-hidden">
        <BigNumber n="01" />
        <div className="relative">
          <Reveal><SectionLabel n="— Contact 01" label="Begin a conversation" /></Reveal>
          <h1 className="mt-8 h-display text-[clamp(3rem,12vw,13rem)] text-deep leading-[0.85]">
            <SplitReveal text="Let's" className="block" />
            <SplitReveal text="talk." as="span" className="block font-italic-serif font-normal text-gold not-italic" delay={0.25} />
          </h1>
          <Reveal delay={0.6}>
            <svg viewBox="0 0 400 30" className="mt-6 w-72 h-8">
              <motion.path d="M5 20 Q 100 5 200 18 T 395 12" stroke="hsl(var(--gold))" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.6 }} />
            </svg>
          </Reveal>
        </div>
      </section>

      {/* 02 CHANNELS */}
      <section className="relative py-24 container-fluid">
        <BigNumber n="02" />
        <SectionLabel n="— Channels 02" label="Direct routes" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-deep/10">
          {[["Email","hello@eiden-academy.com"],["Phone","+212 522 000 000"],["WhatsApp","+212 6XX XXX XXX"],["Studio","Casablanca · Paris"]].map(([t,d],i)=>(
            <Reveal key={t} delay={i*0.06}>
              <a href="#" data-cursor="COPY" className="block bg-cream p-8 h-48 group hover:bg-deep hover:text-cream transition-colors">
                <div className="font-italic-serif text-gold text-xl">0{i+1}</div>
                <h3 className="mt-2 font-display text-xl uppercase tracking-widest">{t}</h3>
                <div className="mt-6 font-display text-lg">{d}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 MAP */}
      <section className="relative py-24 container-fluid">
        <BigNumber n="03" />
        <SectionLabel n="— Locate 03" label="Find the studio" />
        <Reveal delay={0.2}>
          <div className="mt-12 relative aspect-[16/9] overflow-hidden bg-deep">
            <img src={contact} alt="map" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply" />
            <div className="absolute inset-0 bg-deep/50" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block w-4 h-4 bg-gold rounded-full" />
              <span className="absolute inset-0 -m-2 rounded-full border border-gold animate-ping" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs uppercase tracking-[0.3em] text-cream">Eiden HQ</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 04 MULTI-STEP FORM */}
      <section className="relative bg-deep text-cream py-32 grain">
        <BigNumber n="04" />
        <div className="container-fluid max-w-3xl">
          <SectionLabel n="— Form 04" label="Tell us more" />
          <div className="mt-12 flex items-center gap-3">
            {[0,1,2].map(i=>(
              <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i<=step?"bg-gold":"bg-cream/20"}`} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.4 }} className="mt-12 space-y-6">
              {step===0 && (<>
                <label className="block"><span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold">01 · Your name</span>
                  <input className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-3 text-2xl font-display" />
                </label>
                <label className="block"><span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold">02 · Email</span>
                  <input type="email" className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-3 text-2xl font-display" />
                </label>
              </>)}
              {step===1 && (<>
                <label className="block"><span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold">03 · Interest</span>
                  <select className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-3 text-2xl font-display">
                    {["Formations","MICE","Partnership","Other"].map(o=><option key={o} className="text-deep">{o}</option>)}
                  </select>
                </label>
              </>)}
              {step===2 && (<>
                <label className="block"><span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold">04 · Message</span>
                  <textarea rows={4} className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-gold outline-none py-3 text-xl font-display" />
                </label>
              </>)}
              <div className="flex justify-between pt-6">
                <button onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0} className="font-display text-xs uppercase tracking-[0.3em] disabled:opacity-30">← Back</button>
                {step<2
                  ? <button onClick={()=>setStep(s=>s+1)} data-cursor="NEXT" className="font-display text-xs uppercase tracking-[0.3em] text-gold">Next →</button>
                  : <MagneticButton cursor="SEND" className="bg-gold text-deep rounded-full">Send →</MagneticButton>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 05 FAQ */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="05" />
        <SectionLabel n="— FAQ 05" label="What we hear most" />
        <div className="mt-16 max-w-4xl">
          {faqs.map(([q,a],i)=>(
            <Reveal key={i} delay={i*0.05}>
              <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left border-t border-deep/15 py-6 flex justify-between items-center group" data-cursor={open===i?"CLOSE":"OPEN"}>
                <span className="font-display text-xl md:text-2xl font-bold text-deep group-hover:text-teal transition-colors">{q}</span>
                <span className={`text-3xl text-gold transition-transform ${open===i?"rotate-45":""}`}>+</span>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.4 }} className="overflow-hidden">
                    <p className="pb-6 text-deep/70 font-italic-serif text-xl">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
          <div className="border-t border-deep/15" />
        </div>
      </section>

      {/* 06 OFFICE HOURS */}
      <section className="relative bg-cream py-32 container-fluid">
        <BigNumber n="06" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel n="— Hours 06" label="When we're in" />
            <SplitReveal text="Monday — Friday." className="mt-6 h-display text-[clamp(2rem,5vw,5rem)] text-deep" />
            <p className="mt-6 text-deep/70">09:00 — 19:00 GMT+1<br/>Saturdays by appointment.</p>
          </div>
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-full border border-deep/20" />
            <div className="absolute inset-4 rounded-full border border-gold/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease:"linear" }} className="absolute h-1/2 w-px bg-gold origin-bottom" style={{ bottom:"50%" }} />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease:"linear" }} className="absolute h-2/5 w-[2px] bg-deep origin-bottom" style={{ bottom:"50%" }} />
              <span className="font-display font-extrabold text-deep">EIDEN</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 SOCIAL MARQUEE */}
      <section className="bg-deep text-cream py-12 overflow-hidden border-y border-cream/10">
        <Marquee>
          {["@eiden.academy","Instagram","LinkedIn","YouTube","Behance","Press","Newsletter"].map((s,i)=>(
            <span key={i} className="font-italic-serif text-4xl md:text-6xl text-gold">{s} ·</span>
          ))}
        </Marquee>
      </section>

      {/* 08 CTA */}
      <section className="relative py-32 container-fluid">
        <BigNumber n="08" />
        <SplitReveal text="Or simply visit the atelier." className="h-display text-[clamp(2rem,5vw,5rem)] text-deep max-w-4xl" />
        <div className="mt-10"><MagneticButton to="/about" cursor="VISIT" className="bg-deep text-cream rounded-full">About the studio →</MagneticButton></div>
      </section>
    </>
  );
};
export default Contact;
