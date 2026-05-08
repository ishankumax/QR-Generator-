import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCodeStyling from 'qr-code-styling';
import { useQRStore } from '../store/useQRStore';
import { Download, FileCode } from 'lucide-react';

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
      color: settings.dotsColor,
    },
    cornersDotOptions: {
      type: settings.cornerDotStyle,
      color: settings.dotsColor,
    },
    margin: settings.margin,
    qrOptions: {
      errorCorrectionLevel: settings.errorCorrection,
    },
  }));

  useEffect(() => {
    if (ref.current) {
      // Clear any previous canvas/svg first
      ref.current.innerHTML = '';
      qrCode.current.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.current.update({
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
        color: settings.dotsColor,
      },
      cornersDotOptions: {
        type: settings.cornerDotStyle,
        color: settings.dotsColor,
      },
      margin: settings.margin,
      qrOptions: {
        errorCorrectionLevel: settings.errorCorrection,
      },
    });
  }, [settings]);

  const onDownload = (ext) => {
    addToHistory?.();
    qrCode.current.download({
      name: `antigravity-qr-${Date.now()}`,
      extension: ext,
    });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Floating QR Box */}
      <div className="relative w-full flex items-center justify-center py-4">
        {/* Ambient glow */}
        <div
          className="absolute w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${settings.dotsColor}40 0%, transparent 65%)`,
            filter: 'blur(24px)',
          }}
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative bg-white"
          style={{
            padding: '16px',
            boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 48px ${settings.dotsColor}30`,
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-[-2px] left-[-2px] w-5 h-5 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute top-[-2px] right-[-2px] w-5 h-5 border-t-2 border-r-2 border-blue-500" />
          <div className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-b-2 border-l-2 border-blue-500" />
          <div className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-b-2 border-r-2 border-blue-500" />

          {/* QR render target — display:block removes inline gap */}
          <div ref={ref} style={{ display: 'block', lineHeight: 0, fontSize: 0 }} />
        </motion.div>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col w-full gap-2">
        <button
          onClick={() => onDownload('png')}
          className="w-full bg-[#0062ff] hover:bg-[#0052d4] text-white py-3 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[11px]"
        >
          <Download size={14} />
          Download PNG
        </button>
        <button
          onClick={() => onDownload('svg')}
          className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 py-3 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[11px]"
        >
          <FileCode size={14} />
          Export SVG
        </button>
      </div>
    </div>
  );
};

export default QRPreview;
