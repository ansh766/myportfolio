import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      
      setTrails(prev => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      {/* Main Cursor Glow */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-cyan-500/30 blur-md"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Trailing Effect */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed w-2 h-2 rounded-full bg-purple-500/50"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            left: trail.x, 
            top: trail.y,
            transform: 'translate(-50%, -50%)' 
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;