import React from 'react';
import { Code, Moon, Sun, Monitor } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass px-6 py-4 rounded-3xl flex items-center justify-between shadow-2xl shadow-accent/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center relative">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-bold text-xl tracking-tight">Antigravity</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-accent transition-colors">Docs</a>
          <a href="#" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#" className="hover:text-accent transition-colors">Enterprise</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors">
            <Sun size={20} className="text-gray-600" />
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Code size={18} />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
