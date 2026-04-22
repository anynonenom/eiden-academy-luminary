import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={loc.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.6, ease: [0.2,0.8,0.2,1] }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
