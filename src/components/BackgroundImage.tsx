
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Sky with gradient and clouds */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200"></div>
        
        {/* Clouds */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Large fluffy clouds */}
          <div className="absolute w-48 h-32 bg-white rounded-full blur-md top-1/6 left-1/4 opacity-80"></div>
          <div className="absolute w-64 h-36 bg-white rounded-full blur-md top-1/5 right-1/4 opacity-90"></div>
          <div className="absolute w-40 h-28 bg-white rounded-full blur-md top-1/3 right-1/6 opacity-70"></div>
          
          {/* Cloud clusters */}
          <div className="absolute w-32 h-24 bg-white rounded-full blur-md top-12 left-1/6 opacity-75"></div>
          <div className="absolute w-28 h-20 bg-white rounded-full blur-md top-20 left-1/5 opacity-75 -translate-x-6 -translate-y-4"></div>
        </motion.div>
        
        {/* Distant mountains */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 inset-x-0"
        >
          <div className="absolute bottom-1/3 inset-x-0 h-32 bg-indigo-300/50 rounded-[100%] scale-x-125"></div>
          <div className="absolute bottom-1/3 inset-x-0 h-48 bg-indigo-400/40 rounded-[100%] scale-x-150 translate-x-1/6"></div>
          <div className="absolute bottom-1/3 inset-x-0 h-40 bg-indigo-500/30 rounded-[100%] scale-x-125 -translate-x-1/6"></div>
        </motion.div>
        
        {/* Green rolling hills landscape */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 inset-x-0 h-2/3"
        >
          {/* Distant fields */}
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-emerald-200/80 rounded-tl-[70%] rounded-tr-[80%] scale-x-125"></div>
          
          {/* Middle ground hills */}
          <div className="absolute bottom-0 inset-x-0 h-2/5 bg-emerald-300/90 rounded-tl-[60%] rounded-tr-[70%] scale-x-110"></div>
          
          {/* Path through hills */}
          <div className="absolute bottom-0 left-1/2 h-2/5 w-8 bg-amber-200/70 rounded-t-full transform -translate-x-1/2 rotate-3"></div>
          <div className="absolute bottom-0 left-1/2 h-1/4 w-12 bg-amber-200/70 rounded-t-full transform -translate-x-1/2 -translate-y-12 -rotate-6"></div>
          
          {/* Foreground greenery */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-emerald-400/90 rounded-tl-[40%] rounded-tr-[50%] scale-x-110"></div>
        </motion.div>
        
        {/* Trees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0"
        >
          {/* Large tree on left */}
          <div className="absolute bottom-1/3 left-10 w-32 h-64">
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 w-4 h-32 bg-amber-700 transform -translate-x-1/2"></div>
            {/* Foliage */}
            <div className="absolute bottom-16 left-1/2 w-40 h-40 bg-emerald-500 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-4 -translate-x-6"></div>
            <div className="absolute bottom-20 left-1/2 w-36 h-36 bg-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-8 translate-x-6"></div>
          </div>
          
          {/* Smaller trees on right */}
          <div className="absolute bottom-1/4 right-16 w-24 h-48">
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 w-3 h-20 bg-amber-800 transform -translate-x-1/2"></div>
            {/* Foliage */}
            <div className="absolute bottom-12 left-1/2 w-24 h-24 bg-emerald-500 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-16 left-1/2 w-20 h-20 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-2 -translate-x-4"></div>
          </div>
          
          {/* Foreground small trees */}
          <div className="absolute bottom-1/8 left-1/4 w-16 h-32">
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 w-2 h-12 bg-amber-700 transform -translate-x-1/2"></div>
            {/* Foliage */}
            <div className="absolute bottom-8 left-1/2 w-16 h-16 bg-emerald-600 rounded-full transform -translate-x-1/2"></div>
          </div>
        </motion.div>
        
        {/* Small flowers in foreground */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute bottom-0 inset-x-0 h-1/6"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-pink-300 rounded-full" 
              style={{
                bottom: `${Math.random() * 8 + 2}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-yellow-200 rounded-full" 
              style={{
                bottom: `${Math.random() * 8 + 2}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </motion.div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </div>
    </div>
  );
};

export default BackgroundImage;
