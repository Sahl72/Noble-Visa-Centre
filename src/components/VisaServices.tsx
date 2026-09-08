import React from 'react';
import { 
  GraduationCap, 
  Luggage, 
  Briefcase, 
  Users, 
  Handshake, 
  ClipboardList, 
  ArrowRight 
} from 'lucide-react';
import { VISA_SERVICES } from '../data/visaData';
import { VisaService } from '../types';

interface VisaServicesProps {
  onSelectVisa: (visa: VisaService) => void;
}

export const VisaServices: React.FC<VisaServicesProps> = ({ onSelectVisa }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
      case 'Luggage':
        return <Luggage className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
      case 'Briefcase':
        return <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
      case 'Users':
        return <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
      case 'Handshake':
        return <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
      case 'ClipboardList':
      default:
        return <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12 text-[#0052cc] stroke-[1.8]" />;
    }
  };

  return (
    <section id="services" className="py-6 sm:py-8 bg-transparent font-sans scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified 6-Item White Strip Card (Matches User Uploaded Screenshot) */}
        <div 
          id="visa-categories-strip"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-3 sm:p-5 transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {VISA_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => onSelectVisa(service)}
                id={`visa-card-${service.id}`}
                className={`group py-5 px-3 sm:px-4 text-center flex flex-col items-center justify-between rounded-xl hover:bg-blue-50/50 transition-all duration-200 cursor-pointer ${
                  idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-5' : ''
                }`}
              >
                {/* Large Royal Blue Icon */}
                <div className="mb-4 transform group-hover:scale-108 transition-transform duration-300 flex items-center justify-center h-14">
                  {getIcon(service.iconName)}
                </div>

                {/* Uppercase Title & Subtitle */}
                <div className="space-y-1 mb-4 flex-grow flex flex-col justify-center">
                  <h3 className="text-xs sm:text-sm font-black text-[#0052cc] tracking-wider uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug">
                    {service.subtitle}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-auto inline-flex items-center justify-center gap-1 text-xs font-bold text-[#0052cc] group-hover:text-blue-900 group-hover:underline transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
