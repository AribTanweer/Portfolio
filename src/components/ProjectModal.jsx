import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] pointer-events-none flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-background border border-border-color w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto relative shadow-glow-strong"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors z-10"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col md:flex-row min-h-[60vh]">
                {/* Visual / Icon Header for the Modal */}
                <div className="md:w-2/5 bg-background border-b md:border-b-0 md:border-r border-border-color p-0 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,128,128,0.08)_0%,transparent_70%)] z-10 pointer-events-none"></div>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8 opacity-90 relative z-20" />
                  ) : (
                    <project.icon size={160} strokeWidth={0.5} className="text-foreground/20 relative z-0 drop-shadow-[0_0_30px_rgba(128,128,128,0.1)]" />
                  )}
                </div>

                {/* Content Area */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted mb-4 border border-border-color px-2 py-1 inline-block w-max">
                    Case Study
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">{project.title}</h2>
                  
                  <div className="prose prose-invert max-w-none mb-8">
                    <p className="font-mono text-sm leading-relaxed text-muted mb-6">
                      {project.longDescription || project.description}
                    </p>
                    
                    <h4 className="text-foreground uppercase font-bold text-sm tracking-widest mb-4">Architecture & Logic</h4>
                    <p className="font-mono text-sm leading-relaxed text-muted mb-6">
                      {project.architecture || "Engineered with a focus on high-performance algorithms, modularity, and strict adherence to minimalist design principles. The backend scales horizontally while the frontend maintains 60fps animations."}
                    </p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-border-color">
                    <h4 className="text-foreground uppercase font-bold text-sm tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-mono border border-border-color text-muted px-2 py-1 uppercase">{tech}</span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links.map(link => {
                        const LinkIcon = link.icon;
                        return (
                          <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer" className="border border-border-color bg-foreground/5 hover:bg-foreground/10 px-6 py-3 font-mono text-sm uppercase tracking-widest font-medium transition-all flex items-center gap-2 group">
                            <LinkIcon size={16} className="group-hover:scale-110 transition-transform" /> {link.type}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
