import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import QRPreview from './components/QRPreview';
import History from './components/History';
import ScanabilityIndicator from './components/ScanabilityIndicator';
import { useQRStore } from './store/useQRStore';
import { Sparkles, ArrowRight, Zap, Shield, Share2, Cpu, BarChart3, Database } from 'lucide-react';

function App() {
  const settings = useQRStore();

  return (
    <div className="min-h-screen bg-[#000510] relative overflow-hidden selection:bg-blue-500/30 font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-ibm-gradient opacity-80 pointer-events-none" />
      
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <Navbar />

      <main className="relative pt-40 pb-32 px-6 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="mb-24 ibm-border pl-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            <Cpu size={14} />
            <span>AI-Driven QR Generation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95]"
          >
            Antigravity <br /> 
            <span className="text-blue-500">Agentic AI</span> <br />
            Professional QR
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed"
          >
            Amplify your brand growth with RAG-optimized QR experiences. 
            Precision design meets enterprise-grade AI architecture.
          </motion.p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 bg-[#0a0f1d] border border-white/10 p-10"
          >
            <Controls />
          </motion.div>

          {/* Right: Preview & Secondary Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 space-y-8 lg:sticky lg:top-32"
          >
            <div className="bg-black/20 p-12 border border-white/5 backdrop-blur-sm">
              <QRPreview settings={settings} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <ScanabilityIndicator />
                
                <div className="card bg-[#0062ff] text-white border-none group cursor-pointer overflow-hidden relative min-h-[160px] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 size={18} className="text-white" />
                      <h4 className="font-bold text-lg">Enterprise Analytics</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-4">Track engagement metrics with deep learning insights.</p>
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <History />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border border-white/10 bg-white/5 flex flex-col gap-3">
                    <Database size={18} className="text-blue-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Storage</span>
                    <span className="text-sm font-bold text-white">RAG Optimized</span>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5 flex flex-col gap-3">
                    <Shield size={18} className="text-blue-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Security</span>
                    <span className="text-sm font-bold text-white">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
                <div className="w-4 h-4 bg-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">Antigravity</span>
            </div>
            <div className="flex gap-20">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Network</span>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Coursera</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">IBM Cloud</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Resources</span>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">AI Ethics</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Documentation</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-gray-500 text-sm">© 2026 Antigravity x IBM. All rights reserved. Professional Certificate Program.</p>
            <div className="flex gap-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



