import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useQRStore = create(
  persist(
    (set, get) => ({
      // QR Settings
      type: 'url', // url, text, email, phone, wifi
      value: 'https://kumar.qr',
      
      // WiFi specific
      wifiSsid: '',
      wifiPassword: '',
      wifiEncryption: 'WPA', // WPA, WEP, nopass

      // Customization
      dotsStyle: 'rounded', // square, dots, rounded, extra-rounded, classy, classy-rounded
      dotsColor: '#6366F1',
      dotsGradientType: 'none', // none, linear, radial
      dotsGradientColor1: '#6366F1',
      dotsGradientColor2: '#4F46E5',
      
      bgType: 'color', // color, gradient
      bgColor: '#ffffff',
      
      cornerSquareStyle: 'extra-rounded', // dot, square, extra-rounded
      cornerSquareColor: '#6366F1',
      cornerDotStyle: 'dot', // dot, square
      cornerDotColor: '#6366F1',
      
      size: 1000,
      margin: 20,
      errorCorrection: 'Q', // L, M, Q, H
      
      // History
      history: [],

      // Actions
      setQRSettings: (settings) => set((state) => ({ ...state, ...settings })),
      
      addToHistory: () => {
        const state = get();
        const id = Date.now();
        const newItem = {
          id,
          timestamp: new Date().toISOString(),
          value: state.value,
          dotsColor: state.dotsColor,
          dotsStyle: state.dotsStyle,
          type: state.type
        };
        const newHistory = [newItem, ...state.history.filter(h => h.value !== state.value)].slice(0, 10);
        set({ history: newHistory });
      },

      removeFromHistory: (id) => {
        set({ history: get().history.filter(h => h.id !== id) });
      },

      clearHistory: () => set({ history: [] }),
      
      loadTemplate: (template) => set((state) => ({ ...state, ...template })),
    }),
    {
      name: 'kumar-qr-storage',
      partialize: (state) => ({ history: state.history }), // Only persist history
    }
  )
);
