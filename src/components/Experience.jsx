import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Bot, Code } from 'lucide-react';

const Experience = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Student Engineer',
      organization: 'CSE Diploma',
      period: '2022 – 2025',
      color: 'cyan',
      description: 'Completed Diploma in Computer Science Engineering with strong foundation in programming, data structures, and software development.'
    },
    {
      icon: Rocket,
      title: 'Contributor',
      organization: 'GSSoC (GirlScript Summer of Code)',
      period: '2025',
      color: 'purple',
      description: 'Contributing to open-source projects, collaborating with developers worldwide, and enhancing coding skills through real-world projects.'
    },
    {
      icon: Bot,
      title: 'AI Agent Research',
      organization: 'AI Agents Learning Journey',
      period: 'Ongoing',
      color: 'pink',
      description: 'Researching and building AI agents, exploring autonomous systems, and implementing intelligent solutions for real-world problems.'
    },
    {
      icon: Code,
      title: 'Developer Learning',
      organization: 'Google Arcade Facilitator',
      period: '2025',
      color: 'indigo',
      description: 'Facilitating learning experiences, helping peers understand Google Cloud technologies, and fostering a collaborative learning environment.'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500', border: 'border-cyan-500', glow: 'shadow-cyan-500/50' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', glow: 'shadow-purple-500/50' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', glow: 'shadow-pink-500/50' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', glow: 'shadow-indigo-500/50' },
    };
    return colors[color];
  };

  return (
    <section id="experience" ref={sectionRef} className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
             <span className="text-cyan-500">04.</span> Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const colors = getColorClasses(exp.color);

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl backdrop-blur-md border ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200'} hover:border-opacity-100 hover:${colors.border} hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colors.bg}/10 group-hover:${colors.bg} transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${colors.text} group-hover:text-white transition-all`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h3>
                      <span className={`text-xs font-mono font-semibold px-2 py-1 rounded border border-gray-700 text-gray-400`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={`font-medium mb-3 ${colors.text} font-mono text-sm`}>
                      <span className="opacity-50">@</span> {exp.organization}
                    </p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;