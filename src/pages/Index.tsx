import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { Footer } from "@/components/Footer";
import CTA from "../components/CTA";

const Index = () => {
  React.useEffect(() => {
    // Add the Libre Baskerville font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
