import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import logo from "@/assets/eiden-logo.png";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={loc.pathname} className="relative">
        {/* Sweeping panels overlay */}
        <motion.div
          className="fixed inset-0 z-[150] pointer-events-none flex"
          initial="enter"
          animate="idle"
          exit="exit"
        >
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              className="flex-1 bg-deep"
              variants={{
                enter: { scaleY: 1 },
                idle: { scaleY: 0 },
                exit: { scaleY: 1 },
              }}
              style={{ originY: 1 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.85, 0, 0.15, 1] }}
            />
          ))}
        </motion.div>
        {/* Crest pulse during transition */}
        <motion.div
          className="fixed inset-0 z-[160] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, times: [0, 0.5, 1] }}
        >
          <img src={logo} alt="" className="h-20 w-auto opacity-90" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
