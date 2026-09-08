import React, { useState } from 'react';
import { 
  Globe, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Award, 
  FileText, 
  MapPin, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  ArrowLeft,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Send
} from 'lucide-react';
import { COUNTRIES, VISA_SERVICES, OFFICE_BRANCHES, BUSINESS_PHONES, getWhatsAppUrl } from '../../data/visaData';
import { ALL_PROGRAMS, ALL_UNIVERSITIES } from '../../data/programsData';
import { NOBLE_LOGO_URL } from '../NobleLogo';

interface SitemapPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Primary navigation directory
  const mainPages = [
    { id: 'home', title: 'Home Page & Overview', description: 'Noble Visa Centre official welcome, core mission, trust pillars & live counters.', icon: Compass },
    { id: 'countries', title: 'Study Destinations & Visa Guide', description: 'Complete country dossiers, entry criteria, cost of living & document checklists.', icon: Globe },
    { id: 'universities', title: 'Partner Universities Directory', description: 'Accredited global state and private universities represented in Sri Lanka.', icon: Building2 },
    { id: 'programs', title: 'Degree & Course Finder', description: 'Medicine (MBBS), Software Engineering, AI, Business & Hospitality programs.', icon: BookOpen },
    { id: 'success-stories', title: 'Visa Grants & Success Stories', description: 'Verified student visa approvals, passport endorsements & real testimonials.', icon: Award },
    { id: 'consultation', title: 'Free Visa Assessment & Booking', description: 'Personalized evaluation with senior education advisors & WhatsApp booking.', icon: FileText }
  ];

  // Filter countries
  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.popularFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.highlight.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter programs
  const filteredPrograms = ALL_PROGRAMS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.universityName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f7faff] min-h-screen pb-24 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-blue-600 transition flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold">Visual Sitemap & Global Directory</span>
          </nav>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition border border-blue-200/80"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Raw XML Sitemap</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="bg-gradient-to-b from-[#071330] via-[#091a3e] to-[#0d2252] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 relative overflow-hidden">
        {/* Background glow & subtle pattern */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-cyan-300 text-xs font-bold tracking-wide">
            <Compass className="w-3.5 h-3.5" />
            <span>PLATFORM INDEX & SEARCH ENGINE DIRECTORY</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Noble Visa Centre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Complete Sitemap</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore every destination, accredited partner university, academic discipline, and visa pathway engineered across the Noble Visa Centre platform.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any country, university, degree (e.g., Russia MBBS, Malaysia, UK, Computer Science)..."
                className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/15 transition shadow-lg font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold px-1.5 py-0.5 rounded bg-white/10 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">

        {/* Section 1: Core Portal Hubs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                1
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Primary Portal Pages & Modules
                </h2>
                <p className="text-xs text-slate-500">Core functional pages of the web application</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
              6 Main Pages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/80 transition-all text-left flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-blue-700 transition">
                        {page.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Global Country Dossiers (20+ Countries) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                2
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Global Study Destinations & Visa Dossiers
                </h2>
                <p className="text-xs text-slate-500">Comprehensive requirements, cost breakdowns, and university fee disclosures</p>
              </div>
            </div>
            <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-100">
              {filteredCountries.length} Countries
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => onNavigate('countries', { country: country.id })}
                className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-blue-500 transition text-left flex items-center gap-2.5 group cursor-pointer"
              >
                <span className="text-xl flex-shrink-0">{country.flag || '🌍'}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition block truncate">
                    {country.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {country.popularFor}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        </div>

        {/* Section 3: Academic Programs & Degrees Directory */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                3
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Academic Faculties & Featured Degree Courses
                </h2>
                <p className="text-xs text-slate-500">Medical, Engineering, Computer Science, Business & Hospitality degrees</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1 cursor-pointer"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredPrograms.slice(0, 12).map((prog) => (
              <button
                key={prog.id}
                onClick={() => onNavigate('programs', { program: prog.id, country: prog.countryId })}
                className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-500 transition text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {prog.level}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">{prog.country}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
                  {prog.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {prog.universityName}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4: Visa Service Categories & Pathways */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                4
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Visa Categories & Processing Pathways
                </h2>
                <p className="text-xs text-slate-500">Student visas, visit visas, business visas, and dependent family processing</p>
              </div>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
              {VISA_SERVICES.length} Categories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {VISA_SERVICES.map((visa) => (
              <button
                key={visa.id}
                onClick={() => {
                  if (visa.id === 'student-visa') onNavigate('programs');
                  else onNavigate('countries', { visaType: visa.id.replace('-visa', '') });
                }}
                className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-purple-400 transition text-left flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-purple-700 transition">
                    {visa.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {visa.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section 5: Physical Branches, Contact Hotlines & Live Navigation */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                5
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Office Branches, GPS Navigation & Contact Directory
                </h2>
                <p className="text-xs text-slate-500">Colombo Head Office, Battaramulla Branch, and direct WhatsApp hotlines</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OFFICE_BRANCHES.map((office, idx) => (
              <div 
                key={idx}
                className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">{office.name}</h3>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">{office.tag}</span>
                    </div>
                  </div>

                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{office.address}</span>
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a 
                    href={`tel:${office.rawPhone}`} 
                    className="font-bold text-slate-800 hover:text-blue-600 transition flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>{office.phone}</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hello Noble Visa Centre ${office.name}! I would like to book a consultation.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg font-bold text-[11px] transition inline-flex items-center gap-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>WhatsApp Office</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

