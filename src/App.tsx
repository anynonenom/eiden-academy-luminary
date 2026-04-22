import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Preloader } from "@/components/motion/Preloader";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index.tsx";
import Mice from "./pages/Mice.tsx";
import Formations from "./pages/Formations.tsx";
import FormationDetail from "./pages/FormationDetail.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mice" element={<Mice />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/formations/:slug" element={<FormationDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
