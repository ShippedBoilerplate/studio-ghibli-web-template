
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Gradient Sky Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-200 to-amber-100"></div>
        
        {/* Mountains Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-3/5"
        >
          {/* Far Mountains */}
          <div className="absolute bottom-1/3 inset-x-0 h-full">
            <div className="absolute inset-0 bg-indigo-900/30 rounded-tl-[100%] rounded-tr-[100%] scale-x-125 transform translate-y-1/4"></div>
          </div>
          
          {/* Middle Mountains */}
          <div className="absolute bottom-1/4 inset-x-0 h-full">
            <div className="absolute inset-0 bg-indigo-800/40 rounded-tl-[100%] rounded-tr-[100%] scale-x-150 transform -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute inset-0 bg-purple-900/30 rounded-tl-[100%] rounded-tr-[100%] scale-x-150 transform translate-x-1/4 translate-y-1/3"></div>
          </div>
          
          {/* Front Mountains */}
          <div className="absolute bottom-0 inset-x-0 h-full">
            <div className="absolute inset-0 bg-indigo-900/50 rounded-tl-[100%] rounded-tr-[100%] scale-x-125 transform -translate-x-1/6"></div>
            <div className="absolute inset-0 bg-purple-900/50 rounded-tl-[100%] rounded-tr-[100%] scale-x-125 transform translate-x-1/6"></div>
          </div>
        </motion.div>
        
        {/* Foreground Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-indigo-950 to-transparent"
        ></motion.div>
        
        {/* Stars Layer */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full opacity-80" 
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 60 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 5 + 5 + 's',
              }}
            ></div>
          ))}
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
    </div>
  );
};

export default BackgroundImage;
