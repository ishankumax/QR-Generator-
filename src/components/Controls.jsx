import React from 'react';
import { useQRStore } from '../store/useQRStore';
import { 
  Type, Link, Mail, Phone, Wifi, 
  Palette, Grid, Settings, 
  Layout, Camera, Code, Briefcase, Calendar,
  MessageSquare
} from 'lucide-react';
import { generateWiFiString } from '../utils/qrUtils';

const Controls = () => {
  const { 
    type, value, wifiSsid, wifiPassword, wifiEncryption, 
    setQRSettings, loadTemplate, ...settings 
  } = useQRStore();

  const handleValueChange = (e) => {
    setQRSettings({ value: e.target.value });
  };

  const handleWiFiChange = (field, val) => {
    const newWifi = {
      wifiSsid: field === 'ssid' ? val : wifiSsid,
      wifiPassword: field === 'password' ? val : wifiPassword,
      wifiEncryption: field === 'encryption' ? val : wifiEncryption,
    };
    setQRSettings({
      ...newWifi,
      value: generateWiFiString(newWifi.wifiSsid, newWifi.wifiPassword, newWifi.wifiEncryption)
    });
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

  const renderInputs = () => {
    switch (type) {
      case 'wifi':
        return (
          <div className="space-y-3">
            <input
              type="text"
              value={wifiSsid}
              onChange={(e) => handleWiFiChange('ssid', e.target.value)}
              placeholder="Network Name (SSID)"
              className="input-field"
            />
            <input
              type="password"
              value={wifiPassword}
              onChange={(e) => handleWiFiChange('password', e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            <select 
              value={wifiEncryption}
              onChange={(e) => handleWiFiChange('encryption', e.target.value)}
              className="input-field appearance-none"
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Encryption</option>
            </select>
          </div>
        );
      case 'email':
        return (
          <input
            type="email"
            value={value.startsWith('mailto:') ? value.replace('mailto:', '') : value}
            onChange={(e) => setQRSettings({ value: `mailto:${e.target.value}` })}
            placeholder="Email Address"
            className="input-field"
          />
        );
      case 'phone':
        return (
          <input
            type="tel"
            value={value.startsWith('tel:') ? value.replace('tel:', '') : value}
            onChange={(e) => setQRSettings({ value: `tel:${e.target.value}` })}
            placeholder="Phone Number"
            className="input-field"
          />
        );
      default:
        return (
          <input
            type="text"
            value={value}
            onChange={handleValueChange}
            placeholder={`Enter ${type}...`}
            className="input-field"
          />
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Content Section */}
      <section>
        <h3 className="section-title">
          <Type size={14} /> Content
        </h3>
        <div className="space-y-4">
          <div className="flex bg-gray-100/50 p-1 rounded-2xl border border-gray-100">
            {[
              { id: 'url', icon: Link },
              { id: 'text', icon: Type },
              { id: 'email', icon: Mail },
              { id: 'phone', icon: Phone },
              { id: 'wifi', icon: Wifi }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setQRSettings({ type: t.id })}
                className={`flex-1 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex flex-col items-center gap-1 ${
                  type === t.id ? 'bg-white shadow-sm text-accent' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <t.icon size={12} />
                {t.id}
              </button>
            ))}
          </div>
          
          {renderInputs()}
        </div>
      </section>

      {/* Templates Section */}
      <section>
        <h3 className="section-title">
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
        <h3 className="section-title">
          <Palette size={14} /> Design
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="label-text">Dots Color</label>
              <div className="color-picker-input">
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
              <label className="label-text">BG Color</label>
              <div className="color-picker-input">
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
            <label className="label-text">Dot Style</label>
            <div className="grid grid-cols-3 gap-2">
              {dotStyles.map((s) => (
                <button
                  key={s}
                  onClick={() => setQRSettings({ dotsStyle: s })}
                  className={`style-btn ${settings.dotsStyle === s ? 'active' : ''}`}
                >
                  {s.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="label-text">Corner Style</label>
            <div className="grid grid-cols-3 gap-2">
              {cornerStyles.map((s) => (
                <button
                  key={s}
                  onClick={() => setQRSettings({ cornerSquareStyle: s })}
                  className={`style-btn ${settings.cornerSquareStyle === s ? 'active' : ''}`}
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
        <h3 className="section-title">
          <Settings size={14} /> Options
        </h3>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="label-text">Margin</label>
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
            <label className="label-text">Error Correction</label>
            <div className="flex bg-gray-100/50 p-1 rounded-2xl border border-gray-100">
              {['L', 'M', 'Q', 'H'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setQRSettings({ errorCorrection: lvl })}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    settings.errorCorrection === lvl ? 'bg-white shadow-sm text-accent' : 'text-gray-400 hover:text-gray-600'
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

