import { motion, useScroll } from "framer-motion";
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[300] h-[2px] origin-left bg-gradient-to-r from-teal via-gold to-deep" />
  );
};
