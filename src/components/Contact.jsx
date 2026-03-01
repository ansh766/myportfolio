import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Error: Missing Arguments",
      description: "Please provide all required parameters.",
      variant: "destructive"
    });
    return;
  }

  emailjs.send(
    'service_ykc1o3q',      // EmailJS dashboard se
    'template_5d0gm52',     // EmailJS dashboard se
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'rastogiiansh@gmail.com'
    },
    'h1aUZ6dx78lmnr4It'       // EmailJS dashboard se
  ).then(() => {
    setIsSubmitted(true);
    toast({
      title: "Success! Message Transmitted 🚀",
      description: "Connection established. I'll ping you back shortly!",
    });
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  }).catch((error) => {
    toast({
      title: "Transmission Failed",
      description: "Something went wrong. Try again!",
      variant: "destructive"
    });
    console.error(error);
  });
};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rastogiiansh@gmail.com',
      href: 'mailto:rastogiiansh@gmail.com',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7906747236',
      href: 'tel:7906747236',
      color: 'purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'anshrastogi012',
      href: 'https://www.linkedin.com/in/anshrastogi012/',
      color: 'pink'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ansh766',
      href: 'https://github.com/ansh766',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-500' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500' },
    };
    return colors[color];
  };

  return (
    <section id="contact" ref={sectionRef} className={`py-20 relative overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      <div className={`absolute inset-0 opacity-[0.03] ${isDark ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' : ''}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-cyan-500">05.</span> Initialize Handshake
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-4" />
          <p className={`text-lg font-mono ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {'// Open to internships and collaboration opportunities'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`p-8 rounded-xl backdrop-blur-md border ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-2xl font-bold font-mono mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Connect Protocols
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const colors = getColorClasses(info.color);

                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border border-transparent ${isDark ? 'bg-gray-800/50 hover:border-cyan-500/30' : 'bg-gray-50 hover:bg-white'} transition-all group`}
                    >
                      <div className={`p-3 rounded-lg ${colors.bg}/10 group-hover:${colors.bg} transition-all duration-300`}>
                        <Icon className={`w-5 h-5 ${colors.text} group-hover:text-white transition-all`} />
                      </div>
                      <div>
                        <p className={`text-sm font-mono font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {info.label}
                        </p>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-xl backdrop-blur-md border ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200'} space-y-6 relative`}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal className="w-24 h-24" />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`peer w-full px-4 py-3 rounded-lg font-mono ${isDark ? 'bg-black/50 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-cyan-500 outline-none transition-all`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 -top-2.5 px-2 text-sm font-mono font-medium ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all`}
                >
                  const name = "..."
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`peer w-full px-4 py-3 rounded-lg font-mono ${isDark ? 'bg-black/50 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-cyan-500 outline-none transition-all`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 -top-2.5 px-2 text-sm font-mono font-medium ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all`}
                >
                  const email = "..."
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`peer w-full px-4 py-3 rounded-lg font-mono ${isDark ? 'bg-black/50 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-cyan-500 outline-none transition-all resize-none`}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 -top-2.5 px-2 text-sm font-mono font-medium ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'} peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all`}
                >
                  const message = "..."
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-6 rounded-lg font-bold font-mono hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50"
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Terminal className="w-5 h-5" />
                    Transmission Complete
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Execute Send()
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`font-mono text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            © 2026 Ansh Rastogi. Built with React.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;