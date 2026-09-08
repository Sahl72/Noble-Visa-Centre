import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  HelpCircle, 
  Plane, 
  Briefcase, 
  Users, 
  Building2, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { Country, VisaService } from '../../types';
import { getWhatsAppUrl } from '../../data/visaData';
import { WhatsAppIcon } from '../Header';

interface VisaInfoModalProps {
  country: Country | null;
  visaTypeKey: string; // 'tourist' | 'business' | 'family' | 'employment' | 'e-visa' | 'other'
  onClose: () => void;
  onOpenConsultation?: (params?: Record<string, string>) => void;
}

export const VisaInfoModal: React.FC<VisaInfoModalProps> = ({
  country,
  visaTypeKey,
  onClose,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'process' | 'faqs'>('overview');

  if (!country) return null;

  const visaTypeLabels: Record<string, { title: string; icon: any; color: string; desc: string }> = {
    tourist: {
      title: 'Tourist & Visitor Visa',
      icon: Plane,
      color: 'text-amber-600 bg-amber-50',
      desc: `Facilitating leisure travel, family visits, and tourist exploration in ${country.name}.`
    },
    business: {
      title: 'Business & Commercial Visa',
      icon: Briefcase,
      color: 'text-emerald-600 bg-emerald-50',
      desc: `For attending trade exhibitions, corporate conferences, investor meetings, and commercial negotiations in ${country.name}.`
    },
    family: {
      title: 'Family & Dependent Visa',
      icon: Users,
      color: 'text-purple-600 bg-purple-50',
      desc: `Sponsorship and visitation permits for spouses, children, and immediate relatives traveling to ${country.name}.`
    },
    employment: {
      title: 'Employment & Work Permit Assistance',
      icon: Building2,
      color: 'text-indigo-600 bg-indigo-50',
      desc: `Guidance on employment visa attestations, contract verifications, and overseas work entry requirements for ${country.name}.`
    },
    'e-visa': {
      title: 'Electronic Visa (E-Visa) Processing',
      icon: Sparkles,
      color: 'text-blue-600 bg-blue-50',
      desc: `Fast-track digital electronic tourist and business visas issued online directly for ${country.name}.`
    }
  };

  const currentTypeInfo = visaTypeLabels[visaTypeKey] || {
    title: `${visaTypeKey.toUpperCase()} Visa`,
    icon: HelpCircle,
    color: 'text-blue-600 bg-blue-50',
    desc: `Comprehensive visa facilitation services for ${country.name}.`
  };

  const IconComponent = currentTypeInfo.icon;

  const handleWhatsAppConsult = () => {
    const text = `Hi Noble Visa Centre, I would like expert advice on obtaining a ${currentTypeInfo.title} for ${country.name}. Please guide me on documents and timelines.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-[#071330] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white text-xl">
              <span>{country.flag}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-300">
                  {country.name} VISA SERVICES
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {currentTypeInfo.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 bg-slate-50 border-b border-slate-200 p-3 sm:p-4 gap-2 text-center text-xs font-semibold text-slate-700">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Processing Time</span>
            <span className="text-slate-900 font-bold">{country.processingTime || '7 - 14 Working Days'}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Entry Type</span>
            <span className="text-slate-900 font-bold">Single / Multiple Entry</span>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-white p-2.5 rounded-xl border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Noble Assistance</span>
            <span className="text-emerald-700 font-bold">Complete Documentation</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 px-4 sm:px-6 bg-white overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Requirements' },
            { id: 'documents', label: 'Required Documents' },
            { id: 'process', label: 'Application Steps' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-slate-800">
          
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {currentTypeInfo.desc}
              </p>

              <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900">
                  Noble Visa Centre Service Guarantee
                </h4>
                <ul className="text-xs text-blue-950 space-y-1.5 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Thorough dossier pre-screening by senior visa officers.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Official embassy appointment scheduling & biometric coordination.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Cover letter, travel itinerary & hotel booking formatting.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-3 animate-in fade-in">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Standard Document Checklist for {country.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  'Original Passport (valid 6+ months with 2 blank pages)',
                  'Recent white background passport photographs',
                  'Completed official visa application form',
                  'Proof of financial means / Bank statements (last 3-6 months)',
                  'Confirmed flight reservation & hotel booking itinerary',
                  'Employment proof / Business registration / Leave approval letter',
                  'National Identity Card (NIC) & Birth Certificate copies',
                  'Travel medical insurance (where applicable)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800">
                    <FileCheck2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-3 animate-in fade-in">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                4-Step Application Procedure
              </h4>
              <div className="space-y-2.5">
                {[
                  { step: '1', title: 'Consultation & Profile Audit', desc: 'We verify your documents, travel purpose, and embassy requirements.' },
                  { step: '2', title: 'Dossier Preparation & Formatting', desc: 'Our team prepares your official forms, translations, and itinerary package.' },
                  { step: '3', title: 'Embassy Submission / Biometrics', desc: 'Direct submission or appointment at the VFS / Embassy visa center.' },
                  { step: '4', title: 'Visa Decision & Passport Collection', desc: 'Prompt collection and pre-departure briefing by Noble Visa Centre.' }
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{s.title}</h5>
                      <p className="text-[11px] text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900">
              Ready to apply for {country.name}?
            </h5>
            <p className="text-xs text-slate-500">
              Connect with our visa executive for immediate document review.
            </p>
          </div>

          <button
            onClick={handleWhatsAppConsult}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
};
