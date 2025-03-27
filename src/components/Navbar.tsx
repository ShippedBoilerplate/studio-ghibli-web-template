
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-10 py-6 px-8 md:px-12"
    >
      <nav className="flex justify-start space-x-12">
        <a href="/" className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide">
          Home
        </a>
        <a href="/about" className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide">
          About
        </a>
        <a href="/contact" className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide">
          Contact
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
