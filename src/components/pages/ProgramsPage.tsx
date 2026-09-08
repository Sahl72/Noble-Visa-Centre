import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronRight, 
  Clock, 
  Calendar, 
  FileCheck2, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Filter, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  BookOpen
} from 'lucide-react';
import { ALL_PROGRAMS, ALL_UNIVERSITIES } from '../../data/programsData';
import { COUNTRIES, getWhatsAppUrl } from '../../data/visaData';
import { ProgramItem, UniversityPartner, StudyLevel } from '../../types';
import { WhatsAppIcon } from '../Header';
import { UniversityLogo } from '../UniversityLogo';

interface ProgramsPageProps {
  initialCountryId?: string;
  initialUniversityId?: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenConsultation: (params?: Record<string, string>) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  initialCountryId,
  initialUniversityId,
  onNavigate,
  onOpenConsultation
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>(initialCountryId || 'all');
  const [selectedUniId, setSelectedUniId] = useState<string>(initialUniversityId || 'all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);

  // Derive active University object if filtered
  const activeUniversity = useMemo(() => {
    if (selectedUniId === 'all') return null;
    return ALL_UNIVERSITIES.find(u => u.id === selectedUniId) || null;
  }, [selectedUniId]);

  const activeCountry = useMemo(() => {
    if (selectedCountryId === 'all') return null;
    return COUNTRIES.find(c => c.id === selectedCountryId) || null;
  }, [selectedCountryId]);

  // Filter Programs
  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS.filter(prog => {
      // Country Filter
      if (selectedCountryId !== 'all' && prog.countryId !== selectedCountryId) {
        return false;
      }

      // University Filter
      if (selectedUniId !== 'all' && prog.universityId !== selectedUniId) {
        return false;
      }

      // Level Filter
      if (selectedLevel !== 'all' && prog.level !== selectedLevel) {
        return false;
      }

      // Field Filter
      if (selectedField !== 'all' && prog.field !== selectedField) {
        return false;
      }

      // Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = prog.name.toLowerCase().includes(q) ||
          prog.universityName.toLowerCase().includes(q) ||
          prog.country.toLowerCase().includes(q) ||
          prog.field.toLowerCase().includes(q) ||
          (prog.overview && prog.overview.toLowerCase().includes(q));
        if (!match) return false;
      }

      return true;
    });
  }, [selectedCountryId, selectedUniId, selectedLevel, selectedField, searchQuery]);

  const handleWhatsAppGeneralProgram = () => {
    const text = activeUniversity
      ? `Hi Noble Visa Centre, I would like admission details and eligibility checking for programs at ${activeUniversity.name} (${activeUniversity.country}).`
      : activeCountry
      ? `Hi Noble Visa Centre, I would like to explore academic programs in ${activeCountry.name}.`
      : `Hi Noble Visa Centre, I would like guidance on choosing the best study abroad program for my profile.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handleProgramConsultation = (prog: ProgramItem) => {
    onOpenConsultation({
      destination: prog.country,
      program: prog.name,
      university: prog.universityName,
      interest: 'Study Abroad Program Admission'
    });
  };

  const toggleExpandProgram = (progId: string) => {
    setExpandedProgramId(prev => prev === progId ? null : progId);
  };

  return (
    <div className="bg-[#f7faff] min-h-screen pb-20 font-sans">
      
      {/* Top Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={() => onNavigate('countries')} 
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Countries
            </button>
            {activeCountry && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <button
                  onClick={() => onNavigate('countries', { country: activeCountry.id })}
                  className="hover:text-blue-600 transition cursor-pointer"
                >
                  {activeCountry.name}
                </button>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={() => onNavigate('universities', activeCountry ? { country: activeCountry.id } : undefined)} 
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Universities
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-900 font-bold">Programs</span>
          </nav>

          <button
            onClick={handleWhatsAppGeneralProgram}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Need Program Advice? Chat on WhatsApp</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* Selected University Spotlight Banner (if active) */}
        {activeUniversity ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <UniversityLogo
                  id={activeUniversity.id}
                  name={activeUniversity.name}
                  country={activeUniversity.country}
                  size="lg"
                  layout="badge"
                />

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#071946] tracking-tight">
                      {activeUniversity.name}
                    </h1>
                    {activeUniversity.officialRole && (
                      <span className="text-xs font-extrabold bg-blue-100 text-blue-900 px-3 py-0.5 rounded-full border border-blue-200">
                        {activeUniversity.officialRole}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{activeUniversity.location}</span>
                    <span>•</span>
                    <span className="text-blue-700 font-semibold">{activeUniversity.intake || 'Fall & Spring Semester Intakes'}</span>
                  </div>

                  {activeUniversity.overview && (
                    <p className="text-xs sm:text-sm text-slate-600 pt-1 max-w-3xl leading-relaxed">
                      {activeUniversity.overview}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons for University Banner */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto flex-shrink-0">
                {activeUniversity.directPayment && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Direct Fee Payment Available*</span>
                  </div>
                )}
                <button
                  onClick={() => {
                    setSelectedUniId('all');
                    setSelectedCountryId('all');
                  }}
                  className="text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition text-center cursor-pointer"
                >
                  View All Universities
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* General Page Header if no single university is selected */
          <div className="text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              PROGRAM DISCOVERY
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#071946] tracking-tight mt-1">
              Explore Academic Programs
            </h1>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Discover accredited undergraduate, postgraduate, medical, and professional diplomas worldwide with direct payment assurance.
            </p>
          </div>
        )}

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search programs (e.g. MBBS, Computer Science, Logistics, Hospitality, Economics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Level Filter Chips */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Filter by Study Level:
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Levels' },
                { id: "Bachelor's", label: "Bachelor's Degrees" },
                { id: 'MBBS', label: 'MBBS (Medicine)' },
                { id: 'Diploma', label: 'Diplomas & Fast-Track' },
                { id: "Master's", label: "Master's & MBA" },
                { id: 'Foundation', label: 'Foundation' },
                { id: 'Other', label: 'Paid Internships' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                    selectedLevel === lvl.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters Dropdown Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
            
            {/* Field Dropdown */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Field of Study
              </label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition cursor-pointer"
              >
                <option value="all">📚 All Fields ({ALL_PROGRAMS.length} Programs)</option>
                <option value="Medicine & Healthcare">Medicine & Healthcare</option>
                <option value="IT & Computer Science">IT & Computer Science</option>
                <option value="Business & Management">Business & Management</option>
                <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                <option value="Languages & Education">Languages & Education</option>
                <option value="Logistics & Transport">Logistics & Transport</option>
                <option value="Engineering & Logistics">Engineering & Aviation</option>
              </select>
            </div>

            {/* University Dropdown */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Filter by University
              </label>
              <select
                value={selectedUniId}
                onChange={(e) => setSelectedUniId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition cursor-pointer"
              >
                <option value="all">🏛️ All Universities</option>
                {ALL_UNIVERSITIES.map(u => (
                  <option key={u.id} value={u.id}>
                    {u.name} ({u.country})
                  </option>
                ))}
              </select>
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Filter by Country
              </label>
              <select
                value={selectedCountryId}
                onChange={(e) => setSelectedCountryId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition cursor-pointer"
              >
                <option value="all">🌍 All Countries</option>
                <option value="russia">🇷🇺 Russia</option>
                <option value="belarus">🇧🇾 Belarus</option>
                <option value="dubai">🇦🇪 Dubai (UAE)</option>
                <option value="malaysia">🇲🇾 Malaysia</option>
                <option value="singapore">🇸🇬 Singapore</option>
                <option value="switzerland">🇨🇭 Switzerland</option>
                <option value="india">🇮🇳 India</option>
                <option value="taiwan">🇹🇼 Taiwan</option>
                <option value="cyprus">🇨🇾 Cyprus</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="latvia">🇱🇻 Latvia</option>
              </select>
            </div>

          </div>

        </div>

        {/* Program Cards Grid with Inline Expansion (Zero Pop-ups) */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-4">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">
              No programs found matching your selected filters
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Try choosing "All Levels" or clearing your search keywords, or speak directly with an admissions advisor.
            </p>
            <button
              onClick={() => {
                setSelectedCountryId('all');
                setSelectedUniId('all');
                setSelectedLevel('all');
                setSelectedField('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-xl transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {filteredPrograms.map((prog) => {
              const isExpanded = expandedProgramId === prog.id;

              return (
                <div
                  key={prog.id}
                  id={`prog-card-${prog.id}`}
                  className={`bg-white rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isExpanded 
                      ? 'border-blue-600 shadow-xl ring-2 ring-blue-500/20 md:col-span-2 lg:col-span-3' 
                      : 'border-slate-200/90 hover:border-blue-400 hover:shadow-lg'
                  }`}
                >
                  <div>
                    
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                        {prog.level}
                      </span>
                      {prog.directPayment && (
                        <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>Direct Payment*</span>
                        </span>
                      )}
                    </div>

                    {/* Program Title */}
                    <h3 className="text-base font-black text-slate-900 hover:text-blue-700 transition-colors">
                      {prog.name}
                    </h3>

                    {/* University & Location */}
                    <div className="flex items-center gap-2 mt-2">
                      <UniversityLogo
                        id={prog.universityId}
                        name={prog.universityName}
                        country={prog.country}
                        size="xs"
                        layout="badge"
                      />
                      <div className="min-w-0">
                        <div className="text-xs text-slate-800 font-bold truncate">
                          {prog.universityName}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                          <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          <span>{prog.country}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-xl p-2.5 my-3 border border-slate-100 text-center">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Duration</span>
                        <span className="text-xs font-bold text-slate-800">{prog.duration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Intake</span>
                        <span className="text-xs font-bold text-slate-800">{prog.intake}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">IELTS</span>
                        <span className="text-xs font-bold text-emerald-700">{prog.ielts}</span>
                      </div>
                    </div>

                    {/* Overview snippet (if collapsed) */}
                    {!isExpanded && (
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3 font-normal">
                        {prog.overview}
                      </p>
                    )}

                    {/* ══════════════════════════════════════════════════════════════
                        INLINE EXPANDED SECTION (ZERO MODAL POPUP)
                        ══════════════════════════════════════════════════════════════ */}
                    {isExpanded && (
                      <div className="pt-4 mt-3 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                        
                        {/* Full Overview */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                            Program Overview & Academic Scope
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {prog.overview}
                          </p>
                        </div>

                        {/* Split Details: Entry Requirements & Required Documents */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Requirements */}
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                            <h5 className="text-xs font-extrabold uppercase tracking-wide text-blue-900 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                              <span>Entry & Admission Criteria</span>
                            </h5>
                            <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Minimum G.C.E. A/L or equivalent passed subjects</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>English Proficiency: {prog.ielts}</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Direct credit transfer / recognition available</span>
                              </li>
                            </ul>
                          </div>

                          {/* Documents Checklist */}
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                            <h5 className="text-xs font-extrabold uppercase tracking-wide text-blue-900 flex items-center gap-1.5">
                              <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                              <span>Mandatory Admission Documents</span>
                            </h5>
                            <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Passport bio-data copy with minimum 1-year validity</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>O/L & A/L Academic transcripts with English translation</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Birth certificate & passport-sized photographs</span>
                              </li>
                            </ul>
                          </div>

                        </div>

                        {/* Tuition & Direct Payment Guarantee (Russia, Malaysia, Singapore) */}
                        {prog.directPayment && (
                          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                              <span className="font-bold text-emerald-900">
                                Direct In-Hand University Payment on Arrival
                              </span>
                            </div>
                            <span className="text-emerald-800 font-semibold hidden sm:inline">
                              Zero university fees in Sri Lanka • No middlemen
                            </span>
                          </div>
                        )}

                        {/* Direct Action Hub inside Expanded Card */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                          <button
                            onClick={() => handleProgramConsultation(prog)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-md transition cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Book Free Consultation for this Course</span>
                          </button>

                          <button
                            onClick={() => {
                              const text = `Hi Noble Visa Centre, I would like to apply for ${prog.name} at ${prog.universityName} (${prog.country}). Please guide me on next steps.`;
                              window.open(getWhatsAppUrl(text), '_blank');
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                            <span>WhatsApp Inquire</span>
                          </button>
                        </div>

                      </div>
                    )}

                  </div>

                  {/* Card Action Buttons Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                    <button
                      onClick={() => toggleExpandProgram(prog.id)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl transition cursor-pointer ${
                        isExpanded
                          ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                          : 'bg-blue-900 hover:bg-blue-800 text-white shadow-2xs'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide Program Details' : 'View Program Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => {
                        const text = `Hi Noble Visa Centre, I am interested in ${prog.name} at ${prog.universityName} (${prog.country}). Please provide more details.`;
                        window.open(getWhatsAppUrl(text), '_blank');
                      }}
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition cursor-pointer"
                      title="Quick Inquire on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Help Banner */}
        <div className="bg-gradient-to-r from-[#071946] to-blue-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black">
              Not sure which program is right for you?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Tell us about your previous education and career goals. We'll evaluate your profile and help you choose the best fit.
            </p>
          </div>

          <button
            onClick={handleWhatsAppGeneralProgram}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>Get Free Consultation</span>
          </button>
        </div>

      </div>

    </div>
  );
};
