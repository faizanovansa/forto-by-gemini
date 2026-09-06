import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Mail, Linkedin, Instagram } from 'lucide-react';
import { content } from './data/content';

// Reusable animation preset for smooth cinematic reveals
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function App() {
  return (
    <div className="bg-archive-900 min-h-screen text-archive-100 font-body relative">
      <div className="noise-overlay"></div>

      {/* 01 - INTRODUCTION (HERO) */}
      <section className="relative h-screen flex flex-col justify-end px-6 md:px-16 pb-24 overflow-hidden border-b border-archive-800">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-archive-900 via-archive-900/80 to-transparent z-10 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-archive-900 via-archive-900/40 to-transparent z-10 md:hidden"></div>
          {/* PROFILE IMAGE PLACEHOLDER */}
          <img 
            src="/images/profile.jpg" 
            alt="Faiza Novansa" 
            className="w-full h-full object-cover object-center md:object-right grayscale opacity-40 mix-blend-screen"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"; // Tasteful fallback if your image is missing
            }}
          />
        </div>

        <motion.div 
          className="relative z-20 max-w-4xl"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-archive-accent"></span>
            <span className="tracking-widest text-xs uppercase text-archive-accent">Dossier / 01</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tight mb-6">
            {content.identity.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-400 tracking-wide max-w-xl">
            {content.identity.role}
          </p>
        </motion.div>
      </section>

      {/* 02 - THE PERSON */}
      <section className="py-32 px-6 md:px-16 border-b border-archive-800">
        <motion.div 
          className="max-w-3xl ml-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <h2 className="font-display text-4xl mb-8 text-archive-accent">Beyond The Screen</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-300">
            {content.identity.bio}
          </p>
        </motion.div>
      </section>

      {/* 03 & 07 - INTERESTS & EXPLORING */}
      <section className="py-32 px-6 md:px-16 border-b border-archive-800 bg-archive-800/20">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl mb-12 tracking-wide">Current Interests</h2>
            <ul className="space-y-6">
              {content.interests.map((interest, i) => (
                <li key={i} className="text-lg text-gray-300 flex items-start gap-4 border-b border-archive-800 pb-4">
                  <span className="text-archive-accent text-sm font-mono pt-1">0{i+1}</span>
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl mb-12 tracking-wide">Credentials</h2>
            <div className="space-y-6">
              {content.credentials.map((cred, i) => (
                <div key={i} className="group border border-archive-800 p-8 hover:border-archive-accent transition-colors duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase tracking-widest text-archive-accent">{cred.status}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-archive-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-display mb-1">{cred.title}</h3>
                  <p className="text-gray-400 font-light">{cred.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 05 - PROJECT ARCHIVE */}
      <section className="py-32 px-6 md:px-16 border-b border-archive-800">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="h-[1px] w-12 bg-archive-accent"></span>
            <h2 className="font-display text-4xl tracking-wide uppercase">Project Archive</h2>
          </div>

          <div className="space-y-12">
            {content.projects.map((project, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 group">
                <div className="md:col-span-2 text-gray-500 font-mono text-sm pt-2">
                  {project.year} // {project.id}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl font-display mb-2 group-hover:text-archive-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">{project.category}</p>
                </div>
                <div className="md:col-span-4 text-gray-300 font-light leading-relaxed">
                  {project.description}
                </div>
                <div className="md:col-span-2 flex gap-4 md:justify-end items-start pt-2">
                  {project.links.demo && (
                    <a href={project.links.demo} className="hover:text-archive-accent transition-colors" aria-label="Live Demo">
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="hover:text-archive-accent transition-colors" aria-label="GitHub Repository">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 04 - JOURNEY / TIMELINE */}
      <section className="py-32 px-6 md:px-16 border-b border-archive-800">
         <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h2 className="font-display text-4xl mb-16 text-center tracking-wide">Chronology</h2>
          <div className="relative border-l border-archive-800 ml-4 md:ml-0">
            {content.journey.map((item, i) => (
              <div key={i} className="mb-12 ml-8 relative">
                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-archive-900 border-2 border-archive-accent"></span>
                <span className="text-archive-accent font-mono text-sm mb-2 block">{item.year}</span>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 08 - CONTACT / CLOSING */}
      <footer className="py-32 px-6 md:px-16 relative overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h2 className="font-display text-6xl md:text-8xl mb-8 text-gray-800">END OF ARCHIVE</h2>
          <p className="text-xl text-gray-400 font-light mb-12">System open for new connections and inquiries.</p>
          
          <div className="flex justify-center gap-8">
            <a href={content.socialLinks.email} className="text-gray-500 hover:text-archive-100 transition-colors"><Mail className="w-8 h-8" /></a>
            <a href={content.socialLinks.github} className="text-gray-500 hover:text-archive-100 transition-colors"><Github className="w-8 h-8" /></a>
            <a href={content.socialLinks.linkedin} className="text-gray-500 hover:text-archive-100 transition-colors"><Linkedin className="w-8 h-8" /></a>
            <a href={content.socialLinks.instagram} className="text-gray-500 hover:text-archive-100 transition-colors"><Instagram className="w-8 h-8" /></a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
