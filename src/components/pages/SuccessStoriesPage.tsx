import React, { useState } from 'react';
import { Sparkles, ArrowRight, ZoomIn, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SUCCESS_STORIES, getWhatsAppUrl } from '../../data/visaData';
import { SuccessStory } from '../../types';
import { WhatsAppIcon } from '../Header';

interface SuccessStoriesPageProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  onOpenConsultation?: (params?: Record<string, string>) => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activePhotoModal, setActivePhotoModal] = useState<SuccessStory | null>(null);

  const handleStartVisaJourney = () => {
    const msg = "Hello Noble Visa Centre! I saw your authentic visa approvals and would like to start my visa journey.";
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Success Stories</span>
          </nav>
          
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Authentic Visa Proofs</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#071330] via-[#091b42] to-[#0a2355] text-white py-12 sm:py-16 border-b border-blue-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Visa Proof Gallery</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Real Students. Real Visas. <br />
              <span className="text-amber-400">Authentic Visa Grant Wall</span>
            </h1>
            
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Official student visa approvals and university placement proofs secured through Noble Visa Centre. Click any poster to view in full resolution.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStartVisaJourney}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-green-950/30 transition-all cursor-pointer active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Start Your Visa Journey Now</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation({ interest: 'General Visa Consultation' });
                  } else if (onNavigate) {
                    onNavigate('consultation');
                  }
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visa Gallery: Pure Full-Size Poster Images with WhatsApp Button */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Counter */}
        <div className="flex items-center justify-between mb-8 px-1">
          <p className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Showing {SUCCESS_STORIES.length} Verified Visa Proofs</span>
          </p>
          <p className="text-xs text-slate-500 hidden sm:block">
            Click any poster to view in high resolution
          </p>
        </div>

        {/* Clean Grid of Full-Size Poster Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {SUCCESS_STORIES.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Full-Size Poster Image Container (Uncropped, natural aspect ratio) */}
              <div 
                className="relative bg-slate-100 overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => setActivePhotoModal(story)}
                title="Click to view full high-resolution poster"
              >
                <img 
                  src={story.image} 
                  alt="Noble Visa Centre Visa Approval" 
                  className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-blue-700" />
                  </div>
                </div>
              </div>

              {/* Start Your Visa Journey Now WhatsApp Button on Each Card */}
              <div className="p-3.5 bg-white border-t border-slate-100">
                <button
                  onClick={handleStartVisaJourney}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da851] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                  <span className="font-extrabold tracking-tight">Start Your Visa Journey Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-[#071330] text-white p-3.5 sm:p-4 flex justify-between items-center border-b border-blue-900 shrink-0">
              <div className="text-left flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Noble Visa Centre • Official Visa Grant Proof
                </span>
              </div>

              <button 
                onClick={() => setActivePhotoModal(null)}
                className="p-1.5 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-rose-600 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display - Full size without cropping */}
            <div className="bg-slate-950 flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 min-h-[400px] max-h-[82vh]">
              <img 
                src={activePhotoModal.image} 
                alt="Visa Grant Proof"
                className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal WhatsApp Action Button */}
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-600 font-medium text-center sm:text-left">
                Get direct guidance on university admissions & visa processing from our licensed counselors.
              </p>

              <button
                onClick={handleStartVisaJourney}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Start Your Visa Journey Now</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Trust & Next Steps Banner */}
      <section className="bg-[#071330] text-white py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-black mb-2">
            Ready to Begin Your Visa Application?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get personalized eligibility checking, university shortlisting, and direct tuition payment guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleStartVisaJourney}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition cursor-pointer active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Start Your Visa Journey Now</span>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('countries')}
              className="inline-flex items-center gap-2 bg-white text-[#071330] hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition cursor-pointer active:scale-95"
            >
              <span>Explore Top Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
