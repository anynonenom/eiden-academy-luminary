import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/eiden-logo.png";

const WORDS = ["Architecture", "Discipline", "Editorial", "Eiden Academy"];

export const Preloader = () => {
  const [done, setDone] = useState(() => sessionStorage.getItem("eiden-preloaded") === "1");
  const [pct, setPct] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (done) return;
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 7 + 2;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => {
          sessionStorage.setItem("eiden-preloaded", "1");
          setDone(true);
        }, 900);
      }
      setPct(Math.floor(v));
    }, 80);
    const w = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 600);
    return () => { clearInterval(id); clearInterval(w); };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          exit={{ opacity: 1 }}
        >
          {/* 5-panel stagger curtain on exit (Zenya signature) */}
          <div className="absolute inset-0 flex">
            {[0, 1, 2, 3, 4].map(i => (
              <motion.div
                key={i}
                className="flex-1 bg-deep"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 1.1, delay: i * 0.08, ease: [0.85, 0, 0.15, 1] }}
              />
            ))}
          </div>

          {/* Cream underlay revealed by curtain */}
          <motion.div
            className="absolute inset-0 bg-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
          />

          {/* Centre stage */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 grain"
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.1 } }}
          >
            {/* expanding ring around crest */}
            <div className="relative flex items-center justify-center mb-12">
              <motion.span
                className="absolute rounded-full border border-gold/40"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: 280, height: 280, opacity: [0, 0.6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute rounded-full border border-gold/30"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: 360, height: 360, opacity: [0, 0.4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
              />
              <motion.img
                src={logo}
                alt="Eiden Academy"
                className="relative h-32 w-auto"
                initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </div>

            {/* Rotating word */}
            <div className="h-8 overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={wordIdx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
                  className="font-italic-serif text-2xl text-gold"
                >
                  {WORDS[wordIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Counter */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-7xl md:text-9xl font-extrabold text-cream tabular-nums leading-none">
                {String(pct).padStart(3, "0")}
              </span>
              <span className="font-italic-serif text-3xl text-gold">%</span>
            </div>

            {/* Progress bar */}
            <div className="h-px w-72 overflow-hidden bg-cream/15">
              <motion.div
                className="h-full bg-gradient-to-r from-gold to-cream"
                style={{ width: `${pct}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Top + bottom labels */}
            <div className="absolute top-8 inset-x-0 flex justify-between container-fluid font-display text-[10px] uppercase tracking-[0.4em] text-cream/60">
              <span>Eiden Academy</span>
              <span>Est. 2013</span>
            </div>
            <div className="absolute bottom-8 inset-x-0 flex justify-between container-fluid font-display text-[10px] uppercase tracking-[0.4em] text-cream/60">
              <span>Architecture du Savoir</span>
              <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }}>
                Loading experience…
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
