import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404:", location.pathname); }, [location.pathname]);
  return (
    <section className="min-h-screen flex items-center justify-center container-fluid pt-32">
      <div className="text-center">
        <div className="h-display text-[clamp(6rem,20vw,18rem)] text-deep leading-none">404</div>
        <p className="font-italic-serif text-3xl text-gold">Page not architected.</p>
        <Link to="/" className="mt-10 inline-block font-display text-xs uppercase tracking-[0.3em] border border-deep px-8 py-4 hover:bg-deep hover:text-cream transition-colors">← Return home</Link>
      </div>
    </section>
  );
};
export default NotFound;
