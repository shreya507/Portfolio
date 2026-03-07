import React from 'react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shreya Kumari. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
              <Github size={20} />
            </a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-neon-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by Shreya Kumari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
