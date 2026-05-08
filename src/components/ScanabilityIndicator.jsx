import React from 'react';
import { useQRStore } from '../store/useQRStore';
import { calculateScanability } from '../utils/qrUtils';
import { ShieldCheck, Info } from 'lucide-react';

const ScanabilityIndicator = () => {
  const settings = useQRStore();
  const { label, color, score } = calculateScanability(settings);

  return (
    <div className="card border-none bg-accent/5 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className={color} size={20} />
          <span className="font-semibold text-gray-900">Scan Quality</span>
        </div>
        <span className={`text-sm font-bold ${color}`}>{label}</span>
      </div>
      
      <div className="w-full bg-gray-200/50 rounded-full h-1.5 mb-4 overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${color.replace('text', 'bg')}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 flex gap-2">
        <Info size={14} className="shrink-0" />
        High contrast and error correction (Q/H) improve scan reliability.
      </p>
    </div>
  );
};

export default ScanabilityIndicator;
