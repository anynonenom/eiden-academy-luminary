import { Reveal, SplitReveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SectionLabel, BigNumber } from "@/components/SectionLabel";
import about from "@/assets/img-about.jpg";
import hero from "@/assets/img-hero.jpg";
import formationImg from "@/assets/img-formation.jpg";
import p1 from "@/assets/portrait-1.jpg";
import p2 from "@/assets/portrait-2.jpg";
import p3 from "@/assets/portrait-3.jpg";
import logo from "@/assets/eiden-logo.png";

const About = () => (
  <>
    {/* 01 HERO */}
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden grain container-fluid">
      <BigNumber n="01" />
      <img src={logo} alt="" className="absolute right-0 top-1/4 w-[60vw] opacity-[0.06]" />
      <div className="relative max-w-5xl">
        <Reveal><SectionLabel n="— About 01" label="Who we are" /></Reveal>
        <h1 className="mt-10 h-display text-[clamp(2.5rem,9vw,9rem)] text-deep leading-[0.95]">
          <SplitReveal text="The architecture" className="block" />
          <SplitReveal text="behind" className="block font-italic-serif font-normal text-gold not-italic" delay={0.2} />
          <SplitReveal text="the academy." className="block" delay={0.4} />
        </h1>
      </div>
    </section>

    {/* 02 ORIGIN STORY */}
    <section className="relative py-32 container-fluid">
      <BigNumber n="02" />
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <SectionLabel n="— Origin 02" label="Our story" />
          <SplitReveal text="A studio. A standard. A school." className="mt-6 h-display text-[clamp(1.75rem,4vw,4rem)] text-deep" />
        </div>
        <div className="md:col-span-7 space-y-8 text-lg text-deep/80 leading-relaxed">
          <Reveal><p>Eiden Academy was founded as a refusal — a refusal of the generic, the static, the ornamental. We believe leadership is a discipline of <span className="font-italic-serif text-teal">composition</span>: of selecting, framing, editing, sequencing.</p></Reveal>
          <Reveal delay={0.1}><div className="aspect-[4/3] overflow-hidden"><img src={about} alt="" loading="lazy" className="w-full h-full object-cover" /></div></Reveal>
          <Reveal delay={0.2}><p>Our cohorts are deliberately small. Our faculty are practitioners, not lecturers. Our standard is editorial: every project ships at the level of the world's most exacting magazines, ateliers and concert halls.</p></Reveal>
        </div>
      </div>
    </section>

    {/* 03 MISSION VISION VALUES */}
    <section className="relative bg-deep text-cream py-32 grain">
      <BigNumber n="03" />
      <div className="container-fluid">
        <SectionLabel n="— MVV 03" label="Mission · Vision · Values" />
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-cream/10">
          {[
            ["Mission","To architect leaders who design — rather than inherit — their futures."],
            ["Vision","A generation of editors of decisions, builders of institutions."],
            ["Values","Discipline. Taste. Courage. Service."],
          ].map(([t,d],i)=>(
            <Reveal key={t} delay={i*0.1}>
              <div className="bg-deep p-10 h-full">
                <div className="font-italic-serif text-gold text-2xl">0{i+1}</div>
                <h3 className="mt-3 font-display text-3xl font-bold">{t}</h3>
                <div className="mt-4 h-px w-12 bg-gold" />
                <p className="mt-6 text-cream/75 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 TIMELINE */}
    <section className="relative py-32 container-fluid">
      <BigNumber n="04" />
      <SectionLabel n="— Milestones 04" label="A decade in motion" />
      <div className="mt-16 overflow-x-auto pb-6">
        <div className="flex gap-8 min-w-max">
          {[["2013","Founded"],["2015","First cohort"],["2017","Paris atelier"],["2019","100 alumni"],["2021","MICE division"],["2023","500+ leaders"],["2026","New chapters"]].map(([y,e],i)=>(
            <Reveal key={y} delay={i*0.06}>
              <div className="w-72 border-t-2 border-gold pt-6">
                <div className="h-display text-5xl text-deep">{y}</div>
                <div className="mt-3 font-italic-serif text-2xl text-teal">{e}</div>
                <img src={[hero,about,formationImg,hero,about,formationImg,hero][i]} alt="" loading="lazy" className="mt-6 w-full aspect-[4/3] object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 FACULTY GRID */}
    <section className="relative bg-cream py-32 container-fluid">
      <BigNumber n="05" />
      <SectionLabel n="— People 05" label="Founders & faculty" />
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[p1,p2,p3,p1,p2,p3,p1,p2].map((src,i)=>(
          <Reveal key={i} delay={i*0.05}>
            <div className="group relative overflow-hidden aspect-[3/4]" data-cursor="BIO">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep to-transparent p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="font-display text-cream font-bold">Faculty {i+1}</div>
                <div className="font-italic-serif text-gold text-sm">Practitioner</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* 06 MANIFESTO PULL QUOTE */}
    <section className="relative bg-deep text-cream py-32 grain">
      <BigNumber n="06" />
      <div className="container-fluid">
        <div className="border-l-4 border-gold pl-8 max-w-4xl">
          <SectionLabel n="— Manifesto 06" label="Our credo" />
          <SplitReveal text="We don't graduate students. We release architects." className="mt-8 font-italic-serif text-[clamp(2rem,6vw,6rem)] text-cream leading-[1.05]" />
        </div>
      </div>
    </section>

    {/* 07 PARTNERS MARQUEE */}
    <section className="bg-cream py-12 border-y border-deep/10 overflow-hidden">
      <Marquee>
        {["AACSB","EQUIS","UNESCO","HARVARD CLUB","FORBES","MIT MEDIA LAB","DAVOS","BIENNALE"].map((p,i)=>(
          <span key={i} className="font-display font-extrabold text-2xl md:text-4xl text-deep/50 uppercase">{p} ·</span>
        ))}
      </Marquee>
    </section>

    {/* 08 CTA */}
    <section className="relative py-32 container-fluid">
      <BigNumber n="08" />
      <SectionLabel n="— Join 08" label="Be part of it" />
      <SplitReveal text="Join the next chapter." className="mt-8 h-display text-[clamp(2rem,6vw,6rem)] text-deep" />
      <div className="mt-10 flex gap-4 flex-wrap">
        <MagneticButton to="/formations" cursor="VIEW" className="border border-deep text-deep rounded-full hover:bg-deep hover:text-cream transition-colors">Programmes →</MagneticButton>
        <MagneticButton to="/contact" cursor="WRITE" className="bg-deep text-cream rounded-full">Apply now →</MagneticButton>
      </div>
    </section>
  </>
);
export default About;
