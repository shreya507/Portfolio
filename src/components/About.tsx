import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {resumeData.personalInfo.summary}
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am passionate about building scalable software solutions and exploring the depths of cybersecurity. 
              My academic background in Computer Science Engineering has provided me with a strong foundation in 
              algorithms, data structures, and system design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover:border-neon-blue/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-full text-neon-blue">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-white/10 pl-6 ml-2 relative">
                <div className="absolute w-4 h-4 bg-neon-purple rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(188,19,254,0.5)]"></div>
                <h4 className="text-xl font-semibold text-white mb-1">{edu.institution}</h4>
                <p className="text-neon-blue mb-2">{edu.degree}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-white font-medium bg-white/5 inline-block px-3 py-1 rounded-full text-sm">
                  {edu.score}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
