import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import CursorTrail from '@/components/CursorTrail';
import { Toaster } from '@/components/ui/toaster';
import ParticlesBackground from '@/components/ParticlesBackground';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <Helmet>
        <title>Ansh Rastogi - Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="CS Undergrad specializing in MERN Stack, AI Agents, and Android Development. GSSoC Contributor 2025 & Google Arcade Facilitator. Open to internships." />
      </Helmet>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a] text-white selection:bg-cyan-500/30' : 'bg-gray-50 text-gray-900 selection:bg-purple-500/30'}`}>
        <CursorTrail />
        <ParticlesBackground isDark={isDark} />
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main className="relative z-10">
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <Awards isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;