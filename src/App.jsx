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

      <main className="flex flex-col lg:flex-row h-screen pt-24 overflow-hidden">
        {/* Left Panel: Scrollable Customization */}
        <section className="flex-1 overflow-y-auto custom-scrollbar px-6 lg:px-12 py-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0a0f1d] border border-white/5 p-8 lg:p-12 mb-20"
            >
              <Controls />
            </motion.div>
          </div>
        </section>

        {/* Vertical Divider Line */}
        <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        {/* Right Panel: Sticky Preview */}
        <aside className="w-full lg:w-[480px] bg-[#000510]/50 backdrop-blur-md border-l border-white/5 overflow-y-auto lg:overflow-visible">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-8 p-8 lg:p-10 space-y-8"
          >
            <div className="bg-black/60 p-12 border border-white/5 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <QRPreview settings={settings} />
            </div>
            
            <div className="space-y-6">
              <ScanabilityIndicator />
              <History />
            </div>
          </motion.div>
        </aside>
      </main>
    </div>
  );
}

export default App;



