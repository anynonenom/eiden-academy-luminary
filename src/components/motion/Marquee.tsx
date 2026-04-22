import { ReactNode } from "react";

export const Marquee = ({ children, reverse = false, className = "" }: { children: ReactNode; reverse?: boolean; className?: string }) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div className={`flex shrink-0 gap-12 pr-12 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {children}{children}
      </div>
    </div>
  );
};
