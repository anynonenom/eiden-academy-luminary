import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/eiden-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/mice", label: "MICE" },
  { to: "/formations", label: "Formations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.2,0.8,0.2,1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "py-3 bg-cream/85 backdrop-blur-md border-b border-deep/10" : "py-6"}`}
      >
        <div className="container-fluid flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" data-cursor="HOME">
            <img src={logo} alt="Eiden Academy" className={`transition-all ${scrolled ? "h-8" : "h-10"} w-auto`} />
            <div className="hidden sm:block leading-none">
              <div className="font-display font-extrabold text-deep tracking-tight text-sm">EIDEN</div>
              <div className="font-display text-[9px] uppercase tracking-[0.3em] text-teal">Academy</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}
                className={({isActive}) => `relative font-display text-xs uppercase tracking-[0.25em] py-2 transition ${isActive ? "text-teal" : "text-deep hover:text-teal"}`}>
                {({isActive}) => (
                  <span className="relative">
                    {l.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button onClick={() => setOpen(true)} aria-label="Open menu"
            className="md:hidden flex flex-col gap-1.5 p-2" data-cursor="MENU">
            <span className="block h-px w-7 bg-deep" />
            <span className="block h-px w-5 bg-deep ml-auto" />
          </button>

          <div className="hidden md:block">
            <Link to="/contact" data-cursor="APPLY" className="font-display text-xs uppercase tracking-[0.25em] border border-deep px-5 py-3 hover:bg-deep hover:text-cream transition-colors">
              Apply
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.7,0,0.2,1] }}
            className="fixed inset-0 z-[200] bg-deep text-cream flex flex-col"
          >
            <div className="flex justify-between items-center container-fluid py-6">
              <img src={logo} alt="" className="h-9 w-auto invert brightness-0 contrast-200 opacity-90" />
              <button onClick={() => setOpen(false)} className="font-display text-xs uppercase tracking-[0.3em]">Close</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-4 container-fluid">
              {links.map((l, i) => (
                <motion.div key={l.to}
                  initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.2,0.8,0.2,1] }}>
                  <Link to={l.to} className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight hover:text-gold transition-colors block">
                    {l.label}<span className="text-gold">.</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-fluid py-8 text-xs font-display uppercase tracking-[0.3em] text-cream/60 flex justify-between">
              <span>Architecture du Savoir</span>
              <span>© Eiden Academy</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
