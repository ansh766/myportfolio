import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code2, Cpu } from 'lucide-react';

const Hero = ({ isDark }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Ansh Rastogi";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const codeSnippet = `const developer = {
  name: "Ansh Rastogi",
  role: "Full Stack Developer",
  skills: ["MERN", "AI", "C++"],
  status: "Open to Work"
};`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                v2.0.25 Ready
              </span>
              <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold font-mono glitch-text ${isDark ? 'text-white' : 'text-gray-900'}`} data-text={displayedText}>
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-3 h-12 md:h-16 bg-cyan-500 ml-2 align-middle"
              />
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <p className={`text-lg md:text-xl font-medium ${isDark ? 'text-cyan-100/80' : 'text-gray-700'}`}>
                <span className="text-cyan-400">&lt;</span> CS Undergrad <span className="text-cyan-400">/&gt;</span> | Full Stack MERN | AI Agents (Research) | DSA in C++
              </p>
              
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} border-l-2 border-purple-500 pl-4`}>
                Building real-world skills: MERN Stack • AI Agents • C++ DSA • Android Jetpack Compose. 
                <br />
                <span className="italic text-sm mt-2 block opacity-70">Solving problems and learning by building.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                Hire Me
              </a>
              <a
                href="#projects"
                className={`px-8 py-3 border ${isDark ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10' : 'border-gray-300 hover:border-cyan-500'} rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-2`}
              >
                <Code2 className="w-4 h-4" />
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Code Window Decoration */}
            <div className={`absolute -top-12 -right-12 z-20 p-4 rounded-xl backdrop-blur-md border ${isDark ? 'bg-black/80 border-cyan-500/30' : 'bg-white/80 border-gray-200'} shadow-2xl transform rotate-6 hidden md:block`}>
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className={`font-mono text-sm ${isDark ? 'text-cyan-300' : 'text-purple-600'}`}>
                {codeSnippet}
              </pre>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className={`relative rounded-2xl overflow-hidden border-2 ${isDark ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border-gray-200 shadow-2xl'}`}>
                <img
                  src="https://horizons-cdn.hostinger.com/78ea8d80-be7a-4437-8388-68dcf44b2551/b48958783148518a738481aa7b674212.jpg"
                  alt="Ansh Rastogi"
                  className="w-full h-auto transform transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                   <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-cyan-500/30">
                     <Cpu className="w-5 h-5 text-cyan-400" />
                   </div>
                   <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/30">
                     <Code2 className="w-5 h-5 text-purple-400" />
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-gray-600'}`} />
      </motion.div>
    </section>
  );
};

export default Hero;