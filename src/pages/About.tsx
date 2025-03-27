import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundImage />
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-libre font-bold text-white mb-8">
          About Us
        </h1>
        <div className="bg-amber-50 rounded-lg p-8 shadow-lg">
          <p className="text-xl font-crimson text-gray-700 mb-6">
            Our journey began with a simple vision: to help dreamers turn their
            aspirations into tangible realities.
          </p>
          <p className="text-xl font-crimson text-gray-700 mb-6">
            Founded in 2023, we've been dedicated to providing tools, resources,
            and guidance to those who dare to dream beyond the ordinary.
          </p>
          <p className="text-xl font-crimson text-gray-700">
            Join our community of visionaries and start your journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
