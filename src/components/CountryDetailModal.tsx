import React, { useState } from 'react';
import { 
  X, Check, MapPin, GraduationCap, Building, ArrowRight, ShieldCheck, 
  Clock, Calendar, FileText, DollarSign, Award, Sparkles, CheckCircle2, 
  ChevronRight, BookOpen, Stethoscope, Briefcase, UserCheck, CheckCircle,
  Globe, Users
} from 'lucide-react';
import { Country } from '../types';
import { WhatsAppIcon } from './Header';
import { getWhatsAppUrl, COUNTRIES } from '../data/visaData';
import { UniversityLogo } from './UniversityLogo';

interface CountryDetailModalProps {
  country: Country | null;
  onClose: () => void;
  onBookConsultation: (countryName: string) => void;
  onSelectAnotherCountry?: (country: Country) => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  onClose,
  onBookConsultation,
  onSelectAnotherCountry
}) => {
  const [selectedProgramOrCourse, setSelectedProgramOrCourse] = useState<string>('');
  const [activeSectionTab, setActiveSectionTab] = useState<'programs' | 'requirements' | 'checklist'>('programs');

  // Reset selected program when country changes
  React.useEffect(() => {
    setSelectedProgramOrCourse('');
  }, [country?.id]);

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!country) return null;

  const handleSelectCourse = (courseName: string) => {
    if (selectedProgramOrCourse === courseName) {
      setSelectedProgramOrCourse('');
    } else {
      setSelectedProgramOrCourse(courseName);
    }
  };

  const handleWhatsAppAction = () => {
    let msg = "";
    if (selectedProgramOrCourse) {
      msg = `Hello Noble Visa Centre! I would like to apply and inquire for *${selectedProgramOrCourse}* in *${country.name}* (${country.intake || 'Upcoming Intakes'}). Please guide me on admissions, document evaluation, and direct university fee payments.`;
    } else {
      msg = `Hello Noble Visa Centre! I would like to book a free consultation for studying in *${country.name}* (${country.intake || 'Upcoming Intakes'}).`;
    }
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const handleSwitchCountry = (c: Country) => {
    setSelectedProgramOrCourse('');
    if (onSelectAnotherCountry) {
      onSelectAnotherCountry(c);
    }
  };

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
        
        {/* Prominent High-Visibility Close Button */}
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
              PROPER TOP HERO HEADER (MATCHING EXACT SCREENSHOT STYLE)
              ========================================================= */}
          <div className="relative bg-white overflow-hidden border-b border-slate-200">
            
            {/* Background Landmark Image aligned to right with daylight brightness */}
            <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[62%] z-0 pointer-events-none overflow-hidden">
              <img 
                src={country.image} 
                alt={country.name}
                className="w-full h-full object-cover object-center sm:object-right-top"
                referrerPolicy="no-referrer"
              />
              {/* Refined gradient mask to seamlessly blend into pure white on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/35 sm:to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent sm:hidden"></div>
            </div>

            {/* Header Content Wrapper */}
            <div className="relative z-10 p-6 sm:p-8 sm:pr-16">
              
              {/* Quick Destination Switcher Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-2 pr-16 no-scrollbar">
                <span className="text-[10px] font-extrabold text-[#0a193b] uppercase tracking-wider mr-1 flex-shrink-0 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Destinations
                </span>
                {COUNTRIES.filter(c => c.id !== 'other-destination').slice(0, 7).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSwitchCountry(c)}
                    className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                      country.id === c.id
                        ? 'bg-[#0642be] text-white shadow-md font-black ring-2 ring-blue-300'
                        : 'bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-2xs'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
                {/* Dedicated Other / Haven't Decided Option */}
                {(() => {
                  const otherDest = COUNTRIES.find(c => c.id === 'other-destination');
                  if (!otherDest) return null;
                  return (
                    <button
                      onClick={() => handleSwitchCountry(otherDest)}
                      className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1.5 flex-shrink-0 ${
                        country.id === 'other-destination'
                          ? 'bg-emerald-600 text-white shadow-md font-black ring-2 ring-emerald-300'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-2xs'
                      }`}
                    >
                      <span>🌍</span>
                      <span>Other / Haven't Decided</span>
                    </button>
                  );
                })()}
              </div>

              {/* Title Section (Exact match to screenshot) */}
              <div className="max-w-md space-y-3.5">
                
                {/* Flag + "Study in" */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-sm border-2 border-white ring-1 ring-slate-200/80 flex-shrink-0 flex items-center justify-center bg-slate-50">
                    {country.flagUrl ? (
                      <img 
                        src={country.flagUrl} 
                        alt={`${country.name} flag`} 
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-base">{country.flag}</span>
                    )}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#071a47] tracking-tight">
                    {country.id === 'other-destination' ? 'Explore Global Pathways' : 'Study in'}
                  </span>
                </div>

                {/* Massive Bold Country Name */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#061845] tracking-tight leading-none">
                  {country.id === 'other-destination' ? "Other / Undecided" : country.name}
                </h2>

                {/* Metadata Line: Capital & Processing Duration */}
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0c317c] pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#0642be] fill-[#0642be]/20" />
                    <span>{country.id === 'other-destination' ? 'Coverage: 50+ Countries' : `Capital: ${country.capital}`}</span>
                  </span>
                  <span className="text-slate-300 font-light text-base">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0642be]" />
                    <span>{country.processingTime || '45 Days'}</span>
                  </span>
                </div>

                {/* Card 1: Intake Available Badge (Vibrant Cobalt Blue Box) */}
                <div className="bg-[#0642be] hover:bg-[#0538a3] transition rounded-2xl p-3.5 sm:p-4 text-white flex items-center gap-3.5 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-black text-white block leading-tight">
                      {country.intake || 'Fall & Spring'}
                    </span>
                    <span className="text-xs font-semibold text-blue-100 block leading-tight mt-0.5">
                      Intake Available
                    </span>
                  </div>
                </div>

                {/* Card 2: Official Authority Badge (Clean White Box with Soft Border) */}
                <div className="bg-white/95 backdrop-blur-xs border border-blue-100 rounded-2xl p-3.5 sm:p-4 text-slate-900 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0642be] flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-[#0642be]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block leading-none">
                      {country.id === 'other-destination' ? 'Counseling Advantage' : 'Official Country Manager for'}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#071d49] block leading-tight mt-1">
                      {country.officialRole || 'Moscow Linguistic & Pushkin Universities'}
                    </span>
                  </div>
                </div>

              </div>

              {/* NAV BAR: DEEP NAVY CAPSULE BAR (EXACT MATCH TO SCREENSHOT) */}
              <div className="mt-6">
                <div className="bg-[#061d4e] px-4 py-3 rounded-2xl flex items-center justify-around text-white font-bold text-xs sm:text-sm shadow-md">
                  
                  {/* Tab 1: Courses & Programs */}
                  <button 
                    onClick={() => setActiveSectionTab('programs')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'programs' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-blue-300" />
                    <span>Courses & Programs</span>
                  </button>

                  <div className="h-4 w-px bg-blue-400/40"></div>

                  {/* Tab 2: Requirements & Benefits */}
                  <button 
                    onClick={() => setActiveSectionTab('requirements')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'requirements' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-blue-300" />
                    <span>Requirements & Benefits</span>
                  </button>

                  <div className="h-4 w-px bg-blue-400/40"></div>

                  {/* Tab 3: Checklist & Visas */}
                  <button 
                    onClick={() => setActiveSectionTab('checklist')}
                    className={`flex items-center gap-2 transition px-3 py-1.5 rounded-xl ${
                      activeSectionTab === 'checklist' 
                        ? 'text-white font-black bg-white/15 ring-1 ring-white/30' 
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-blue-300" />
                    <span>Checklist & Visas</span>
                  </button>

                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              MAIN CONTENT BODY (COURSES, REQUIREMENTS, INSTITUTIONS)
              ========================================================= */}
          <div className="p-4 sm:p-8 space-y-8 bg-slate-50/50">
            
            {/* KEY HIGHLIGHT CONTAINER WITH 3 STAT BADGES */}
            <div className="bg-white border border-blue-200/80 rounded-3xl p-5 sm:p-6 shadow-xs">
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0642be] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0642be] block">
                    Key Highlight
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#071d49] leading-tight">
                    {country.popularFor || 'Medical & Engineering Studies'}
                  </h3>
                </div>
              </div>

              {/* 3 Stat Badges Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                
                {/* 1. Direct In-Hand University Tuition Payment (Russia, Malaysia, Singapore) OR Recognized Global Institution (Others) */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071d49] text-white flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      {country.directPayment ? 'Direct In-Hand' : 'Accredited Global'}
                    </span>
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      {country.directPayment ? 'Tuition Payment' : 'University Degree'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      {country.directPayment ? `Pay at ${country.name} Campus` : 'Worldwide Recognition'}
                    </span>
                  </div>
                </div>

                {/* 2. Without IELTS */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0642be] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white font-bold" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      Without IELTS
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      English Medium Waiver Available
                    </span>
                  </div>
                </div>

                {/* 3. Up to Age 30 */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a2560] text-white flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      Up to Age 30
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      Flexible Entry Criteria
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* SECTION: AVAILABLE PROGRAMS & QUALIFICATIONS */}
            <div className="space-y-4">
              
              {/* Section Header with Horizontal Accent Lines */}
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="h-px bg-slate-300 flex-1 max-w-[120px]"></div>
                <h3 className="text-lg sm:text-xl font-black text-[#071d49] text-center tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#0642be]" />
                  <span>Available Programs & Qualifications</span>
                </h3>
                <div className="h-px bg-slate-300 flex-1 max-w-[120px]"></div>
              </div>

              <p className="text-center text-xs text-slate-500 font-medium max-w-xl mx-auto -mt-2 mb-4">
                👉 <strong>Click any program or specific course below</strong> to select it and immediately chat on WhatsApp with pre-filled details.
              </p>

              {/* 4-Card Programs Grid */}
              {country.programs && country.programs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {country.programs.map((prog, idx) => {
                    const isCategorySelected = selectedProgramOrCourse === prog.category;
                    
                    let IconComponent = GraduationCap;
                    let iconBg = "bg-blue-50 text-[#0642be]";
                    let durationPill = "bg-blue-100/80 text-blue-900 border border-blue-200/60";
                    
                    if (prog.category.toLowerCase().includes('bachelor') || prog.category.toLowerCase().includes('degree')) {
                      iconBg = "bg-purple-50 text-purple-700";
                      durationPill = "bg-purple-100/80 text-purple-900 border border-purple-200/60";
                    } else if (prog.category.toLowerCase().includes('m.b.b.s') || prog.category.toLowerCase().includes('med')) {
                      IconComponent = Stethoscope;
                      iconBg = "bg-emerald-50 text-emerald-700";
                      durationPill = "bg-emerald-100/80 text-emerald-900 border border-emerald-200/60";
                    } else if (prog.category.toLowerCase().includes('master')) {
                      iconBg = "bg-amber-50 text-amber-700";
                      durationPill = "bg-amber-100/80 text-amber-900 border border-amber-200/60";
                    }

                    return (
                      <div
                        key={idx}
                        className={`rounded-3xl p-5 border-2 transition-all duration-200 flex flex-col justify-between text-left relative group ${
                          isCategorySelected
                            ? 'border-[#0642be] bg-blue-50/70 shadow-lg ring-2 ring-blue-400/20'
                            : 'border-slate-200 hover:border-blue-300 bg-white hover:bg-slate-50/50 shadow-2xs'
                        }`}
                      >
                        <div>
                          
                          {/* Center Icon */}
                          <div className="flex justify-center mb-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xs ${iconBg}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                          </div>

                          {/* Category Title */}
                          <h4 
                            onClick={() => handleSelectCourse(prog.category)}
                            className="text-center font-extrabold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-[#0642be] leading-snug"
                          >
                            {prog.category}
                          </h4>

                          {/* Duration Pill */}
                          {prog.duration && (
                            <div className="flex justify-center mt-2 mb-3">
                              <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${durationPill}`}>
                                Duration: {prog.duration}
                              </span>
                            </div>
                          )}

                          {/* Programs List */}
                          <ul className="space-y-2 mt-3 pt-3 border-t border-slate-100">
                            {prog.items.map((item, itemIdx) => {
                              const isItemChosen = selectedProgramOrCourse === item;
                              return (
                                <li 
                                  key={itemIdx}
                                  onClick={() => handleSelectCourse(item)}
                                  className={`p-2 rounded-xl text-xs transition cursor-pointer flex items-start gap-2 ${
                                    isItemChosen
                                      ? 'bg-[#0642be] text-white font-bold shadow-2xs'
                                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-900'
                                  }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                                    isItemChosen ? 'bg-white' : 'bg-[#0642be]'
                                  }`}></span>
                                  <span className="leading-snug">{item}</span>
                                  {isItemChosen && (
                                    <CheckCircle className="w-3.5 h-3.5 text-white ml-auto flex-shrink-0" />
                                  )}
                                </li>
                              );
                            })}
                          </ul>

                        </div>

                        {/* Select Category Button */}
                        <div className="pt-4 mt-3 border-t border-slate-100">
                          <button
                            onClick={() => handleSelectCourse(prog.category)}
                            className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                              isCategorySelected
                                ? 'bg-[#0642be] text-white'
                                : 'bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-900'
                            }`}
                          >
                            <span>{isCategorySelected ? 'Selected' : 'Select Category'}</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center text-slate-600 text-xs">
                  Comprehensive study options and customized pathways available for {country.name}. Contact our admissions desk for complete syllabus details.
                </div>
              )}

            </div>

            {/* SECTION: OFFICIAL PARTNER INSTITUTIONS */}
            <div className="space-y-4">
              
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="h-px bg-slate-300 flex-1 max-w-[120px]"></div>
                <h4 className="text-base sm:text-lg font-black text-[#071d49] text-center tracking-tight flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#0642be]" />
                  <span>Official Partner Institutions</span>
                </h4>
                <div className="h-px bg-slate-300 flex-1 max-w-[120px]"></div>
              </div>

              {country.partnerUniversities && country.partnerUniversities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {country.partnerUniversities.map((uni, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleSelectCourse(uni)}
                      className="bg-white border-2 border-slate-200 hover:border-[#0642be] rounded-2xl p-4 text-center cursor-pointer transition shadow-2xs hover:shadow-md flex flex-col items-center justify-center space-y-2 group"
                    >
                      <UniversityLogo
                        name={uni}
                        country={country.name}
                        size="md"
                        layout="tile"
                      />
                      {uni.toLowerCase().includes('official') && (
                        <span className="text-[10px] font-extrabold text-[#0642be] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                          Official Representation
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div 
                    onClick={() => handleSelectCourse('OMNIS International University')}
                    className="bg-white border-2 border-slate-200 hover:border-[#0642be] rounded-2xl p-4 text-center cursor-pointer transition shadow-2xs hover:shadow-md flex flex-col items-center justify-center space-y-2"
                  >
                    <UniversityLogo name="OMNIS International University" country={country.name} size="md" layout="tile" />
                  </div>
                  <div 
                    onClick={() => handleSelectCourse('Moscow Linguistic University')}
                    className="bg-white border-2 border-slate-200 hover:border-[#0642be] rounded-2xl p-4 text-center cursor-pointer transition shadow-2xs hover:shadow-md flex flex-col items-center justify-center space-y-2"
                  >
                    <UniversityLogo name="Moscow Linguistic University" country="Russia" size="md" layout="tile" />
                    <span className="text-[10px] text-[#0642be] font-bold">(Official Country Manager)</span>
                  </div>
                  <div 
                    onClick={() => handleSelectCourse('Moscow Pushkin University')}
                    className="bg-white border-2 border-slate-200 hover:border-[#0642be] rounded-2xl p-4 text-center cursor-pointer transition shadow-2xs hover:shadow-md flex flex-col items-center justify-center space-y-2"
                  >
                    <UniversityLogo name="Moscow Pushkin University" country="Russia" size="md" layout="tile" />
                    <span className="text-[10px] text-[#0642be] font-bold">(Official Country Manager)</span>
                  </div>
                </div>
              )}

            </div>

            {/* SECTION: REQUIREMENTS & BENEFITS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xs">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Eligibility Criteria & Student Benefits in {country.name}</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Entry Requirements */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#0642be]">
                    Entry Requirements:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {country.entryRequirements?.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                        <span>{req}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Minimum 12th Pass / School Leaving Certificate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Age Limit: Up to 30 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Without IELTS Requirement</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-700">
                    Student Advantages & Security:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {country.keyBenefits?.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                        <span>{ben}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Direct university tuition payments in host country</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>Part-time work permitted for international students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>High quality hostel accommodation with 24/7 security</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

              </div>
            </div>

            {/* SECTION: MANDATORY DOCUMENTS CHECKLIST */}
            {country.mandatoryDocuments && country.mandatoryDocuments.length > 0 && (
              <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-5 sm:p-6 space-y-3">
                <h4 className="font-extrabold text-amber-950 text-sm sm:text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-700" />
                  <span>Mandatory Documents for Visa Processing</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {country.mandatoryDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-200/60">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* BOTTOM ACTIVE SELECTION PILL (IF COURSE SELECTED) */}
        {selectedProgramOrCourse && (
          <div className="bg-[#071d49] text-white px-5 py-2 flex items-center justify-between text-xs z-30 border-t border-blue-900 animate-in fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold">Selected Program:</span>
              <span className="bg-blue-800 text-blue-100 font-extrabold px-2.5 py-0.5 rounded-md">
                {selectedProgramOrCourse}
              </span>
            </div>
            <button 
              onClick={() => setSelectedProgramOrCourse('')}
              className="text-blue-200 hover:text-white underline text-[11px]"
            >
              Clear Selection
            </button>
          </div>
        )}

        {/* BOTTOM FULL-WIDTH GREEN WHATSAPP BANNER (MATCHING BUSINESS POSTER) */}
        <div className="bg-gradient-to-r from-[#1b9a4c] via-[#22b258] to-[#178a42] text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 flex-shrink-0 shadow-lg border-t border-emerald-600 z-30">
          
          {/* Left Text with WhatsApp Icon */}
          <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base leading-tight">
                {selectedProgramOrCourse 
                  ? `Inquiring for ${selectedProgramOrCourse} in ${country.name}?`
                  : `Planning to study in ${country.name}?`
                }
              </h4>
              <p className="text-xs text-emerald-100 font-medium mt-0.5">
                Chat with our senior education counselor on WhatsApp for free admission guidance.
              </p>
            </div>
          </div>

          {/* Right Action Button (White pill button matching screenshot) */}
          <button
            onClick={handleWhatsAppAction}
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
                {selectedProgramOrCourse ? 'Inquire Now' : 'Get Free Consultation'}
              </span>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
};
