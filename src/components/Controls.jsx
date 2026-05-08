import React from 'react';
import { useQRStore } from '../store/useQRStore';
import { 
  Type, Link, Mail, Phone, Wifi, 
  Palette, Grid, Settings, 
  Layout, Camera, Code, Briefcase, Calendar
} from 'lucide-react';

const Controls = () => {
  const { type, value, wifiSsid, wifiPassword, wifiEncryption, setQRSettings, loadTemplate, ...settings } = useQRStore();

  const handleValueChange = (e) => {
    setQRSettings({ value: e.target.value });
  };

  const templates = [
    { name: 'Portfolio', icon: Briefcase, data: { value: 'https://portfolio.me', dotsColor: '#10b981', cornerSquareColor: '#10b981', dotsStyle: 'classy' } },
    { name: 'Instagram', icon: Camera, data: { value: 'https://instagram.com/user', dotsColor: '#ec4899', cornerSquareColor: '#ec4899', dotsStyle: 'dots' } },
    { name: 'GitHub', icon: Code, data: { value: 'https://github.com/user', dotsColor: '#1f2937', cornerSquareColor: '#1f2937', dotsStyle: 'square' } },
    { name: 'WiFi', icon: Wifi, data: { type: 'wifi', dotsColor: '#6366f1', cornerSquareColor: '#6366f1', dotsStyle: 'extra-rounded' } },
    { name: 'Event', icon: Calendar, data: { value: 'https://event.com', dotsColor: '#f59e0b', cornerSquareColor: '#f59e0b', dotsStyle: 'rounded' } },
  ];

  const dotStyles = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];
  const cornerStyles = ['square', 'dot', 'extra-rounded'];

  return (
    <div className="space-y-8">
      {/* Content Section */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Type size={14} /> Content
        </h3>
        <div className="space-y-4">
          <div className="flex bg-gray-100 p-1 rounded-2xl">
            {['url', 'text', 'email', 'phone', 'wifi'].map((t) => (
              <button
                key={t}
                onClick={() => setQRSettings({ type: t })}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                  type === t ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
          
          <input
            type="text"
            value={value}
            onChange={handleValueChange}
            placeholder={`Enter ${type}...`}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
          />
        </div>
      </section>

      {/* Templates Section */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Layout size={14} /> Templates
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {templates.map((tmpl) => (
            <button
              key={tmpl.name}
              onClick={() => loadTemplate(tmpl.data)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-accent/5 group-hover:border-accent/20 transition-all">
                <tmpl.icon size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">{tmpl.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Design Section */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Palette size={14} /> Design
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">Dots Color</label>
              <div className="flex gap-2 p-2 bg-gray-50 rounded-xl border border-gray-100">
                <input 
                  type="color" 
                  value={settings.dotsColor} 
                  onChange={(e) => setQRSettings({ dotsColor: e.target.value })}
                  className="w-8 h-8 rounded-lg overflow-hidden border-none cursor-pointer"
                />
                <input 
                  type="text" 
                  value={settings.dotsColor} 
                  onChange={(e) => setQRSettings({ dotsColor: e.target.value })}
                  className="bg-transparent text-xs font-mono w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">BG Color</label>
              <div className="flex gap-2 p-2 bg-gray-50 rounded-xl border border-gray-100">
                <input 
                  type="color" 
                  value={settings.bgColor} 
                  onChange={(e) => setQRSettings({ bgColor: e.target.value })}
                  className="w-8 h-8 rounded-lg overflow-hidden border-none cursor-pointer"
                />
                <input 
                  type="text" 
                  value={settings.bgColor} 
                  onChange={(e) => setQRSettings({ bgColor: e.target.value })}
                  className="bg-transparent text-xs font-mono w-full focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-500">Dot Style</label>
            <div className="grid grid-cols-3 gap-2">
              {dotStyles.map((s) => (
                <button
                  key={s}
                  onClick={() => setQRSettings({ dotsStyle: s })}
                  className={`py-2 rounded-xl text-[10px] font-bold uppercase border transition-all ${
                    settings.dotsStyle === s 
                      ? 'bg-accent/5 border-accent/20 text-accent' 
                      : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                  }`}
                >
                  {s.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-500">Corner Style</label>
            <div className="grid grid-cols-3 gap-2">
              {cornerStyles.map((s) => (
                <button
                  key={s}
                  onClick={() => setQRSettings({ cornerSquareStyle: s })}
                  className={`py-2 rounded-xl text-[10px] font-bold uppercase border transition-all ${
                    settings.cornerSquareStyle === s 
                      ? 'bg-accent/5 border-accent/20 text-accent' 
                      : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                  }`}
                >
                  {s.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Section */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Settings size={14} /> Options
        </h3>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-500">Margin</label>
              <span className="text-xs font-bold text-gray-900">{settings.margin}px</span>
            </div>
            <input 
              type="range" min="0" max="100" 
              value={settings.margin}
              onChange={(e) => setQRSettings({ margin: parseInt(e.target.value) })}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-500">Error Correction</label>
            <div className="flex bg-gray-100 p-1 rounded-2xl">
              {['L', 'M', 'Q', 'H'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setQRSettings({ errorCorrection: lvl })}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    settings.errorCorrection === lvl ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Controls;
