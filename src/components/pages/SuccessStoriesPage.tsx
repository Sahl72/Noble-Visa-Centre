import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, ZoomIn, X, Search, CheckCircle2, ChevronRight, Share2, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { SUCCESS_STORIES, getWhatsAppUrl } from '../../data/visaData';
import { SuccessStory } from '../../types';
import { WhatsAppIcon } from '../Header';

interface SuccessStoriesPageProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  onOpenConsultation?: (params?: Record<string, string>) => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePhotoModal, setActivePhotoModal] = useState<SuccessStory | null>(null);

  const categories = [
    { id: 'all', label: 'All Approved Visas' },
    { id: 'russia-belarus', label: 'Russia & Belarus' },
    { id: 'malaysia-singapore', label: 'Malaysia & Singapore' },
    { id: 'taiwan', label: 'Taiwan (Paid Internships)' },
    { id: 'uk-europe', label: 'UK & Switzerland' }
  ];

  const filteredStories = useMemo(() => {
    return SUCCESS_STORIES.filter(story => {
      if (selectedCategory !== 'all' && story.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = story.name.toLowerCase().includes(q) ||
          story.country.toLowerCase().includes(q) ||
          story.visaType.toLowerCase().includes(q) ||
          (story.university && story.university.toLowerCase().includes(q)) ||
          (story.intake && story.intake.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleApplySimilar = (story: SuccessStory) => {
    const msg = `Hello Noble Visa Centre! I saw the visa approval proof for *${story.name}* (${story.country} - ${story.visaType}) and would like to check my eligibility for this destination.`;
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
            <span className="text-slate-900 font-bold">Success Stories & Visa Grants</span>
          </nav>
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Genuine Visa Proofs</span>
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
              <span>Noble Visa Centre Official Proof Gallery</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Real Students. Real Visas. <br />
              <span className="text-amber-400">Authentic Visa Grant Wall</span>
            </h1>
            
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Direct proof of student visas, university admissions, and international placements secured for Sri Lankan students since 2009. Click any image to view full high-resolution documentation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Hello Noble Visa Centre! I am browsing your authentic student visa approvals and would like free counseling.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-green-950/30 transition-all cursor-pointer active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat with Counselor</span>
              </a>

              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation({ interest: 'Student Visa Success Story Guidance' });
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

      {/* Main Visa Gallery */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Bar: Category Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#071330] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student, country..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing <span className="text-slate-900 font-extrabold">{filteredStories.length}</span> Verified Visa Approvals
          </p>
          <p className="text-xs text-slate-400 hidden sm:block">
            Click any photo to enlarge & verify
          </p>
        </div>

        {/* Clean Full-Size Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group text-left relative"
            >
              {/* Full Image Container */}
              <div 
                className="relative aspect-[4/5] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setActivePhotoModal(story)}
              >
                <img 
                  src={story.image} 
                  alt={`${story.name} Visa Approval`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle Gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge: Visa Type / Special feature */}
                {story.badge && (
                  <div className="absolute top-3 left-3 bg-[#071330]/90 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                    {story.badge}
                  </div>
                )}

                {/* Country Flag Tag top-right */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                  <span>{story.flag || '🌍'}</span>
                  <span>{story.country}</span>
                </div>

                {/* Center Hover Zoom Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Student Info on bottom of photo */}
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight truncate">
                    {story.name}
                  </h3>
                  <p className="text-slate-200 text-xs truncate mt-0.5 font-medium">
                    {story.visaType}
                  </p>
                </div>
              </div>

              {/* Minimalist Card Bottom details */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex flex-col justify-between flex-1 space-y-2.5">
                {story.university && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{story.university}</span>
                  </div>
                )}

                {story.intake && (
                  <p className="text-[11px] text-slate-500 truncate">
                    Program: <span className="text-slate-800 font-semibold">{story.intake}</span>
                  </p>
                )}

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActivePhotoModal(story)}
                    className="text-xs font-bold text-slate-700 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Photo</span>
                  </button>

                  <button
                    onClick={() => handleApplySimilar(story)}
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs transition active:scale-95 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredStories.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs max-w-md mx-auto my-8">
            <p className="text-slate-400 text-sm font-medium">No success stories match your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#071330] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-blue-950"
            >
              Clear Filters
            </button>
          </div>
        )}

      </section>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-[#071330] text-white p-4 sm:p-5 flex justify-between items-center border-b border-blue-900 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                  Noble Visa Centre • Verified Visa Grant
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                  <span>{activePhotoModal.name}</span>
                  <span className="text-xs text-amber-300 font-normal">({activePhotoModal.country})</span>
                </h4>
              </div>

              <button 
                onClick={() => setActivePhotoModal(null)}
                className="p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-rose-600 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display - Full size without cropping */}
            <div className="bg-slate-950 flex-1 overflow-auto flex items-center justify-center p-2 min-h-[300px] max-h-[60vh]">
              <img 
                src={activePhotoModal.image} 
                alt={activePhotoModal.name}
                className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Details & WhatsApp Trigger */}
            <div className="p-4 sm:p-5 text-left bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    {activePhotoModal.visaType}
                  </span>
                  {activePhotoModal.badge && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md">
                      {activePhotoModal.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Destination: <strong className="text-slate-900">{activePhotoModal.country}</strong> {activePhotoModal.university ? `• ${activePhotoModal.university}` : ''}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleApplySimilar(activePhotoModal)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire for {activePhotoModal.country}</span>
                </button>

                <button
                  onClick={() => {
                    const country = activePhotoModal.country;
                    setActivePhotoModal(null);
                    if (onOpenConsultation) {
                      onOpenConsultation({ destination: country });
                    }
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#071330] hover:bg-blue-950 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition cursor-pointer"
                >
                  <span>Book Free Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
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
            <a
              href={getWhatsAppUrl("Hello Noble Visa Centre! I would like to book a free consultation for student visa options.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition cursor-pointer active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Connect on WhatsApp</span>
            </a>
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
