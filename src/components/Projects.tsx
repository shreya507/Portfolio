import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-neon-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-neon-purple/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple group-hover:scale-110 transition-transform duration-300">
                  <Code size={24} />
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Details</h4>
                <ul className="space-y-2">
                  {project.details.slice(0, 3).map((detail, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-neon-blue mt-1">›</span>
                      <span className="line-clamp-2">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-full border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
