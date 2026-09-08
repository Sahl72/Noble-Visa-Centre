import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl } from '../data/visaData';

interface WhatsAppCtaBannerProps {
  onViewTestimonials?: () => void;
  className?: string;
}

export const WhatsAppCtaBanner: React.FC<WhatsAppCtaBannerProps> = ({ 
  onViewTestimonials,
  className = '' 
}) => {
  const defaultWhatsAppMsg = "Hello Noble Visa Centre! I am still not sure where to start. Could you please advise me on the best visa and university options for my profile, goals and budget?";

  return (
    <section className={`py-6 sm:py-8 bg-transparent font-sans ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White WhatsApp CTA Banner (Matches Screenshot) */}
        <div 
          id="whatsapp-help-cta-banner"
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Content Side with Large Green Round WhatsApp Icon */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 max-w-2xl">
              
              {/* WhatsApp App Green Circle Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-600/20">
                <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
              </div>

              {/* Headings */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-[#071946] tracking-tight">
                  Still not sure where to start?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  Chat with our experts on WhatsApp and get the right advice for your study or travel journey.
                </p>
              </div>

            </div>

            {/* Right Action Side: Green WhatsApp Button & Security Subtext */}
            <div className="flex flex-col items-center lg:items-end w-full sm:w-auto flex-shrink-0">
              
              <a
                href={getWhatsAppUrl(defaultWhatsAppMsg)}
                target="_blank"
                rel="noreferrer"
                id="whatsapp-banner-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-xl shadow-md shadow-emerald-950/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Get Free Consultation on WhatsApp</span>
              </a>

              {/* Sub-text with Lock Icon */}
              <div className="flex items-center justify-center gap-1 text-[11px] sm:text-xs text-slate-500 mt-2 font-medium">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>No obligations. 100% free expert advice.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
