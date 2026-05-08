import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCodeStyling from 'qr-code-styling';
import { useQRStore } from '../store/useQRStore';
import { Download, Share2, Globe, FileCode } from 'lucide-react';

const QRPreview = ({ settings }) => {
  const ref = useRef(null);
  const addToHistory = useQRStore((state) => state.addToHistory);
  
  const qrCode = useRef(new QRCodeStyling({
    width: 320,
    height: 320,
    data: settings.value,
    dotsOptions: {
      color: settings.dotsColor,
      type: settings.dotsStyle,
    },
    backgroundOptions: {
      color: 'transparent',
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
        color: 'transparent',
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
    qrCode.current.download({
      name: `antigravity-qr-${Date.now()}`,
      extension: ext
    });
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        layoutId="qr-box"
        className="bg-white p-12 shadow-2xl relative mb-12"
      >
        <div ref={ref} className="relative z-10" />
        <div className="absolute top-0 left-0 w-full h-full border border-black/10 pointer-events-none" />
        <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-blue-600" />
        <div className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-2 border-r-2 border-blue-600" />
      </motion.div>

      <div className="flex flex-col w-full max-w-[320px] gap-4">
        <button 
          onClick={() => onDownload('png')}
          className="w-full bg-[#0062ff] hover:bg-[#0052d4] text-white py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
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

