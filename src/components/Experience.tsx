import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-neon-blue">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-dark-bg shadow-[0_0_10px_rgba(0,243,255,0.5)] z-10 mt-6"></div>

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass-card p-8 relative ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-sm text-neon-purple font-mono whitespace-nowrap px-3 py-1 bg-neon-purple/10 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm">
                      <Briefcase size={16} />
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-neon-blue rounded-full flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
