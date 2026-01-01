import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Sparkles, Terminal } from 'lucide-react';

const About = ({ isDark }) => {
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

  const terminalLines = [
    { cmd: "npm install", output: "skills-loaded v1.0.0" },
    { cmd: "git commit", output: "feat: added new technologies" },
    { cmd: "echo $PASSION", output: "Full Stack Development & AI" },
  ];

  return (
    <section id="about" ref={sectionRef} className={`py-20 relative overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
       {/* Background Grid */}
       <div className={`absolute inset-0 opacity-[0.03] ${isDark ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' : ''}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-cyan-500">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`p-6 rounded-xl backdrop-blur-sm border ${isDark ? 'bg-gray-900/40 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-white border-gray-200'} transition-all group`}>
              <GraduationCap className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Education <span className="text-cyan-500">//</span>
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Completed Diploma in Computer Science Engineering (2022-2025). Currently pursuing B.Tech in CS, building a strong algorithmic foundation.
              </p>
            </div>

            <div className={`p-6 rounded-xl backdrop-blur-sm border ${isDark ? 'bg-gray-900/40 border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-white border-gray-200'} transition-all group`}>
              <Code className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tech Stack <span className="text-purple-500">//</span>
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Specialized in MERN stack, AI agents, and Android (Jetpack Compose). Strong DSA foundation in C++ with OOPs principles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Terminal Widget */}
            <div className={`rounded-xl overflow-hidden border ${isDark ? 'bg-[#1e1e1e] border-gray-700' : 'bg-gray-900 border-gray-800'} shadow-2xl`}>
              <div className="flex items-center gap-2 px-4 py-3 bg-opacity-50 bg-black border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-400 font-mono">bash -- user@ansh-portfolio</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-4">
                {terminalLines.map((line, i) => (
                   <div key={i}>
                     <div className="flex gap-2 text-green-400">
                       <span>➜</span>
                       <span className="text-cyan-300">~</span>
                       <span>{line.cmd}</span>
                     </div>
                     <div className="text-gray-400 pl-4 pb-2">{line.output}</div>
                   </div>
                ))}
                <div className="flex gap-2 text-green-400 animate-pulse">
                  <span>➜</span>
                  <span className="text-cyan-300">~</span>
                  <span className="w-2 h-5 bg-gray-400 block" />
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border ${isDark ? 'bg-gradient-to-br from-cyan-900/10 to-purple-900/10 border-cyan-500/20' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                 <Sparkles className="w-6 h-6 text-pink-500" />
                 <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                   Focus Areas
                 </h3>
              </div>
              <ul className={`space-y-2 font-mono text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">➜</span> Real-world MERN Apps
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">➜</span> AI Agents Research
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➜</span> Advanced DSA (C++)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;