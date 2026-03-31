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
      
      <div className="border border-border-color group">
        <div className="p-8 md:p-12 flex flex-col justify-center bg-background/80">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-black uppercase mb-6 tracking-tight text-foreground"
          >
            Full-stack developer. Problem solver.
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-sm md:text-base text-muted leading-relaxed mb-6"
          >
            I'm a Computer Science undergrad who loves building things that live on the web. From crafting responsive front-ends to designing robust back-end systems, I enjoy working across the entire stack—with a keen eye for clean code and intuitive interfaces.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm md:text-base text-muted leading-relaxed"
          >
            Currently diving deeper into cloud infrastructure, data structures, and modern web frameworks—always looking for the next challenge to sharpen my craft.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
