import React from 'react';
import { ArrowRight, Building, Award, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';
import { UNIVERSITY_PARTNERS } from '../data/visaData';
import { UniversityPartner } from '../types';
import { UniversityLogo } from './UniversityLogo';

interface UniversitiesSectionProps {
  onSelectUniversity: (uni: UniversityPartner) => void;
  onOpenConsultationModal: (visaType?: string) => void;
  onExploreAllUniversities?: () => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ 
  onSelectUniversity,
  onOpenConsultationModal,
  onExploreAllUniversities
}) => {
  const featuredPartners = [
    { id: 'omnis', name: 'Omnis International University', matchId: 'omnis' },
    { id: 'moscow-ling', name: 'Moscow Linguistic University', matchId: 'moscow-ling' },
    { id: 'moscow-pushkin', name: 'Moscow Pushkin University', matchId: 'moscow-pushkin' },
    { id: 'amrita', name: 'Chennai Amirta Campus', matchId: 'amrita' },
    { id: 'bhms', name: 'Swiss B.H.M.S.', matchId: 'bhms' },
    { id: 'finwin', name: 'Fin Win Campus', matchId: 'finwin' }
  ];

  return (
    <section id="universities" className="py-12 sm:py-16 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052cc]">
            TOP UNIVERSITIES & PARTNERS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#071946] tracking-tight">
            Partnered With Reputable Universities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto">
            Official Country Manager & Accredited Institutional Partner for leading universities worldwide.
          </p>
        </div>

        {/* Partner Logos Unified White Card Container */}
        <div 
          id="partner-universities-card"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 transition-all duration-300"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6 items-center justify-items-center">
            {featuredPartners.map((item) => {
              const partnerObj = UNIVERSITY_PARTNERS.find(u => u.id === item.matchId) || {
                id: item.id,
                name: item.name,
                location: 'International',
                logoText: item.id.toUpperCase(),
                type: 'University Partner',
                country: 'Global'
              } as UniversityPartner;

              return (
                <div 
                  key={item.id}
                  onClick={() => onSelectUniversity(partnerObj)}
                  className="cursor-pointer transition-transform hover:-translate-y-1 w-full max-w-[170px]"
                >
                  <UniversityLogo
                    id={item.id}
                    name={item.name}
                    layout="tile"
                    size="lg"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* View All Universities Link */}
        <div>
          <button
            onClick={() => {
              if (onExploreAllUniversities) {
                onExploreAllUniversities();
              } else {
                const uni = UNIVERSITY_PARTNERS[0];
                if (uni) onSelectUniversity(uni);
              }
            }}
            id="view-all-universities-link-btn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors group cursor-pointer"
          >
            <span>Explore All Partner Universities & Global Database</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};


