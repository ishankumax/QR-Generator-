import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCodeStyling from 'qr-code-styling';
import { useQRStore } from '../store/useQRStore';
import { Download, Share2, Eye } from 'lucide-react';

const QRPreview = ({ settings }) => {
  const ref = useRef(null);
  const addToHistory = useQRStore((state) => state.addToHistory);
  
  const qrCode = useRef(new QRCodeStyling({
    width: 300,
    height: 300,
    data: settings.value,
    dotsOptions: {
      color: settings.dotsColor,
      type: settings.dotsStyle,
    },
    backgroundOptions: {
      color: settings.bgColor,
    },
    cornersSquareOptions: {
      type: settings.cornerSquareStyle,
      color: settings.dotsColor
    },
    cornersDotOptions: {
      type: settings.cornerDotStyle,
      color: settings.dotsColor
    },
    margin: settings.margin,
    qrOptions: {
      errorCorrectionLevel: settings.errorCorrection
    }
  }));

  useEffect(() => {
    if (ref.current) {
      qrCode.current.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.current.update({
      data: settings.value,
      dotsOptions: {
        color: settings.dotsColor,
        type: settings.dotsStyle
      },
      backgroundOptions: {
        color: settings.bgColor,
      },
      cornersSquareOptions: {
        type: settings.cornerSquareStyle,
        color: settings.dotsColor
      },
      cornersDotOptions: {
        type: settings.cornerDotStyle,
        color: settings.dotsColor
      },
      margin: settings.margin,
      qrOptions: {
        errorCorrectionLevel: settings.errorCorrection
      }
    });
  }, [settings]);

  const onDownload = (ext) => {
    addToHistory();
    qrCode.current.download({
      name: `antigravity-qr-${Date.now()}`,
      extension: ext
    });
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <motion.div 
        layoutId="qr-box"
        className="relative group"
      >
        <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative p-10 bg-white rounded-[40px] shadow-2xl shadow-accent/5 border border-gray-100 flex items-center justify-center overflow-hidden w-full max-w-[420px] aspect-square transition-transform duration-500 group-hover:scale-[1.02]">
          <div ref={ref} className="qr-container scale-110" />
          
          <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-500 pointer-events-none" />
        </div>
      </motion.div>
      
      <div className="flex gap-4 w-full max-w-[420px]">
        <button 
          onClick={() => onDownload('png')}
          className="flex-[2] bg-gray-900 text-white py-4 rounded-3xl font-bold hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-gray-900/20"
        >
          <Download size={18} />
          Download PNG
        </button>
        <button 
          onClick={() => onDownload('svg')}
          className="flex-1 bg-white border border-gray-200 text-gray-900 py-4 rounded-3xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          SVG
        </button>
      </div>
    </div>
  );
};

export default QRPreview;

