import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
