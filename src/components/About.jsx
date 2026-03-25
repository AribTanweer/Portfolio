import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="mb-24 border-t border-border-color pt-8" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">About</h2>
        <span className="font-mono text-sm text-gray-500">[00]</span>
      </motion.div>
      
      <div className="flex flex-col md:flex-row border border-border-color group">
        <div className="md:w-1/2 min-h-[400px] border-b md:border-b-0 md:border-r border-border-color p-8 flex items-center justify-center relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,128,128,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center text-center z-10"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 border border-border-color rounded-full flex items-center justify-center mb-6 group-hover:border-foreground/50 transition-colors duration-500 overflow-hidden relative">
              {/* Placeholder for an actual image, currently abstract monogram */}
              <span className="text-4xl md:text-6xl font-black font-mono text-muted group-hover:text-foreground transition-colors duration-500">AT</span>
              <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-700"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-background/80">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-black uppercase mb-6 tracking-tight text-foreground"
          >
            Obsessed with performance. Driven by design.
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-sm md:text-base text-muted leading-relaxed mb-6"
          >
            I engineer digital experiences that bridge the gap between stark, heavy minimalism and flawless technical execution. My work focuses on removing the unnecessary until only the essential remains—both in code and interface.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm md:text-base text-muted leading-relaxed"
          >
            Currently building highly scalable web architectures, writing clean algorithms, and exploring the bleeding edge of UI/UX interactions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
