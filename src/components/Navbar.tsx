import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-50 py-6 px-8 md:px-12"
    >
      <nav className="flex justify-start space-x-12">
        <Link
          to="/"
          className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-opacity-80 transition-all duration-300 text-lg font-crimson tracking-wide"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
};

export default Navbar;
