import React, { useState } from 'react';
import { ArrowRight, ZoomIn, CheckCircle2 } from 'lucide-react';
import { SUCCESS_STORIES, getWhatsAppUrl } from '../data/visaData';
import { WhatsAppIcon } from './Header';

interface SuccessStoriesProps {
  onOpenConsultation?: (params?: Record<string, string>) => void;
  onViewAllStories?: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenConsultation, onViewAllStories }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Group stories into sets of 3 for smooth carousel navigation
  const storiesCount = SUCCESS_STORIES.length;
  const maxSlides = Math.ceil(storiesCount / 3);
  const startIndex = (activeSlide * 3) % storiesCount;
  const currentStories = [
    SUCCESS_STORIES[startIndex % storiesCount],
    SUCCESS_STORIES[(startIndex + 1) % storiesCount],
    SUCCESS_STORIES[(startIndex + 2) % storiesCount]
  ];

  const handleStartVisaJourney = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = "Hello Noble Visa Centre! I saw your authentic visa approvals and would like to start my visa journey.";
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="success-stories" className="py-6 sm:py-8 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Showcase Banner */}
        <div className="relative bg-[#071946] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden text-white border border-blue-900/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-5 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-amber-400 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-400/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Visa Grants Wall</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white leading-tight tracking-tight">
                Thousands of Students. <br />
                <span className="text-[#f59e0b]">Authentic Visa Approvals.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Explore real visa approvals, official embassy grants, and university admission posters secured through Noble Visa Centre.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleStartVisaJourney}
                  id="success-stories-start-journey-btn"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition cursor-pointer active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Start Your Visa Journey Now</span>
                </button>

                <button
                  onClick={() => {
                    if (onViewAllStories) {
                      onViewAllStories();
                    }
                  }}
                  id="view-all-success-stories-btn"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition duration-200 group active:scale-95 cursor-pointer"
                >
                  <span>View All Proofs</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: 3 Poster Cards (Clean full size without overlaid flags/names) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
                {currentStories.map((story) => (
                  <div 
                    key={story.id} 
                    onClick={() => {
                      if (onViewAllStories) {
                        onViewAllStories();
                      }
                    }}
                    className="group relative rounded-2xl overflow-hidden shadow-lg bg-slate-900 cursor-pointer border border-white/10 hover:border-amber-400 transition-all duration-300 hover:scale-102 flex flex-col justify-between"
                    title="Click to view all authentic visa proofs"
                  >
                    <div className="w-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
                      <img 
                        src={story.image} 
                        alt="Noble Visa Centre Visa Success" 
                        className="w-full h-auto object-contain block group-hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Centered Zoom Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg">
                          <ZoomIn className="w-5 h-5 text-blue-700" />
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Action Button under the poster */}
                    <div className="p-2 bg-slate-900/90 border-t border-white/10">
                      <button
                        onClick={handleStartVisaJourney}
                        className="w-full py-2 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-extrabold shadow-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                        <span>Start Journey Now</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {Array.from({ length: maxSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      activeSlide === idx 
                        ? 'w-6 bg-blue-500' 
                        : 'w-1.5 bg-blue-900/80 hover:bg-blue-700'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
