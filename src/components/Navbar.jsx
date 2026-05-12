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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6 transition-all duration-500">
      <nav 
        className={`w-full max-w-7xl flex items-center justify-between px-6 lg:px-8 py-3 transition-all duration-500 border ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-2xl' 
            : 'bg-transparent border-transparent rounded-none'
        }`}
      >
        <div className="flex items-center gap-5">
          {/* Enhanced Logo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-11 h-11 bg-black border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              <span className="relative z-10 text-white font-black text-base tracking-tighter leading-none italic">KQ</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white uppercase leading-none">Kumar QR</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] opacity-80">Autonomous Engine</span>
          </div>
        </div>

        {/* Themed Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Core', href: '#' },
            { name: 'Geometry', href: '#' },
            { name: 'Repository', href: '#' },
            { name: 'API Docs', href: '#' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="group relative py-2"
            >
              <span className="text-[10px] font-bold text-gray-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end mr-2">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Network Status</span>
            <span className="text-[10px] font-mono text-blue-400">0.0012ms lag</span>
          </div>
          
          <a 
            href="https://www.ishankumax.me/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white text-black text-[10px] font-black px-6 py-3 uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              Portfolio
              <Cpu size={12} className="group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


