import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import Home from "@/pages/Home";
import OverOns from "@/pages/OverOns";
import OverBrenda from "@/pages/OverBrenda";
import Behandelingen from "@/pages/Behandelingen";
import Specialisaties from "@/pages/Specialisaties";
import Tarieven from "@/pages/Tarieven";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/over-brenda" element={<OverBrenda />} />
          <Route path="/behandelingen" element={<Behandelingen />} />
          <Route path="/specialisaties" element={<Specialisaties />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}