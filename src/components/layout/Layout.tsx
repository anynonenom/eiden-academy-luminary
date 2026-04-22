import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { PageTransition } from "./PageTransition";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen flex flex-col">
    <ScrollProgress />
    <Nav />
    <main className="flex-1">
      <PageTransition>{children}</PageTransition>
    </main>
    <Footer />
  </div>
);
