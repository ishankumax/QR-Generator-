import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCodeStyling from 'qr-code-styling';
import { useQRStore } from '../store/useQRStore';
import { Download, FileCode } from 'lucide-react';

const QRPreview = ({ settings }) => {
  const ref = useRef(null);
  const addToHistory = useQRStore((state) => state.addToHistory);

  const qrCode = useRef(new QRCodeStyling({
    width: 240,
    height: 240,
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
      <div className="relative flex items-center justify-center">
        {/* Ambient glow behind the box */}
        <div
          className="absolute inset-0 rounded-none pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${settings.dotsColor}33 0%, transparent 70%)`,
            filter: 'blur(20px)',
            transform: 'scale(1.3)',
          }}
        />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative bg-white shadow-2xl"
          style={{
            padding: '20px',
            boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${settings.dotsColor}22`,
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-[-2px] left-[-2px] w-5 h-5 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute top-[-2px] right-[-2px] w-5 h-5 border-t-2 border-r-2 border-blue-500" />
          <div className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-b-2 border-l-2 border-blue-500" />
          <div className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-b-2 border-r-2 border-blue-500" />

          {/* QR Code render target */}
          <div
            ref={ref}
            className="block"
            style={{ lineHeight: 0, fontSize: 0 }}
          />
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
