import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SkillCategory = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-card p-6 hover:translate-y-[-5px] transition-transform duration-300"
  >
    <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-white/5 text-neon-blue rounded-full text-sm border border-neon-blue/20 hover:bg-neon-blue/10 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  // Synthesized data for visualization
  const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Database', A: 80, fullMark: 100 },
    { subject: 'Security', A: 75, fullMark: 100 },
    { subject: 'AI/ML', A: 70, fullMark: 100 },
    { subject: 'DevOps', A: 65, fullMark: 100 },
  ];

  const languageData = [
    { name: 'C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'ReactJS', level: 85 },
    { name: 'NodeJS', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-neon-purple">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col items-center justify-center min-h-[400px]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Competency Overview</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#00f3ff"
                    strokeWidth={2}
                    fill="#00f3ff"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Language Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {languageData.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frameworks" skills={resumeData.skills.frameworks} delay={0} />
          <SkillCategory title="Databases" skills={resumeData.skills.databases} delay={0.2} />
          <SkillCategory title="Tools" skills={resumeData.skills.tools} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
