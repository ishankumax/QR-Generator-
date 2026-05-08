import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import QRPreview from './components/QRPreview';
import History from './components/History';
import ScanabilityIndicator from './components/ScanabilityIndicator';
import { useQRStore } from './store/useQRStore';
import { Sparkles, ArrowRight, Zap, Shield, Share2 } from 'lucide-react';

function App() {
  const settings = useQRStore();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden selection:bg-accent/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      
      {/* Animated Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 px-4 py-2 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} />
            <span>Antigravity QR v2.0 is live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8 font-outfit"
          >
            Generate <span className="text-accent">premium</span> <br /> QR experiences.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The world's most advanced QR code generator for designers and developers. 
            High-fidelity customization with professional exports.
          </motion.p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 bg-white border border-gray-100 rounded-[40px] p-10 shadow-2xl shadow-gray-200/50"
          >
            <Controls />
          </motion.div>

          {/* Right: Preview & Secondary Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 space-y-8 lg:sticky lg:top-32"
          >
            <QRPreview settings={settings} />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <ScanabilityIndicator />
                
                <div className="card bg-gray-900 text-white border-none group cursor-pointer overflow-hidden relative min-h-[160px] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Zap size={16} className="text-accent" />
                      </div>
                      <h4 className="font-bold text-lg">Pro Features</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">SVG logos, custom shapes, and advanced analytics.</p>
                    <div className="flex items-center gap-2 text-accent font-bold text-sm">
                      Upgrade Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <History />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col gap-2">
                    <Shield size={16} className="text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Secure</span>
                    <span className="text-sm font-bold text-gray-900">Encrypted</span>
                  </div>
                  <div className="p-4 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col gap-2">
                    <Share2 size={16} className="text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Export</span>
                    <span className="text-sm font-bold text-gray-900">SVG/PNG</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900 font-outfit">Antigravity</span>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product</span>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-accent">Features</a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-accent">Pricing</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Resources</span>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-accent">Documentation</a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-accent">API Docs</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-100">
            <p className="text-gray-400 text-sm">© 2026 Antigravity Labs. Crafted with precision for the modern web.</p>
            <div className="flex gap-8 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

