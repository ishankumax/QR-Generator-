import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQRStore } from '../store/useQRStore';
import { History as HistoryIcon, Trash2, ExternalLink } from 'lucide-react';

const History = () => {
  const { history, removeFromHistory, clearHistory, setQRSettings } = useQRStore();

  if (history.length === 0) return null;

  return (
    <div className="card bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="section-title mb-0">
          <HistoryIcon size={14} /> Repository
        </h3>
        <button 
          onClick={clearHistory}
          className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-red-500 transition-colors"
        >
          Flush Cache
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex items-center gap-4 p-4 bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer"
              onClick={() => setQRSettings({ value: item.value, type: item.type, dotsColor: item.dotsColor, dotsStyle: item.dotsStyle })}
            >
              <div 
                className="w-8 h-8 flex items-center justify-center text-white"
                style={{ backgroundColor: item.dotsColor }}
              >
                <ExternalLink size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-gray-300 truncate uppercase tracking-widest">{item.type}</p>
                <p className="text-[10px] text-gray-600 truncate font-mono">{item.value}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromHistory(item.id);
                }}
                className="p-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Trash2 size={12} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default History;

