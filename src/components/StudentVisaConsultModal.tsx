import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Globe2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  CheckCircle2, 
  Building2, 
  Compass, 
  Clock, 
  ChevronRight,
  BookOpen,
  Award,
  Users2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { COUNTRIES, VISA_SERVICES, getWhatsAppUrl } from '../data/visaData';
import { Country, VisaService } from '../types';
import { WhatsAppIcon } from './Header';

interface StudentVisaConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountryDetails: (country: Country) => void;
  onNavigateToForm: () => void;
}

type StepMode = 'choose_or_guide' | 'select_country' | 'undecided_advisor' | 'direct_payment_guide';

export const StudentVisaConsultModal: React.FC<StudentVisaConsultModalProps> = ({
  isOpen,
  onClose,
  onSelectCountryDetails,
  onNavigateToForm
}) => {
  const [viewMode, setViewMode] = useState<StepMode>('choose_or_guide');
  const [selectedQualification, setSelectedQualification] = useState<string>('all');
  const [userIntent, setUserIntent] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<Country | null>(null);

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

  // Filter countries for student study
  const studyDestinations = COUNTRIES.filter(c => 
    c.visaTypes.some(v => v.toLowerCase().includes('student') || v.toLowerCase().includes('internship') || v.toLowerCase().includes('pass'))
  );

  const handleWhatsAppConsultation = (customMessage?: string) => {
    const defaultMsg = customMessage || (
      selectedDestination 
        ? `Hello Noble Visa Centre! I am interested in applying for a Student Visa to *${selectedDestination.name}*. I would like to book a free 1-on-1 WhatsApp consultation.`
        : `Hello Noble Visa Centre! I am planning my higher education abroad and would like guidance on choosing the best country, university, and student visa pathway. Please book my free 1-on-1 consultation.`
    );
    window.open(getWhatsAppUrl(defaultMsg), '_blank');
  };

  const handleDirectCountrySelection = (country: Country) => {
    setSelectedDestination(country);
  };

  const handleOpenFullCountrySpecs = (country: Country) => {
    onClose();
    onSelectCountryDetails(country);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white w-full max-w-2xl sm:max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-slate-900 animate-in zoom-in-95 duration-200 my-4 sm:my-8 max-h-[92vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with gradient and responsive layout */}
        <div className="bg-gradient-to-r from-[#071330] via-[#0b2254] to-[#123984] p-5 sm:p-6 text-white relative flex-shrink-0">
          
          {/* Top close button */}
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2.5 text-slate-200 hover:text-white rounded-full bg-white/15 hover:bg-rose-600/90 transition-all duration-200 z-50 cursor-pointer shadow-md active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Subheader and Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-amber-400/90 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 text-slate-950" />
              Student Visa & University Admissions Hub
            </span>
            <span className="bg-blue-500/30 text-blue-200 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-400/30">
              100% Free 1-on-1 Expert Guidance
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
            Plan Your Global Education with Noble Visa Centre
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/90 mt-1 max-w-xl font-normal leading-relaxed">
            Whether you already know your dream destination or need expert matching based on your budget, O/Ls, A/Ls, or work goals — we guide you every step of the way.
          </p>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/15">
            <button
              onClick={() => setViewMode('choose_or_guide')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                viewMode === 'choose_or_guide'
                  ? 'bg-white text-blue-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Step 1: Choose or Get Matched</span>
            </button>

            <button
              onClick={() => setViewMode('select_country')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                viewMode === 'select_country'
                  ? 'bg-white text-blue-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Explore All Destinations ({studyDestinations.length})</span>
            </button>

            <button
              onClick={() => setViewMode('direct_payment_guide')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                viewMode === 'direct_payment_guide'
                  ? 'bg-emerald-400 text-slate-950 shadow-md'
                  : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct University Tuition Guarantee</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-left text-xs sm:text-sm">

          {/* MODE 1: INTENT & PATHWAY PICKER */}
          {viewMode === 'choose_or_guide' && (
            <div className="space-y-6">
              
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  Where are you in your study abroad journey?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Select an option below and get immediate personalized options or connect directly with a senior education counselor on WhatsApp.
                </p>
              </div>

              {/* 3 Main Choice Cards */}
              <div className="grid sm:grid-cols-3 gap-3.5">
                
                {/* Option A: I have a country in mind */}
                <div 
                  onClick={() => setViewMode('select_country')}
                  className="bg-blue-50/70 hover:bg-blue-100/70 border-2 border-blue-200/80 hover:border-blue-400 rounded-2xl p-4 cursor-pointer transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-xs">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      I have a specific country in mind
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Select Russia, Malaysia, Singapore, Taiwan, Latvia, UK, Canada, Dubai, Cyprus, or Switzerland to see intakes, requirements & fees.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-black text-blue-700 group-hover:translate-x-0.5 transition-transform">
                    <span>Browse Countries</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Option B: I am undecided, match me by criteria */}
                <div 
                  onClick={() => setViewMode('undecided_advisor')}
                  className="bg-purple-50/70 hover:bg-purple-100/70 border-2 border-purple-200/80 hover:border-purple-400 rounded-2xl p-4 cursor-pointer transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3 shadow-xs">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      I'm undecided, help me choose!
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Find the best fit based on your O/Ls, A/Ls, budget, desire to work part-time, or without IELTS & without show money.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-black text-purple-700 group-hover:translate-x-0.5 transition-transform">
                    <span>Open Smart Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Option C: 12-Month Paid Hospitality Internship in Taiwan */}
                <div 
                  onClick={() => {
                    const taiwan = COUNTRIES.find(c => c.id === 'taiwan');
                    if (taiwan) handleOpenFullCountrySpecs(taiwan);
                  }}
                  className="bg-amber-50/80 hover:bg-amber-100/80 border-2 border-amber-200/90 hover:border-amber-400 rounded-2xl p-4 cursor-pointer transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-amber-800 uppercase tracking-wide">
                      <span>Featured Program</span>
                    </div>
                    <h5 className="font-black text-slate-900 text-sm mt-0.5">
                      Paid Hospitality Internship
                    </h5>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      12-Month hotel training in Taiwan (5★ & 6★ luxury hotels) with USD 700 - USD 900 / month stipend, meals, and accommodation.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-black text-amber-900 group-hover:translate-x-0.5 transition-transform">
                    <span>View Taiwan Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

              {/* Direct Tuition Payment Feature Card */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Parent & Student Financial Protection</span>
                  </div>
                  <h5 className="text-sm sm:text-base font-extrabold text-slate-900">
                    Direct University Fee Payment After Arrival
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
                    For Russia, Malaysia, and Singapore, pay tuition fees directly to the university in the destination country. No middlemen fees in Sri Lanka, 100% transparent.
                  </p>
                </div>

                <button
                  onClick={() => setViewMode('direct_payment_guide')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-xs flex-shrink-0"
                >
                  <span>Learn How It Works</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick WhatsApp 1-on-1 Counseling Callout */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      Senior Counselors Online Now
                    </span>
                  </div>
                  <h5 className="text-sm sm:text-base font-extrabold text-white">
                    Need instant advice on entry criteria & document verification?
                  </h5>
                  <p className="text-xs text-slate-300">
                    Connect with our Battaramulla HQ & One Galle Face admissions team for a personalized 1-on-1 WhatsApp consultation.
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre, I would like to book a free 1-on-1 WhatsApp consultation regarding university admissions and student visas.")}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black px-5 py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 flex-shrink-0 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

            </div>
          )}

          {/* MODE 2: DESTINATION SELECTOR WITH DIRECT DETAILS */}
          {viewMode === 'select_country' && (
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Select Your Target Study Destination
                  </h4>
                  <p className="text-xs text-slate-500">
                    Click on any country to view courses, official university representation, intake dates, and entry criteria.
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('choose_or_guide')}
                  className="text-xs font-bold text-blue-600 hover:underline self-start sm:self-auto"
                >
                  ← Back to Options
                </button>
              </div>

              {/* Destination Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {studyDestinations.map((country) => (
                  <div
                    key={country.id}
                    onClick={() => handleDirectCountrySelection(country)}
                    className={`rounded-2xl border p-3.5 cursor-pointer transition flex flex-col justify-between ${
                      selectedDestination?.id === country.id
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-md'
                        : 'border-slate-200 hover:border-blue-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 flex items-center justify-center bg-slate-100">
                            {country.flagUrl ? (
                              <img src={country.flagUrl} alt={country.name} className="w-full h-full object-cover" />
                            ) : (
                              <span>{country.flag}</span>
                            )}
                          </div>
                          <span className="font-extrabold text-slate-900 text-sm">{country.name}</span>
                        </div>

                        {country.directPayment && (
                          <span className="text-[9px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            Direct Pay
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] font-bold text-blue-700 line-clamp-1">
                        {country.popularFor}
                      </p>

                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {country.highlight}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">
                        {country.intake || 'Fall & Spring Intake'}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenFullCountrySpecs(country);
                        }}
                        className="font-bold text-blue-600 hover:underline flex items-center gap-0.5"
                      >
                        <span>Full Prospectus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Country Drawer / CTA */}
              {selectedDestination && (
                <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 animate-in fade-in">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{selectedDestination.flag}</span>
                      <h5 className="font-extrabold text-white text-base sm:text-lg">
                        Interested in studying in {selectedDestination.name}?
                      </h5>
                    </div>
                    <p className="text-xs text-blue-200">
                      {selectedDestination.officialRole || selectedDestination.highlight}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleOpenFullCountrySpecs(selectedDestination)}
                      className="flex-1 sm:flex-initial bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
                    >
                      View All Courses
                    </button>
                    <button
                      onClick={() => handleWhatsAppConsultation(`Hello Noble Visa Centre! I would like to book a free 1-on-1 consultation for *${selectedDestination.name}* (${selectedDestination.popularFor}).`)}
                      className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow transition flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* MODE 3: UNDECIDED ADVISOR (SMART MATCHING) */}
          {viewMode === 'undecided_advisor' && (
            <div className="space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Smart Study Pathway Finder
                  </h4>
                  <p className="text-xs text-slate-500">
                    What matters most for your international education? Choose a criteria below:
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('choose_or_guide')}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  ← Back
                </button>
              </div>

              {/* Pathway Filters */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                
                {/* 1. Entry with Ordinary Levels (O/L) */}
                <div 
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I have completed my O/Ls and I am looking for foundation and diploma pathways abroad (Malaysia, Singapore, India, Dubai). Please advise me on eligible courses.")}
                  className="bg-white border-2 border-slate-200 hover:border-blue-500 rounded-2xl p-4 cursor-pointer transition shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      Entry with O/Ls
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Have only Ordinary Level (O/L) results?
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Fast-track into recognized Diplomas in <strong>Malaysia, Singapore, Dubai, and India</strong>. Direct degree progression to UK & Australia.
                  </p>
                </div>

                {/* 2. Without IELTS & Without Show Money */}
                <div 
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I am looking for study options *without IELTS requirement* and *without show money*. Please match me with suitable countries.")}
                  className="bg-white border-2 border-slate-200 hover:border-emerald-500 rounded-2xl p-4 cursor-pointer transition shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      No IELTS / Low Funds
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Without IELTS & Minimal Show Money
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Explore <strong>Russia, Belarus, Malaysia, Singapore, and Dubai</strong> where English medium waiver letters and direct payments eliminate difficult bank requirements.
                  </p>
                </div>

                {/* 3. Medical & Teaching Degrees (M.B.B.S & Pedagogy) */}
                <div 
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I am inquiring about *M.B.B.S (Medicine)* and *Foreign Language / Teaching Degrees* in Russia and Belarus.")}
                  className="bg-white border-2 border-slate-200 hover:border-indigo-500 rounded-2xl p-4 cursor-pointer transition shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      Medical & Teaching
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    M.B.B.S (Medicine) & Language Degrees
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Study at <strong>Moscow Linguistic University, Pushkin University, and Omnis</strong> with official Country Manager direct enrollment and pay-on-arrival.
                  </p>
                </div>

                {/* 4. Post-Study Work & Immigration (UK, Canada, Latvia, NZ) */}
                <div 
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I want to study in a country with *2-3 Year Post-Study Work Visa (PSW)* and PR pathways like UK, Canada, New Zealand, or Schengen Latvia.")}
                  className="bg-white border-2 border-slate-200 hover:border-amber-500 rounded-2xl p-4 cursor-pointer transition shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                      2 - 3 Year Work Permits
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Post-Study Work Permits & PR Routes
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Graduate route visas in the <strong>UK (2 Years), Canada (3-Year PGWP), New Zealand (Green List), and Latvia (Schengen)</strong>.
                  </p>
                </div>

              </div>

              {/* One-on-One Custom Assessment Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Have unique grades or gap years?
                  </h5>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our team specializes in case-by-case admissions and visa approval strategies for Sri Lankan applicants.
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I have specific academic qualifications/gap years and would like a custom profile evaluation for university admissions.")}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow transition flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Request Free Profile Assessment</span>
                </button>
              </div>

            </div>
          )}

          {/* MODE 4: DIRECT UNIVERSITY TUITION PAYMENT GUIDE */}
          {viewMode === 'direct_payment_guide' && (
            <div className="space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Direct University Tuition Payment Guarantee</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    Noble Visa Centre's transparent direct-to-institution payment structure:
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('choose_or_guide')}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  ← Back
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-3.5">
                
                {/* Russia */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇷🇺</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm">Russia</h5>
                      <span className="text-[10px] text-emerald-700 font-bold">Pay Direct by Hand on Arrival</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Students can take and pay tuition fees directly by hand to the university cash office upon arrival in Moscow/Russia. No middlemen and zero tuition fees in Sri Lanka.
                  </p>
                </div>

                {/* Malaysia */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇲🇾</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm">Malaysia</h5>
                      <span className="text-[10px] text-emerald-700 font-bold">Pay Direct by Hand on Arrival</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Students can pay tuition fees directly by hand to the accredited campus in Malaysia upon arrival or visa endorsement. Zero tuition payment in Sri Lanka.
                  </p>
                </div>

                {/* Singapore */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇸🇬</span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm">Singapore</h5>
                      <span className="text-[10px] text-emerald-700 font-bold">Pay Direct by Hand on Arrival</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Students can pay tuition fees directly by hand to the Singapore institution upon arrival / visa grant, with zero advance tuition fee payment in Sri Lanka.
                  </p>
                </div>

              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-950 text-xs sm:text-sm space-y-2">
                <h5 className="font-extrabold text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Guarantee for Russia, Malaysia & Singapore:</span>
                </h5>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-emerald-900">
                  <li>Direct university in-hand fee payment upon arrival — you never pay university fees to third parties in Sri Lanka.</li>
                  <li>Official university acceptance letters and invoices received directly from the campus.</li>
                  <li>Zero intermediary commission markups.</li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => handleWhatsAppConsultation("Hello Noble Visa Centre! I would like to inquire about the *Direct University Tuition Payment* options for Russia, Malaysia, and Singapore.")}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black px-6 py-3 rounded-xl shadow-md transition inline-flex items-center gap-2 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat with Counselors Regarding Direct Payments</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          
          <div className="text-left">
            <span className="text-[11px] text-slate-500 block">
              Headquarters: 393/3, Lily Avenue, Battaramulla | Branch: Level 12, One Galle Face Tower, Colombo
            </span>
            <span className="text-xs font-bold text-slate-800">
              Hotlines: 074 010 4106 / 074 010 2108 / 0114 166 068 • nr100million@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onNavigateToForm();
              }}
              className="flex-1 sm:flex-initial text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold py-2.5 px-4 rounded-xl transition"
            >
              Fill Online Form
            </button>

            <button
              onClick={() => handleWhatsAppConsultation()}
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black py-2.5 px-5 rounded-xl shadow transition flex items-center justify-center gap-2 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Book Free 1-on-1 on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
