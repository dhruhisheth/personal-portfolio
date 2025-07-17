import React, { useEffect, useState } from 'react';

export const EdgeEffect = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const edgeColor = isDark ? 'hsl(var(--primary))' : 'rgb(37, 99, 235)'; // pink in dark, blue in light
  const edgeGlow = isDark ? 'hsl(var(--primary) / 0.3)' : 'rgba(37, 99, 235, 0.3)';

  return (
    <>
      {/* Top Edge */}
      <div style={{background: `linear-gradient(to right, transparent, ${edgeColor}, transparent)`}} className="fixed top-0 left-0 right-0 h-1 z-50 animate-pulse-subtle" />
      {/* Bottom Edge */}
      <div style={{background: `linear-gradient(to right, transparent, ${edgeColor}, transparent)`}} className="fixed bottom-0 left-0 right-0 h-1 z-50 animate-pulse-subtle" />
      {/* Left Edge */}
      <div style={{background: `linear-gradient(to bottom, transparent, ${edgeColor}, transparent)`}} className="fixed top-0 left-0 bottom-0 w-1 z-50 animate-pulse-subtle" />
      {/* Right Edge */}
      <div style={{background: `linear-gradient(to bottom, transparent, ${edgeColor}, transparent)`}} className="fixed top-0 right-0 bottom-0 w-1 z-50 animate-pulse-subtle" />
      {/* Corner Accents */}
      <div style={{borderColor: edgeColor}} className="fixed top-0 left-0 w-4 h-4 border-l-2 border-t-2 z-50" />
      <div style={{borderColor: edgeColor}} className="fixed top-0 right-0 w-4 h-4 border-r-2 border-t-2 z-50" />
      <div style={{borderColor: edgeColor}} className="fixed bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 z-50" />
      <div style={{borderColor: edgeColor}} className="fixed bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 z-50" />
      {/* Animated Corner Glow Effects */}
      <div style={{background: edgeColor}} className="fixed top-2 left-2 w-2 h-2 rounded-full opacity-80 animate-ping" />
      <div style={{background: edgeColor}} className="fixed top-2 right-2 w-2 h-2 rounded-full opacity-80 animate-ping" />
      <div style={{background: edgeColor}} className="fixed bottom-2 left-2 w-2 h-2 rounded-full opacity-80 animate-ping" />
      <div style={{background: edgeColor}} className="fixed bottom-2 right-2 w-2 h-2 rounded-full opacity-80 animate-ping" />
      {/* Subtle Edge Glow */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div style={{background: `linear-gradient(to bottom, ${edgeGlow}, transparent)`}} className="absolute top-0 left-0 right-0 h-8" />
        <div style={{background: `linear-gradient(to top, ${edgeGlow}, transparent)`}} className="absolute bottom-0 left-0 right-0 h-8" />
        <div style={{background: `linear-gradient(to right, ${edgeGlow}, transparent)`}} className="absolute top-0 left-0 bottom-0 w-8" />
        <div style={{background: `linear-gradient(to left, ${edgeGlow}, transparent)`}} className="absolute top-0 right-0 bottom-0 w-8" />
      </div>
    </>
  );
}; 