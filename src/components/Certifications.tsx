import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-neon-blue" />
              Certifications
            </h2>
            <div className="space-y-6">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                  <div className="mt-1 text-neon-blue">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-gray-200 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-neon-purple" />
              Achievements
            </h2>
            <div className="space-y-6">
              {resumeData.achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-colors border-l-4 border-l-neon-purple">
                  <p className="text-gray-200 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
