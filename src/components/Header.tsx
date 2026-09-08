import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ChevronDown, Menu, X, Clock, MessageSquare, GraduationCap, Globe, Building, Award, CheckCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, ADDRESS_DISPLAY, LOCAL_PHONE_DISPLAY, VISA_SERVICES, COUNTRIES, SOCIAL_LINKS } from '../data/visaData';
import { NobleLogo } from './NobleLogo';
import { VisaService, Country } from '../types';

// Custom Crisp Vector Social Icons
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.792s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.178.182-.077.355.101.173.449.741.964 1.2.662.59 1.22.773 1.393.86.173.087.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.044.072.044.419-.1 1.024z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 1.933.548 3.738 1.498 5.271L2 22l4.856-1.46c1.476.873 3.197 1.377 5.144 1.377 5.523 0 10-4.484 10-10.017C22 6.484 17.523 2 12 2zm0 18.279c-1.637 0-3.153-.454-4.448-1.242l-.319-.196-3.082.927.935-3.003-.21-.336A8.243 8.243 0 0 1 3.75 12.017C3.75 7.45 7.452 3.743 12 3.743c4.548 0 8.25 3.707 8.25 8.274 0 4.567-3.702 8.262-8.25 8.262z"/>
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface HeaderProps {
  activePage?: string;
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  onOpenConsultationModal: (visaType?: string) => void;
  onSelectVisa?: (visa: VisaService) => void;
  onSelectCountry?: (country: Country) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activePage = 'home',
  onNavigate,
  onOpenConsultationModal,
  onSelectVisa,
  onSelectCountry 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'why-us'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy when on home page
      if (activePage === 'home') {
        const scrollY = window.scrollY;
        const whyNobleEl = document.getElementById('why-noble');

        const navOffset = 110;
        if (whyNobleEl && scrollY + navOffset >= whyNobleEl.offsetTop - 50) {
          setActiveSection('why-us');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const scrollToElement = (targetId: string, fallbackPage?: string) => {
    if (activePage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerHeight = 76;
          const elementPos = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPos - headerHeight,
            behavior: 'smooth'
          });
        }
      }, 120);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const headerHeight = 76;
        const elementPos = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPos - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleHomeClick = () => {
    setActiveSection('home');
    if (activePage !== 'home' && onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleWhyUsClick = () => {
    setActiveSection('why-us');
    scrollToElement('why-noble');
    setMobileMenuOpen(false);
  };

  const navigateToPage = (page: string, params?: Record<string, string>) => {
    if (onNavigate) {
      onNavigate(page, params);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active states for nav items
  const isHomeActive = activePage === 'home' && activeSection === 'home';
  const isWhyUsActive = activePage === 'home' && activeSection === 'why-us';
  const isCountriesActive = activePage === 'countries';
  const isStoriesActive = activePage === 'success-stories' || activePage === 'stories';

  return (
    <header className="w-full sticky top-0 z-40 bg-[#071330] shadow-lg transition-all duration-300 font-sans">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Official Company Logo */}
          <button 
            onClick={handleHomeClick} 
            className="flex items-center group py-1 cursor-pointer bg-transparent border-0 text-left" 
            aria-label="Noble Visa Centre Home"
          >
            <NobleLogo 
              variant="light" 
              size="lg" 
              showTagline={true} 
              className="group-hover:opacity-95 transition-opacity" 
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-[14px] font-semibold text-slate-200">
            
            {/* 1. Home - Takes to home page */}
            <button 
              onClick={handleHomeClick}
              className={`relative px-3 py-2 transition cursor-pointer ${
                isHomeActive 
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-blue-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>

            {/* 2. Countries - Takes to countries page */}
            <button 
              onClick={() => navigateToPage('countries')}
              className={`relative px-3 py-2 transition cursor-pointer ${
                isCountriesActive 
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-blue-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Countries
            </button>

            {/* 3. Why Us - Scrolls to why us section on home page */}
            <button 
              onClick={handleWhyUsClick}
              className={`relative px-3 py-2 transition cursor-pointer ${
                isWhyUsActive 
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-blue-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Why Us
            </button>

            {/* 4. Success Stories - Takes to Success stories page which has video testimonials */}
            <button 
              onClick={() => navigateToPage('success-stories')}
              className={`relative px-3 py-2 transition cursor-pointer ${
                isStoriesActive 
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-blue-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Success Stories
            </button>
          </nav>

          {/* Right Side Social Media Icons (Desktop only) & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Social Icons (Facebook, Instagram, YouTube, WhatsApp) - Hidden on Mobile, Shown on Desktop */}
            <div className="hidden lg:flex items-center space-x-1.5 sm:space-x-2">
              
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Noble Visa Centre Facebook"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-blue-950/80 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-blue-800/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110"
                title="Follow us on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Noble Visa Centre Instagram"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-blue-950/80 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-slate-300 hover:text-white border border-blue-800/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110"
                title="Follow us on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Noble Visa Centre YouTube"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-blue-950/80 hover:bg-[#FF0000] text-slate-300 hover:text-white border border-blue-800/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110"
                title="Watch Video Testimonials on YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl("Hello Noble Visa Centre, I would like to inquire about visa consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-blue-950/80 hover:bg-[#25D366] text-slate-300 hover:text-white border border-blue-800/60 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110"
                title="Direct WhatsApp Chat"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg focus:outline-none transition-colors cursor-pointer ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Enhanced Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071330] border-t border-blue-900/70 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-2xl max-h-[calc(100vh-76px)] overflow-y-auto">
          
          {/* Quick Contact Highlight Card inside Drawer */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-800/60 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Direct Helpline</p>
                <a href={`tel:${LOCAL_PHONE_DISPLAY}`} className="text-sm font-extrabold text-white hover:text-amber-400 transition">
                  {LOCAL_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <a 
              href={`tel:${LOCAL_PHONE_DISPLAY}`}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
            >
              Call Now
            </a>
          </div>

          {/* Navigation Links Grid / List */}
          <div className="grid grid-cols-1 gap-1 pt-1">
            <button 
              onClick={handleHomeClick}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition text-left cursor-pointer ${
                isHomeActive ? 'bg-blue-900 text-white font-bold' : 'text-slate-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Home</span>
            </button>
            <button 
              onClick={() => navigateToPage('countries')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition text-left cursor-pointer ${
                isCountriesActive ? 'bg-blue-900 text-white font-bold' : 'text-slate-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Countries</span>
            </button>
            <button 
              onClick={handleWhyUsClick}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition text-left cursor-pointer ${
                isWhyUsActive ? 'bg-blue-900 text-white font-bold' : 'text-slate-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Why Us</span>
            </button>
            <button 
              onClick={() => navigateToPage('success-stories')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition text-left cursor-pointer ${
                isStoriesActive ? 'bg-blue-900 text-white font-bold' : 'text-slate-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Success Stories</span>
              <span className="text-xs text-amber-400 font-semibold text-[11px] bg-amber-400/10 px-2 py-0.5 rounded-full">Gallery</span>
            </button>
          </div>

          {/* Social Media Channels inside Hamburger Menu */}
          <div className="bg-gradient-to-r from-blue-950/90 to-slate-900 border border-blue-800/60 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-black tracking-wider text-amber-400">
                Follow & Connect With Us
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Official Links</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl("Hello Noble Visa Centre! I would like to inquire about visa and university consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-950/40 hover:bg-[#25D366] text-emerald-300 hover:text-white border border-emerald-800/40 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight truncate">
                  <span className="text-xs font-bold block text-white truncate">WhatsApp</span>
                  <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-100">Live Chat</span>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-950/60 hover:bg-[#1877F2] text-blue-300 hover:text-white border border-blue-800/50 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1877F2] text-white flex items-center justify-center flex-shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight truncate">
                  <span className="text-xs font-bold block text-white truncate">Facebook</span>
                  <span className="text-[10px] text-blue-300/80 group-hover:text-blue-100">Updates</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-950/40 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-pink-300 hover:text-white border border-pink-900/40 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight truncate">
                  <span className="text-xs font-bold block text-white truncate">Instagram</span>
                  <span className="text-[10px] text-pink-300/80 group-hover:text-pink-100">Reels</span>
                </div>
              </a>

              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-red-950/40 hover:bg-[#FF0000] text-red-300 hover:text-white border border-red-900/40 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF0000] text-white flex items-center justify-center flex-shrink-0">
                  <YouTubeIcon className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight truncate">
                  <span className="text-xs font-bold block text-white truncate">YouTube</span>
                  <span className="text-[10px] text-red-300/80 group-hover:text-red-100">Videos</span>
                </div>
              </a>
            </div>
          </div>

          {/* Book Free Consultation CTA Button in Menu */}
          <button
            onClick={() => navigateToPage('consultation')}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition cursor-pointer active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Book Free Consultation</span>
          </button>

          {/* Quick Footer info inside Drawer */}
          <div className="pt-1 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon - Sat: 9:00 AM – 6:00 PM</span>
          </div>

        </div>
      )}
    </header>
  );
};



