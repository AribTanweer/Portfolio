import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="mb-24 flex flex-col items-start justify-center min-h-[60vh]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-muted text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
      >
        <span className="w-8 h-px bg-muted"></span>
        System Online
      </motion.div>
      
      <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter w-full uppercase mb-6 flex flex-col pt-4">
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-outline transition-all duration-300 block"
        >
          HI, I'M
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="block"
        >
          ARIB
        </motion.span>
      </h1>
      
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-lg md:text-xl font-mono font-medium max-w-2xl mt-8 text-muted border-l px-4 border-white/10"
      >
        FULL STACK WEB DEVELOPER. BUILDING STARK, MINIMALIST, HIGH-PERFORMANCE DIGITAL EXPERIENCES.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 mt-12"
      >
        <a 
          href="#projects" 
          className="border border-border-color bg-foreground/5 backdrop-blur-sm text-foreground hover:bg-foreground/10 px-8 py-4 font-mono text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-2"
        >
          View Work
        </a>
        <a 
          href="https://drive.google.com/file/d/1GdmbTSzBcdPuGkcDiJPHudw3b5JMVOvf/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background hover:opacity-90 px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
}
