export const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-4 text-deep">
    <span className="font-display text-[10px] tracking-[0.3em] uppercase">{n}</span>
    <span className="h-px w-10 bg-gold" />
    <span className="font-italic-serif text-xl text-teal">{label}</span>
  </div>
);

export const BigNumber = ({ n }: { n: string }) => (
  <div aria-hidden className="pointer-events-none absolute -top-6 right-0 font-display font-black text-[20vw] leading-none text-deep/[0.04] select-none">{n}</div>
);
