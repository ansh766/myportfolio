import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const Awards = ({ isDark }) => {
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

  const awards = [
    {
      icon: Award,
      title: 'Arcade Ranger Badge',
      organization: 'Google Cloud Facilitator Program',
      description: 'Achieved Arcade Ranger badge for completing advanced learning paths and demonstrating expertise in Google Cloud technologies.',
      year: '2025',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'State Rank 7501',
      organization: 'Diploma Entrance Examination',
      description: 'Secured State Rank 7501 in the Diploma Entrance Examination, demonstrating strong academic performance and technical aptitude.',
      year: '2022',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', glow: 'shadow-blue-500/50' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', glow: 'shadow-purple-500/50' },
    };
    return colors[color];
  };

  return (
    <section id="awards" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            const colors = getColorClasses(award.color);

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-xl ${isDark ? 'bg-gray-900/50' : 'bg-white'} border-2 ${isDark ? 'border-gray-800' : 'border-gray-200'} hover:${colors.border} hover:shadow-2xl hover:${colors.glow} transition-all group overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl ${colors.bg}/10 group-hover:${colors.bg} transition-all`}>
                      <Icon className={`w-8 h-8 ${colors.text} group-hover:text-white transition-all`} />
                    </div>
                    <span className={`text-sm font-semibold px-4 py-1 rounded-full ${colors.bg}/10 ${colors.text}`}>
                      {award.year}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {award.title}
                  </h3>
                  
                  <p className={`font-medium mb-4 ${colors.text}`}>
                    {award.organization}
                  </p>
                  
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;