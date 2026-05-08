import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-8 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center relative overflow-hidden group flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800" />
            <span className="relative z-10 text-white font-black text-sm tracking-tighter leading-none">AG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none">Antigravity</span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">x IBM AI</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Curriculum', 'Network', 'Infrastructure', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="p-2 text-gray-500 hover:text-blue-400 transition-colors"
          >
            <Globe size={18} />
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 uppercase tracking-widest transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


