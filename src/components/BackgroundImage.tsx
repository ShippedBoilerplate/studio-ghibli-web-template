import React from "react";
import { motion } from "framer-motion";

const BackgroundImage = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0">
        <img
          src="/landscape_image.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
