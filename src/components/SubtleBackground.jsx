import React, { useEffect, useState } from 'react';

export const SubtleBackground = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (isDark) {
    return <div className="fixed inset-0 bg-black z-0 pointer-events-none" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Major animated background effects */}
      
      {/* Rotating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/20 via-pink-200/15 to-blue-200/20 rounded-full blur-2xl animate-spin-slow" style={{ animationDuration: '30s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 via-cyan-200/15 to-green-200/20 rounded-full blur-2xl animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-200/15 via-orange-200/10 to-pink-200/15 rounded-full blur-3xl animate-spin-slow" style={{ animationDuration: '50s' }} />
      
      {/* Pulsing energy fields */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-pink-300/30 rounded-full animate-pulse-ring" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 border-2 border-blue-300/25 rounded-full animate-pulse-ring" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border-2 border-pink-300/20 rounded-full animate-pulse-ring" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-0 right-0 w-full h-full">
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 border-2 border-green-300/30 rounded-full animate-pulse-ring" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 border-2 border-yellow-300/25 rounded-full animate-pulse-ring" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 border-2 border-orange-300/20 rounded-full animate-pulse-ring" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      </div>
      
      {/* Floating geometric shapes with trails */}
      <div className="absolute top-1/6 left-1/6 w-8 h-8 bg-gradient-to-br from-pink-300/40 to-pink-300/30 rounded-lg rotate-45 animate-float-slow">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-pink-200/15 rounded-lg animate-pulse" style={{ animationDuration: '2s' }} />
      </div>
      <div className="absolute top-1/6 left-1/6 w-6 h-6 bg-gradient-to-br from-pink-200/30 to-pink-200/20 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: '0.5s', transform: 'translateX(-12px) translateY(-8px)' }} />
      <div className="absolute top-1/6 left-1/6 w-4 h-4 bg-gradient-to-br from-pink-100/20 to-pink-100/10 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: '1s', transform: 'translateX(-24px) translateY(-16px)' }} />
      
      <div className="absolute bottom-1/6 right-1/6 w-10 h-10 bg-gradient-to-tl from-blue-300/40 to-cyan-300/30 rounded-full animate-float-delayed">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/20 to-cyan-200/15 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-1/6 right-1/6 w-8 h-8 bg-gradient-to-tl from-blue-200/30 to-cyan-200/20 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s', transform: 'translateX(16px) translateY(12px)' }} />
      <div className="absolute bottom-1/6 right-1/6 w-6 h-6 bg-gradient-to-tl from-blue-100/20 to-cyan-100/10 rounded-full animate-float-delayed" style={{ animationDelay: '1s', transform: 'translateX(32px) translateY(24px)' }} />
      
      {/* Animated light beams */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-pink-300/30 to-transparent animate-light-beam" style={{ animationDuration: '8s' }} />
      <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent animate-light-beam" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-300/30 to-transparent animate-light-beam" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      
      {/* Rotating star patterns */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 animate-spin-slow" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 w-1 h-8 bg-pink-300/40 rounded-full transform -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-8 h-1 bg-blue-300/40 rounded-full transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-pink-300/40 rounded-full transform -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-8 h-1 bg-green-300/40 rounded-full transform -translate-y-1/2" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
        <div className="absolute top-0 left-1/2 w-1 h-10 bg-yellow-300/40 rounded-full transform -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-10 h-1 bg-orange-300/40 rounded-full transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-1 h-10 bg-cyan-300/40 rounded-full transform -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-10 h-1 bg-rose-300/40 rounded-full transform -translate-y-1/2" />
      </div>
      
      {/* Animated particle clusters */}
      <div className="absolute top-1/3 left-1/3 w-24 h-24">
        <div className="absolute top-0 left-0 w-2 h-2 bg-pink-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '3s' }} />
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute top-4 left-4 w-1 h-1 bg-pink-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-green-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '6s', animationDelay: '1.5s' }} />
        <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32">
        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '4s' }} />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
        <div className="absolute top-4 right-4 w-1 h-1 bg-pink-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-emerald-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        <div className="absolute top-8 right-8 w-2 h-2 bg-orange-400/50 rounded-full animate-particle-cluster" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      {/* Animated gradient borders */}
      <div className="absolute top-8 left-8 w-24 h-24 border-2 border-transparent bg-gradient-to-r from-pink-300/30 via-pink-300/30 to-blue-300/30 rounded-lg animate-gradient-border" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-transparent bg-gradient-to-r from-green-300/30 via-yellow-300/30 to-orange-300/30 rounded-full animate-gradient-border" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 border-2 border-transparent bg-gradient-to-r from-cyan-300/30 via-rose-300/30 to-violet-300/30 rounded-lg rotate-45 animate-gradient-border" style={{ animationDelay: '4s' }} />
      
      {/* Floating energy orbs */}
      <div className="absolute top-1/4 left-3/4 w-12 h-12 bg-gradient-to-br from-pink-300/40 to-purple-300/30 rounded-full animate-energy-orb">
        <div className="absolute inset-1 bg-gradient-to-br from-pink-200/20 to-purple-200/15 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-2 bg-gradient-to-br from-pink-100/10 to-purple-100/5 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>
      
      <div className="absolute bottom-1/4 right-3/4 w-16 h-16 bg-gradient-to-tl from-blue-300/40 to-cyan-300/30 rounded-full animate-energy-orb" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-1 bg-gradient-to-tl from-blue-200/20 to-cyan-200/15 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
        <div className="absolute inset-2 bg-gradient-to-tl from-blue-100/10 to-cyan-100/5 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
      </div>
      
      {/* Animated wave effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-pink-200/15 to-transparent animate-wave-major" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-200/15 to-transparent animate-wave-major" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Glowing corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-transparent rounded-br-3xl animate-glow-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-bl-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-300/20 to-transparent rounded-tr-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-300/20 to-transparent rounded-tl-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Animated spotlight effects */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-b from-pink-200/10 via-transparent to-transparent rounded-full animate-spotlight" />
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-b from-blue-200/10 via-transparent to-transparent rounded-full animate-spotlight" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-t from-purple-200/10 via-transparent to-transparent rounded-full animate-spotlight" style={{ animationDelay: '8s' }} />
      {/* Main subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-blue-50/35 to-purple-50/25" />
      
      {/* Soft radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-pink-100/25 via-transparent to-transparent" />
      
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-100/12 via-transparent to-blue-100/12" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-100/12 via-transparent to-pink-100/12" />
      </div>
      
      {/* Very subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/25 via-transparent to-blue-50/25 animate-pulse-subtle" 
           style={{ animationDuration: '12s' }} />
      
      {/* Corner accent gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100/15 via-transparent to-pink-100/15 rounded-full blur-3xl" />
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-2xl animate-float-slow" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-2xl animate-float-slow-delayed" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-tl from-pink-200/20 to-transparent rounded-full blur-2xl animate-float" />
      
      {/* More floating elements */}
      <div className="absolute top-1/3 left-1/6 w-16 h-16 bg-gradient-to-br from-yellow-200/15 to-transparent rounded-full blur-xl animate-float-slow-delayed" />
      <div className="absolute top-2/3 right-1/6 w-12 h-12 bg-gradient-to-bl from-green-200/15 to-transparent rounded-full blur-xl animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/2 w-14 h-14 bg-gradient-to-tr from-orange-200/15 to-transparent rounded-full blur-xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-gradient-to-tl from-indigo-200/15 to-transparent rounded-full blur-xl animate-float" />
      
      {/* Additional floating orbs with different effects */}
      <div className="absolute top-1/5 left-1/5 w-10 h-10 bg-gradient-to-br from-rose-200/12 to-transparent rounded-full blur-lg animate-float-slow" />
      <div className="absolute top-3/5 right-1/5 w-8 h-8 bg-gradient-to-bl from-cyan-200/12 to-transparent rounded-full blur-lg animate-float-delayed" />
      <div className="absolute bottom-1/5 left-1/5 w-12 h-12 bg-gradient-to-tr from-violet-200/12 to-transparent rounded-full blur-lg animate-float-slow-delayed" />
      <div className="absolute bottom-3/5 right-1/5 w-6 h-6 bg-gradient-to-tl from-emerald-200/12 to-transparent rounded-full blur-lg animate-float" />
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-pink-200/30 rounded-lg rotate-45 animate-pulse-subtle" style={{ animationDuration: '6s' }} />
      <div className="absolute top-3/4 right-1/4 w-12 h-12 border border-blue-200/30 rounded-full animate-pulse-subtle" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border border-pink-200/30 rotate-12 animate-pulse-subtle" style={{ animationDuration: '10s' }} />
      
      {/* More geometric shapes */}
      <div className="absolute top-1/6 right-1/6 w-8 h-8 border border-yellow-200/25 rounded-lg rotate-12 animate-pulse-subtle" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/6 left-1/6 w-6 h-6 border border-green-200/25 rounded-full animate-pulse-subtle" style={{ animationDuration: '9s' }} />
      <div className="absolute top-1/2 left-1/4 w-14 h-14 border border-pink-200/25 rotate-30 animate-pulse-subtle" style={{ animationDuration: '11s' }} />
      <div className="absolute bottom-1/2 right-1/4 w-10 h-10 border border-indigo-200/25 rotate-60 animate-pulse-subtle" style={{ animationDuration: '13s' }} />
      
      {/* Additional geometric accents */}
      <div className="absolute top-1/8 left-3/4 w-4 h-4 border border-rose-200/20 rounded rotate-45 animate-pulse-subtle" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-1/8 right-3/4 w-5 h-5 border border-cyan-200/20 rounded-full animate-pulse-subtle" style={{ animationDuration: '15s' }} />
      <div className="absolute top-3/4 left-1/8 w-7 h-7 border border-pink-200/20 rotate-75 animate-pulse-subtle" style={{ animationDuration: '17s' }} />
      <div className="absolute bottom-3/4 right-1/8 w-3 h-3 border border-emerald-200/20 rotate-90 animate-pulse-subtle" style={{ animationDuration: '19s' }} />
      
      {/* Soft light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-100/20 to-transparent animate-pulse-subtle" style={{ animationDuration: '15s' }} />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-100/20 to-transparent animate-pulse-subtle" style={{ animationDuration: '18s' }} />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-100/20 to-transparent animate-pulse-subtle" style={{ animationDuration: '20s' }} />
      
      {/* Additional light rays */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-yellow-100/15 to-transparent animate-pulse-subtle" style={{ animationDuration: '22s' }} />
      <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-green-100/15 to-transparent animate-pulse-subtle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-100/15 to-transparent animate-pulse-subtle" style={{ animationDuration: '28s' }} />
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-100/15 to-transparent animate-pulse-subtle" style={{ animationDuration: '30s' }} />
      
      {/* More light rays for depth */}
      <div className="absolute top-0 left-1/8 w-px h-full bg-gradient-to-b from-transparent via-rose-100/10 to-transparent animate-pulse-subtle" style={{ animationDuration: '32s' }} />
      <div className="absolute top-0 right-1/8 w-px h-full bg-gradient-to-b from-transparent via-cyan-100/10 to-transparent animate-pulse-subtle" style={{ animationDuration: '35s' }} />
      <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-100/10 to-transparent animate-pulse-subtle" style={{ animationDuration: '38s' }} />
      <div className="absolute bottom-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-100/10 to-transparent animate-pulse-subtle" style={{ animationDuration: '40s' }} />
      
      {/* Micro particles */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-300/50 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-blue-300/50 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/6 w-0.5 h-0.5 bg-pink-300/50 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-pink-300/50 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
      
      {/* More micro particles */}
      <div className="absolute top-1/6 left-1/3 w-0.5 h-0.5 bg-yellow-300/40 rounded-full animate-ping" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-green-300/40 rounded-full animate-ping" style={{ animationDuration: '8s', animationDelay: '0.8s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-orange-300/40 rounded-full animate-ping" style={{ animationDuration: '9s', animationDelay: '2.2s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-300/40 rounded-full animate-ping" style={{ animationDuration: '10s', animationDelay: '1.2s' }} />
      
      {/* Additional micro particles with new colors */}
      <div className="absolute top-1/5 left-2/3 w-0.5 h-0.5 bg-rose-300/35 rounded-full animate-ping" style={{ animationDuration: '11s', animationDelay: '0.3s' }} />
      <div className="absolute top-4/5 right-2/3 w-1 h-1 bg-cyan-300/35 rounded-full animate-ping" style={{ animationDuration: '12s', animationDelay: '1.7s' }} />
      <div className="absolute bottom-1/5 left-1/3 w-0.5 h-0.5 bg-violet-300/35 rounded-full animate-ping" style={{ animationDuration: '13s', animationDelay: '0.9s' }} />
      <div className="absolute bottom-4/5 right-1/3 w-1 h-1 bg-emerald-300/35 rounded-full animate-ping" style={{ animationDuration: '14s', animationDelay: '2.1s' }} />
      
      {/* Subtle wave patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-pink-100/10 to-transparent animate-wave" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-100/10 to-transparent animate-wave-delayed" />
      </div>
      
      {/* Additional wave patterns */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-100/8 to-transparent animate-wave" style={{ animationDuration: '30s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-100/8 to-transparent animate-wave-delayed" style={{ animationDuration: '35s' }} />
      </div>
      
      {/* More wave patterns with new colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-rose-100/6 to-transparent animate-wave" style={{ animationDuration: '40s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-100/6 to-transparent animate-wave-delayed" style={{ animationDuration: '45s' }} />
      </div>
      
      {/* Ambient glow spots */}
      <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-gradient-to-r from-pink-100/10 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '25s' }} />
      <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-to-l from-blue-100/10 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '30s' }} />
      
      {/* More ambient glow spots */}
      <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-100/8 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '35s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-44 h-44 bg-gradient-to-l from-green-100/8 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '40s' }} />
      <div className="absolute top-2/3 left-1/6 w-32 h-32 bg-gradient-to-r from-orange-100/8 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '45s' }} />
      <div className="absolute bottom-2/3 right-1/6 w-28 h-28 bg-gradient-to-l from-indigo-100/8 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '50s' }} />
      
      {/* Additional ambient glows with new colors */}
      <div className="absolute top-1/4 right-1/4 w-52 h-52 bg-gradient-to-r from-rose-100/6 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '55s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-38 h-38 bg-gradient-to-l from-cyan-100/6 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '60s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-100/4 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '65s' }} />
      <div className="absolute top-3/4 left-3/4 w-42 h-42 bg-gradient-to-l from-emerald-100/6 to-transparent rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '70s' }} />
      
      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-100/12 to-transparent transform rotate-45 translate-y-1/4 animate-pulse-subtle" style={{ animationDuration: '60s' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-100/12 to-transparent transform -rotate-45 translate-y-3/4 animate-pulse-subtle" style={{ animationDuration: '65s' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-100/12 to-transparent transform rotate-30 translate-y-1/2 animate-pulse-subtle" style={{ animationDuration: '70s' }} />
      </div>
      
      {/* Additional diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-100/8 to-transparent transform rotate-60 translate-y-1/6 animate-pulse-subtle" style={{ animationDuration: '75s' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-100/8 to-transparent transform -rotate-30 translate-y-5/6 animate-pulse-subtle" style={{ animationDuration: '80s' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-100/8 to-transparent transform rotate-15 translate-y-2/3 animate-pulse-subtle" style={{ animationDuration: '85s' }} />
      </div>
      
      {/* Corner accent triangles */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-pink-200/20 animate-pulse-subtle" style={{ animationDuration: '12s' }} />
      <div className="absolute top-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-200/20 animate-pulse-subtle" style={{ animationDuration: '14s' }} />
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-purple-200/20 animate-pulse-subtle" style={{ animationDuration: '16s' }} />
      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-yellow-200/20 animate-pulse-subtle" style={{ animationDuration: '18s' }} />
      
      {/* Additional corner accents */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-green-200/15 animate-pulse-subtle" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-orange-200/15 animate-pulse-subtle" style={{ animationDuration: '22s' }} />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-indigo-200/15 rotate-90 animate-pulse-subtle" style={{ animationDuration: '24s' }} />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-rose-200/15 -rotate-90 animate-pulse-subtle" style={{ animationDuration: '26s' }} />
      
      {/* Floating dots with trails */}
      <div className="absolute top-1/4 left-1/8 w-2 h-2 bg-pink-300/25 rounded-full animate-float-slow" />
      <div className="absolute top-1/4 left-1/8 w-1 h-1 bg-pink-200/12 rounded-full animate-float-slow" style={{ animationDelay: '0.5s', transform: 'translateX(-4px) translateY(-2px)' }} />
      <div className="absolute top-1/4 left-1/8 w-0.5 h-0.5 bg-pink-100/6 rounded-full animate-float-slow" style={{ animationDelay: '1s', transform: 'translateX(-8px) translateY(-4px)' }} />
      
      <div className="absolute bottom-1/4 right-1/8 w-2 h-2 bg-blue-300/25 rounded-full animate-float-delayed" />
      <div className="absolute bottom-1/4 right-1/8 w-1 h-1 bg-blue-200/12 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s', transform: 'translateX(4px) translateY(2px)' }} />
      <div className="absolute bottom-1/4 right-1/8 w-0.5 h-0.5 bg-blue-100/6 rounded-full animate-float-delayed" style={{ animationDelay: '1s', transform: 'translateX(8px) translateY(4px)' }} />
      
      {/* Additional floating trails */}
      <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-yellow-300/20 rounded-full animate-float-slow-delayed" />
      <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-yellow-200/10 rounded-full animate-float-slow-delayed" style={{ animationDelay: '0.5s', transform: 'translateX(-3px) translateY(-1px)' }} />
      <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-yellow-100/5 rounded-full animate-float-slow-delayed" style={{ animationDelay: '1s', transform: 'translateX(-6px) translateY(-2px)' }} />
      
      <div className="absolute bottom-3/4 right-3/4 w-2 h-2 bg-green-300/20 rounded-full animate-float" />
      <div className="absolute bottom-3/4 right-3/4 w-1 h-1 bg-green-200/10 rounded-full animate-float" style={{ animationDelay: '0.5s', transform: 'translateX(3px) translateY(1px)' }} />
      <div className="absolute bottom-3/4 right-3/4 w-0.5 h-0.5 bg-green-100/5 rounded-full animate-float" style={{ animationDelay: '1s', transform: 'translateX(6px) translateY(2px)' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 50%, pink-100/6 50%, transparent 51%" style={{ backgroundSize: '20px 20px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 50%, blue-100/6 50%, transparent 51%" style={{ backgroundSize: '20px 20px' }} />
      </div>
      
      {/* Additional grid pattern with different spacing */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 50%, purple-100/4 50%, transparent 51%" style={{ backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 50%, yellow-100/4 50%, transparent 51%" style={{ backgroundSize: '40px 40px' }} />
      </div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/2 to-transparent" style={{ backgroundSize: '2px 2px' }} />
      </div>
      
      {/* Soft vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5" />
    </div>
  );
}; 