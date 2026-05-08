import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

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
      <div className={`max-w-7xl mx-auto rounded-[32px] transition-all duration-500 ${
        scrolled ? 'glass px-6 py-3 shadow-2xl shadow-accent/5 border-white/40' : 'px-0'
      } flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 font-outfit">Antigravity</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Templates', 'API', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-semibold text-gray-500 hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Globe size={20} />
          </a>
          <button className="btn-primary py-2 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

