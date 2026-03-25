import React from 'react';
import { motion } from 'framer-motion';
import { SiLinux, SiGit, SiDocker, SiCplusplus, SiPython, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { BrainCircuit, Webhook } from 'lucide-react';

const skills = [
  { name: 'Linux', icon: SiLinux },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Python', icon: SiPython },
  { name: 'DSA', icon: BrainCircuit },
  { name: 'REST APIs', icon: Webhook },
  { name: 'Tailwind', icon: SiTailwindcss }
];

export default function Skills() {
  return (
    <section className="mb-24 border-t border-border-color pt-8" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Toolkit</h2>
        <span className="font-mono text-sm text-gray-500">[02]</span>
      </motion.div>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-border-color font-mono text-sm uppercase tracking-widest text-muted hover:text-primary hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-300 cursor-default flex items-center gap-3"
            >
              <Icon size={18} />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
