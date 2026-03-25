import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { ExternalLink, Code2, ShoppingCart, Webhook } from 'lucide-react';

const projects = [
  {
    title: 'Trackr',
    description: 'A comprehensive issue and task tracking application focusing on productivity and seamless team collaboration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: [
      { type: 'Code', url: 'https://github.com/AribTanweer/Trackr', icon: Code2 }
    ],
    image: '/images/trackr.png',
    icon: Webhook,
    reverse: false,
    longDescription: "Trackr is built to streamline workflow management with an intuitive interface. It handles complex state management, user authentication, and real-time updates.",
    architecture: "Employs a standard MERN stack architecture with a strong emphasis on component reusability and RESTful API principles for data synchronization."
  },
  {
    title: 'Metro Booking',
    description: 'Web application for streamlined metro ticket booking, featuring dynamic routing and real-time scheduling.',
    technologies: ['React', 'Tailwind', 'Vite'],
    links: [
      { type: 'Demo', url: 'https://metro-booking.vercel.app/', icon: ExternalLink },
      { type: 'Code', url: 'https://github.com/AribTanweer/metro-booking', icon: Code2 }
    ],
    image: '/images/metro-booking.png',
    icon: ShoppingCart,
    reverse: true,
    longDescription: "Designed to provide a frictionless experience for commuters to book metro tickets online. It includes interactive station selection and fare calculation.",
    architecture: "A highly responsive frontend caching route data for rapid interactions, built to scale and handle concurrent booking requests effortlessly."
  },
  {
    title: 'PawGuide Chatbot',
    description: 'An AI-powered chatbot designed to assist pet owners with specific, reliable care and health guidance.',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind'],
    links: [
      { type: 'Demo', url: 'https://paw-guide-chatbot.vercel.app/', icon: ExternalLink },
      { type: 'Code', url: 'https://github.com/AribTanweer/PawGuide-Chatbot', icon: Code2 }
    ],
    image: '/images/pawguide.png',
    icon: Webhook,
    reverse: false,
    longDescription: "PawGuide leverages natural language processing to answer common and complex questions regarding pet health, training, and general care.",
    architecture: "Serverless architecture utilizing Next.js API routes to securely interface with the OpenAI API, ensuring low latency and high availability."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="mb-24 border-t border-border-color pt-8" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Projects</h2>
        <span className="font-mono text-sm text-gray-500">[03]</span>
      </motion.div>
      
      <div className="flex flex-col gap-0 border border-border-color">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row${project.reverse ? '-reverse' : ''} border-b last:border-b-0 border-border-color group`}
            >
              {/* Content Side */}
              <div className={`md:w-1/2 p-8 border-b md:border-b-0 ${project.reverse ? 'md:border-l' : 'md:border-r'} border-border-color flex flex-col justify-between`}>
                <div>
                  <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="font-mono text-sm text-muted mb-8 leading-relaxed uppercase">{project.description}</p>
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-mono border border-border-color text-muted px-2 py-1 uppercase">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.map(link => {
                      const LinkIcon = link.icon;
                      return (
                        <a key={link.type} href={link.url} className="font-mono text-sm uppercase font-medium text-muted hover:text-primary flex items-center gap-2 transition-colors cursor-pointer">
                          <LinkIcon size={18} /> {link.type}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Image/Visual Side (Clickable for Modal) */}
              <div 
                className="md:w-1/2 min-h-[300px] bg-background relative overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 border-[1px] border-border-color group-hover:border-foreground/20 transition-all z-10 m-4 pointer-events-none"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  ) : (
                    <Icon size={120} strokeWidth={1} className="text-foreground/10 group-hover:text-foreground transition-colors duration-500" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
