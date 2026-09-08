import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl } from '../data/visaData';
import { NobleEmblem, NOBLE_LOGO_URL } from './NobleLogo';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [dismissedGreeting, setDismissedGreeting] = useState(false);
  const [dismissedButton, setDismissedButton] = useState(false);
  const [dismissedLogo, setDismissedLogo] = useState(false);

  useEffect(() => {
    // 1. Show logo first
    const timerLogo = setTimeout(() => {
      setShowLogo(true);
    }, 600);

    // 2. Show "Hi! 👋 Welcome to Noble Visa Centre."
    const timerGreeting = setTimeout(() => {
      setShowGreeting(true);
    }, 1400);

    // 3. Show "🟢 Book a Free Consultation" pill
    const timerButton = setTimeout(() => {
      setShowButton(true);
    }, 2400);

    return () => {
      clearTimeout(timerLogo);
      clearTimeout(timerGreeting);
      clearTimeout(timerButton);
    };
  }, []);

  const handleWhatsAppClick = (customMsg?: string) => {
    const text = customMsg || "Hello Noble Visa Centre! I would like to book a free consultation for visa and university admissions.";
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-2.5 select-none pointer-events-auto">
      
      {/* 1. Top Circular Noble Logo Avatar */}
      {showLogo && !dismissedLogo && (
        <div 
          onClick={() => handleWhatsAppClick("Hello Noble Visa Centre! I would like to connect with an advisor.")}
          className="animate-in fade-in zoom-in-75 duration-300 relative group cursor-pointer"
          title="Noble Visa Centre"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border border-slate-200/90 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-200">
            <img
              src={NOBLE_LOGO_URL}
              alt="Noble Visa Centre"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Dismiss button for top avatar */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDismissedLogo(true);
            }}
            className="opacity-0 group-hover:opacity-100 absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-slate-800 text-white hover:bg-slate-950 flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
            title="Close"
            aria-label="Close"
          >
            <X className="w-2.5 h-2.5 stroke-[3]" />
          </button>
        </div>
      )}

      {/* 2. Greeting Speech Bubble Card: "Hi! 👋 Welcome to Noble Visa Centre." */}
      {showGreeting && !dismissedGreeting && (
        <div 
          onClick={() => handleWhatsAppClick("Hi! I would like to know more about Noble Visa Centre study programs.")}
          className="animate-in fade-in slide-in-from-bottom-2 duration-300 relative group bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2.5 rounded-2xl rounded-br-sm shadow-xl border border-slate-200/90 hover:border-blue-400/80 transition-all duration-200 cursor-pointer text-left max-w-[250px] sm:max-w-[270px] flex items-start justify-between gap-2"
          role="alert"
        >
          <div className="text-xs sm:text-[13px] leading-snug">
            <span className="font-bold text-slate-900 block">Hi! 👋</span>
            <span className="text-slate-700 font-medium block mt-0.5">
              Welcome to <strong className="text-blue-600 font-extrabold">Noble Visa Centre</strong>.
            </span>
          </div>

          {/* Small aligned X button on Greeting Bubble */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDismissedGreeting(true);
            }}
            className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 -mr-0.5"
            title="Dismiss greeting"
            aria-label="Dismiss greeting"
          >
            <X className="w-3 h-3 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* 3. Action Pill: "🟢 Book a Free Consultation" */}
      {showButton && !dismissedButton && (
        <div 
          onClick={() => handleWhatsAppClick("Hello Noble Visa Centre! I would like to book a free consultation.")}
          className="animate-in fade-in slide-in-from-bottom-2 duration-300 relative group bg-white/95 backdrop-blur-md text-slate-900 pl-3 pr-2 py-2 rounded-full shadow-xl border border-slate-200/90 hover:border-emerald-400 hover:shadow-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5"
          role="button"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 tracking-tight whitespace-nowrap">
              Book a Free Consultation
            </span>
          </div>

          {/* Small aligned X button on Consultation Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDismissedButton(true);
            }}
            className="w-4.5 h-4.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-1"
            title="Dismiss button"
            aria-label="Dismiss button"
          >
            <X className="w-2.5 h-2.5 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* 4. Floating Circular Green WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppClick()}
        id="floating-whatsapp-btn"
        className="relative w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer border-2 border-white"
        aria-label="Book a free consultation on WhatsApp"
        title="Book a Free Consultation on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="animate-ping absolute -inset-1 rounded-full bg-[#25D366] opacity-30 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow" />
      </button>

    </div>
  );
};
