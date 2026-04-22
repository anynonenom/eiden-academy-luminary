import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/eiden-logo.png";

export const Preloader = () => {
  const [done, setDone] = useState(() => sessionStorage.getItem("eiden-preloaded") === "1");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (done) return;
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 9 + 3;
      if (v >= 100) { v = 100; clearInterval(id); setTimeout(() => { sessionStorage.setItem("eiden-preloaded","1"); setDone(true); }, 600); }
      setPct(Math.floor(v));
    }, 90);
    return () => clearInterval(id);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream"
          exit={{ opacity: 1 }}
        >
          {/* split curtain on exit */}
          <motion.div className="absolute inset-x-0 top-0 h-1/2 bg-deep" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 1, ease: [0.7,0,0.2,1] }} />
          <motion.div className="absolute inset-x-0 bottom-0 h-1/2 bg-deep" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 1, ease: [0.7,0,0.2,1] }} />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-10"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={logo} alt="Eiden Academy" className="h-28 w-auto"
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.2,0.8,0.2,1] }}
            />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-7xl md:text-8xl font-bold text-deep tabular-nums">{String(pct).padStart(2,"0")}</span>
              <span className="font-italic-serif text-3xl text-gold">%</span>
            </div>
            <div className="h-px w-64 overflow-hidden bg-deep/10">
              <motion.div className="h-full bg-deep" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-display text-[10px] uppercase tracking-[0.4em] text-deep/60">Architecture du Savoir</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
