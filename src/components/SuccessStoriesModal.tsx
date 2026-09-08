import React from 'react';
import { X, CheckCircle2, MapPin, ZoomIn } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/visaData';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl } from '../data/visaData';

interface SuccessStoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessStoriesModal: React.FC<SuccessStoriesModalProps> = ({ isOpen, onClose }) => {
  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-slate-900 animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col relative my-4"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#071330] p-6 text-white relative flex justify-between items-center border-b border-blue-900 shrink-0">
          <div className="text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
              Noble Visa Centre • Official Proof Gallery
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              Authentic Student Visa Approvals
            </h3>
          </div>
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close dialog"
            className="p-2.5 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-rose-600/90 transition-all duration-200 cursor-pointer shadow-md active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Full Photo Grid */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SUCCESS_STORIES.map((story) => (
              <div 
                key={story.id} 
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                  
                  {/* Flag badge */}
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <span>{story.flag || '🌍'}</span>
                    <span>{story.country}</span>
                  </div>

                  <div className="absolute bottom-2 inset-x-2 text-white">
                    <h4 className="font-extrabold text-xs truncate">{story.name}</h4>
                    <p className="text-[10px] text-amber-300 font-medium truncate">{story.visaType}</p>
                  </div>
                </div>

                <div className="p-3 bg-white flex items-center justify-between gap-2 border-t border-slate-100">
                  <div className="truncate">
                    <p className="text-[10px] text-slate-500 font-medium truncate">{story.university || story.country}</p>
                  </div>
                  <a
                    href={getWhatsAppUrl(`Hello Noble Visa Centre! I saw the visa approval proof of ${story.name} (${story.country}) and would like to apply.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0 hover:bg-[#20ba59] transition"
                  >
                    <WhatsAppIcon className="w-3 h-3 text-white" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center shrink-0">
          <p className="text-xs text-slate-500 hidden sm:block">Start your success story with Noble Visa Centre.</p>
          <a
            href={getWhatsAppUrl("Hello Noble Visa Centre! I would like to book a free consultation after seeing your authentic student success stories.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-[#20ba59] transition cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Book a Free Consultation</span>
          </a>
        </div>

      </div>
    </div>
  );
};
