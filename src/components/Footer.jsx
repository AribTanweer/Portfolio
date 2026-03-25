import React from 'react';
import { Mail, Github, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-color py-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto z-10 relative">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-black uppercase tracking-tighter">ARIB TANWEER</h2>
        <span className="font-mono text-xs text-muted">© {new Date().getFullYear()} Arib Tanweer. All rights reserved.</span>
      </div>
      
      <div className="flex gap-4">

        <a 
          href="mailto:artk409@gmail.com"
          aria-label="Send email"
          className="w-12 h-12 border border-border-color flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 hover:backdrop-blur-sm transition-all duration-300 group"
        >
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://github.com/AribTanweer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="w-12 h-12 border border-border-color flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 hover:backdrop-blur-sm transition-all duration-300 group"
        >
          <Github size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://leetcode.com/u/AribTanweer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode profile"
          className="w-12 h-12 border border-border-color flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 hover:backdrop-blur-sm transition-all duration-300 group"
        >
          <Code2 size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
