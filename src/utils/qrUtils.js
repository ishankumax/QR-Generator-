export const calculateScanability = (settings) => {
  let score = 100;
  
  // Contrast Check (Simplified)
  // Normally would compare colors, but we'll focus on patterns
  
  // Complexity (Value Length)
  if (settings.value.length > 200) score -= 20;
  else if (settings.value.length > 100) score -= 10;
  
  // Error Correction
  const ecMap = { L: 5, M: 10, Q: 20, H: 30 };
  score += ecMap[settings.errorCorrection] || 0;
  
  // Style Impact
  if (settings.dotsStyle === 'dots') score -= 5;
  if (settings.cornerSquareStyle === 'dot') score -= 5;
  
  // Padding
  if (settings.margin < 5) score -= 15;
  else if (settings.margin < 10) score -= 5;

  // Max score 100
  score = Math.min(100, Math.max(0, score));
  
  if (score > 85) return { label: 'Excellent', color: 'text-green-500', score };
  if (score > 60) return { label: 'Good', color: 'text-yellow-500', score };
  return { label: 'Risky', color: 'text-red-500', score };
};

export const generateWiFiString = (ssid, password, encryption) => {
  return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
};
