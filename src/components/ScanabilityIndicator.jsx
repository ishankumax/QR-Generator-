import React from 'react';
import { useQRStore } from '../store/useQRStore';
import { calculateScanability } from '../utils/qrUtils';
import { ShieldCheck, Info } from 'lucide-react';

const ScanabilityIndicator = () => {
  const settings = useQRStore();
  const { label, color, score } = calculateScanability(settings);

  return (
    <div className="card bg-white/5 border border-white/10 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className={color} size={18} />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">System Scan</span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 border ${color.replace('text', 'border')} ${color}`}>{label.toUpperCase()}</span>
      </div>
      
      <div className="w-full bg-black/40 rounded-none h-1 mb-5 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${color.replace('text', 'bg')}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-[10px] text-gray-500 font-medium leading-relaxed flex gap-2">
        <Info size={12} className="shrink-0 text-blue-500" />
        Verification algorithm considers module density and ECC redundancy levels for optimal RAG retrieval.
      </p>
    </div>
  );
};

export default ScanabilityIndicator;
