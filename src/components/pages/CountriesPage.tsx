import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  ArrowRight,
  ArrowLeft, 
  ChevronRight, 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Users, 
  Building2, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  FileCheck2,
  Calendar,
  CreditCard,
  Building,
  Award,
  Filter,
  Globe,
  Compass,
  Landmark,
  SlidersHorizontal,
  RotateCcw,
  Check,
  Loader2
} from 'lucide-react';
import { COUNTRIES, getWhatsAppUrl } from '../../data/visaData';
import { ALL_EXPANDED_COUNTRIES } from '../../data/worldCountries';
import { Country, VisaService } from '../../types';
import { WhatsAppIcon } from '../Header';
import { searchRestCountries, RestCountry, getFlagCdnUrl } from '../../services/apiService';

// Comprehensive base countries list combining official partner destinations and expanded world destinations
const BASE_WORLD_COUNTRIES: Country[] = (() => {
  const existingNames = new Set(COUNTRIES.map(c => c.name.toLowerCase()));
  const extra = ALL_EXPANDED_COUNTRIES.filter(c => !existingNames.has(c.name.toLowerCase()));
  return [...COUNTRIES, ...extra];
})();

interface CountriesPageProps {
  initialCountry?: string;
  initialVisaType?: string;
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  onOpenConsultation?: (params?: Record<string, string>) => void;
  onSelectCountryAndType?: (countryId: string, visaType: string) => void;
}

export const CountriesPage: React.FC<CountriesPageProps> = ({
  initialCountry,
  initialVisaType,
  onNavigate,
  onOpenConsultation,
  onSelectCountryAndType
}) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(initialCountry || null);
  const [selectedVisaType, setSelectedVisaType] = useState<string>(initialVisaType || 'student');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filterDirectPay, setFilterDirectPay] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<'overview' | 'documents' | 'process'>('overview');
  
  // Dynamic API Countries
  const [apiCountries, setApiCountries] = useState<Country[]>([]);
  const [isSearchingApi, setIsSearchingApi] = useState<boolean>(false);

  // Fetch from global REST Countries API when user searches
  useEffect(() => {
    let isCancelled = false;
    const query = searchQuery.trim();

    if (!query) {
      setApiCountries([]);
      setIsSearchingApi(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingApi(true);
      try {
        const results = await searchRestCountries(query);
        if (isCancelled) return;

        // Transform REST Country into Country model for seamless UI rendering
        const converted: Country[] = results.map((rc: RestCountry) => {
          const commonName = rc.name.common;
          const flagPng = rc.flags?.png || getFlagCdnUrl(rc.cca2);
          const capital = rc.capital?.[0] || 'Major City';
          const region = rc.region || 'International';
          const subregion = rc.subregion || region;

          // Default landmark images based on region
          const regionalImages: Record<string, string> = {
            'Europe': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80',
            'Asia': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
            'Americas': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=80',
            'Africa': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&auto=format&fit=crop&q=80',
            'Oceania': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80'
          };
          const fallbackImg = regionalImages[region] || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80';

          return {
            id: rc.cca2.toLowerCase(),
            name: commonName,
            flag: '🌍',
            flagUrl: flagPng,
            image: fallbackImg,
            capital: capital,
            visaTypes: ['student', 'tourist', 'business', 'visit'],
            popularFor: `${subregion} Destination • Capital: ${capital}`,
            highlight: `Comprehensive student, tourist, business, and visit visa services available for ${commonName} with Noble Visa Centre.`,
            badge: `${rc.cca2} • ${region}`,
            intake: 'Upcoming Semester Intakes',
            currency: rc.currencies ? Object.values(rc.currencies)[0]?.name : 'Local Currency',
            directPayment: false,
            programsCount: 'Custom Admissions',
            visas: {
              student: {
                available: true,
                processingTime: '3 - 6 Weeks',
                successRate: '98%',
                directTuitionPay: false,
                workRights: 'Subject to local immigration guidelines',
                overview: `Study in ${commonName}. Noble Visa Centre provides end-to-end guidance from university admissions, document apostille, bank statements, to embassy interview preparation.`,
                documents: [
                  'Valid International Passport (min. 18 months validity)',
                  'Original Educational Certificates & Transcripts',
                  'Official University Offer Letter / Acceptance',
                  'Proof of Financial Means / Bank Statement',
                  'Passport Sized Photographs (White Background)',
                  'Medical Fitness & Health Clearance'
                ],
                requirements: [
                  'Academic eligibility for chosen study program',
                  'Adequate proof of funds for tuition and living costs',
                  'Clear criminal record & medical fitness'
                ],
                benefits: [
                  'Complete admissions assistance',
                  'Step-by-step visa file compilation',
                  'Pre-departure and flight booking guidance'
                ]
              },
              tourist: {
                available: true,
                processingTime: '10 - 20 Days',
                successRate: '98%',
                overview: `Travel and explore ${commonName} with confidence. We assist with tourist visa application dossiers, flight itineraries, hotel bookings, and travel insurance.`,
                documents: [
                  'Valid International Passport (min. 6 months validity)',
                  'Completed Visa Application Form',
                  'Proof of Accommodation / Hotel Confirmation',
                  'Return Flight Reservation',
                  'Bank Statement (Last 3-6 Months)',
                  'Travel Insurance Policy'
                ],
                requirements: [
                  'Genuine intent to visit as a tourist',
                  'Sufficient financial support for duration of stay',
                  'Ties to home country'
                ],
                benefits: [
                  'Error-free application submission',
                  'Compliant travel insurance and itinerary',
                  'Fast track tracking'
                ]
              },
              business: {
                available: true,
                processingTime: '2 - 4 Weeks',
                successRate: '98%',
                overview: `Attend conferences, corporate meetings, trade fairs, or business negotiations in ${commonName} with official visa documentation support.`,
                documents: [
                  'Valid Passport',
                  'Official Business Invitation Letter from host organization in ' + commonName,
                  'Company Introduction Letter / Deputation Letter',
                  'Proof of Business Registration & Tax Returns',
                  'Recent Bank Statements',
                  'Conference / Event Registration if applicable'
                ],
                requirements: [
                  'Valid host company registration in destination country',
                  'Clear business purpose and schedule'
                ],
                benefits: [
                  'Official business file compilation',
                  'VIP appointment scheduling assistance'
                ]
              },
              visit: {
                available: true,
                processingTime: '2 - 4 Weeks',
                successRate: '98%',
                overview: `Visit family members, relatives, or friends residing in ${commonName} with structured sponsorship and invitation support.`,
                documents: [
                  'Valid Passport',
                  'Formal Invitation Letter from host/relative',
                  'Copy of Host’s Residence Permit / Citizenship & ID',
                  'Proof of Relationship (if applicable)',
                  'Host Accommodation & Financial Proof (or applicant’s funds)',
                  'Travel Insurance'
                ],
                requirements: [
                  'Verified relationship/invitation from host',
                  'Valid legal status of host in ' + commonName
                ],
                benefits: [
                  'Invitation letter formatting review',
                  'High visa approval compliance check'
                ]
              }
            }
          };
        });

        // Filter out items that are already in the main COUNTRIES list to avoid duplicates
        const existingIds = new Set(COUNTRIES.map(c => c.name.toLowerCase()));
        const uniqueNew = converted.filter(c => !existingIds.has(c.name.toLowerCase()));

        setApiCountries(uniqueNew);
      } catch (err) {
        console.warn('REST Countries search error:', err);
      } finally {
        if (!isCancelled) setIsSearchingApi(false);
      }
    }, 250);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Keep state in sync with prop changes
  useEffect(() => {
    if (initialCountry) {
      setSelectedCountryId(initialCountry);
    }
  }, [initialCountry]);

  useEffect(() => {
    if (initialVisaType) {
      setSelectedVisaType(initialVisaType);
    }
  }, [initialVisaType]);

  const selectedCountry = useMemo(() => {
    if (!selectedCountryId) return null;
    return BASE_WORLD_COUNTRIES.find(c => c.id === selectedCountryId || c.name.toLowerCase() === selectedCountryId.toLowerCase()) || 
           apiCountries.find(c => c.id === selectedCountryId || c.name.toLowerCase() === selectedCountryId.toLowerCase()) || 
           null;
  }, [selectedCountryId, apiCountries]);

  const filteredCountries = useMemo(() => {
    // Combine base world destinations with any extra dynamically fetched API countries
    const existingNames = new Set(BASE_WORLD_COUNTRIES.map(c => c.name.toLowerCase()));
    const freshApi = apiCountries.filter(c => !existingNames.has(c.name.toLowerCase()));
    const combined = [...BASE_WORLD_COUNTRIES, ...freshApi];

    const q = searchQuery.trim().toLowerCase();

    return combined.filter(c => {
      // Hide 'other-destination' card if filtering or searching
      if (c.id === 'other-destination' && (selectedRegion !== 'all' || q)) {
        return false;
      }
      if (filterDirectPay && !c.directPayment) {
        return false;
      }

      // Search matching across name, capital, popularFor, highlight, badge, visa types
      if (q) {
        const matchesSearch = 
          c.name.toLowerCase().includes(q) ||
          (c.capital && c.capital.toLowerCase().includes(q)) ||
          c.popularFor.toLowerCase().includes(q) ||
          c.highlight.toLowerCase().includes(q) ||
          (c.badge && c.badge.toLowerCase().includes(q));
        
        if (!matchesSearch) return false;
      }

      if (selectedRegion === 'all') return true;

      const badgeLower = (c.badge || '').toLowerCase();
      const popLower = (c.popularFor || '').toLowerCase();
      const idLower = c.id.toLowerCase();

      if (selectedRegion === 'europe') {
        return badgeLower.includes('europe') || 
               popLower.includes('schengen') || 
               popLower.includes('europe') ||
               ['russia', 'belarus', 'cyprus', 'latvia', 'switzerland', 'uk', 'malta', 'germany', 'france', 'italy', 'spain', 'netherlands', 'sweden', 'norway', 'finland', 'denmark', 'poland', 'austria', 'belgium', 'ireland', 'portugal', 'hungary', 'czech-republic', 'greece', 'romania', 'georgia', 'turkey', 'de', 'fr', 'it', 'es', 'nl', 'se', 'no', 'fi', 'dk', 'pl', 'at', 'be', 'ch', 'ie', 'pt', 'hu', 'cz', 'gr', 'ro', 'ge', 'tr'].includes(idLower);
      }

      if (selectedRegion === 'asia') {
        return badgeLower.includes('asia') || 
               popLower.includes('asia') ||
               ['malaysia', 'singapore', 'taiwan', 'india', 'thailand', 'vietnam', 'japan', 'south-korea', 'china', 'indonesia', 'philippines', 'maldives', 'my', 'sg', 'jp', 'kr', 'cn', 'tw', 'in', 'th', 'vn', 'id', 'ph', 'mv'].includes(idLower);
      }

      if (selectedRegion === 'middle-east') {
        return badgeLower.includes('middle east') || 
               popLower.includes('middle east') ||
               popLower.includes('arabian') ||
               ['dubai', 'ae', 'sa', 'qa', 'om', 'bh', 'kw', 'saudi-arabia', 'qatar', 'oman', 'kuwait', 'bahrain'].includes(idLower);
      }

      if (selectedRegion === 'global') {
        return badgeLower.includes('americas') || 
               badgeLower.includes('oceania') || 
               badgeLower.includes('africa') ||
               ['canada', 'new-zealand', 'mauritius', 'uk', 'us', 'au', 'united-states', 'australia', 'brazil', 'mexico', 'argentina', 'south-africa', 'egypt', 'ca', 'us', 'br', 'mx', 'ar', 'au', 'nz', 'mu', 'za', 'eg'].includes(idLower);
      }

      return true;
    });
  }, [searchQuery, selectedRegion, filterDirectPay, apiCountries]);

  const handleSelectCountryCard = (c: Country) => {
    if (c.id === 'other-destination') {
      if (onOpenConsultation) {
        onOpenConsultation({ destination: 'Other / Haven\'t Decided', interest: 'Study Abroad & Visa' });
      }
      return;
    }
    setSelectedCountryId(c.id);
    setSelectedVisaType('student');
    setActiveInfoTab('overview');

    // Update URL hash state
    const currentHash = window.location.hash.split('?')[0] || '#/countries';
    window.history.pushState(null, '', `${currentHash}?country=${c.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToAllCountries = () => {
    setSelectedCountryId(null);
    window.history.pushState(null, '', '#/countries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppInquiry = (visaLabel: string) => {
    const text = selectedCountry
      ? `Hello Noble Visa Centre! I would like a free visa consultation and next steps regarding the ${visaLabel} for ${selectedCountry.name}. Please guide me on the document checklist and application process.`
      : `Hello Noble Visa Centre! I would like to book a free consultation for visa & university options.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  // Detailed visa specifications and document checklists for inline rendering
  const getVisaDossier = (visaKey: string, country: Country) => {
    switch (visaKey) {
      case 'tourist':
        return {
          title: 'Tourist & Visitor Visa',
          subtitle: `Leisure travel, vacation, and short holiday visits to ${country.name}`,
          icon: Plane,
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
          processingTime: country.processingTime || '7 - 14 Working Days',
          validity: '30 to 90 Days (Single/Multiple Entry)',
          overview: `Comprehensive visa application handling for tourism, leisure, family visits, and sightseeing in ${country.name}. Noble Visa Centre assists with official application drafting, hotel booking vouchers, travel insurance coverage, and embassy interview preparation.`,
          guarantees: [
            'End-to-end documentation audit prior to embassy submission',
            'Confirmed itinerary and verified hotel reservation support',
            'Travel insurance and flight itinerary coordination',
            'Direct appointment slot booking with embassy/VFS biometric centers'
          ],
          documents: [
            'Original Passport with minimum 6 months validity & 2 blank pages',
            '2 Recent Passport-size photos (white background, 35mm x 45mm, matte finish)',
            'Bank Statements for the last 3-6 months with bank seal & signature',
            'Proof of Employment / Business Registration (BR) or Leave Letter',
            'Round-trip flight reservation and hotel accommodation vouchers',
            'Detailed day-to-day travel itinerary and cover letter drafted by Noble'
          ],
          steps: [
            { step: '1', title: 'Profile Evaluation', desc: 'Our senior visa officers evaluate your travel history, financial ties, and purpose.' },
            { step: '2', title: 'Dossier & Forms Preparation', desc: 'We complete official embassy forms and assemble all verified supporting paperwork.' },
            { step: '3', title: 'Biometrics & Submission', desc: 'We book your appointment slot and guide you for biometric fingerprinting.' },
            { step: '4', title: 'Visa Grant & Collection', desc: 'Track passport processing status in real-time until visa collection.' }
          ]
        };

      case 'business':
        return {
          title: 'Business & Commercial Visa',
          subtitle: `Trade meetings, conferences, exhibitions, and corporate visits to ${country.name}`,
          icon: Briefcase,
          badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          processingTime: '5 - 12 Working Days',
          validity: '30 Days to 1 Year (Single/Multiple Entry)',
          overview: `For entrepreneurs, executives, and business delegations visiting ${country.name} to attend trade fairs, sign contracts, meet prospective clients, or explore investment avenues.`,
          guarantees: [
            'Verification of official host invitation letters',
            'Company registration (BR) translation and attestation guidance',
            'Expedited commercial appointment slots where available',
            'Professional commercial cover letter compilation'
          ],
          documents: [
            'Original Passport valid for at least 6 months beyond travel dates',
            'Official Invitation Letter from the host company/organization in destination country',
            'Formal Introduction Letter from applicant’s Sri Lankan employer/business',
            'Company Registration certificate (BR) & Form 20/Form 1 (if company director)',
            'Company & Personal Bank Statements for the last 6 months',
            'Event/Conference registration confirmation (if attending an expo or conference)'
          ],
          steps: [
            { step: '1', title: 'Invitation Verification', desc: 'Review host invitation validity and corporate credentials.' },
            { step: '2', title: 'Corporate Filing', desc: 'Draft comprehensive corporate travel letters and financial documentation.' },
            { step: '3', title: 'Embassy Submission', desc: 'Coordinate priority commercial submission and interview guidelines.' },
            { step: '4', title: 'Visa Stamping', desc: 'Collect your business visa stamped passport ready for corporate departure.' }
          ]
        };

      case 'family':
        return {
          title: 'Family & Dependent Visa',
          subtitle: `Joining spouse, parents, children, or immediate relatives in ${country.name}`,
          icon: Users,
          badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
          processingTime: '14 - 30 Working Days',
          validity: 'Long-term / Co-terminus with Sponsor',
          overview: `Family reunion and dependent permits for spouses, minor children, and immediate family members joining resident permit holders, workers, or students in ${country.name}.`,
          guarantees: [
            'Official relationship document verification (Marriage & Birth certificates)',
            'Consular and Ministry of Foreign Affairs (MFA) attestation assistance',
            'Sponsor accommodation and financial maintenance compliance review',
            'Dependents medical check-up guidance'
          ],
          documents: [
            'Original Passport of the applicant and copy of sponsor’s resident visa/passport',
            'Original Marriage Certificate & English translation (MFA attested) for spouse',
            'Original Birth Certificate & English translation (MFA attested) for children',
            'Sponsor’s proof of residence (tenancy agreement, utility bills)',
            'Sponsor’s salary slips, bank statements, and employment contract',
            'Sponsorship declaration letter'
          ],
          steps: [
            { step: '1', title: 'Document Attestation', desc: 'Ensure all certificates are translated and attested by the Ministry of Foreign Affairs.' },
            { step: '2', title: 'Sponsorship Audit', desc: 'Verify sponsor accommodation and income threshold compliance.' },
            { step: '3', title: 'Embassy Filing', desc: 'Submit dependent dossier with embassy and schedule biometrics.' },
            { step: '4', title: 'Family Reunion', desc: 'Receive entry clearance permits and departure guidance.' }
          ]
        };

      case 'employment':
        return {
          title: 'Employment Visa, Work Permits & Paid Internships',
          subtitle: `Work permits, overseas paid internships (Taiwan 5★ hotels, Swiss hospitality), and job endorsements for ${country.name}`,
          icon: Building2,
          badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
          processingTime: '20 - 45 Working Days',
          validity: '1 to 2 Years Renewable Work Permit / 12-Month Internship Pass',
          overview: `Comprehensive immigration & documentation support for overseas job offers, approved work permits, and structured paid internship programs in ${country.name}. Covers Taiwan 12-Month Paid Luxury Hotel Internships (USD 700 - USD 900 monthly stipend with meals & accommodation), Swiss B.H.M.S. hospitality training, direct corporate work endorsements, and Ministry of Foreign Affairs (MFA) document legalizations.`,
          guarantees: [
            'Overseas paid hospitality internship placements (Taiwan 5★/6★ Hotels & Swiss hospitality)',
            'Employment contract and host country ministry quota verification',
            'Consular legalization and Foreign Ministry (MFA) attestation coordination',
            'Sri Lanka Police Clearance Certificate (PCC) assistance & authorized medical appointments',
            'Post-study graduate work visa transition guidance'
          ],
          documents: [
            'Original Passport with minimum 1-year validity',
            'Signed Employment Contract / Official Internship Training Agreement / Ministry Quota Approval',
            'Educational & Professional Certificates attested by Ministry of Foreign Affairs (MFA)',
            'Police Clearance Certificate (PCC) issued by Sri Lanka Police HQ',
            'Medical Fitness Report from authorized panel physician',
            'Detailed CV / Resume & Passport-size photographs'
          ],
          steps: [
            { step: '1', title: 'Opportunity & Quota Verification', desc: 'Verify your job offer, ministry quota approval, or paid overseas internship eligibility.' },
            { step: '2', title: 'Document Legalization & MFA Attestations', desc: 'Complete official translations, MFA attestations, and embassy apostille seals.' },
            { step: '3', title: 'Medical & Police Clearances', desc: 'Coordinate authorized health screenings and expedite Sri Lanka Police clearance certification.' },
            { step: '4', title: 'Visa Endorsement & Pre-Departure Briefing', desc: 'Submit dossier to embassy for work/training permit stamping and receive departure support.' }
          ]
        };

      case 'other':
      default:
        return {
          title: 'Custom Visa Solutions & Document Services',
          subtitle: `Medical visas, transit permits, document attestations, and refusal appeals for ${country.name}`,
          icon: HelpCircle,
          badgeColor: 'bg-slate-100 text-slate-900 border-slate-200',
          processingTime: 'Flexible (Based on requirement)',
          validity: 'As requested',
          overview: `Customized consular and documentation solutions including medical travel visas, transit permits, official translations, Ministry of Foreign Affairs (MFA) apostilles, and comprehensive strategic appeal reviews for prior visa refusals.`,
          guarantees: [
            '1-on-1 consultation with senior immigration counselors',
            'Thorough audit of previous visa refusals and customized remediation strategy',
            'Official document translation, MFA legalization, and consular attestation support',
            'Dedicated WhatsApp emergency support for transit and urgent travel needs'
          ],
          documents: [
            'Current passport and copies of previous travel visas / refusal notices',
            'Specific documentation relevant to your request (Medical invitation, transit flight itinerary, etc.)',
            'Financial proof and civil status certificates'
          ],
          steps: [
            { step: '1', title: 'Requirement Assessment', desc: 'Discuss your specific travel or document situation with an experienced visa consultant.' },
            { step: '2', title: 'Customized Dossier Preparation', desc: 'Assemble precise documentation, legal translations, and embassy cover letters.' },
            { step: '3', title: 'Priority Submission', desc: 'File the application with full embassy compliance and real-time tracking.' }
          ]
        };
    }
  };

  return (
    <div className="bg-[#f7faff] min-h-screen pb-20 font-sans">
      
      {/* Top Breadcrumb & Quick Action Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button 
              onClick={() => onNavigate ? onNavigate('home') : null} 
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={handleBackToAllCountries}
              className={`hover:text-blue-600 transition cursor-pointer ${!selectedCountry ? 'text-blue-600 font-bold' : ''}`}
            >
              Countries
            </button>
            {selectedCountry && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-blue-900 font-bold">{selectedCountry.name}</span>
              </>
            )}
          </nav>

          {/* Direct WhatsApp Consultation Action */}
          <button
            onClick={() => onOpenConsultation ? onOpenConsultation(selectedCountry ? { destination: selectedCountry.name } : undefined) : null}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 transition cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Book Free 1-on-1 Consultation</span>
          </button>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* ══════════════════════════════════════════════════════════════
            VIEW A: IF A COUNTRY IS SELECTED -> RICH INLINE DESTINATION & VISA DOSSIER
            ══════════════════════════════════════════════════════════════ */}
        {selectedCountry ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Split Main Grid: Left = Destination Overview & Stats / Right = What Brings You to Country & Visa Dossier */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Landmark Image & Modern Quick Stats (4 cols on lg, 5 on xl) */}
              <div className="lg:col-span-4 space-y-4">
                
                {/* Back to All Countries quick button */}
                <button
                  onClick={handleBackToAllCountries}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all countries</span>
                </button>
                
                {/* 1. Destination Visual Card */}
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src={selectedCountry.image}
                      alt={`${selectedCountry.name} study and visa`}
                      className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                    {/* Top Left Flag Pill */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100">
                      {selectedCountry.flagUrl ? (
                        <img 
                          src={selectedCountry.flagUrl} 
                          alt={`${selectedCountry.name} flag`} 
                          className="w-4.5 h-4.5 rounded-full object-cover border border-slate-200 shadow-2xs" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-sm">{selectedCountry.flag}</span>
                      )}
                      <span className="text-xs font-black text-slate-900">{selectedCountry.name}</span>
                    </div>

                    {/* Top Right Category Pill */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-emerald-600 text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md border border-white/20">
                        {selectedCountry.directPayment ? 'Direct University Pay' : 'Study Destination'}
                      </span>
                    </div>

                    {/* Bottom Overlay Title & Region */}
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm">
                        {selectedCountry.name}
                      </h1>
                      <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{selectedCountry.subregion || selectedCountry.region || 'Europe'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Modern Quick Stats Card */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
                  
                  {/* Stat 1: Processing Time */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Visa Processing Time</span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                        {selectedCountry.processingTime || '30 – 45 Days'}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100" />

                  {/* Stat 2: Next Available Intake */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Next Available Intake</span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                        {selectedCountry.intake || 'Upcoming Semester Intake'}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100" />

                  {/* Stat 3: Direct In-Hand University Payment (Only for Russia, Malaysia, Singapore) OR Post-Study Stay Back (For Other Countries) */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      {selectedCountry.directPayment ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        {selectedCountry.directPayment ? 'Tuition Payment Method' : 'Post-Study Work Permit'}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                        {selectedCountry.directPayment 
                          ? 'Direct by Hand on Arrival' 
                          : (selectedCountry.region === 'Europe' || selectedCountry.subregion?.includes('Europe') 
                              ? '1 – 2 Years Stay-Back' 
                              : (selectedCountry.id === 'uk' ? '2-Year Graduate Route' : (selectedCountry.id === 'ca' ? 'PGWP up to 3 Years' : (selectedCountry.id === 'au' ? '2 – 4 Yrs Post-Study' : 'Stay-Back Route'))))}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Left Guarantee Banner: Direct In-Hand Payment (Only Russia, Malaysia, Singapore) vs Global Degree Recognition */}
                {selectedCountry.directPayment ? (
                  <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-5 border border-emerald-700/50 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Direct In-Hand Payment</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Pay Directly at Campus in {selectedCountry.name}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Students have the ability to take and pay their university tuition fee directly by hand upon arrival at the campus in {selectedCountry.name}. No middlemen and zero university tuition payment in Sri Lanka.
                    </p>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-5 border border-blue-800/40 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-bold">
                      <Award className="w-4 h-4 text-blue-400" />
                      <span>Accredited Global Degrees</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Recognized Worldwide
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Degrees from {selectedCountry.name} are globally recognized across the EU, UK, USA, and Commonwealth with international career mobility.
                    </p>
                  </div>
                )}

              </div>

              {/* Right Column: Hero Heading, Travel Purpose Chooser & Inline Dossier (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                
                {/* 1. Main Destination Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
                  
                  {/* Badges and Main Headline */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-extrabold bg-blue-100/80 text-blue-900 px-3 py-1 rounded-full uppercase tracking-wider">
                        STUDY IN {selectedCountry.name.toUpperCase()}
                      </span>
                      <span className="text-[11px] font-extrabold bg-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full">
                        {selectedCountry.intake || 'Upcoming Semester Intake'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                      Begin Your Study Journey in <span className="text-[#0052cc]">{selectedCountry.name}</span>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-2xl">
                      Discover world-class universities, affordable education, and a welcoming environment for international students. Noble Visa Centre handles admissions, document apostille, and student visa approvals with transparent institutional direct fee payment.
                    </p>
                  </div>

                  {/* Purpose Chooser / Visa Selector (Styled with clean blue borders on active state) */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0052cc] block">
                          DESTINATION DOSSIER • {selectedCountry.name.toUpperCase()}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-0.5">
                          What brings you to {selectedCountry.name}?
                        </h3>
                      </div>
                      <span className="text-[11px] text-slate-500 hidden sm:inline-block">
                        Select travel purpose
                      </span>
                    </div>

                    {/* Visa Option Selection Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                      {[
                        { id: 'student', label: 'Student Visa', icon: GraduationCap, badge: 'Popular' },
                        { id: 'tourist', label: 'Tourist Visa', icon: Plane, badge: 'Fast' },
                        { id: 'business', label: 'Business Visa', icon: Briefcase, badge: 'Commercial' },
                        { id: 'family', label: 'Family & Dependent', icon: Users },
                        { id: 'employment', label: 'Employment Visa', icon: Building2 },
                        { id: 'other', label: 'Other Services', icon: HelpCircle }
                      ].map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = selectedVisaType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => {
                              setSelectedVisaType(opt.id);
                              setActiveInfoTab('overview');
                            }}
                            className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-white text-slate-900 border-2 border-blue-600 shadow-xs ring-2 ring-blue-600/15'
                                : 'bg-slate-50/80 hover:bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:shadow-2xs'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-blue-600 text-white shadow-2xs' : 'bg-white text-slate-600 border border-slate-200/80 shadow-2xs'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              {opt.badge && (
                                <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${
                                  isSelected ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {opt.badge}
                                </span>
                              )}
                            </div>
                            <div>
                              <span className={`text-xs block leading-tight ${
                                isSelected ? 'text-blue-900 font-extrabold' : 'text-slate-800 font-bold'
                              }`}>
                                {opt.label}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* 2. INLINE CONTENT: IF STUDENT VISA IS CHOSEN */}
                {selectedVisaType === 'student' ? (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* A. 3-Column Highlights Metrics (Tailored to Direct Pay vs Non-Direct Pay) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      {/* Metric 1: Direct Tuition (for Russia, Malaysia, Singapore) vs Post-Study Stay Back (Others) */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                          {selectedCountry.directPayment ? (
                            <GraduationCap className="w-5 h-5" />
                          ) : (
                            <Award className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-500 font-medium block">
                            {selectedCountry.directPayment ? 'Tuition Payment Method' : 'Post-Study Stay-Back'}
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                            {selectedCountry.directPayment 
                              ? 'Direct by Hand on Arrival' 
                              : (selectedCountry.region === 'Europe' || selectedCountry.subregion?.includes('Europe') 
                                  ? '1 – 2 Years Stay Back' 
                                  : (selectedCountry.id === 'uk' ? '2-Year Graduate Route' : (selectedCountry.id === 'ca' ? 'PGWP up to 3 Years' : (selectedCountry.id === 'au' ? '2 – 4 Yrs Post-Study' : 'Post-Study Work Visa'))))}
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            {selectedCountry.directPayment ? 'Zero university fees in Sri Lanka' : 'Full residency & work rights'}
                          </span>
                        </div>
                      </div>

                      {/* Metric 2: IELTS Requirement */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-500 font-medium block">IELTS Requirement</span>
                          <span className="text-xs sm:text-sm font-extrabold text-emerald-700 block">Optional / MOI Accepted</span>
                          <span className="text-[10px] text-slate-400 block">Flexible waiver options</span>
                        </div>
                      </div>

                      {/* Metric 3: Work Rights */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-500 font-medium block">Work Rights</span>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">Part-Time Allowed*</span>
                          <span className="text-[10px] text-slate-400 block">20 hrs/week during study</span>
                        </div>
                      </div>

                    </div>

                    {/* B. Explore Top Universities and Programs in [Country] */}
                    <div className="bg-[#f0f6ff] rounded-3xl p-6 border border-blue-100 shadow-2xs space-y-4">
                      <div>
                        <h4 className="text-base font-extrabold text-[#071946]">
                          Explore top universities and programs in {selectedCountry.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-blue-900/80 mt-1 font-medium">
                          Find the right course and university that matches your academic goals and budget.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                        <button
                          onClick={() => onNavigate ? onNavigate('programs', { country: selectedCountry.id }) : null}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#071946] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl shadow-xs transition cursor-pointer"
                        >
                          <GraduationCap className="w-4 h-4 text-blue-300" />
                          <span>Choose Program</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>

                        <button
                          onClick={() => onNavigate ? onNavigate('universities', { country: selectedCountry.id }) : null}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#071946] border border-blue-200 text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl shadow-2xs transition cursor-pointer"
                        >
                          <Building className="w-4 h-4 text-blue-600" />
                          <span>Choose University</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>
                    </div>

                    {/* C. THE COMPREHENSIVE STUDENT VISA REQUIREMENTS & PROCESS BLOCK (Full Interactive Tabs) */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
                      
                      {/* Section Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                            Student Visa Requirements, Checklist & Process for {selectedCountry.name}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Verified immigration guidelines, mandatory document list, and admission workflow.
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                          Verified Guidelines
                        </span>
                      </div>

                      {/* Interactive Tab Switcher */}
                      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                        {[
                          { id: 'overview', label: '1. Overview & Study Rights' },
                          { id: 'documents', label: '2. Required Documents Checklist' },
                          { id: 'process', label: '3. Application Process Steps' }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveInfoTab(tab.id as any)}
                            className={`py-2.5 px-3 sm:px-4 text-xs font-bold border-b-2 whitespace-nowrap transition cursor-pointer ${
                              activeInfoTab === tab.id
                                ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                                : 'border-transparent text-slate-500 hover:text-slate-900'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab 1: Overview & Scope */}
                      {activeInfoTab === 'overview' && (
                        <div className="space-y-4 animate-in fade-in duration-150">
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {selectedCountry.visas?.student?.overview || 
                              `Pursuing higher education in ${selectedCountry.name} offers international students access to recognized European and global qualifications, modern campus laboratories, multicultural environments, and flexible language waiver opportunities.`}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Degree Recognition</span>
                              <span className="text-xs font-bold text-slate-900 block">Globally Accredited / Bologna Compliant</span>
                              <span className="text-[11px] text-slate-500 block">Accepted across EU, UK, USA, and Commonwealth</span>
                            </div>
                            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Semester Intakes</span>
                              <span className="text-xs font-bold text-emerald-700 block">{selectedCountry.intake || 'Upcoming Fall & Spring Semesters'}</span>
                              <span className="text-[11px] text-slate-500 block">Admissions open for upcoming semester</span>
                            </div>
                          </div>

                          <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 space-y-2.5">
                            <h5 className="text-xs font-extrabold uppercase tracking-wider text-blue-950">
                              Noble Visa Centre Student Protection & Service Deliverables
                            </h5>
                            <ul className="space-y-2 text-xs text-blue-900 font-medium">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Official university offer letter & guaranteed admission issuance</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Complete documentation apostille, translation & consular legalization support</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Embassy interview simulation & visa dossier pre-screening</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>Pre-departure briefing, student hostel accommodation & airport reception</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Required Documents */}
                      {activeInfoTab === 'documents' && (
                        <div className="space-y-4 animate-in fade-in duration-150">
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                              Mandatory Documentation Checklist
                            </h5>
                            <span className="text-[10px] text-slate-500 font-semibold">
                              *Originals & certified copies required
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {[
                              { title: 'Valid International Passport', desc: 'Minimum 18 months validity with at least 2 blank pages' },
                              { title: 'Original Educational Certificates & Transcripts', desc: 'G.C.E. O/L, A/L or Bachelor Degree certificates with English translations' },
                              { title: `Official University Offer Letter`, desc: `Unconditional or conditional acceptance from accredited campus in ${selectedCountry.name}` },
                              { title: 'Proof of Financial Means / Sponsor Declaration', desc: 'Sponsor affidavit of support, bank balance confirmation, or blocked account receipt' },
                              { title: 'Passport Sized Photographs', desc: 'Recent photos with white background (35mm x 45mm, matte finish)' },
                              { title: 'Police Clearance & Medical Fitness Certificate', desc: 'Clear criminal record from Police HQ and certified health screening' }
                            ].map((doc, idx) => (
                              <div key={idx} className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                                <FileCheck2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="text-xs font-bold text-slate-900 block">{doc.title}</span>
                                  <span className="text-[11px] text-slate-500 block mt-0.5">{doc.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                            <p className="text-[11px] text-slate-600 font-medium">
                              Need help with Ministry of Foreign Affairs (MFA) document apostille or certified translations?
                            </p>

                            <button
                              onClick={() => onOpenConsultation ? onOpenConsultation({ destination: selectedCountry.name, interest: 'Study Visa Assessment & Document Verification' }) : null}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap"
                            >
                              <span>Request Document Verification</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Application Process Steps */}
                      {activeInfoTab === 'process' && (
                        <div className="space-y-3 animate-in fade-in duration-150">
                          {[
                            { step: '1', title: 'Academic Profile Evaluation & Course Selection', desc: `Our certified education counselors evaluate your O/L, A/L, or Degree background and match you with accredited universities in ${selectedCountry.name}.` },
                            { step: '2', title: 'University Application & Offer Letter Issuance', desc: 'We submit your application directly to the university admissions office to secure your official offer letter.' },
                            { step: '3', title: 'Document Legalization, Apostille & Financial Proofs', desc: 'We assist with Ministry of Foreign Affairs (MFA) attestation, sworn translations, and sponsor financial documentation compilation.' },
                            { step: '4', title: 'Embassy Student Visa Lodgment & Biometrics', desc: 'We book your embassy appointment, review the complete visa dossier, and conduct 1-on-1 interview mock sessions.' },
                            { step: '5', title: 'Visa Grant, Flight Booking & On-Arrival Reception', desc: 'Collect your student visa stamped passport, finalize flight ticketing, student accommodation, and airport pickup.' }
                          ].map((st, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <div className="w-7 h-7 rounded-lg bg-blue-900 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                                {st.step}
                              </div>
                              <div>
                                <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                                  {st.title}
                                </h5>
                                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                                  {st.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>

                    {/* D. WhatsApp Guidance Card (Moved to the Bottom of Content) */}
                    <div className="bg-[#f0fdf4] rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 shadow-2xs">
                          <WhatsAppIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900">
                            Have questions or need guidance?
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-medium">
                            Our experts are ready to help you personally.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto">
                        <button
                          onClick={() => handleWhatsAppInquiry('Student Visa & Admissions')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-2xl text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white" />
                          <span>Continue on WhatsApp</span>
                        </button>
                        <span className="text-[10px] text-slate-500 font-medium">
                          Get instant answers from our visa experts
                        </span>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ══════════════════════════════════════════════════════════════
                     3. INLINE CONTENT: NON-STUDENT VISA DOSSIER (TOURIST, BUSINESS, FAMILY, EMPLOYMENT, OTHER)
                     ══════════════════════════════════════════════════════════════ */
                  (() => {
                    const dossier = getVisaDossier(selectedVisaType, selectedCountry);

                    return (
                      <div className="space-y-5 animate-in fade-in duration-200">
                        
                        {/* A. 3-Column Highlights Metrics (Matching Student Visa Style) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          
                          {/* Metric 1: Processing Time */}
                          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                              <Clock className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] text-slate-500 font-medium block">Processing Time</span>
                              <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">{dossier.processingTime}</span>
                              <span className="text-[10px] text-slate-400 block">Fast-track filing available</span>
                            </div>
                          </div>

                          {/* Metric 2: Validity & Entry */}
                          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] text-slate-500 font-medium block">Permit Validity</span>
                              <span className="text-xs sm:text-sm font-extrabold text-emerald-700 block">{dossier.validity.split('(')[0].trim()}</span>
                              <span className="text-[10px] text-slate-400 block">Official authorized stay</span>
                            </div>
                          </div>

                          {/* Metric 3: Noble Verification */}
                          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] text-slate-500 font-medium block">Noble Compliance</span>
                              <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">100% Pre-Screened</span>
                              <span className="text-[10px] text-slate-400 block">Zero rejection protocol</span>
                            </div>
                          </div>

                        </div>

                        {/* B. Service Action Container (Matching Student Visa Soft-Blue Style) */}
                        <div className="bg-[#f0f6ff] rounded-3xl p-6 border border-blue-100 shadow-2xs space-y-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${dossier.badgeColor}`}>
                                {selectedCountry.name}
                              </span>
                            </div>
                            <h4 className="text-base font-extrabold text-[#071946] mt-2">
                              {dossier.title} for {selectedCountry.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-blue-900/80 mt-1 font-medium">
                              {dossier.subtitle}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <button
                              onClick={() => onOpenConsultation ? onOpenConsultation({ destination: selectedCountry.name, interest: `${dossier.title} Application` }) : null}
                              className="w-full inline-flex items-center justify-center gap-2 bg-[#071946] hover:bg-[#0052cc] text-white py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer"
                            >
                              <span>Book Free 1-on-1 Consultation</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleWhatsAppInquiry(dossier.title)}
                              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold shadow-2xs transition cursor-pointer"
                            >
                              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                              <span>Free Visa Consultation & Next Steps</span>
                            </button>
                          </div>
                        </div>

                        {/* C. The Comprehensive Requirements & Documentation Checklist Card */}
                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
                          
                          {/* Section Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                            <div>
                              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                                {dossier.title} Requirements, Checklist & Process for {selectedCountry.name}
                              </h4>
                              <p className="text-xs text-slate-500 mt-0.5">
                                Verified embassy regulations, mandatory documentation, and lodgment timeline.
                              </p>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                              Verified Guidelines
                            </span>
                          </div>

                          {/* Interactive Tab Switcher */}
                          <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                            {[
                              { id: 'overview', label: '1. Overview & Scope' },
                              { id: 'documents', label: '2. Required Documents Checklist' },
                              { id: 'process', label: '3. Application Process Steps' }
                            ].map((tab) => (
                              <button
                                key={tab.id}
                                onClick={() => setActiveInfoTab(tab.id as any)}
                                className={`py-2.5 px-3 sm:px-4 text-xs font-bold border-b-2 whitespace-nowrap transition cursor-pointer ${
                                  activeInfoTab === tab.id
                                    ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                                    : 'border-transparent text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                {tab.label}
                              </button>
                            ))}
                          </div>

                          {/* Tab 1: Overview & Scope */}
                          {activeInfoTab === 'overview' && (
                            <div className="space-y-4 animate-in fade-in duration-150">
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                                {dossier.overview}
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Processing Window</span>
                                  <span className="text-xs font-bold text-slate-900 block">{dossier.processingTime}</span>
                                  <span className="text-[11px] text-slate-500 block">Based on current embassy schedule</span>
                                </div>
                                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Permit Duration</span>
                                  <span className="text-xs font-bold text-emerald-700 block">{dossier.validity}</span>
                                  <span className="text-[11px] text-slate-500 block">Subject to consular discretion</span>
                                </div>
                              </div>

                              <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 space-y-2.5">
                                <h5 className="text-xs font-extrabold uppercase tracking-wider text-blue-950">
                                  Noble Visa Centre Service Deliverables & Guarantees
                                </h5>
                                <ul className="space-y-2 text-xs text-blue-900 font-medium">
                                  {dossier.guarantees.map((g, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                      <span>{g}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Tab 2: Required Documents */}
                          {activeInfoTab === 'documents' && (
                            <div className="space-y-4 animate-in fade-in duration-150">
                              <div className="flex items-center justify-between">
                                <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                                  Mandatory Documentation Checklist for {selectedCountry.name}
                                </h5>
                                <span className="text-[10px] text-slate-500 font-semibold">
                                  *Originals & copies required
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {dossier.documents.map((doc, idx) => (
                                  <div key={idx} className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                                    <FileCheck2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-xs font-medium text-slate-800">{doc}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                                <p className="text-[11px] text-slate-600 font-medium">
                                  Need assistance with bank statement certification, employer letters, or sworn translations?
                                </p>

                                <button
                                  onClick={() => onOpenConsultation ? onOpenConsultation({ destination: selectedCountry.name, interest: `${dossier.title} Document Verification` }) : null}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap"
                                >
                                  <span>Request Document Verification</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Tab 3: Application Process Steps */}
                          {activeInfoTab === 'process' && (
                            <div className="space-y-3 animate-in fade-in duration-150">
                              {dossier.steps.map((st, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                                  <div className="w-7 h-7 rounded-lg bg-blue-900 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                                    {st.step}
                                  </div>
                                  <div>
                                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                                      {st.title}
                                    </h5>
                                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                                      {st.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>

                        {/* D. WhatsApp Guidance Card for Free Visa Consultation & Next Steps */}
                        <div className="bg-[#f0fdf4] rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 shadow-2xs">
                              <WhatsAppIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                Need free visa consultation & next steps?
                              </h4>
                              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                                Our specialists will evaluate your profile and guide you through the exact next steps for {selectedCountry.name}.
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto">
                            <button
                              onClick={() => handleWhatsAppInquiry(dossier.title)}
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-2xl text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer"
                            >
                              <WhatsAppIcon className="w-4 h-4 text-white" />
                              <span>Continue on WhatsApp</span>
                            </button>
                            <span className="text-[10px] text-slate-500 font-medium">
                              Get free visa consultation & next steps
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })()
                )}

              </div>

            </div>

          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════
             VIEW B: IF NO COUNTRY SELECTED -> MAIN 17+ GLOBAL DESTINATIONS DIRECTORY
             ══════════════════════════════════════════════════════════════ */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Page Header (Clean, with subtitle matching the screenshot) */}
            <div className="text-center max-w-3xl mx-auto space-y-1.5">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0052cc]">
                COUNTRIES WE ASSIST
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#071946] tracking-tight">
                Your Future, Across the Globe
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto">
                Discover top destination countries where we provide trusted guidance, official partnerships, and seamless visa support.
              </p>
            </div>

            {/* Search and Filters Bar (Matching Screenshot) */}
            <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs space-y-3">
              
              {/* Search input */}
              <div className="relative">
                {isSearchingApi ? (
                  <Loader2 className="w-4.5 h-4.5 text-blue-600 animate-spin absolute left-4 top-1/2 -translate-y-1/2" />
                ) : (
                  <Search className="w-4.5 h-4.5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                )}
                <input
                  type="text"
                  placeholder="Search any country worldwide (e.g. Germany, Japan, France, Russia, Canada, Brazil)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-[#f8fbff] sm:bg-white border border-blue-100 hover:border-blue-300 focus:border-blue-500 rounded-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setApiCountries([]);
                    }}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Lower Row: Filter Pills on left + Filter Button on right */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-0.5">
                
                {/* Left: Region Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'all', label: 'All Countries (17+)', icon: Globe },
                    { id: 'europe', label: 'Europe & Schengen', icon: Compass },
                    { id: 'asia', label: 'Asia & Pacific', icon: Globe },
                    { id: 'global', label: 'UK, Canada & NZ', icon: Landmark },
                    { id: 'middle-east', label: 'Middle East', icon: Building2 }
                  ].map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = selectedRegion === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedRegion(tab.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#071946] text-white shadow-xs'
                            : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90'
                        }`}
                      >
                        <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-blue-300' : 'text-slate-500'}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Filter Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowFilterPanel(!showFilterPanel)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                      showFilterPanel || filterDirectPay
                        ? 'bg-blue-50 border-blue-300 text-blue-800'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <Filter className="w-3.5 h-3.5 text-blue-600" />
                    <span>Filter</span>
                    {filterDirectPay && (
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    )}
                  </button>
                </div>

              </div>

              {/* Optional Collapsible Filter Options Panel */}
              {showFilterPanel && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                  <span className="text-xs font-bold text-slate-500">Quick Filters:</span>
                  
                  <button
                    onClick={() => setFilterDirectPay(!filterDirectPay)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                      filterDirectPay
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <span>{filterDirectPay ? '✅' : '⚪'} Direct University Payment</span>
                  </button>

                  {(searchQuery || selectedRegion !== 'all' || filterDirectPay) && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedRegion('all');
                        setFilterDirectPay(false);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 transition cursor-pointer ml-auto"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset All</span>
                    </button>
                  )}
                </div>
              )}

            </div>

            {/* Countries Grid - Home Page Style with NO descriptions */}
            {filteredCountries.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
                <p className="text-sm font-bold text-slate-700">No destination matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRegion('all');
                    setFilterDirectPay(false);
                  }}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  Clear search and show all destinations
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3 lg:gap-3.5 items-stretch">
                {filteredCountries.map((country) => (
                  <div
                    key={country.id}
                    onClick={() => handleSelectCountryCard(country)}
                    id={`country-card-${country.id}`}
                    className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between"
                  >
                    {/* Landmark Image with top-rounded corners */}
                    <div className="relative h-28 sm:h-32 lg:h-36 w-full rounded-t-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <img 
                        src={country.image} 
                        alt={`${country.name} landmark`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Subtle bottom shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Overlapping Full Circular Flag Badge outside image overflow */}
                    <div className="relative -mt-5 sm:-mt-5.5 z-20 flex justify-center pointer-events-none">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-md bg-white border-2 border-white ring-1 ring-slate-900/10 flex items-center justify-center overflow-hidden">
                        {country.flagUrl ? (
                          <img
                            src={country.flagUrl}
                            alt={`${country.name} flag`}
                            className="w-full h-full object-cover rounded-full select-none"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="text-base leading-none">{country.flag}</span>
                        )}
                      </div>
                    </div>

                    {/* Country Name (No Description) */}
                    <div className="pt-2 pb-3.5 px-1.5 w-full flex items-center justify-center min-h-[44px]">
                      <span className="text-xs sm:text-[13px] font-black text-[#071946] group-hover:text-[#0052cc] transition-colors leading-tight tracking-tight">
                        {country.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom: Can't Find Your Country Banner */}
            <div className="bg-gradient-to-r from-blue-950 to-[#071946] rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl space-y-4 border border-blue-900/60">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Can't find your destination country or visa category?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
                Noble Visa Centre assists with worldwide admissions, tourist itineraries, document attestations, and consular clearances across 40+ destinations.
              </p>
              <div>
                <button
                  onClick={() => onOpenConsultation ? onOpenConsultation({ destination: 'Other / Not Listed', interest: 'General Visa Guidance' }) : null}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat with an Expert Consultant</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
