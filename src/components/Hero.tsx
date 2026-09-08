import React from 'react';
import { 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl } from '../data/visaData';

const HERO_BG_IMAGE_URL = "https://res.cloudinary.com/fivl3klo/image/upload/v1788426385/ChatGPT_Image_Sep_3_2026_02_35_46_PM.png";

interface HeroProps {
  onOpenConsultationModal: (visaType?: string) => void;
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal, onScrollToForm }) => {
  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppUrl("Hello Noble Visa Centre! I would like to book a free consultation for my study abroad / travel visa."), 
      '_blank'
    );
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-[#f0f6fd] w-full min-h-[calc(100vh-72px)] flex items-stretch"
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-72px)]">
        
        {/* Left Column (50% on Desktop): Typography & Actions */}
        <div className="w-full lg:w-1/2 bg-[#f0f6fd] flex items-center justify-center lg:justify-end px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-16 z-10">
          <div className="w-full max-w-xl space-y-5 sm:space-y-6 text-left my-auto">
            
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-[10px] sm:text-xs font-bold text-blue-950 tracking-wide uppercase">
                Premier Visa & University Consultancy • Sri Lanka
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#0a193b] leading-[1.14] tracking-tight">
              Your Future Abroad <br />
              <span className="text-[#1a56db]">Starts With the Right</span> <br />
              <span className="text-[#1a56db]">Guidance.</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-sm sm:text-base text-slate-700 max-w-lg leading-relaxed font-normal">
              Noble Visa Centre helps students and travellers choose the right destination, university, visa path and documents with clear guidance and transparent support.
            </p>

            {/* Verification Pills */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <span className="inline-flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100 shrink-0" />
                Verified Pathways
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100 shrink-0" />
                Expert Guidance
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100 shrink-0" />
                Transparent Support
              </span>
            </div>

            {/* Single WhatsApp Consultation Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                id="hero-book-consultation-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/25 transition-all duration-200 text-center cursor-pointer min-h-[50px]"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center p-2 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">5.0 / 5.0</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">
                  Based on 70+ Google Reviews
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column (50% on Desktop): Crisp, unblurred full image */}
        <div className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[500px] lg:min-h-[calc(100vh-72px)] relative overflow-hidden bg-[#f0f6fd] flex items-center justify-center">
          <img
            src={HERO_BG_IMAGE_URL}
            alt="Noble Visa Centre - Complete Team & Pathways"
            className="w-full h-full object-cover object-center select-none"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
};


