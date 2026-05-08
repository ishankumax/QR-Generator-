import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQRStore } from '../store/useQRStore';
import { History as HistoryIcon, Trash2, ExternalLink } from 'lucide-react';

const History = () => {
  const { history, removeFromHistory, clearHistory, setQRSettings } = useQRStore();

  if (history.length === 0) return null;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="section-title mb-0">
          <HistoryIcon size={14} /> History
        </h3>
        <button 
          onClick={clearHistory}
          className="text-[10px] font-bold text-gray-400 uppercase hover:text-red-500 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all cursor-pointer"
              onClick={() => setQRSettings({ value: item.value, type: item.type, dotsColor: item.dotsColor, dotsStyle: item.dotsStyle })}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: item.dotsColor }}
              >
                <ExternalLink size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate uppercase tracking-tight">{item.type}</p>
                <p className="text-[10px] text-gray-500 truncate">{item.value}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromHistory(item.id);
                }}
                className="p-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default History;
