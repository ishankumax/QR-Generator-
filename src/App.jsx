import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import QRPreview from './components/QRPreview';
import ScanabilityIndicator from './components/ScanabilityIndicator';
import { useQRStore } from './store/useQRStore';
import { Sparkles, ArrowRight } from 'lucide-react';

function App() {
  const settings = useQRStore();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-600 text-sm font-semibold mb-6"
          >
            <Sparkles size={14} />
            <span>Introducing Antigravity 2.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Generate beautiful QR <br className="hidden md:block" /> codes <span className="text-indigo-600">instantly.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Design-first QR generation with intelligent customization and high-resolution exports.
          </motion.p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 shadow-2xl shadow-gray-200/50"
          >
            <Controls />
          </motion.div>

          {/* Right: Preview & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 space-y-8 lg:sticky lg:top-32"
          >
            <QRPreview settings={settings} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <ScanabilityIndicator />
              
              <div className="card flex flex-col justify-center gap-4 bg-gray-900 text-white border-none group cursor-pointer overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 p-6">
                  <h4 className="font-bold text-lg mb-1">Go Premium</h4>
                  <p className="text-gray-400 text-sm mb-4">Unlock SVG logos, custom shapes, and analytics.</p>
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                    View Plans <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 grayscale opacity-50">
            <div className="w-6 h-6 bg-gray-900 rounded-lg" />
            <span className="font-bold tracking-tight text-gray-900">Antigravity</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Antigravity Labs. Built for designers.</p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
