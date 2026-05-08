import React from 'react';
import { useQRStore } from '../store/useQRStore';
import { 
  Type, Link, Mail, Phone, Wifi, 
  Palette, Grid, Settings, 
  Layout, Camera, Code, Briefcase, Calendar,
  MessageSquare, Globe
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
    { name: 'IBM AI', icon: Globe, data: { value: 'https://ibm.com/ai', dotsColor: '#0062ff', cornerSquareColor: '#0062ff', dotsStyle: 'square' } },
    { name: 'Cloud', icon: Briefcase, data: { value: 'https://cloud.ibm.com', dotsColor: '#ffffff', cornerSquareColor: '#ffffff', dotsStyle: 'classy' } },
    { name: 'GitHub', icon: Code, data: { value: 'https://github.com/ibm', dotsColor: '#3b82f6', cornerSquareColor: '#3b82f6', dotsStyle: 'square' } },
    { name: 'WiFi', icon: Wifi, data: { type: 'wifi', dotsColor: '#0062ff', cornerSquareColor: '#0062ff', dotsStyle: 'extra-rounded' } },
    { name: 'Docs', icon: Calendar, data: { value: 'https://docs.ibm.com', dotsColor: '#60a5fa', cornerSquareColor: '#60a5fa', dotsStyle: 'rounded' } },
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
    <div className="space-y-10">
      {/* Content Section */}
      <section>
        <h3 className="section-title">
          <Type size={14} /> System Input
        </h3>
        <div className="space-y-4">
          <div className="flex bg-white/5 p-1 border border-white/5">
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
                className={`flex-1 py-3 text-[10px] font-bold uppercase transition-all flex flex-col items-center gap-1 ${
                  type === t.id ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
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
          <Layout size={14} /> Presets
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {templates.map((tmpl) => (
            <button
              key={tmpl.name}
              onClick={() => loadTemplate(tmpl.data)}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-full aspect-square bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                <tmpl.icon size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{tmpl.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Design Section */}
      <section>
        <h3 className="section-title">
          <Palette size={14} /> Visual Parameters
        </h3>
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="label-text">Pattern Hex</label>
              <div className="color-picker-input">
                <input 
                  type="color" 
                  value={settings.dotsColor} 
                  onChange={(e) => setQRSettings({ dotsColor: e.target.value })}
                  className="w-8 h-8 overflow-hidden border-none cursor-pointer bg-transparent"
                />
                <input 
                  type="text" 
                  value={settings.dotsColor} 
                  onChange={(e) => setQRSettings({ dotsColor: e.target.value })}
                  className="bg-transparent text-xs font-mono w-full focus:outline-none text-white uppercase"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="label-text">Background Hex</label>
              <div className="color-picker-input">
                <input 
                  type="color" 
                  value={settings.bgColor} 
                  onChange={(e) => setQRSettings({ bgColor: e.target.value })}
                  className="w-8 h-8 overflow-hidden border-none cursor-pointer bg-transparent"
                />
                <input 
                  type="text" 
                  value={settings.bgColor} 
                  onChange={(e) => setQRSettings({ bgColor: e.target.value })}
                  className="bg-transparent text-xs font-mono w-full focus:outline-none text-white uppercase"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="label-text">Module Geometry</label>
            <div className="grid grid-cols-3 gap-3">
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

          <div className="space-y-4">
            <label className="label-text">Corner Geometry</label>
            <div className="grid grid-cols-3 gap-3">
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
          <Settings size={14} /> Optimization
        </h3>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="label-text text-blue-400">Quiet Zone</label>
              <span className="text-xs font-mono text-white">{settings.margin}px</span>
            </div>
            <input 
              type="range" min="0" max="100" 
              value={settings.margin}
              onChange={(e) => setQRSettings({ margin: parseInt(e.target.value) })}
              className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-4">
            <label className="label-text">ECC Level</label>
            <div className="flex bg-white/5 p-1 border border-white/5">
              {['L', 'M', 'Q', 'H'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setQRSettings({ errorCorrection: lvl })}
                  className={`flex-1 py-3 text-xs font-bold transition-all ${
                    settings.errorCorrection === lvl ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'
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


