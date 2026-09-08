import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Users, 
  Building2, 
  HelpCircle, 
  MessageSquare,
  Lock,
  Search,
  ChevronDown,
  Globe2,
  Calendar,
  Sparkles,
  Check,
  CheckCircle,
  Quote,
  Target,
  Zap
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/visaData';
import { WhatsAppIcon } from '../Header';

interface ConsultationPageProps {
  initialDestination?: string;
  initialLevel?: string;
  initialField?: string;
  initialVisaType?: string;
  initialProgram?: string;
  initialUniversity?: string;
  initialData?: {
    country?: string;
    visaType?: string;
    university?: string;
    program?: string;
    interest?: string;
  };
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

interface CountryDial {
  code: string;
  country: string;
  flag: string;
  name: string;
}

const COUNTRY_DIAL_CODES: CountryDial[] = [
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+91', country: 'India', flag: '🇮🇳', name: 'India' },
  { code: '+971', country: 'UAE', flag: '🇦🇪', name: 'UAE' },
  { code: '+44', country: 'UK', flag: '🇬🇧', name: 'UK' },
  { code: '+1', country: 'USA', flag: '🇺🇸', name: 'USA' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', name: 'Singapore' },
  { code: '+7', country: 'Russia', flag: '🇷🇺', name: 'Russia' },
  { code: '+375', country: 'Belarus', flag: '🇧🇾', name: 'Belarus' },
  { code: '+1', country: 'Canada', flag: '🇨🇦', name: 'Canada' },
  { code: '+61', country: 'Australia', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', country: 'Germany', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'France', flag: '🇫🇷', name: 'France' },
  { code: '+39', country: 'Italy', flag: '🇮🇹', name: 'Italy' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+357', country: 'Cyprus', flag: '🇨🇾', name: 'Cyprus' },
  { code: '+886', country: 'Taiwan', flag: '🇹🇼', name: 'Taiwan' },
  { code: '+371', country: 'Latvia', flag: '🇱🇻', name: 'Latvia' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦', name: 'Qatar' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+968', country: 'Oman', flag: '🇴🇲', name: 'Oman' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻', name: 'Maldives' },
];

const DESTINATIONS = [
  { id: "Haven't Decided Yet (Need Counselor Advice)", label: "Haven't Decided Yet (Need Counselor Advice)", icon: '🌐' },
  { id: 'Russia', label: 'Russia (MBBS, Engineering, IT, Aviation)', icon: '🇷🇺' },
  { id: 'Belarus', label: 'Belarus (Affordable European Medical & Tech)', icon: '🇧🇾' },
  { id: 'Dubai (UAE)', label: 'Dubai (UAE) (Global University Branch Campuses)', icon: '🇦🇪' },
  { id: 'Malaysia', label: 'Malaysia (UK & Australian Accredited Degrees)', icon: '🇲🇾' },
  { id: 'Singapore', label: 'Singapore (Hospitality, Tech & Finance Hub)', icon: '🇸🇬' },
  { id: 'Switzerland', label: 'Switzerland (World-Leading Hospitality & Business)', icon: '🇨🇭' },
  { id: 'India', label: 'India (Top Ranked Engineering & Medical Universities)', icon: '🇮🇳' },
  { id: 'Taiwan', label: 'Taiwan (Generous Scholarships & High-Tech Degrees)', icon: '🇹🇼' },
  { id: 'Cyprus', label: 'Cyprus (Affordable EU Work & Study Options)', icon: '🇨🇾' },
  { id: 'United Kingdom', label: 'United Kingdom (Top Russell Group & Global Campuses)', icon: '🇬🇧' },
  { id: 'Latvia (Schengen)', label: 'Latvia (Schengen European Pathway)', icon: '🇱🇻' },
  { id: 'Canada', label: 'Canada (Post-Graduation Work Permits & Pathways)', icon: '🇨🇦' },
  { id: 'Australia', label: 'Australia (World-Class Universities & Post-Study Rights)', icon: '🇦🇺' },
  { id: 'Other Worldwide', label: 'Other Destination Worldwide', icon: '🌍' }
];

const STUDENT_INTAKE_OPTIONS = [
  'Next Available Intake (Recommended)',
  'Upcoming Fall / Autumn Semester',
  'Upcoming Spring Semester',
  'Early Batch Intake',
  'Flexible / Open Intake'
];

const NON_STUDENT_TIMELINE_OPTIONS = [
  'Flexible / Not Decided Yet (Optional)',
  'Immediate / Within 1 Month',
  'Next 1 - 3 Months',
  'In 3 - 6 Months',
  'Later This Year / Next Year'
];

export const ConsultationPage: React.FC<ConsultationPageProps> = ({
  initialDestination,
  initialLevel,
  initialField,
  initialVisaType,
  initialProgram,
  initialUniversity,
  initialData,
  onNavigate
}) => {
  const [fullName, setFullName] = useState('');
  const [selectedDial, setSelectedDial] = useState<CountryDial>(COUNTRY_DIAL_CODES[0]); // Default Sri Lanka (+94)
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(
    initialVisaType || initialData?.interest || (initialDestination ? 'Study Abroad' : 'Study Abroad')
  );
  const [destination, setDestination] = useState(
    initialDestination || initialData?.country || "Haven't Decided Yet (Need Counselor Advice)"
  );
  const [university, setUniversity] = useState(initialUniversity || initialData?.university || '');
  const [program, setProgram] = useState(initialProgram || initialData?.program || '');
  
  const isStudentVisa = interest === 'Study Abroad' || interest === 'Student Visa';

  const [intake, setIntake] = useState(
    isStudentVisa ? 'Next Available Intake (Recommended)' : 'Flexible / Not Decided Yet (Optional)'
  );
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update default intake value when switching between student and non-student visa categories
  const handleInterestChange = (newInterest: string) => {
    setInterest(newInterest);
    const newIsStudent = newInterest === 'Study Abroad' || newInterest === 'Student Visa';
    if (newIsStudent && !isStudentVisa) {
      setIntake('Next Available Intake (Recommended)');
    } else if (!newIsStudent && isStudentVisa) {
      setIntake('Flexible / Not Decided Yet (Optional)');
    }
  };

  // Dropdown popover states
  const [dialDropdownOpen, setDialDropdownOpen] = useState(false);
  const [dialSearch, setDialSearch] = useState('');
  
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [destSearch, setDestSearch] = useState('');

  const [intakeDropdownOpen, setIntakeDropdownOpen] = useState(false);

  const dialRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);
  const intakeRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialRef.current && !dialRef.current.contains(e.target as Node)) {
        setDialDropdownOpen(false);
      }
      if (destRef.current && !destRef.current.contains(e.target as Node)) {
        setDestDropdownOpen(false);
      }
      if (intakeRef.current && !intakeRef.current.contains(e.target as Node)) {
        setIntakeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const interestOptions = [
    { id: 'Study Abroad', label: 'Study Abroad', icon: GraduationCap },
    { id: 'Student Visa', label: 'Student Visa', icon: GraduationCap },
    { id: 'Tourist Visa', label: 'Tourist Visa', icon: Plane },
    { id: 'Business Visa', label: 'Business Visa', icon: Briefcase },
    { id: 'Family Visa', label: 'Family Visa', icon: Users },
    { id: 'Employment Visa', label: 'Employment Visa', icon: Building2 },
    { id: 'Other / Not Sure', label: 'Other / Not Sure', icon: HelpCircle }
  ];

  const filteredDialCodes = COUNTRY_DIAL_CODES.filter(item => 
    item.country.toLowerCase().includes(dialSearch.toLowerCase()) ||
    item.code.includes(dialSearch)
  );

  const filteredDestinations = DESTINATIONS.filter(item =>
    item.label.toLowerCase().includes(destSearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please enter your full name and WhatsApp mobile number to continue.');
      return;
    }

    const fullPhone = `${selectedDial.code} ${phone.trim()}`;

    // Build the formatted WhatsApp message
    let msg = `Hi Noble Visa Centre, I would like to request a Free Consultation.`;
    msg += `\n\n👤 *Full Name:* ${fullName.trim()}`;
    msg += `\n📱 *WhatsApp Number:* ${fullPhone}`;
    if (email.trim()) {
      msg += `\n✉️ *Email Address:* ${email.trim()}`;
    }
    msg += `\n🎯 *I Am Interested In:* ${interest}`;
    msg += `\n🌍 *Destination Country:* ${destination}`;
    if (university.trim()) {
      msg += `\n🏛️ *${isStudentVisa ? 'University of Interest' : 'Institution / Sponsor / Company'}:* ${university.trim()}`;
    }
    if (program.trim()) {
      msg += `\n📚 *${isStudentVisa ? 'Program / Course' : 'Purpose / Field'}:* ${program.trim()}`;
    }
    if (isStudentVisa) {
      if (intake.trim()) {
        msg += `\n🗓️ *Target Academic Intake:* ${intake}`;
      }
    } else {
      if (intake.trim() && intake !== 'Flexible / Not Decided Yet (Optional)') {
        msg += `\n🗓️ *Intended Travel / Processing Timeline:* ${intake}`;
      }
    }
    if (message.trim()) {
      msg += `\n\n💬 *Notes & Qualifications:* ${message.trim()}`;
    }

    const whatsappUrl = getWhatsAppUrl(msg);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-8 sm:py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================= */}
          {/* Left Column Card: Let's Plan Your Journey Together */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
            
            {/* Top Plane Route SVG Illustration */}
            <div className="absolute top-4 right-4 w-44 h-36 pointer-events-none opacity-90">
              <svg viewBox="0 0 200 150" fill="none" className="w-full h-full">
                {/* Dotted flight trajectory curve */}
                <path 
                  d="M 10 130 C 50 110, 110 90, 140 30" 
                  stroke="#3b82f6" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  opacity="0.6"
                />
                {/* Small globe dot cluster */}
                <circle cx="150" cy="80" r="1.5" fill="#93c5fd" />
                <circle cx="160" cy="70" r="2" fill="#93c5fd" />
                <circle cx="170" cy="90" r="1.5" fill="#93c5fd" />
                <circle cx="140" cy="95" r="1.5" fill="#93c5fd" />
                <circle cx="180" cy="75" r="2" fill="#93c5fd" />
                {/* Location pin indicator */}
                <circle cx="140" cy="30" r="4" fill="#3b82f6" />
                <circle cx="140" cy="30" r="8" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
                {/* Stylized Jet Plane Icon */}
                <g transform="translate(130, 10) rotate(-25) scale(0.85)">
                  <path 
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" 
                    fill="#1e40af"
                  />
                </g>
              </svg>
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-blue-800 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>NOBLE VISA EXPERTISE</span>
            </div>

            {/* Header Text */}
            <div className="space-y-2 relative z-10">
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-slate-900 leading-tight">
                Let's Plan Your <br />
                <span className="text-[#1a56db]">Journey Together</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
                Speak directly with authorized country managers, visa specialists, and academic counselors.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-3 pt-1 relative z-10">
              
              {/* Feature 1: Free Consultation */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:border-slate-200 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">100% Free Consultation</h3>
                    <p className="text-xs text-slate-500">No hidden fees, no obligation. Honest, professional advice.</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-emerald-500 text-emerald-600 flex items-center justify-center flex-shrink-0 ml-2">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Feature 2: Official Representation */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:border-slate-200 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Official Country Representation</h3>
                    <p className="text-xs text-slate-500">Direct university representation with direct fee payments.</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-indigo-500 text-indigo-600 flex items-center justify-center flex-shrink-0 ml-2">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Feature 3: Personalized Evaluation */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:border-slate-200 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Personalized Evaluation</h3>
                    <p className="text-xs text-slate-500">Customized roadmap based on your budget, grades, and career goals.</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-orange-500 text-orange-600 flex items-center justify-center flex-shrink-0 ml-2">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Feature 4: Quick WhatsApp Response */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:border-slate-200 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Quick WhatsApp Response</h3>
                    <p className="text-xs text-slate-500">Instant connection with dedicated visa officers.</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-blue-500 text-blue-600 flex items-center justify-center flex-shrink-0 ml-2">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

            </div>

            {/* Testimonial Quote Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2 relative">
              <Quote className="w-5 h-5 text-blue-600 opacity-40 absolute top-3 left-3" />
              <p className="text-xs text-slate-700 italic leading-relaxed pl-6">
                "Noble Visa Centre guided me through the entire MBBS admission and visa process for Moscow Linguistic University with complete transparency. Paying directly to the university gave my family peace of mind."
              </p>
              <div className="text-[11px] font-bold text-blue-700 pl-6">
                — Nuwan S., MBBS Student (Moscow, Russia)
              </div>
            </div>

            {/* Bottom Contact Metadata Bar */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Head Office: Colombo, Sri Lanka</span>
                  <div className="text-[11px] text-slate-400">Operating Hours: Mon – Sat (9:00 AM – 6:00 PM IST)</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex-shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Govt. Registered Agency</span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* Right Column Card: Request Your Free Consultation Form */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 sm:py-9 border border-slate-200/90 shadow-sm space-y-6">
            
            {/* Header with Title */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600">
                FAST TRACK REGISTRATION
              </span>
              <h2 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight mt-0.5">
                Request Your Free Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Fill in your details below. You will be redirected directly to WhatsApp with your pre-filled inquiry.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-black text-emerald-950">
                  Inquiry Prepared & Sent!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  If your WhatsApp chat did not open automatically, click the button below to connect with our counseling team now.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Open WhatsApp Chat Now</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Full Name & WhatsApp Number with Country Code Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
                  
                  {/* Full Name */}
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name (e.g. Kasun Perera)"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                    />
                  </div>

                  {/* WhatsApp Mobile Number with Custom Selector */}
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      WHATSAPP MOBILE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 relative" ref={dialRef}>
                      
                      {/* Custom Country Code Dropdown Trigger */}
                      <button
                        type="button"
                        onClick={() => setDialDropdownOpen(!dialDropdownOpen)}
                        className="flex items-center justify-between gap-1.5 px-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition flex-shrink-0 cursor-pointer"
                      >
                        <span className="text-base">{selectedDial.flag}</span>
                        <span>{selectedDial.code} ({selectedDial.country})</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
                      </button>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        required
                        placeholder="77 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                      />

                      {/* Custom Dropdown Popover */}
                      {dialDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-72 max-w-[90vw] bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95">
                          {/* Search Country Input */}
                          <div className="relative mb-1">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={dialSearch}
                              onChange={(e) => setDialSearch(e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                              autoFocus
                            />
                          </div>
                          
                          {/* Country List */}
                          <div className="max-h-56 overflow-y-auto space-y-0.5 scrollbar-thin">
                            {filteredDialCodes.map((item, idx) => {
                              const isSelected = selectedDial.code === item.code && selectedDial.country === item.country;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedDial(item);
                                    setDialDropdownOpen(false);
                                    setDialSearch('');
                                  }}
                                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition text-left cursor-pointer ${
                                    isSelected 
                                      ? 'bg-blue-50 text-blue-700 font-bold' 
                                      : 'hover:bg-slate-50 text-slate-700'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-base">{item.flag}</span>
                                    <span>{item.code} ({item.name})</span>
                                  </div>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>

                {/* Row 2: Email Address (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    EMAIL ADDRESS <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                  />
                </div>

                {/* Row 3: I Am Interested In (Interactive Pill Badges Grid) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    I AM INTERESTED IN <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {interestOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = interest === opt.id;
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => handleInterestChange(opt.id)}
                          className={`p-2.5 px-3 rounded-xl border text-left flex items-center gap-2 transition cursor-pointer ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-2xs'
                              : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium'
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span className="text-xs truncate">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Destination Country Custom Dropdown */}
                <div className="relative" ref={destRef}>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    DESTINATION COUNTRY
                  </label>
                  
                  {/* Dropdown Trigger */}
                  <button
                    type="button"
                    onClick={() => setDestDropdownOpen(!destDropdownOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Globe2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{destination}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                  </button>

                  {/* Dropdown Popover */}
                  {destDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95">
                      <div className="relative mb-1">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search destination country..."
                          value={destSearch}
                          onChange={(e) => setDestSearch(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          autoFocus
                        />
                      </div>
                      
                      <div className="max-h-56 overflow-y-auto space-y-0.5 scrollbar-thin">
                        {filteredDestinations.map((item, idx) => {
                          const isSelected = destination === item.id;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setDestination(item.id);
                                setDestDropdownOpen(false);
                                setDestSearch('');
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition text-left cursor-pointer ${
                                isSelected 
                                  ? 'bg-blue-50 text-blue-700 font-bold' 
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Row 5: University & Program (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      {isStudentVisa ? 'UNIVERSITY OF INTEREST' : 'ORGANIZATION / SPONSOR'} <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      placeholder={isStudentVisa ? "e.g. Moscow State, APU Malaysia or Not Sure" : "e.g. Employer, Host, or Not Sure"}
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      {isStudentVisa ? 'PROGRAM / COURSE' : 'PURPOSE / CATEGORY'} <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      placeholder={isStudentVisa ? "e.g. MBBS, Computer Science, MBA" : "e.g. Tourism, Job, Business Meeting"}
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                    />
                  </div>
                </div>

                {/* Row 6: Target Academic Intake / Travel Timeline Custom Dropdown */}
                <div className="relative" ref={intakeRef}>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {isStudentVisa ? (
                      <span>TARGET ACADEMIC INTAKE</span>
                    ) : (
                      <span>
                        TARGET TRAVEL / INTAKE TIMELINE <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                      </span>
                    )}
                  </label>
                  
                  {/* Dropdown Trigger */}
                  <button
                    type="button"
                    onClick={() => setIntakeDropdownOpen(!intakeDropdownOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{intake}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                  </button>

                  {/* Dropdown Popover */}
                  {intakeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95">
                      <div className="px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {isStudentVisa ? 'Select Academic Intake' : 'Select Target Timeline (Optional)'}
                      </div>
                      
                      <div className="space-y-0.5">
                        {(isStudentVisa ? STUDENT_INTAKE_OPTIONS : NON_STUDENT_TIMELINE_OPTIONS).map((item, idx) => {
                          const isSelected = intake === item;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setIntake(item);
                                setIntakeDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition text-left cursor-pointer ${
                                isSelected 
                                  ? 'bg-blue-50 text-blue-700 font-bold' 
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>{item}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Row 7: Notes & Queries */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    ANY SPECIFIC QUESTIONS OR NOTES? <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your educational qualifications (e.g. O/L or A/L stream), budget, or specific doubts..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition font-medium"
                  />
                </div>

                {/* Row 8: Green CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] text-white text-sm sm:text-base font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all hover:shadow-lg cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Continue on WhatsApp →</span>
                  </button>
                  
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-2.5 font-medium">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Your information is strictly confidential & 100% spam-free.</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

