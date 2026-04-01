import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1JgnXFQYizwzHL-18EpxZHWjAncu5vw57/view?usp=sharing',
  },
  {
    name: 'Data Structures and Algorithms in C++',
    issuer: 'CipherSchools',
    link: 'https://drive.google.com/file/d/11OgzrsHFrjg8OyjOKjpimmniocDXP0r2/view?usp=sharing',
  },
  {
    name: 'C Programming',
    issuer: 'CipherSchools',
    link: 'https://drive.google.com/file/d/12ULVmgdNYOgz8s0F9tKTH3rGYJ_5AfPx/view?usp=sharing',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    link: 'https://drive.google.com/file/d/1OovHGRYQA0FH5lldTj9gZ6YwsPV3M6rf/view?usp=sharing',
  },
];

export default function Certificates() {
  return (
    <section className="mb-24 border-t border-border-color pt-8" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Certificates</h2>
        <span className="font-mono text-sm text-gray-500">[05]</span>
      </motion.div>

      <div className="flex flex-col gap-0 border border-border-color font-mono uppercase">
        {certificates.map((cert, index) => (
          <motion.a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-6 border-b last:border-b-0 border-border-color hover:bg-foreground/5 hover:backdrop-blur-sm transition-all duration-300 group"
          >
            <div className="flex items-center gap-6">
              <Award size={30} className="text-muted group-hover:text-foreground transition-colors duration-300 shrink-0" />
              <div>
                <h4 className="font-medium text-lg text-muted group-hover:text-foreground transition-colors duration-300">{cert.name}</h4>
                <p className="text-xs text-muted/60 group-hover:text-muted transition-colors duration-300 mt-1">{cert.issuer}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted/60 group-hover:text-muted transition-colors duration-300 hidden sm:inline">View</span>
              <ExternalLink className="text-muted group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300 shrink-0" size={20} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
