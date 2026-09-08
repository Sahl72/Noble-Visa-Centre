import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  Award, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Star, 
  ChevronUp, 
  Globe, 
  GraduationCap, 
  CheckCircle2, 
  Send,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Check
} from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  LOCAL_PHONE_DISPLAY,
  BUSINESS_PHONES,
  OFFICE_BRANCHES,
  EMAIL_DISPLAY, 
  GOOGLE_RATING,
  GOOGLE_REVIEWS_COUNT,
  SOCIAL_LINKS,
  getWhatsAppUrl 
} from '../data/visaData';
import { NobleLogo } from './NobleLogo';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from './Header';

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.593.042.875.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.27 6.27 0 0 0 1.9-4.47V8.52a8.27 8.27 0 0 0 4.84 1.57v-3.4z"/>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface FooterProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const navigateTo = (page: string, params?: Record<string, string>, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, params);
    }
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#020b1f] via-[#041235] to-[#010714] text-slate-300 font-sans border-t border-blue-900/50 relative overflow-hidden">
      
      {/* Background World Map & Glow Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <svg className="w-full h-full object-cover opacity-15" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="1.5" fill="#60A5FA" />
          <circle cx="240" cy="170" r="2" fill="#60A5FA" />
          <circle cx="280" cy="140" r="1.5" fill="#60A5FA" />
          <circle cx="320" cy="190" r="2" fill="#93C5FD" />
          <circle cx="650" cy="220" r="2.5" fill="#60A5FA" />
          <circle cx="700" cy="260" r="1.5" fill="#93C5FD" />
          <circle cx="750" cy="240" r="2" fill="#60A5FA" />
          <circle cx="820" cy="280" r="2.5" fill="#38BDF8" />
          <circle cx="950" cy="230" r="2" fill="#60A5FA" />
          <circle cx="1020" cy="310" r="1.5" fill="#93C5FD" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">
        
        {/* Top Grid: Brand, Nav Services, Quick Links, Office Cards, Stay Updated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 text-left">
          
          {/* Column 1: Brand & Socials (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <button 
              onClick={() => navigateTo('home')} 
              className="bg-transparent border-0 p-0 text-left cursor-pointer transition hover:opacity-95 block"
              aria-label="Noble Visa Centre Home"
            >
              <NobleLogo variant="light" size="lg" showTagline={true} />
            </button>

            <p className="text-xs text-slate-300/90 leading-relaxed">
              Your trusted partner for global education, work, business and travel visa solutions. We make your global journey simpler, safer and brighter.
            </p>

            {/* Social Icons matching the design */}
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-slate-300 transition-all border border-blue-800/60 hover:border-transparent hover:scale-105 shadow-sm" 
                aria-label="Facebook"
                title="Noble Visa Centre on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-[#E4405F] hover:text-white flex items-center justify-center text-slate-300 transition-all border border-blue-800/60 hover:border-transparent hover:scale-105 shadow-sm" 
                aria-label="Instagram"
                title="Noble Visa Centre on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-300 transition-all border border-blue-800/60 hover:border-transparent hover:scale-105 shadow-sm" 
                aria-label="TikTok"
                title="Noble Visa Centre on TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-[#FF0000] hover:text-white flex items-center justify-center text-slate-300 transition-all border border-blue-800/60 hover:border-transparent hover:scale-105 shadow-sm" 
                aria-label="YouTube"
                title="Noble Visa Centre on YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsAppUrl("Hello Noble Visa Centre! I would like to inquire about visa and admissions counseling.")}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-slate-300 transition-all border border-blue-800/60 hover:border-transparent hover:scale-105 shadow-sm" 
                aria-label="WhatsApp"
                title="Chat with Noble Counselor on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: OUR SERVICES / VISA TYPES (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => navigateTo('programs')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Student Visa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries', { visaType: 'tourist' })} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Visit Visa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries', { visaType: 'employment' })} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Work Visa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries', { visaType: 'business' })} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Business Visa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries', { visaType: 'family' })} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Family Visa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Visa Extensions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('consultation')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Document Guidance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('consultation')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Pre-Departure Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: QUICK LINKS / NAVIGATION (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => navigateTo('home')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Countries & Visas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('universities')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  University Finder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Program Finder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('countries', { directPayment: 'true' })} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block text-amber-300"
                >
                  Direct Fee Pay (3 Unis)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('consultation')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Free Consultation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home', undefined, '#why-noble')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block"
                >
                  Why Noble Centre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('sitemap')} 
                  className="hover:text-cyan-400 transition cursor-pointer text-left block text-cyan-300 font-medium"
                >
                  Visual Sitemap & Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: OUR OFFICES & CONTACTS (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              OUR OFFICES & CONTACTS
            </h4>
            
            <div className="space-y-2.5">
              
              {/* Colombo Head Office Card */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Noble+Visa+Centre+1A+Centre+Road+Colombo+00200+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-blue-950/70 to-slate-900/80 border border-blue-800/60 hover:border-cyan-400/80 transition-all shadow-md hover:shadow-cyan-900/20 cursor-pointer overflow-hidden"
                title="Click to open Colombo Office in Google Maps"
              >
                <div className="flex items-start gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-xl bg-blue-900/50 border border-blue-700/60 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black text-cyan-400 uppercase tracking-wide block">
                      COLOMBO HEAD OFFICE
                    </span>
                    <span className="text-[11px] text-slate-200 block mt-0.5">
                      1A Centre Road, Colombo 00200
                    </span>
                    <div className="flex items-center gap-2.5 text-[10px] mt-1">
                      <span className="text-slate-300 font-bold">074 010 4106</span>
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open Now
                      </span>
                    </div>
                  </div>
                </div>

                {/* Circular Chevron Action Button */}
                <div className="w-7 h-7 rounded-full bg-blue-900/60 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors flex-shrink-0 border border-blue-700/60 group-hover:border-cyan-400 ml-2">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>

              {/* Battaramulla Branch Card */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Noble+Visa+Centre+936/2/G+Battaramulla+-+Pannipitiya+Rd+Battaramulla+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-blue-950/70 to-slate-900/80 border border-blue-800/60 hover:border-cyan-400/80 transition-all shadow-md hover:shadow-cyan-900/20 cursor-pointer overflow-hidden"
                title="Click to open Battaramulla Branch in Google Maps"
              >
                <div className="flex items-start gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-xl bg-blue-900/50 border border-blue-700/60 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black text-cyan-400 uppercase tracking-wide block">
                      BATTARAMULLA BRANCH
                    </span>
                    <span className="text-[11px] text-slate-200 block mt-0.5">
                      936/2/G Battaramulla - Pannipitiya Rd
                    </span>
                    <div className="flex items-center gap-2.5 text-[10px] mt-1">
                      <span className="text-slate-300 font-bold">074 010 2108</span>
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open Now
                      </span>
                    </div>
                  </div>
                </div>

                {/* Circular Chevron Action Button */}
                <div className="w-7 h-7 rounded-full bg-blue-900/60 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors flex-shrink-0 border border-blue-700/60 group-hover:border-cyan-400 ml-2">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>

            </div>

            {/* View all offices link */}
            <div className="pt-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Noble+Visa+Centre+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>View all offices on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Column 5: STAY UPDATED & Cursive Skyline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3 relative">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              STAY UPDATED
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Get the latest updates on visa news, intakes and opportunities.
            </p>

            {/* Newsletter input box with blue paper airplane button */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#020d26]/90 border border-blue-800/80 focus:border-cyan-400 text-white placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xl pr-11 focus:outline-none transition"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-8 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-md transition cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Agreement checkbox */}
              <label className="flex items-start gap-2 cursor-pointer text-[10px] text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-blue-700 bg-blue-950 text-blue-500 focus:ring-0 w-3 h-3"
                />
                <span>I agree to receive updates from Noble Visa Centre.</span>
              </label>

              {subscribed && (
                <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>

            {/* Glowing Script & Skyline Motif in Bottom Right */}
            <div className="pt-2 text-right">
              <span className="text-sm font-semibold tracking-wide text-cyan-300/90 italic font-serif block drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                A Brighter Global Tomorrow
              </span>
            </div>

          </div>

        </div>

        {/* Middle Stats Counter Row (from the reference design) */}
        <div className="mt-12 pt-8 border-t border-blue-900/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white block leading-tight">10K+</span>
              <span className="text-[11px] text-slate-400 font-medium">Students Placed</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white block leading-tight">50+</span>
              <span className="text-[11px] text-slate-400 font-medium">Global Partners</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white block leading-tight">20+</span>
              <span className="text-[11px] text-slate-400 font-medium">Countries</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white block leading-tight">98%</span>
              <span className="text-[11px] text-slate-400 font-medium">Success Rate</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Changing Lives Bar */}
        <div className="mt-8 pt-6 border-t border-blue-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            <p>© {new Date().getFullYear()} Noble Visa Centre (Pvt) Ltd. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <button 
              onClick={() => navigateTo('consultation')}
              className="hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => navigateTo('consultation')}
              className="hover:text-white transition cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => navigateTo('sitemap')}
              className="hover:text-cyan-300 transition cursor-pointer font-medium"
            >
              Sitemap
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Changing Lives Across Borders</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-blue-950 hover:bg-blue-900 border border-blue-800/60 text-slate-300 hover:text-white flex items-center justify-center transition ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};




