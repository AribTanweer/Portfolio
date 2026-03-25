import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    formData.append('access_key', '3db3bae3-1899-4f1f-8864-fc0e2e8d99a3');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setFormState('success');
        e.target.reset();
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (_err) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section className="mb-24 border-t border-border-color pt-8" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Contact</h2>
        <span className="font-mono text-sm text-gray-500">[05]</span>
      </motion.div>

      <div className="flex flex-col md:flex-row border border-border-color">
        <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-border-color bg-background/80 flex flex-col justify-center">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-black uppercase mb-6"
          >
            Let's build<br />something<br />exceptional.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-muted max-w-md leading-relaxed"
          >
            Currently open for new opportunities, freelance projects, and exciting collaborations.
          </motion.p>
        </div>

        <div className="md:w-1/2 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,128,128,0.05)_0%,transparent_50%)] opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10 w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              <input 
                type="text" 
                name="name"
                id="name"
                required
                className="w-full bg-transparent border-b border-border-color py-3 text-foreground focus:outline-none focus:border-foreground transition-colors peer font-mono text-sm"
                placeholder=" "
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-3 text-muted font-mono text-sm transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/50"
              >
                NAME
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative"
            >
              <input 
                type="email" 
                name="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-border-color py-3 text-foreground focus:outline-none focus:border-foreground transition-colors peer font-mono text-sm"
                placeholder=" "
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 text-muted font-mono text-sm transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-4 peer-valid:text-xs peer-valid:text-foreground/50"
              >
                EMAIL
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative mt-4"
            >
              <textarea 
                name="message"
                id="message"
                required
                rows="4"
                className="w-full bg-transparent border border-border-color p-4 text-foreground focus:outline-none focus:border-foreground transition-colors peer font-mono text-sm resize-none"
                placeholder=" "
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-4 top-4 text-muted font-mono text-sm transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-6 peer-valid:text-xs peer-valid:text-foreground/50"
              >
                MESSAGE
              </label>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full border border-border-color bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm text-foreground py-4 font-mono text-sm uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {formState === 'idle' && (
                <>
                  <span className="group-hover:translate-x-1 transition-transform">Transmit</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
              {formState === 'submitting' && <span className="animate-pulse">Transmitting...</span>}
              {formState === 'success' && <span className="text-green-500">Received.</span>}
              {formState === 'error' && <span className="text-red-500">Failed. Try again.</span>}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
