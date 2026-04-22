import { useRef, ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode; to?: string; onClick?: () => void; className?: string; cursor?: string };

export const MagneticButton = ({ children, to, onClick, className = "", cursor = "GO" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };

  const inner = (
    <div ref={ref} data-cursor={cursor} className={`magnetic inline-flex items-center justify-center px-8 py-4 font-display text-xs uppercase tracking-[0.25em] ${className}`}
      onMouseMove={move} onMouseLeave={reset}>
      {children}
    </div>
  );
  if (to) return <Link to={to} onClick={onClick}>{inner}</Link>;
  return <button onClick={onClick} className="contents">{inner}</button>;
};
