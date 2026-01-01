import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Wrench } from 'lucide-react';

const Skills = ({ isDark }) => {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'cyan',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Kotlin', level: 75 },
      ]
    },
    {
      title: 'Web Stack',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'Android & AI',
      icon: Smartphone,
      color: 'pink',
      skills: [
        { name: 'Jetpack Compose', level: 75 },
        { name: 'AI Agents', level: 65 },
      ]
    },
    {
      title: 'Dev Tools',
      icon: Wrench,
      color: 'indigo',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'REST APIs', level: 75 },
      ]
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500', border: 'border-cyan-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500' },
    };
    return colors[color];
  };

  return (
    <section id="skills" ref={sectionRef} className={`py-20 relative ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-cyan-500">02.</span> Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl backdrop-blur-sm border ${isDark ? 'bg-gray-900/40 border-gray-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-white border-gray-200'} transition-all group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className={`text-xs font-mono px-2 py-1 rounded border ${isDark ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
                    sys_check: OK
                  </div>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 font-mono text-sm">
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                           {'>'} {skill.name}
                        </span>
                        <span className={`${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-1.5 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: index * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                          className={`h-full ${colors.bg} rounded-full shadow-[0_0_10px_currentColor]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;