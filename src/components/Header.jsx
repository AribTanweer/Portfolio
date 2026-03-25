import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#tech-stack' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Profiles', href: '#profiles' },
  ];

  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b border-border-color px-0 py-6 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4 md:mb-0 group cursor-pointer w-full md:w-auto justify-between"
        >
          <a href="#" className="text-xl font-black tracking-tighter uppercase font-mono text-foreground hover:text-primary transition-colors">
            AT<span className="text-muted">.</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        <div className="hidden md:flex flex-col md:flex-row flex-1 justify-end gap-6 md:gap-12 items-center">
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-8">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-sm font-medium uppercase tracking-widest text-muted hover:text-primary transition-colors font-mono" 
                href={link.href}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 border border-border-color flex items-center justify-center text-muted hover:text-primary hover:bg-foreground/5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center border border-border-color h-10 px-6 text-sm font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-all font-mono"
              onClick={() => {
                window.location.href = "mailto:artk409@gmail.com";
              }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border border-border-color mb-16 z-20 relative"
          >
            <div className="flex flex-col p-6 gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  className="text-lg font-medium uppercase tracking-widest text-muted hover:text-primary transition-colors font-mono w-full text-center py-2" 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="w-full flex items-center justify-center border border-border-color h-12 text-sm font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-all font-mono"
                onClick={() => {
                  window.location.href = "mailto:artk409@gmail.com";
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
