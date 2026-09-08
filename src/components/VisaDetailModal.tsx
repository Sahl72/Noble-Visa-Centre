import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Zap,
  Users,
  FileText,
  Briefcase,
  Presentation,
  Store,
  Handshake,
  PieChart,
  GraduationCap,
  Award,
  ThumbsUp,
  Smartphone,
  Check,
  Plane,
  Building,
  MapPin,
  Calendar,
  UserCheck,
  BookOpen,
  Send,
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { VisaService, Country } from '../types';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl, COUNTRIES } from '../data/visaData';

interface VisaDetailModalProps {
  service: VisaService | null;
  onClose: () => void;
  onBookConsultation: (visaTitle: string) => void;
  onSelectCountry?: (country: Country) => void;
}

type VisaTabType = 'tourist' | 'business' | 'evisa' | 'internship';
type SectionSubTab = 'overview' | 'requirements' | 'checklist';

interface DestinationItem {
  id: string;
  name: string;
  flag: string;
  image: string;
  time: string;
  popularFor: string;
  features: string[];
}

const VISIT_DESTINATIONS: DestinationItem[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=700&q=80',
    time: '3-5 Days',
    popularFor: 'Beaches, Culture & Tourism',
    features: ['Single & Multi-Entry', 'Visa on Arrival / E-Visa', 'Flexible Stays']
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=700&q=80',
    time: '2-4 Days',
    popularFor: 'E-Visa & Holiday Travel',
    features: ['eNTRI & Tourist E-Visa', '30-Day Stay', 'No Embassy Interview']
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80',
    time: '3-5 Days',
    popularFor: 'Shopping, Tech & Leisure',
    features: ['E-Visa Entry', 'Multi-Journey Option', 'Urgent 48h Available']
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
    time: '24-48 Hours',
    popularFor: '30/60 Days Express Tourist',
    features: ['Instant Government Filing', 'Zero Document Hassle', 'Extendable in Country']
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80',
    time: '3-4 Weeks',
    popularFor: 'Standard Visitor Visa',
    features: ['6-Month Standard Visitor', 'Biometrics & Filing', 'Financial Verification']
  },
  {
    id: 'cyprus',
    name: 'Cyprus',
    flag: '🇨🇾',
    image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=700&q=80',
    time: '2-3 Weeks',
    popularFor: 'Mediterranean Holidays',
    features: ['European Island Travel', 'Hotel Booking Support', 'High Approval Rate']
  },
  {
    id: 'other-tourist',
    name: 'Other / Haven\'t Decided Yet',
    flag: '🌍',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80',
    time: 'Custom Fast-Track',
    popularFor: '50+ Global Holiday & Visit Visas',
    features: ['Schengen, USA, Australia, Japan & more', 'Personalized Itinerary Planning', 'Free Document Eligibility Review']
  }
];

const EVISA_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
    time: '24-48h Express',
    popularFor: '30 / 60 Days Single & Multi-Entry',
    features: ['100% Online Approval', 'WhatsApp PDF Delivery', 'Only Passport & Photo Needed']
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=700&q=80',
    time: '48 Hours',
    popularFor: 'Official EMGS & eNTRI / Tourist',
    features: ['Direct Immigration Link', 'Fast Validation', 'Tourist & Social Stays']
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=700&q=80',
    time: '3-5 Days',
    popularFor: '60-Day Tourist Electronic Visa',
    features: ['Paperless Application', 'Single & Multiple Options', 'Fast Processing']
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=700&q=80',
    time: 'Instant / 24h',
    popularFor: 'Tourism, Umrah & Transit',
    features: ['1-Year Multi-Entry', 'Umrah Included', 'Fast Digital Issuance']
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80',
    time: '3 Working Days',
    popularFor: '90-Day Multiple Entry E-Visa',
    features: ['90-Day Validity', 'Air, Land & Sea Ports', 'Quick Verification']
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80',
    time: '48-72 Hours',
    popularFor: 'e-Tourist, e-Business & Medical',
    features: ['30-Day, 1-Year or 5-Year', 'Double/Multiple Entry', 'Rapid Processing']
  },
  {
    id: 'other-evisa',
    name: 'Other E-Visa Country',
    flag: '⚡',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80',
    time: '24-72 Hours',
    popularFor: '40+ Worldwide Digital Visas',
    features: ['100% Online Paperless Process', 'Pre-Submission Audit', 'Express WhatsApp Delivery']
  }
];

const BUSINESS_PURPOSES = [
  {
    id: 'meetings',
    title: 'Business Meetings',
    desc: 'Executive discussions, corporate reviews & partnership negotiations',
    icon: Handshake,
    badge: 'High Priority'
  },
  {
    id: 'conferences',
    title: 'Conferences & Seminars',
    desc: 'Keynote speaking, academic forums & industry summits',
    icon: Presentation,
    badge: 'Express Letter'
  },
  {
    id: 'trade-fairs',
    title: 'Trade Fairs & Exhibitions',
    desc: 'Commercial expos, product launches & vendor showcases',
    icon: Store,
    badge: 'Delegation Support'
  },
  {
    id: 'client-meetings',
    title: 'Client Meetings',
    desc: 'Contract signings, presentations & stakeholder engagements',
    icon: Users,
    badge: 'Corporate Fast-Track'
  },
  {
    id: 'market-research',
    title: 'Market Research',
    desc: 'Feasibility studies, supplier audits & regional exploration',
    icon: PieChart,
    badge: 'Consultant Review'
  },
  {
    id: 'training',
    title: 'Training Programs',
    desc: 'Corporate workshops, technology transfer & skill upgrades',
    icon: GraduationCap,
    badge: 'Certification Filing'
  }
];

export const VisaDetailModal: React.FC<VisaDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
  onSelectCountry
}) => {
  const [activeTab, setActiveTab] = useState<VisaTabType>('tourist');
  const [activeSectionTab, setActiveSectionTab] = useState<SectionSubTab>('overview');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('Business Meetings');
  const [selectedEVisaType, setSelectedEVisaType] = useState<string>('30-Day Tourist E-Visa');

  useEffect(() => {
    if (service) {
      if (service.id === 'tourist-visa') {
        setActiveTab('tourist');
      } else if (service.id === 'business-visa') {
        setActiveTab('business');
      } else if (service.id === 'internship-program') {
        setActiveTab('internship');
      } else {
        setActiveTab('tourist');
      }
      setSelectedDestination('');
      setActiveSectionTab('overview');
    }
  }, [service]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const handleWhatsAppAction = (customPrompt?: string) => {
    let msg = '';
    if (activeTab === 'tourist') {
      const destText = selectedDestination ? ` for *${selectedDestination}*` : '';
      msg = customPrompt || `Hello Noble Visa Centre, I am inquiring about a *Tourist / Visit Visa*${destText}. Please provide requirement checklist, processing time, and consultation.`;
    } else if (activeTab === 'business') {
      const purposeText = selectedPurpose ? ` for *${selectedPurpose}*` : '';
      const destText = selectedDestination ? ` to *${selectedDestination}*` : '';
      msg = customPrompt || `Hello Noble Visa Centre, I am planning a *Business Visa* application${destText}${purposeText}. Please advise on invitation letter validation and express corporate processing.`;
    } else if (activeTab === 'evisa') {
      const destText = selectedDestination ? ` for *${selectedDestination}*` : '';
      msg = customPrompt || `Hello Noble Visa Centre, I would like to apply for an *E-Visa (${selectedEVisaType})*${destText}. Please evaluate my documents for fast-track processing.`;
    } else if (activeTab === 'internship') {
      msg = `Hello Noble Visa Centre, I am interested in the *Taiwan 12-Month Paid Hospitality Internship (USD 700 - USD 900 / month)*. Please share package details and interview criteria.`;
    } else {
      msg = `Hello Noble Visa Centre, I would like a consultation regarding *${service.title}* (${service.subtitle}).`;
    }

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const handleSwitchTab = (tab: VisaTabType) => {
    setActiveTab(tab);
    setSelectedDestination('');
    setActiveSectionTab('overview');
  };

  const getHeroInfo = () => {
    switch (activeTab) {
      case 'business':
        return {
          subtitlePrefix: 'Corporate in',
          title: 'Business Visa',
          meta1: 'Global Business Mobility',
          meta2: 'Priority 3-7 Days Processing',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
          badge1Title: 'Corporate Priority Queue',
          badge1Sub: 'Express Invitation & Letter Verification',
          badge2Title: 'Commercial Delegation',
          badge2Sub: 'Official Liaison for Meetings & Expos'
        };
      case 'evisa':
        return {
          subtitlePrefix: 'Online in',
          title: 'E-Visa Services',
          meta1: '100% Digital & Paperless',
          meta2: '24-48 Hours Express Delivery',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
          badge1Title: '24-48h Fast Track Delivery',
          badge1Sub: 'Government-Approved Electronic Approval',
          badge2Title: 'Pre-Check Document Verify',
          badge2Sub: 'Zero Embassy Visits Required'
        };
      case 'internship':
        return {
          subtitlePrefix: 'Training in',
          title: 'Taiwan Hospitality',
          meta1: '5★ & 6★ Luxury Hotel Chains',
          meta2: '12-Month Paid Program',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          badge1Title: 'USD 700 - USD 900 / Month',
          badge1Sub: 'Guaranteed Stipend + Duty Meals + Housing',
          badge2Title: 'Official Taiwan Ministry',
          badge2Sub: 'Accredited 1-Year Professional Training'
        };
      case 'tourist':
      default:
        return {
          subtitlePrefix: 'Travel with',
          title: 'Tourist / Visit',
          meta1: 'Hassle-Free Global Travel',
          meta2: '3-10 Days Fast Processing',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
          badge1Title: 'High Approval Success',
          badge1Sub: 'Complete Documentation & Flight Booking',
          badge2Title: 'Personalized Travel Support',
          badge2Sub: 'Holiday, Family & Short-Stay Visas'
        };
    }
  };

  const hero = getHeroInfo();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-slate-900 animate-in zoom-in-95 duration-200 my-4 sm:my-6 max-h-[94vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Visibility Close Button - EXACT MATCH TO STUDENT VISA MODAL */}
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close popup modal"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2.5 sm:p-3 text-slate-700 hover:text-white rounded-full bg-white/95 hover:bg-rose-600 shadow-xl transition-all duration-200 z-[99] border border-slate-300/80 cursor-pointer flex items-center justify-center group active:scale-90"
        >
          <X className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Scrollable Modal Container */}
        <div className="overflow-y-auto flex-1 text-left">
          
          {/* =========================================================
              PROPER TOP HERO HEADER (MATCHING STUDENT VISA STYLE)
              ========================================================= */}
          <div className="relative bg-white overflow-hidden border-b border-slate-200">
            
            {/* Background Landmark Image aligned to right with daylight brightness */}
            <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[62%] z-0 pointer-events-none overflow-hidden">
              <img 
                src={hero.image} 
                alt={hero.title}
                className="w-full h-full object-cover object-center sm:object-right-top"
                referrerPolicy="no-referrer"
              />
              {/* Seamless gradient mask blending into white */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/35 sm:to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent sm:hidden"></div>
            </div>

            {/* Header Content Wrapper */}
            <div className="relative z-10 p-6 sm:p-8 sm:pr-16">
              
              {/* Quick Visa Service Switcher Pills (Matching Student Destinations Row) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-2 pr-16 no-scrollbar">
                <span className="text-[10px] font-extrabold text-[#0a193b] uppercase tracking-wider mr-1 flex-shrink-0 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Services
                </span>
                
                <button
                  onClick={() => handleSwitchTab('tourist')}
                  className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                    activeTab === 'tourist'
                      ? 'bg-[#0642be] text-white shadow-md font-black ring-2 ring-blue-300'
                      : 'bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>🏖️</span>
                  <span>Tourist / Visit Visa</span>
                </button>

                <button
                  onClick={() => handleSwitchTab('business')}
                  className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                    activeTab === 'business'
                      ? 'bg-[#0642be] text-white shadow-md font-black ring-2 ring-blue-300'
                      : 'bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>💼</span>
                  <span>Business Visa</span>
                </button>

                <button
                  onClick={() => handleSwitchTab('evisa')}
                  className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                    activeTab === 'evisa'
                      ? 'bg-[#0642be] text-white shadow-md font-black ring-2 ring-blue-300'
                      : 'bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>⚡</span>
                  <span>E-Visa (Online)</span>
                </button>

                <button
                  onClick={() => handleSwitchTab('internship')}
                  className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                    activeTab === 'internship'
                      ? 'bg-[#0642be] text-white shadow-md font-black ring-2 ring-blue-300'
                      : 'bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>🇹🇼</span>
                  <span>Taiwan Internship</span>
                </button>
              </div>

              {/* Title Section (Exact match to student visa styling) */}
              <div className="max-w-md space-y-3.5">
                
                {/* Prefix Label */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden shadow-md ring-2 ring-white flex-shrink-0 flex items-center justify-center bg-blue-50 text-[#0642be]">
                    {activeTab === 'business' && <Briefcase className="w-4 h-4" />}
                    {activeTab === 'evisa' && <Zap className="w-4 h-4" />}
                    {activeTab === 'internship' && <Sparkles className="w-4 h-4 text-amber-600" />}
                    {activeTab === 'tourist' && <Plane className="w-4 h-4" />}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#071a47] tracking-tight">
                    {hero.subtitlePrefix}
                  </span>
                </div>

                {/* Massive Bold Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#061845] tracking-tight leading-none">
                  {hero.title}
                </h2>

                {/* Metadata Line */}
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0c317c] pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#0642be]" />
                    <span>{hero.meta1}</span>
                  </span>
                  <span className="text-slate-300 font-light text-base">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0642be]" />
                    <span>{hero.meta2}</span>
                  </span>
                </div>

                {/* Card 1: Primary Vibrant Cobalt Blue Box */}
                <div className="bg-[#0642be] hover:bg-[#0538a3] transition rounded-2xl p-3.5 sm:p-4 text-white flex items-center gap-3.5 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-black text-white block leading-tight">
                      {hero.badge1Title}
                    </span>
                    <span className="text-xs font-semibold text-blue-100 block leading-tight mt-0.5">
                      {hero.badge1Sub}
                    </span>
                  </div>
                </div>

                {/* Card 2: Clean White Box with Soft Border */}
                <div className="bg-white/95 backdrop-blur-xs border border-blue-100 rounded-2xl p-3.5 sm:p-4 text-slate-900 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0642be] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#0642be]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block leading-none">
                      {hero.badge2Title}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#071d49] block leading-tight mt-1">
                      {hero.badge2Sub}
                    </span>
                  </div>
                </div>

              </div>

              {/* NAV BAR: DEEP NAVY CAPSULE BAR (EXACT MATCH TO STUDENT VISA) */}
              <div className="mt-6">
                <div className="bg-[#061d4e] px-4 py-3 rounded-2xl flex items-center justify-around text-white font-bold text-xs sm:text-sm shadow-md">
                  
                  {/* Sub-Tab 1 */}
                  <button 
                    onClick={() => setActiveSectionTab('overview')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'overview' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-blue-300" />
                    <span>
                      {activeTab === 'business' && 'Purposes & Categories'}
                      {activeTab === 'evisa' && 'E-Visa Destinations'}
                      {activeTab === 'internship' && 'Hotel Training & Stipends'}
                      {activeTab === 'tourist' && 'Destinations & Packages'}
                    </span>
                  </button>

                  <div className="h-4 w-px bg-blue-400/40"></div>

                  {/* Sub-Tab 2 */}
                  <button 
                    onClick={() => setActiveSectionTab('requirements')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'requirements' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-blue-300" />
                    <span>Benefits & Timeline</span>
                  </button>

                  <div className="h-4 w-px bg-blue-400/40"></div>

                  {/* Sub-Tab 3 */}
                  <button 
                    onClick={() => setActiveSectionTab('checklist')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'checklist' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-blue-300" />
                    <span>Document Checklist</span>
                  </button>

                </div>
              </div>

            </div>
          </div>

          {/* =========================================================
              MODAL BODY CONTENT
              ========================================================= */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 bg-[#f8faff]">

            {/* TAB 1: OVERVIEW (Destinations / Purposes / Types) */}
            {activeSectionTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                {/* TOURIST TAB CONTENT */}
                {activeTab === 'tourist' && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-[#071330]">
                          Popular Tourist & Visit Destinations
                        </h3>
                        <p className="text-xs text-slate-500">
                          Select a country to personalize your consultation checklist
                        </p>
                      </div>
                      {selectedDestination && (
                        <button
                          onClick={() => setSelectedDestination('')}
                          className="text-xs text-blue-600 font-bold hover:underline"
                        >
                          Clear Selection
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {VISIT_DESTINATIONS.map((dest) => {
                        const isSelected = selectedDestination === dest.name;
                        return (
                          <div
                            key={dest.id}
                            onClick={() => setSelectedDestination(dest.name)}
                            className={`bg-white rounded-2xl border p-4 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between ${
                              isSelected
                                ? 'border-[#0642be] ring-2 ring-blue-500/30 bg-blue-50/30 -translate-y-1'
                                : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                          >
                            <div className="space-y-3">
                              <div className="h-32 rounded-xl overflow-hidden relative bg-slate-100">
                                <img 
                                  src={dest.image} 
                                  alt={dest.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px] font-black text-[#071d49] shadow-xs">
                                  {dest.time}
                                </div>
                                <div className="absolute bottom-2.5 left-2.5 bg-[#071330]/80 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5">
                                  <span className="text-sm">{dest.flag}</span>
                                  <span>{dest.name}</span>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-slate-500">{dest.popularFor}</h4>
                                <ul className="mt-2 space-y-1">
                                  {dest.features.map((f, i) => (
                                    <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0642be] flex-shrink-0" />
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                              <span className={isSelected ? 'text-[#0642be]' : 'text-slate-500'}>
                                {isSelected ? '✓ Selected Destination' : 'Click to Select'}
                              </span>
                              <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-[#0642be] translate-x-1' : 'text-slate-400'}`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* BUSINESS TAB CONTENT */}
                {activeTab === 'business' && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-[#071330]">
                          Common Business Visa Purposes
                        </h3>
                        <p className="text-xs text-slate-500">
                          Choose your travel objective to customize the corporate document checklist
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {BUSINESS_PURPOSES.map((purp) => {
                        const IconComponent = purp.icon;
                        const isSelected = selectedPurpose === purp.title;
                        return (
                          <div
                            key={purp.id}
                            onClick={() => setSelectedPurpose(purp.title)}
                            className={`bg-white rounded-2xl border p-4.5 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between ${
                              isSelected
                                ? 'border-[#0642be] ring-2 ring-blue-500/30 bg-blue-50/40 -translate-y-1'
                                : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition ${
                                  isSelected ? 'bg-[#0642be] text-white' : 'bg-blue-50 text-[#0642be]'
                                }`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-100 text-blue-900">
                                  {purp.badge}
                                </span>
                              </div>

                              <h4 className="text-sm font-extrabold text-[#071330] leading-snug">
                                {purp.title}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {purp.desc}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                              <span className={isSelected ? 'text-[#0642be]' : 'text-slate-500'}>
                                {isSelected ? '✓ Selected Purpose' : 'Select Purpose'}
                              </span>
                              <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-[#0642be] translate-x-1' : 'text-slate-400'}`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Key Business Destinations Tag Row */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#0642be]" />
                        <span>Select Target Country for Business Visa:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Dubai (UAE)', 'UK', 'Singapore', 'Malaysia', 'Vietnam', 'Thailand', 'Cyprus', 'Germany (Schengen)', 'USA (B1)', '🌍 Other Destination / Multiple Countries'].map((c, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedDestination(c)}
                            className={`text-xs px-3 py-1.5 rounded-xl border font-semibold transition ${
                              selectedDestination === c 
                                ? 'bg-[#0642be] text-white border-[#0642be] shadow-xs' 
                                : 'bg-slate-50 hover:bg-blue-50 text-slate-700 border-slate-200'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* E-VISA TAB CONTENT */}
                {activeTab === 'evisa' && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-[#071330]">
                          Electronic Visa (E-Visa) Countries
                        </h3>
                        <p className="text-xs text-slate-500">
                          100% online government application — issued via WhatsApp & Email
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {EVISA_DESTINATIONS.map((dest) => {
                        const isSelected = selectedDestination === dest.name;
                        return (
                          <div
                            key={dest.id}
                            onClick={() => setSelectedDestination(dest.name)}
                            className={`bg-white rounded-2xl border p-4 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between ${
                              isSelected
                                ? 'border-[#0642be] ring-2 ring-blue-500/30 bg-blue-50/30 -translate-y-1'
                                : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                          >
                            <div className="space-y-3">
                              <div className="h-32 rounded-xl overflow-hidden relative bg-slate-100">
                                <img 
                                  src={dest.image} 
                                  alt={dest.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white px-2 py-0.5 rounded-md text-[11px] font-black shadow-xs">
                                  {dest.time}
                                </div>
                                <div className="absolute bottom-2.5 left-2.5 bg-[#071330]/80 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5">
                                  <span className="text-sm">{dest.flag}</span>
                                  <span>{dest.name}</span>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-slate-500">{dest.popularFor}</h4>
                                <ul className="mt-2 space-y-1">
                                  {dest.features.map((f, i) => (
                                    <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                              <span className={isSelected ? 'text-[#0642be]' : 'text-slate-500'}>
                                {isSelected ? '✓ Selected E-Visa' : 'Apply for E-Visa'}
                              </span>
                              <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-[#0642be] translate-x-1' : 'text-slate-400'}`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* INTERNSHIP TAB CONTENT */}
                {activeTab === 'internship' && (
                  <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 sm:p-7 space-y-5">
                    <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                      <span>Taiwan 12-Month Paid Hospitality Internship</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      Earn USD 700 - USD 900 / Month at 5★ & 6★ Luxury Hotels in Taiwan
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Structured 1-year career advancement program with free luxury staff accommodation, daily duty meals, medical insurance coverage, and official graduation certificate.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div className="bg-white p-4 rounded-2xl border border-amber-200 text-center shadow-xs">
                        <span className="text-xs text-slate-500 font-bold block">Monthly Stipend</span>
                        <span className="text-lg font-black text-amber-700 block mt-0.5">USD 700 - 900</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-amber-200 text-center shadow-xs">
                        <span className="text-xs text-slate-500 font-bold block">Duration</span>
                        <span className="text-lg font-black text-slate-900 block mt-0.5">12 Months (1 Year)</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl border border-amber-200 text-center shadow-xs">
                        <span className="text-xs text-slate-500 font-bold block">Hotel Level</span>
                        <span className="text-lg font-black text-slate-900 block mt-0.5">5★ & 6★ Luxury</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* TAB 2: REQUIREMENTS & BENEFITS (4 Feature Benefit Cards Grid) */}
            {activeSectionTab === 'requirements' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0642be] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#071330]">Quick Processing</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Fast-tracked visa application management with priority submission channels and expedited government liaisons.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0642be] flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#071330]">Expert Assistance</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        End-to-end guidance from our senior visa consultants on cover letters, flight itineraries, and interview prep.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#071330]">High Success Rate</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Comprehensive pre-submission document audit to minimize refusal risks and guarantee high approval odds.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0642be] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#071330]">Transparent Fees</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        100% upfront clarity with zero hidden agency costs. Complete government breakdown and receipts provided.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Processing Timeline Card */}
                <div className="bg-white border border-blue-100 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
                  <h4 className="font-black text-sm sm:text-base text-[#071330] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0642be]" />
                    <span>Estimated Processing & Approval Durations:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-black text-slate-900 block">E-Visa / Electronic:</span>
                      <span className="text-emerald-700 font-extrabold block mt-0.5">24 - 72 Hours</span>
                      <span className="text-slate-500 text-[11px]">Dubai, Malaysia, Vietnam</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-black text-slate-900 block">Tourist / Visit Visa:</span>
                      <span className="text-[#0642be] font-extrabold block mt-0.5">3 - 10 Working Days</span>
                      <span className="text-slate-500 text-[11px]">Thailand, Singapore, Cyprus</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-black text-slate-900 block">Business & Embassy:</span>
                      <span className="text-slate-800 font-extrabold block mt-0.5">1 - 3 Weeks</span>
                      <span className="text-slate-500 text-[11px]">UK, Schengen, USA B1</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: CHECKLIST & MANDATORY DOCUMENTS */}
            {activeSectionTab === 'checklist' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
                  <h4 className="font-black text-[#071330] text-sm sm:text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Mandatory Document Checklist for Visa Filing</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Valid Original Passport</span>
                        <span className="text-slate-500 text-[11px]">Minimum 6 months validity from date of departure</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Flight Booking & Hotel Voucher</span>
                        <span className="text-slate-500 text-[11px]">Confirmed round-trip itinerary & proof of stay</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Financial Proof / Bank Statements</span>
                        <span className="text-slate-500 text-[11px]">Last 3 to 6 months stamped statements</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Passport Size Digital Photos</span>
                        <span className="text-slate-500 text-[11px]">White background (35mm x 45mm or 2x2 in)</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Invitation / Employment Letter</span>
                        <span className="text-slate-500 text-[11px]">Required for business visas & family visits</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-[#0642be] flex-shrink-0 mt-0.5 font-bold" />
                      <div>
                        <span className="font-bold text-slate-900 block">Travel Health Insurance</span>
                        <span className="text-slate-500 text-[11px]">Coverage for medical emergencies & COVID-19</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 flex items-center gap-3">
                  <Info className="w-5 h-5 text-[#0642be] flex-shrink-0" />
                  <p className="text-xs text-blue-900 leading-relaxed font-medium">
                    Noble Visa Centre provides complimentary pre-submission verification of all documents to prevent embassy rejections.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM ACTIVE SELECTION PILL (IF DESTINATION / PURPOSE CHOSEN) */}
        {/* ============================================================ */}
        {(selectedDestination || selectedPurpose) && (
          <div className="bg-[#071d49] text-white px-5 py-2 flex items-center justify-between text-xs z-30 border-t border-blue-900 animate-in fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold">Inquiry Target:</span>
              <span className="bg-blue-800 text-blue-100 font-extrabold px-2.5 py-0.5 rounded-md">
                {selectedDestination ? selectedDestination : selectedPurpose}
              </span>
            </div>
            <button 
              onClick={() => {
                setSelectedDestination('');
              }}
              className="text-blue-200 hover:text-white underline text-[11px]"
            >
              Reset Target
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* BOTTOM FULL-WIDTH GREEN WHATSAPP BANNER (MATCHING BUSINESS SCREENSHOT) */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#1b9a4c] via-[#22b258] to-[#178a42] text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 flex-shrink-0 shadow-lg border-t border-emerald-600">
          
          {/* Left Text with WhatsApp Icon */}
          <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base leading-tight">
                {activeTab === 'tourist' && 'Need help with a Visit Visa?'}
                {activeTab === 'business' && 'Planning a business trip abroad?'}
                {activeTab === 'evisa' && 'Need an urgent E-Visa in 24-48 hours?'}
                {activeTab === 'internship' && 'Ready for the Taiwan Luxury Hotel Internship?'}
              </h4>
              <p className="text-xs text-emerald-100 font-medium mt-0.5">
                Chat with our experts on WhatsApp for instant guidance & free assessment.
              </p>
            </div>
          </div>

          {/* Right Action Button (White pill button matching screenshot) */}
          <button
            onClick={() => handleWhatsAppAction()}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 hover:text-[#16a34a] px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-3 flex-shrink-0 group active:scale-95 cursor-pointer border border-emerald-100"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#16a34a] flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block font-black text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 leading-tight">
                Chat on WhatsApp
              </span>
              <span className="block text-[10px] text-slate-500 font-semibold leading-tight">
                Get Free Consultation
              </span>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
};
