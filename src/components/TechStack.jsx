import React from 'react';
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from '@icons-pack/react-simple-icons';

const technologies = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="mb-24 border-t border-border-color pt-8" id="tech-stack">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Tech Stack</h2>
        <span className="font-mono text-sm text-gray-500">[01]</span>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border-color"
      >
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center p-12 border-b md:border-b-0 ${i !== technologies.length - 1 ? 'md:border-r' : ''} border-border-color group hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-500`}
            >
              <Icon size={60} strokeWidth={1} className="text-muted group-hover:text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
              <h3 className="mt-6 text-lg font-medium font-mono uppercase tracking-wider text-muted group-hover:text-primary transition-colors duration-500">{tech.name}</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
