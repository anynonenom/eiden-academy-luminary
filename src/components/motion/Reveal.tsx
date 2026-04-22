import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SplitReveal = ({ text, className = "", as: Tag = "h2" as any, delay = 0 }: { text: string; className?: string; as?: any; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const words = text.split(" ");
  const Component = motion[Tag as "h2"] || motion.h2;
  return (
    <Component ref={ref as any} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
