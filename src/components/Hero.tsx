
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/landscape-background.jpg" 
          alt="Serene landscape with mountains and trees" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
        {/* Hero Text */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white text-center leading-tight tracking-wide"
        >
          Turn dreams<br/>into reality
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl font-crimson text-white text-center max-w-2xl"
        >
          Take the first step to building your dreams
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a 
            href="/get-started" 
            className="bg-coral hover:bg-opacity-90 text-white font-crimson font-medium px-12 py-4 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
        
        {/* Social Proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-24 text-white font-crimson text-lg tracking-wide"
        >
          Loved by 200+ dreamers
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
