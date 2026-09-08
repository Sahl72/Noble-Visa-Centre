import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  ChevronRight, 
  GraduationCap, 
  Building2, 
  Award, 
  Globe, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Filter, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  Loader2,
  Database
} from 'lucide-react';
import { ALL_UNIVERSITIES } from '../../data/programsData';
import { COUNTRIES, getWhatsAppUrl } from '../../data/visaData';
import { UniversityPartner, StudyLevel } from '../../types';
import { WhatsAppIcon } from '../Header';
import { searchHipoUniversities, HipoUniversity, getFlagCdnUrl } from '../../services/apiService';
import { UniversityLogo } from '../UniversityLogo';

const COUNTRY_ID_TO_GLOBAL_NAME: Record<string, string> = {
  all: 'all',
  malaysia: 'Malaysia',
  russia: 'Russian Federation',
  belarus: 'Belarus',
  dubai: 'United Arab Emirates',
  singapore: 'Singapore',
  switzerland: 'Switzerland',
  india: 'India',
  taiwan: 'Taiwan',
  cyprus: 'Cyprus',
  uk: 'United Kingdom',
  latvia: 'Latvia',
  canada: 'Canada',
  australia: 'Australia',
  germany: 'Germany',
  france: 'France',
  us: 'United States',
  japan: 'Japan',
  'new-zealand': 'New Zealand',
  turkey: 'Turkey',
  italy: 'Italy'
};

const GLOBAL_NAME_TO_COUNTRY_ID: Record<string, string> = {
  all: 'all',
  'Malaysia': 'malaysia',
  'Russian Federation': 'russia',
  'Russia': 'russia',
  'Belarus': 'belarus',
  'United Arab Emirates': 'dubai',
  'Dubai': 'dubai',
  'Singapore': 'singapore',
  'Switzerland': 'switzerland',
  'India': 'india',
  'Taiwan': 'taiwan',
  'Cyprus': 'cyprus',
  'Latvia': 'latvia',
  'United Kingdom': 'uk',
  'Canada': 'canada',
  'Australia': 'australia',
  'Germany': 'germany',
  'France': 'france',
  'United States': 'us',
  'Japan': 'japan',
  'New Zealand': 'new-zealand',
  'Turkey': 'turkey',
  'Italy': 'italy'
};

interface UniversitiesPageProps {
  initialCountryId?: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenConsultation: (params?: Record<string, string>) => void;
  onViewUniversityModal?: (uni: UniversityPartner) => void;
}

export const UniversitiesPage: React.FC<UniversitiesPageProps> = ({
  initialCountryId,
  onNavigate,
  onOpenConsultation,
  onViewUniversityModal
}) => {
  const [activeTab, setActiveTab] = useState<'partners' | 'global'>('partners');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountryId || 'all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [selectedPartnerType, setSelectedPartnerType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Hipo Universities API state - initialized with initialCountryId if present
  const initialGlobalCountry = initialCountryId 
    ? (COUNTRY_ID_TO_GLOBAL_NAME[initialCountryId.toLowerCase()] || 'all')
    : 'all';

  const [hipoResults, setHipoResults] = useState<HipoUniversity[]>([]);
  const [hipoLoading, setHipoLoading] = useState(false);
  const [hipoCountry, setHipoCountry] = useState<string>(initialGlobalCountry);
  const [hipoSearchQuery, setHipoSearchQuery] = useState<string>('');

  // Update selection if initialCountryId changes from external props
  useEffect(() => {
    if (initialCountryId) {
      setSelectedCountry(initialCountryId);
      const gName = COUNTRY_ID_TO_GLOBAL_NAME[initialCountryId.toLowerCase()] || 'all';
      setHipoCountry(gName);
    }
  }, [initialCountryId]);

  // Tab switcher with country state synchronization
  const handleSwitchTab = (tab: 'partners' | 'global') => {
    setActiveTab(tab);
    if (tab === 'global' && selectedCountry !== 'all') {
      const matchingGlobal = COUNTRY_ID_TO_GLOBAL_NAME[selectedCountry.toLowerCase()];
      if (matchingGlobal) {
        setHipoCountry(matchingGlobal);
      }
    } else if (tab === 'partners' && hipoCountry !== 'all') {
      const matchingId = GLOBAL_NAME_TO_COUNTRY_ID[hipoCountry];
      if (matchingId) {
        setSelectedCountry(matchingId);
      }
    }
  };

  // Synchronized Country Selection Handlers
  const handlePartnerCountryChange = (countryId: string) => {
    setSelectedCountry(countryId);
    const correspondingGlobal = COUNTRY_ID_TO_GLOBAL_NAME[countryId.toLowerCase()] || (countryId === 'all' ? 'all' : countryId);
    setHipoCountry(correspondingGlobal);
  };

  const handleGlobalCountryChange = (globalCountryName: string) => {
    setHipoCountry(globalCountryName);
    const correspondingId = GLOBAL_NAME_TO_COUNTRY_ID[globalCountryName] || (globalCountryName === 'all' ? 'all' : 'all');
    setSelectedCountry(correspondingId);
  };

  // Fetch from Hipo University API on query or country change
  useEffect(() => {
    let isCancelled = false;
    const fetchHipo = async () => {
      const queryToUse = activeTab === 'global' ? hipoSearchQuery : searchQuery;
      const countryToUse = activeTab === 'global' ? hipoCountry : (selectedCountry !== 'all' ? (COUNTRY_ID_TO_GLOBAL_NAME[selectedCountry] || selectedCountry) : '');

      setHipoLoading(true);
      try {
        const results = await searchHipoUniversities({
          name: queryToUse.trim(),
          country: countryToUse !== 'all' ? countryToUse : '',
          limit: 60
        });
        if (!isCancelled) {
          setHipoResults(results);
        }
      } catch (err) {
        if (!isCancelled) setHipoResults([]);
      } finally {
        if (!isCancelled) setHipoLoading(false);
      }
    };

    const timer = setTimeout(fetchHipo, 200);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchQuery, selectedCountry, hipoSearchQuery, hipoCountry, activeTab]);

  const currentCountryObj = useMemo(() => {
    if (selectedCountry === 'all') return null;
    return COUNTRIES.find(c => c.id === selectedCountry) || null;
  }, [selectedCountry]);

  const filteredUniversities = useMemo(() => {
    return ALL_UNIVERSITIES.filter(uni => {
      // Country Filter
      if (selectedCountry !== 'all' && uni.countryId !== selectedCountry) {
        return false;
      }

      // Study Level Filter
      if (selectedLevel !== 'all') {
        if (!uni.studyLevels || !uni.studyLevels.includes(selectedLevel)) {
          return false;
        }
      }

      // Field of Study Filter
      if (selectedField !== 'all') {
        if (!uni.fields || !uni.fields.includes(selectedField)) {
          return false;
        }
      }

      // Partner Type Filter
      if (selectedPartnerType !== 'all') {
        if (selectedPartnerType === 'official-manager' && uni.partnerType !== 'official-manager') {
          return false;
        }
        if (selectedPartnerType === 'partner' && !['official-manager', 'official-partner', 'country-representative'].includes(uni.partnerType || '')) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = uni.name.toLowerCase().includes(q) ||
          uni.location.toLowerCase().includes(q) ||
          uni.country.toLowerCase().includes(q) ||
          (uni.officialRole && uni.officialRole.toLowerCase().includes(q)) ||
          (uni.highlights && uni.highlights.some(h => h.toLowerCase().includes(q)));
        if (!match) return false;
      }

      return true;
    });
  }, [selectedCountry, selectedLevel, selectedField, selectedPartnerType, searchQuery]);

  const handleViewPrograms = (uni: UniversityPartner) => {
    onNavigate('programs', {
      country: uni.countryId,
      university: uni.id
    });
  };

  const handleWhatsAppCounselor = (uniName?: string, countryName?: string) => {
    let msg = `Hi Noble Visa Centre, I would like admission and visa guidance for ${uniName || 'a university abroad'}.`;
    if (countryName) {
      msg += `\n🌍 Destination: ${countryName}`;
    }
    msg += `\nPlease guide me regarding available intakes, entry requirements, tuition fees, and visa processing.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-[#f7faff] min-h-screen pb-20 font-sans">
      
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-4 px-4 sm:px-6 lg:px-8">
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
            {currentCountryObj && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <button
                  onClick={() => onNavigate('countries', { country: currentCountryObj.id })}
                  className="hover:text-blue-600 transition cursor-pointer"
                >
                  {currentCountryObj.name}
                </button>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-900 font-bold">Universities</span>
          </nav>

          <button
            onClick={() => onOpenConsultation(currentCountryObj ? { country: currentCountryObj.name } : undefined)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Need Help Choosing? Chat on WhatsApp</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Page Title Header with Live API Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-blue-800 text-[11px] font-bold tracking-wider uppercase mb-1">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Partners & Live Global University Database (Hipo API)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#071946] tracking-tight">
              {currentCountryObj ? `Universities in ${currentCountryObj.name}` : 'Find Your University'}
            </h1>
            <p className="text-sm text-slate-600 mt-1 font-medium max-w-2xl">
              Explore Noble's official partner campuses, direct university representations, or search higher education institutions globally with direct WhatsApp admission counseling.
            </p>
          </div>

          {/* Tab Switcher: Partners vs Global Database */}
          <div className="flex bg-slate-200/80 p-1 rounded-xl flex-shrink-0">
            <button
              onClick={() => handleSwitchTab('partners')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'partners'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Noble Partner Campuses ({ALL_UNIVERSITIES.length})</span>
            </button>
            <button
              onClick={() => handleSwitchTab('global')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'global'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Global Database Search (Hipo API)</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: NOBLE PARTNER CAMPUSES */}
        {activeTab === 'partners' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Filter Controls Bar */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
              
              {/* Top Search Input */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by university name, city, program keyword (e.g., Moscow Linguistic, Amirta, BHMS, Fin Win, MBBS)..."
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

              {/* 4 Responsive Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                
                {/* 1. Country Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Destination Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => handlePartnerCountryChange(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  >
                    <option value="all">🌍 All Countries ({ALL_UNIVERSITIES.length})</option>
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
                    <option value="latvia">🇱🇻 Latvia (Schengen)</option>
                  </select>
                </div>

                {/* 2. Study Level Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Study Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  >
                    <option value="all">🎓 All Study Levels</option>
                    <option value="Foundation">Foundation (O/L Entry)</option>
                    <option value="Diploma">Diploma / Certificate</option>
                    <option value="Bachelor's">Bachelor's Degree (4-Yr)</option>
                    <option value="Master's">Master's / MBA (1-2 Yr)</option>
                    <option value="MBBS">MBBS (Medical Degree)</option>
                    <option value="Other">Paid Internship / Training</option>
                  </select>
                </div>

                {/* 3. Field of Study Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Field of Study
                  </label>
                  <select
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  >
                    <option value="all">📚 All Fields</option>
                    <option value="Medicine & Healthcare">Medicine & Healthcare (MBBS/Nursing)</option>
                    <option value="IT & Computer Science">IT & Computer Science / AI</option>
                    <option value="Business & Management">Business & Management / MBA</option>
                    <option value="Hospitality & Tourism">Hospitality & Tourism / Internships</option>
                    <option value="Languages & Education">Languages & Education / Linguistics</option>
                    <option value="Logistics & Transport">Logistics & Transport Management</option>
                    <option value="Engineering & Logistics">Engineering & Aviation</option>
                  </select>
                </div>

                {/* 4. Partner Status Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Partner Representation
                  </label>
                  <select
                    value={selectedPartnerType}
                    onChange={(e) => setSelectedPartnerType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  >
                    <option value="all">🏛️ All Institutions</option>
                    <option value="official-manager">Official Country Manager Only</option>
                    <option value="partner">Partner & Representative Only</option>
                  </select>
                </div>

              </div>

              {/* Quick Partner Type Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 mr-1">Quick Filters:</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'partner', label: 'Partner Universities' },
                  { id: 'official-manager', label: 'Official Country Manager' },
                  { id: 'direct-pay', label: 'Direct University Payment' }
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => {
                      if (pill.id === 'direct-pay') {
                        setSelectedCountry('russia');
                      } else {
                        setSelectedPartnerType(pill.id);
                      }
                    }}
                    className={`text-xs font-bold px-3 py-1 rounded-full transition cursor-pointer ${
                      (pill.id === 'direct-pay' && selectedCountry === 'russia') ||
                      (pill.id !== 'direct-pay' && selectedPartnerType === pill.id)
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Main 2-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: University Cards List */}
              <div className="lg:col-span-8 space-y-4">
                
                {filteredUniversities.length === 0 ? (
                  <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-4">
                    <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-800">No partner universities match your filters</h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Try adjusting your search criteria, or switch to the <strong>Global Database Search</strong> tab to search thousands of universities worldwide via the Hipo API.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCountry('all');
                        setSelectedLevel('all');
                        setSelectedField('all');
                        setSelectedPartnerType('all');
                        setSearchQuery('');
                      }}
                      className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                    >
                      Reset all filters
                    </button>
                  </div>
                ) : (
                  filteredUniversities.map((uni) => (
                    <div 
                      key={uni.id}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <UniversityLogo
                            id={uni.id}
                            name={uni.name}
                            country={uni.country}
                            size="md"
                            layout="badge"
                          />
                          
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                                {uni.country}
                              </span>
                              {uni.partnerType === 'official-manager' && (
                                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                                  <Award className="w-3 h-3 text-amber-600" />
                                  <span>Official Country Manager</span>
                                </span>
                              )}
                              {uni.directTuitionPayment && (
                                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                  Direct Tuition Pay
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                              {uni.name}
                            </h3>
                            
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span>{uni.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-auto">
                          <button
                            onClick={() => handleViewPrograms(uni)}
                            className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
                          >
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>View Programs</span>
                          </button>

                          <button
                            onClick={() => handleWhatsAppCounselor(uni.name, uni.country)}
                            className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold p-2.5 rounded-xl transition cursor-pointer shadow-xs"
                            title="Chat on WhatsApp"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Highlights */}
                      {uni.highlights && uni.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {uni.highlights.map((hl, idx) => (
                            <span 
                              key={idx}
                              className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/80 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Study Levels Pill Badges */}
                      {uni.studyLevels && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                          <span className="font-semibold text-slate-700">Available Degrees:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {uni.studyLevels.map((lvl, idx) => (
                              <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                                {lvl}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}

              </div>

              {/* Right Column: Sticky Consultation Box */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className="bg-gradient-to-br from-[#071946] to-blue-900 rounded-3xl p-6 text-white shadow-xl space-y-5">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-300" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white">
                      Direct University Admissions
                    </h3>
                    <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                      Noble Visa Centre acts as official Country Manager & direct representative. Pay tuition directly to the institution abroad with zero hidden agency costs.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-blue-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Official offer letters & visa invitation support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Zero local fee payment required for select partner nations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>100% pre-screened visa documents & travel endorsement</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultation ? onOpenConsultation() : handleWhatsAppCounselor()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-3 rounded-xl shadow-md transition cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Speak with an Admissions Officer</span>
                  </button>
                </div>

                {/* Explore Global API banner */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Searching for a specific global college?</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Search over 10,000 universities worldwide across the USA, UK, Canada, Australia, Europe, and Asia.
                  </p>
                  <button
                    onClick={() => setActiveTab('global')}
                    className="w-full text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 py-2 rounded-xl border border-blue-200 transition cursor-pointer"
                  >
                    Switch to Global University Search →
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: GLOBAL UNIVERSITY DATABASE (HIPO API) */}
        {activeTab === 'global' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Global Search Controls */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                
                {/* University Name Search */}
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by University name (e.g. Oxford, Cambridge, Moscow, Harvard, Toronto, Melbourne, Tokyo)..."
                    value={hipoSearchQuery}
                    onChange={(e) => setHipoSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                  {hipoSearchQuery && (
                    <button
                      onClick={() => setHipoSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Country Filter for Hipo */}
                <div className="w-full sm:w-64">
                  <select
                    value={hipoCountry}
                    onChange={(e) => handleGlobalCountryChange(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
                  >
                    <option value="all">🌍 All Global Countries</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Russian Federation">🇷🇺 Russian Federation</option>
                    <option value="Belarus">🇧🇾 Belarus</option>
                    <option value="Singapore">🇸🇬 Singapore</option>
                    <option value="Switzerland">🇨🇭 Switzerland</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="India">🇮🇳 India</option>
                    <option value="Cyprus">🇨🇾 Cyprus</option>
                    <option value="Latvia">🇱🇻 Latvia</option>
                    <option value="Taiwan">🇹🇼 Taiwan</option>
                    <option value="Turkey">🇹🇷 Turkey</option>
                    <option value="Japan">🇯🇵 Japan</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="Italy">🇮🇹 Italy</option>
                  </select>
                </div>

              </div>

              {/* Popular Search Shortcuts */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-semibold mr-1">Popular:</span>
                {[
                  { label: '🇲🇾 Malaysia Campuses', country: 'Malaysia', q: '' },
                  { label: '🇬🇧 UK Universities', country: 'United Kingdom', q: '' },
                  { label: '🇷🇺 Russian State Universities', country: 'Russian Federation', q: '' },
                  { label: '🇸🇬 Singapore Institutes', country: 'Singapore', q: '' },
                  { label: '🇨🇦 Canada Top Colleges', country: 'Canada', q: '' },
                  { label: '🇦🇺 Australia Universities', country: 'Australia', q: '' },
                  { label: '🇩🇪 Germany Tech Unis', country: 'Germany', q: 'Technology' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      handleGlobalCountryChange(item.country);
                      setHipoSearchQuery(item.q);
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-[11px] font-medium transition cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Results Count & Status */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <div className="flex items-center gap-2">
                {hipoLoading ? (
                  <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Searching global universities database...
                  </span>
                ) : (
                  <span>
                    Found <strong className="text-slate-900">{hipoResults.length}</strong> universities matching query
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">
                Powered by Hipo University Domains API
              </span>
            </div>

            {/* Hipo Results Grid */}
            {hipoResults.length === 0 && !hipoLoading ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
                <Globe className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">No universities found for this query</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try searching a different university name (e.g. "College", "Technology", "State", "Medical") or select a specific country above.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hipoResults.map((uni, idx) => {
                  const flagUrl = getFlagCdnUrl(uni.alpha_two_code, 80);
                  const domain = uni.domains?.[0] || '';

                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        {/* Country Flag & Code */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-700">
                            {flagUrl ? (
                              <img 
                                src={flagUrl} 
                                alt={uni.country} 
                                className="w-4 h-3 rounded-[2px] object-cover border border-slate-200" 
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <span>🌐</span>
                            )}
                            <span>{uni.country}</span>
                          </div>

                          {uni['state-province'] && (
                            <span className="text-[11px] text-slate-500 font-medium truncate max-w-[120px]">
                              {uni['state-province']}
                            </span>
                          )}
                        </div>

                        {/* University Emblem + Name */}
                        <div className="flex items-start gap-3">
                          <UniversityLogo
                            name={uni.name}
                            country={uni.country}
                            size="sm"
                            layout="badge"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                              {uni.name}
                            </h4>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-slate-500">
                              {uni.city && (
                                <span className="font-medium text-slate-600">
                                  {uni.city}
                                </span>
                              )}
                              {domain && (
                                <span className="text-blue-700 bg-blue-50/80 px-1.5 py-0.5 rounded font-mono font-semibold truncate max-w-[170px]">
                                  {domain}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Popular study fields if present */}
                        {uni.popularFields && uni.popularFields.length > 0 && (
                          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                            {uni.popularFields.slice(0, 3).map((f, fIdx) => (
                              <span key={fIdx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                                {f}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action buttons: Green WhatsApp Button */}
                      <div className="pt-3 border-t border-slate-100">
                        <button
                          onClick={() => handleWhatsAppCounselor(uni.name, uni.country)}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white text-xs sm:text-sm font-extrabold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white flex-shrink-0" />
                          <span>Inquire Admission on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};

