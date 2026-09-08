import React from 'react';
import { Plane, Sparkles, ShieldCheck } from 'lucide-react';
import { NOBLE_LOGO_URL } from './NobleLogo';

interface PassportFlightLoaderProps {
  title?: string;
  subtitle?: string;
}

export const PassportFlightLoader: React.FC<PassportFlightLoaderProps> = ({
  title = "Preparing Visa Details & Requirements...",
  subtitle = "Noble Visa Centre • Official Representation"
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background ambient lighting glows */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative flex flex-col items-center justify-center p-6 text-center max-w-sm w-full mx-auto animate-in zoom-in-95 duration-200">
        
        {/* ========================================================
            3D PASSPORT + ORBITING AIRPLANE FLIGHT ANIMATION STAGE
            ======================================================== */}
        <div className="relative w-72 h-72 flex items-center justify-center">
          
          {/* Pulsing Radar Pulse Rings */}
          <div className="absolute inset-2 rounded-full border border-blue-500/25 animate-ping opacity-30"></div>
          <div className="absolute inset-6 rounded-full border border-amber-400/20 animate-pulse"></div>
          
          {/* Orbital Flight Path Ellipse (tilted in 3D perspective) */}
          <div 
            className="absolute w-64 h-32 rounded-full border-2 border-dashed border-blue-400/50 pointer-events-none"
            style={{
              transform: 'rotate(-28deg)',
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.25)'
            }}
          ></div>

          {/* 360-Degree Revolving Flight Orbit Container */}
          <div 
            className="absolute w-64 h-32 pointer-events-none animate-orbit-flight"
            style={{
              transform: 'rotate(-28deg)'
            }}
          >
            {/* The Orbiting Airplane with Glowing Contrail */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center">
              
              {/* Airplane Icon with gold glow and trail */}
              <div className="relative flex items-center">
                {/* Glowing jet contrail */}
                <div className="w-14 h-1 bg-gradient-to-r from-transparent via-amber-300 to-blue-400 opacity-90 blur-[0.5px] rounded-full"></div>
                
                {/* Airplane */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0642be] via-[#2563eb] to-amber-400 p-1.5 shadow-xl shadow-blue-500/60 flex items-center justify-center text-white transform rotate-90 ring-2 ring-white/50">
                  <Plane className="w-5 h-5 fill-white text-white drop-shadow-md" />
                </div>

                {/* Jet engine sparkle */}
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping"></span>
              </div>

            </div>
          </div>

          {/* ========================================================
              CENTERPIECE: NOBLE PASSPORT BOOK & EMBLEM
              ======================================================== */}
          <div className="relative z-10 w-36 h-48 bg-gradient-to-br from-[#071b40] via-[#0d2a63] to-[#040e24] rounded-2xl p-3.5 border-2 border-amber-400/90 shadow-2xl shadow-blue-950 flex flex-col items-center justify-between overflow-hidden animate-float-gentle">
            
            {/* Holographic Security Shimmer Bar */}
            <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 animate-shimmer pointer-events-none"></div>

            {/* Passport Header: Country / Authority */}
            <div className="w-full flex flex-col items-center border-b border-amber-400/30 pb-1.5 pt-0.5">
              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-amber-300 drop-shadow-xs">
                OFFICIAL VISA
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white mt-0.5">
                PASSPORT
              </span>
            </div>

            {/* Center: Golden Crest / Noble Visa Emblem */}
            <div className="my-auto flex flex-col items-center justify-center relative">
              
              {/* Outer Golden Glow Ring */}
              <div className="w-16 h-16 rounded-full bg-amber-400/10 border-2 border-amber-400/60 flex items-center justify-center p-1.5 shadow-inner">
                <img 
                  src={NOBLE_LOGO_URL} 
                  alt="Noble Visa Centre"
                  className="w-12 h-12 object-contain drop-shadow-[0_2px_10px_rgba(251,191,36,0.6)]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Gold Star / Verified Badge */}
              <span className="text-[8px] font-extrabold uppercase tracking-wider text-amber-200 mt-1.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>NOBLE VISA CENTRE</span>
              </span>
            </div>

            {/* Passport Footer: Biometric Symbol & Official seal */}
            <div className="w-full flex items-center justify-between border-t border-amber-400/30 pt-1.5 text-amber-300/80 px-1">
              <span className="text-[7px] font-bold tracking-widest text-amber-200">GLOBAL</span>
              {/* Biometric Passport Gold Chip Icon */}
              <div className="w-4 h-2.5 rounded-[2px] border border-amber-400 flex items-center justify-center">
                <div className="w-2 h-1.5 rounded-[1px] bg-amber-400"></div>
              </div>
              <span className="text-[7px] font-bold tracking-widest text-amber-200">ENTRY</span>
            </div>

          </div>

        </div>

        {/* ========================================================
            LOADING STATUS & TYPOGRAPHY
            ======================================================== */}
        <div className="mt-2 space-y-2">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span className="tracking-wide">Noble Visa Pathway</span>
          </div>

          <h4 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            {title}
          </h4>

          <p className="text-xs text-blue-200/80 font-medium">
            {subtitle}
          </p>

          {/* Animated Glowing Progress Bar */}
          <div className="w-52 h-1.5 bg-blue-950/80 rounded-full mx-auto overflow-hidden border border-blue-500/30 mt-3.5 relative">
            <div className="h-full bg-gradient-to-r from-blue-500 via-amber-400 to-blue-400 rounded-full animate-progress-flow"></div>
          </div>

        </div>

      </div>

    </div>
  );
};
