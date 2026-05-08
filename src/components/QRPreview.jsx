import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const QRPreview = ({ settings }) => {
  const ref = useRef(null);
  const qrCode = useRef(new QRCodeStyling({
    width: 300,
    height: 300,
    data: settings.value,
    dotsOptions: {
      color: settings.dotsColor,
      type: settings.dotsStyle,
      gradient: settings.dotsGradientType !== 'none' ? {
        type: settings.dotsGradientType,
        colorStops: [
          { offset: 0, color: settings.dotsGradientColor1 },
          { offset: 1, color: settings.dotsGradientColor2 }
        ]
      } : undefined
    },
    backgroundOptions: {
      color: settings.bgColor,
    },
    cornersSquareOptions: {
      type: settings.cornerSquareStyle,
      color: settings.cornerSquareColor
    },
    cornersDotOptions: {
      type: settings.cornerDotStyle,
      color: settings.cornerDotColor
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
        color: settings.cornerSquareColor
      },
      cornersDotOptions: {
        type: settings.cornerDotStyle,
        color: settings.cornerDotColor
      },
      margin: settings.margin,
      qrOptions: {
        errorCorrectionLevel: settings.errorCorrection
      }
    });
  }, [settings]);

  const onDownload = (ext) => {
    qrCode.current.download({
      name: "antigravity-qr",
      extension: ext
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="p-8 bg-white rounded-[32px] shadow-2xl shadow-accent/10 border border-gray-100 flex items-center justify-center overflow-hidden w-full max-w-[400px] aspect-square">
        <div ref={ref} className="qr-container" />
      </div>
      
      <div className="flex gap-3 w-full max-w-[400px]">
        <button 
          onClick={() => onDownload('png')}
          className="flex-1 bg-gray-900 text-white py-3 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
        >
          PNG
        </button>
        <button 
          onClick={() => onDownload('svg')}
          className="flex-1 bg-white border border-gray-200 text-gray-900 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
        >
          SVG
        </button>
      </div>
    </div>
  );
};

export default QRPreview;
