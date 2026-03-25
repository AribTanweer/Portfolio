import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Profiles() {
  const [stats, setStats] = useState({
    leetcode: 'Loading...',
    codeforces: 'Loading...'
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Using a public LeetCode stats API. Replace 'arib' with the actual username later if needed.
        // For demonstration, we'll use a known active user or a generic placeholder if it fails
        const lcRes = await fetch('https://leetcode-stats-api.herokuapp.com/AribTanweer'); 
        const lcData = await lcRes.json();
        
        if (lcData.status === 'success') {
          setStats(prev => ({ ...prev, leetcode: `${lcData.totalSolved} Solved` }));
        } else {
          setStats(prev => ({ ...prev, leetcode: 'Active' }));
        }
      } catch (err) {
        setStats(prev => ({ ...prev, leetcode: 'Active' }));
      }

      // GitHub API
      try {
        const ghRes = await fetch('https://api.github.com/users/AribTanweer');
        const ghData = await ghRes.json();
        
        if (ghData.public_repos !== undefined) {
          setStats(prev => ({ ...prev, github: `${ghData.public_repos} Repos` }));
        } else {
          setStats(prev => ({ ...prev, github: 'Active' }));
        }
      } catch (err) {
        setStats(prev => ({ ...prev, github: 'Active' }));
      }
    };

    fetchStats();
  }, []);

  const profiles = [
    {
      name: 'LeetCode',
      stat: stats.leetcode,
      icon: Code2,
      url: 'https://leetcode.com/u/AribTanweer/'
    },
    {
      name: 'GitHub',
      stat: stats.github || 'Loading...',
      icon: Github,
      url: 'https://github.com/AribTanweer/'
    },
    {
      name: 'LinkedIn',
      stat: 'Connect',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/arib-tanweer/'
    }
  ];

  return (
    <section className="mb-24 border-t border-border-color pt-8" id="profiles">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Profiles</h2>
        <span className="font-mono text-sm text-gray-500">[04]</span>
      </motion.div>
      
      <div className="flex flex-col gap-0 border border-border-color font-mono uppercase">
        {profiles.map((profile, index) => {
          const Icon = profile.icon;
          return (
            <motion.a 
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-between p-6 border-b last:border-b-0 border-border-color hover:bg-foreground/5 hover:backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <Icon size={30} className="text-muted group-hover:text-foreground transition-colors duration-300" />
                <div>
                  <h4 className="font-medium text-lg text-muted group-hover:text-foreground transition-colors duration-300">{profile.name}</h4>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <p className="text-sm text-muted/60 group-hover:text-muted transition-colors duration-300">{profile.stat}</p>
                <ArrowRight className="text-muted group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
