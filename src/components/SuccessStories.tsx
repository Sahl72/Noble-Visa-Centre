import React, { useState } from 'react';
import { ArrowRight, ZoomIn, Share2, CheckCircle2, MapPin } from 'lucide-react';
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
                Explore real visa handover moments, official embassy stamps, and global university admissions secured through Noble Visa Centre.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    if (onViewAllStories) {
                      onViewAllStories();
                    }
                  }}
                  id="view-all-success-stories-btn"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#071946] px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition duration-200 group active:scale-95 cursor-pointer"
                >
                  <span>View All Visa Proofs</span>
                  <ArrowRight className="w-4 h-4 text-[#071946] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppUrl("Hello Noble Visa Centre! I saw your authentic student visa approvals and would like to check my visa options.")}
                  target="_blank"
                  rel="noreferrer"
                  id="success-stories-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition cursor-pointer active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side: 3 Student Video/Story Cards */}
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
                    className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] bg-slate-800 cursor-pointer border border-white/10 hover:border-amber-400 transition-all duration-300 hover:scale-102"
                  >
                    <img 
                      src={story.image} 
                      alt={`${story.name} Visa Success`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30"></div>

                    {/* Top right destination flag */}
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs flex items-center gap-1 text-[10px] font-bold text-amber-300 border border-white/20">
                      <span>{story.flag || '🌍'}</span>
                      <span>{story.country}</span>
                    </div>

                    {/* Centered Zoom Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-115 group-hover:bg-[#25D366] transition-all duration-300 shadow-md">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Bottom Info: Name, Country, Visa Status */}
                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <p className="text-xs font-black text-white truncate">
                        {story.name}
                      </p>
                      <p className="text-[11px] text-slate-200 font-medium truncate mt-0.5">
                        {story.visaType}
                      </p>

                      <div className="inline-flex items-center gap-1 text-emerald-400 text-[10px] font-bold mt-1 bg-emerald-950/70 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified Approval</span>
                      </div>
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
