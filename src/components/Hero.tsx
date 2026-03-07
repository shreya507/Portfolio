import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const skills = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, skills, typingSpeed]);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-neon-blue font-mono text-lg mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {resumeData.personalInfo.name}
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-8">
              I am a <span className="text-neon-purple font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </h3>
            <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
              {resumeData.personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="/resume.pdf" // Assuming resume is in public folder, or we can link to a drive
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              Download Resume
              <Download size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <SocialLink href={resumeData.personalInfo.github} icon={<Github />} />
            <SocialLink href={resumeData.personalInfo.linkedin} icon={<Linkedin />} />
            <SocialLink href={`mailto:${resumeData.personalInfo.email}`} icon={<Mail />} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300 border border-white/5 hover:border-neon-purple/50"
  >
    {icon}
  </a>
);

export default Hero;
