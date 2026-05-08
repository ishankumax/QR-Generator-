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
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 bg-ibm-gradient opacity-60 pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" style={{ zIndex: 1 }} />

      <Navbar />

      <main className="relative flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 72px)', marginTop: '72px', zIndex: 1 }}>
        {/* Left Panel: Scrollable Customization */}
        <section className="flex-1 overflow-y-auto custom-scrollbar px-6 lg:px-10 py-8">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0a0f1d] border border-white/10 p-6 lg:p-10 mb-16"
            >
              <Controls />
            </motion.div>
          </div>
        </section>

        {/* Vertical Divider Line */}
        <div className="hidden lg:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Right Panel: Sticky Preview */}
        <aside className="w-full lg:w-[420px] flex-shrink-0 bg-[#020a1a] border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-0 p-6 lg:p-8 space-y-6"
          >
            <div className="bg-[#050d1f] p-6 border border-white/10 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <QRPreview settings={settings} />
            </div>
            
            <div className="space-y-5">
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



