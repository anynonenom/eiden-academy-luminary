import { Link } from "react-router-dom";
import { Marquee } from "@/components/motion/Marquee";
import logo from "@/assets/eiden-logo.png";
import { SplitReveal } from "@/components/motion/Reveal";

export const Footer = () => {
  return (
    <footer className="relative bg-deep text-cream pt-24 pb-10 overflow-hidden grain">
      <div className="container-fluid relative z-10">
        <SplitReveal text="Begin your transformation." className="h-display text-[clamp(2.5rem,7vw,7rem)] text-cream" />
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="/contact" data-cursor="WRITE" className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 font-display text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-deep transition-colors">
            Apply now <span>→</span>
          </Link>
          <Link to="/formations" data-cursor="EXPLORE" className="font-display text-xs uppercase tracking-[0.3em] underline underline-offset-8 decoration-gold">Explore programmes</Link>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-4 border-t border-cream/15 pt-12">
          <div>
            <img src={logo} alt="" className="h-12 mb-4" />
            <p className="text-xs leading-relaxed text-cream/70 max-w-xs">Architecture du Savoir — an editorial academy crafting tomorrow's leaders.</p>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {["/", "/mice", "/formations", "/about", "/contact"].map((p, i) => (
                <li key={p}><Link to={p} className="hover:text-gold transition-colors">{["Home","MICE","Formations","About","Contact"][i]}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>hello@eiden-academy.com</li>
              <li>+212 (0) 522 000 000</li>
              <li>Casablanca · Paris</li>
            </ul>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Follow</div>
            <ul className="space-y-2 text-sm">
              {["Instagram","LinkedIn","YouTube","Behance"].map(s => <li key={s}><a className="hover:text-gold" href="#">{s}</a></li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 border-y border-cream/15 py-6">
        <Marquee>
          {Array.from({length:6}).map((_,i)=>(
            <span key={i} className="font-italic-serif text-4xl md:text-6xl text-gold">Eiden Academy · Architecture du Savoir ·</span>
          ))}
        </Marquee>
      </div>

      <div className="container-fluid mt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.3em] text-cream/40 gap-2">
        <span>© {new Date().getFullYear()} Eiden Academy</span>
        <span>Crafted with discipline.</span>
      </div>
    </footer>
  );
};
