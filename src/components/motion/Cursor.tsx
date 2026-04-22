import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const enabled = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) { enabled.current = false; return; }
    document.documentElement.classList.add("cursor-none");
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const link = t.closest("a,button,[data-cursor]");
      if (link) {
        setHover(true);
        setLabel((link.getAttribute("data-cursor")) || null);
      } else { setHover(false); setLabel(null); }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled.current) return null;
  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-deep mix-blend-difference"
      />
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-deep/60 mix-blend-difference"
      >
        {label && <span className="text-[9px] font-display font-bold uppercase tracking-widest text-deep">{label}</span>}
      </motion.div>
    </>
  );
};
