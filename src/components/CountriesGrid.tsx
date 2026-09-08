import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COUNTRIES } from '../data/visaData';
import { Country } from '../types';
import { TrustStatsBar } from './TrustStatsBar';

interface CountriesGridProps {
  onSelectCountry: (country: Country) => void;
  onExploreAll: () => void;
}

export const CountriesGrid: React.FC<CountriesGridProps> = ({ onSelectCountry, onExploreAll }) => {
  // Target 7 featured countries in exact sequence from screenshot + & More
  const featuredIds = ['russia', 'malaysia', 'singapore', 'thailand', 'vietnam', 'dubai', 'uk'];
  
  const displayCountries = featuredIds
    .map(id => COUNTRIES.find(c => c.id === id))
    .filter((c): c is Country => Boolean(c));

  return (
    <section id="countries" className="py-10 sm:py-14 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0052cc]">
            COUNTRIES WE ASSIST
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#071946] tracking-tight">
            Your Future, Across the Globe
          </h2>
        </div>

        {/* 8-Card Country Row (7 Featured Countries + & More Card) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-2.5 sm:gap-3 lg:gap-3.5 items-stretch">
          {displayCountries.map((country) => (
            <div
              key={country.id}
              onClick={() => onSelectCountry(country)}
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

              {/* Country Name */}
              <div className="pt-2 pb-3.5 px-1.5 w-full flex items-center justify-center min-h-[44px]">
                <span className="text-xs sm:text-[13px] font-black text-[#071946] group-hover:text-[#0052cc] transition-colors leading-tight tracking-tight">
                  {country.name}
                </span>
              </div>
            </div>
          ))}

          {/* 8th Card: "& More" Card with High-Res Blue Globe Icon */}
          <div
            onClick={onExploreAll}
            id="country-card-more"
            className="group bg-[#ebf3ff] hover:bg-[#e0edff] rounded-2xl border border-blue-200/80 hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-3 text-center min-h-[140px] sm:min-h-[170px]"
          >
            {/* Round Globe Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2 sm:mb-3 transition-transform group-hover:scale-110 shadow-xs">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0052cc] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>

            {/* & More Text */}
            <span className="text-xs sm:text-[13px] font-black text-[#0052cc] group-hover:text-blue-900 transition-colors">
              & More
            </span>
          </div>
        </div>

        {/* Explore All Countries Link */}
        <div className="pt-0.5">
          <button
            onClick={onExploreAll}
            id="explore-all-countries-link-btn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052cc] hover:text-blue-900 transition-colors group cursor-pointer"
          >
            <span>Explore All Countries</span>
            <ArrowRight className="w-4 h-4 text-[#0052cc] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Stats Bar */}
        <div className="pt-2">
          <TrustStatsBar className="px-0 sm:px-0 lg:px-0" />
        </div>

      </div>
    </section>
  );
};


