import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RibbonTicker } from './components/RibbonTicker';
import { VisaServices } from './components/VisaServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CountriesGrid } from './components/CountriesGrid';
import { UniversitiesSection } from './components/UniversitiesSection';
import { SuccessStories } from './components/SuccessStories';
import { WhatsAppCtaBanner } from './components/WhatsAppCtaBanner';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CountriesPage } from './components/pages/CountriesPage';
import { UniversitiesPage } from './components/pages/UniversitiesPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { ConsultationPage } from './components/pages/ConsultationPage';
import { SuccessStoriesPage } from './components/pages/SuccessStoriesPage';
import { SitemapPage } from './components/pages/SitemapPage';
import { VisaService, Country, UniversityPartner } from './types';
import { getWhatsAppUrl, COUNTRIES, VISA_SERVICES } from './data/visaData';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  // Sync hash routing with browser URL
  const parseRouteFromUrl = useCallback(() => {
    try {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        setQueryParams({});
        return;
      }
      
      const [path, queryString] = hash.split('?');
      let cleanPath = path || 'home';
      // Default /services or #services to home page
      if (cleanPath === 'services') {
        cleanPath = 'home';
      }
      const params: Record<string, string> = {};
      
      if (queryString) {
        const searchParams = new URLSearchParams(queryString);
        searchParams.forEach((val, key) => {
          params[key] = val;
        });
      }

      setCurrentPage(cleanPath);
      setQueryParams(params);
    } catch {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    parseRouteFromUrl();
    window.addEventListener('popstate', parseRouteFromUrl);
    return () => window.removeEventListener('popstate', parseRouteFromUrl);
  }, [parseRouteFromUrl]);

  // Dynamic SEO Page Title updates based on active section/page
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Noble Visa Centre | Study Abroad & Student Visa Consultants in Sri Lanka',
      countries: 'Study Destinations & Visa Guide 2026 | Noble Visa Centre',
      universities: 'Partner Universities & Medical Colleges | Noble Visa Centre',
      programs: 'Degree & Course Finder (MBBS, IT, Business) | Noble Visa Centre',
      consultation: 'Free Visa Assessment & University Consultation | Noble Visa Centre',
      'success-stories': 'Visa Grants & Student Success Stories | Noble Visa Centre',
      sitemap: 'Visual Sitemap & Global Directory | Noble Visa Centre'
    };

    document.title = titles[currentPage] || 'Noble Visa Centre | Study Abroad & Student Visa Consultants';
  }, [currentPage]);

  // Navigate function with URL update and smooth scroll to top
  const navigateTo = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    setQueryParams(params || {});

    let newHash = `#/${page}`;
    if (params && Object.keys(params).length > 0) {
      const sp = new URLSearchParams(params);
      newHash += `?${sp.toString()}`;
    }

    window.history.pushState(null, '', newHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToForm = () => {
    navigateTo('consultation');
  };

  // Direct navigation handlers (Zero pop-ups)
  const handleSelectCountry = (country: Country) => {
    if (country.id === 'other-destination') {
      navigateTo('consultation', { destination: 'Other / Not Decided', interest: 'Study Abroad' });
      return;
    }
    navigateTo('countries', { country: country.id });
  };

  const handleSelectVisa = (visa: VisaService) => {
    if (visa.id === 'student-visa') {
      navigateTo('programs');
    } else if (visa.id === 'tourist-visa') {
      navigateTo('countries', { visaType: 'tourist' });
    } else if (visa.id === 'business-visa') {
      navigateTo('countries', { visaType: 'business' });
    } else if (visa.id === 'family-visa') {
      navigateTo('countries', { visaType: 'family' });
    } else if (visa.id === 'employment-visa') {
      navigateTo('countries', { visaType: 'employment' });
    } else if (visa.id === 'and-more') {
      navigateTo('countries', { visaType: 'other' });
    } else {
      navigateTo('countries', { visaType: visa.id });
    }
  };

  const handleSelectUniversity = (uni: UniversityPartner) => {
    navigateTo('programs', { partner: uni.id, country: uni.countryId });
  };

  const handleOpenConsultationModal = (visaType?: string) => {
    navigateTo('consultation', visaType ? { visaType } : undefined);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Top Header with Navigation and WhatsApp Consultation Button */}
      <Header 
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultationModal={handleOpenConsultationModal}
        onSelectVisa={handleSelectVisa}
        onSelectCountry={handleSelectCountry}
      />

      {/* Dynamic Main View Router */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME PAGE */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 1. Hero Section */}
            <Hero 
              onOpenConsultationModal={handleOpenConsultationModal}
              onScrollToForm={handleScrollToForm}
            />

            {/* 2. Interactive Intersecting Animated Ribbon Ticker */}
            <RibbonTicker />

            {/* 3. Visa Categories (Direct Navigation) */}
            <VisaServices onSelectVisa={handleSelectVisa} />

            {/* 4. Why Choose Noble Visa Centre */}
            <WhyChooseUs />

            {/* 5. Countries We Assist (Interactive filterable Grid - Direct to /countries) */}
            <CountriesGrid 
              onSelectCountry={handleSelectCountry}
              onExploreAll={() => navigateTo('countries')}
            />

            {/* 6. Top Universities & Partners (Direct to /programs or /universities) */}
            <UniversitiesSection 
              onSelectUniversity={handleSelectUniversity}
              onOpenConsultationModal={handleOpenConsultationModal}
              onExploreAllUniversities={() => navigateTo('universities')}
            />

            {/* 7. Success Stories Deep Navy Showcase (Inline Testimonials) */}
            <SuccessStories 
              onOpenConsultation={(params) => navigateTo('consultation', params)}
              onViewAllStories={() => navigateTo('stories')}
            />

            {/* WhatsApp Expert Advice CTA Banner */}
            <WhatsAppCtaBanner 
              onViewTestimonials={() => navigateTo('stories')} 
            />
          </div>
        )}

        {/* VIEW 2: COUNTRIES PAGE (Full Destination & Visa Dossier - Zero Pop-ups) */}
        {currentPage === 'countries' && (
          <CountriesPage 
            initialCountry={queryParams.country}
            initialVisaType={queryParams.visaType}
            onNavigate={navigateTo}
            onOpenConsultation={(params) => navigateTo('consultation', params)}
          />
        )}

        {/* VIEW 3: UNIVERSITIES PAGE */}
        {currentPage === 'universities' && (
          <UniversitiesPage 
            initialCountryId={queryParams.country}
            onNavigate={navigateTo}
            onOpenConsultation={(params) => navigateTo('consultation', params)}
          />
        )}

        {/* VIEW 4: PROGRAMS PAGE (Inline Program Details & Admission Requirements) */}
        {currentPage === 'programs' && (
          <ProgramsPage 
            initialCountryId={queryParams.country}
            initialUniversityId={queryParams.partner || queryParams.university}
            onNavigate={navigateTo}
            onOpenConsultation={(params) => navigateTo('consultation', params)}
          />
        )}

        {/* VIEW 5: FREE CONSULTATION PAGE */}
        {currentPage === 'consultation' && (
          <ConsultationPage 
            initialDestination={queryParams.destination || queryParams.country}
            initialLevel={queryParams.level}
            initialField={queryParams.field}
            initialVisaType={queryParams.visaType}
          />
        )}

        {/* VIEW 6: SUCCESS STORIES PAGE (Video Testimonials) */}
        {(currentPage === 'success-stories' || currentPage === 'stories') && (
          <SuccessStoriesPage 
            onNavigate={navigateTo}
            onOpenConsultation={(params) => navigateTo('consultation', params)}
          />
        )}

        {/* VIEW 7: VISUAL SITEMAP & DIRECTORY PAGE */}
        {(currentPage === 'sitemap' || currentPage === 'site-map') && (
          <SitemapPage 
            onNavigate={navigateTo}
          />
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

    </div>
  );
}
