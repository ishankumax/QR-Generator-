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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 px-8 py-3 shadow-2xl' : 'px-0'
      } flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 flex flex-col justify-between p-1 opacity-20 group-hover:opacity-40 transition-opacity">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-[1px] bg-white" />)}
            </div>
            <div className="w-4 h-4 bg-white z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none">Antigravity</span>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">x IBM AI</span>
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


