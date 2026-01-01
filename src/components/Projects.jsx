import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
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

  const projects = [
    {
      title: 'E-Myne Book',
      category: 'Android',
      description: 'Digital library app with online/offline reading, progress tracking, customization, multi-language support',
      features: ['Multi-Language', 'Offline Mode', 'Room DB', 'Jetpack Compose'],
      stack: ['Kotlin', 'Compose', 'Room', 'Android SDK'],
      year: '2024',
      liveDemo: 'https://www.youtube.com/shorts/R6pkiiKRB-w',
      icon: SmartphoneIcon
    },
    {
      title: 'GenCode',
      category: 'Web',
      description: 'Modern portfolio with AI chat interface, code management, 4 themes, deployment system',
      features: ['AI Chat', 'Code Editor', 'Live Preview', 'Deploy System'],
      stack: ['JS', 'HTML/CSS', 'Claude API', 'Vercel'],
      year: '2024',
      liveDemo: 'https://ai-beta-amber.vercel.app/',
      icon: CodeIcon
    }
  ];

  function SmartphoneIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
        </svg>
    )
  }

  function CodeIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        </svg>
    )
  }

  const filters = ['All', 'Web', 'Android', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className={`py-20 ${isDark ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-cyan-500">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? 'default' : 'outline'}
                className={`font-mono transition-all ${
                  filter === filterName 
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                    : isDark 
                      ? 'border-gray-800 text-gray-400 hover:border-cyan-500 hover:text-cyan-400' 
                      : 'border-gray-300 text-gray-700 hover:border-cyan-500'
                }`}
              >
                {filterName}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
                <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative rounded-xl overflow-hidden backdrop-blur-md border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-white border-gray-200'} hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500`}
                >
                {/* Decorative Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-800 text-cyan-400' : 'bg-gray-100 text-cyan-600'} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        <span className="font-mono text-xs px-2 py-1 rounded border border-gray-700 text-gray-500">
                            {project.year}
                        </span>
                    </div>

                    <h3 className={`text-2xl font-bold font-mono mb-3 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-cyan-400 transition-colors`}>
                    {project.title}
                    </h3>

                    <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                    </p>

                    <div className="space-y-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-1 rounded text-xs font-mono border ${isDark ? 'border-purple-500/30 text-purple-300 bg-purple-500/10' : 'border-purple-200 text-purple-700 bg-purple-50'}`}
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all group-hover:translate-y-[-2px]"
                    >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    </a>
                </div>
                </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;