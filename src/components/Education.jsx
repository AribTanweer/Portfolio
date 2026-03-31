import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    level: 'B.Tech',
    field: 'Computer Science',
    institution: 'Lovely Professional University',
    period: '2023 — 2027',
    status: 'Current',
    detail: 'CGPA 8.65',
  },
  {
    level: 'XII',
    field: 'Senior Secondary',
    institution: 'Good Samaritan School',
    period: '2020 — 2022',
    status: null,
    detail: null,
  },
  {
    level: 'X',
    field: 'Secondary',
    institution: 'Good Samaritan School',
    period: '2019 — 2020',
    status: null,
    detail: null,
  },
];

export default function Education() {
  return (
    <section className="mb-24 border-t border-border-color pt-8" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Education</h2>
        <span className="font-mono text-sm text-gray-500">[01]</span>
      </motion.div>

      <div className="border border-border-color divide-y divide-border-color">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            className="group relative p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-background hover:bg-foreground/[0.03] transition-colors duration-500"
          >
            {/* Timeline accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-foreground/30 transition-colors duration-500" />

            {/* Period & Status */}
            <div className="md:w-44 shrink-0 flex flex-col gap-1">
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                {item.period}
              </span>
              {item.status && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-foreground/80 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {item.status}
                </span>
              )}
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.level}
                  <span className="text-muted font-medium normal-case ml-2 text-base">
                    — {item.field}
                  </span>
                </h3>
                {item.institution && (
                  <p className="font-mono text-sm text-muted mt-1">{item.institution}</p>
                )}
              </div>

              {item.detail && (
                <span className="font-mono text-sm md:text-base font-bold text-foreground border border-border-color px-3 py-1 rounded-sm group-hover:border-foreground/30 transition-colors duration-500 whitespace-nowrap self-start md:self-auto">
                  {item.detail}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
