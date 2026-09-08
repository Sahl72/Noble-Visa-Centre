import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  FileCheck2, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle, 
  MapPin, 
  Briefcase, 
  Home, 
  Globe, 
  Building2, 
  CreditCard,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProgramItem, UniversityPartner } from '../../types';
import { getWhatsAppUrl } from '../../data/visaData';
import { WhatsAppIcon } from '../Header';
import { UniversityLogo } from '../UniversityLogo';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  university?: UniversityPartner | null;
  onClose: () => void;
  onOpenConsultation?: (params?: Record<string, string>) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  university,
  onClose,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'documents' | 'payment'>('overview');

  if (!program) return null;

  const handleWhatsAppConsult = () => {
    const text = `Hi Noble Visa Centre, I'd like a free consultation.
Country: ${program.country}
Visa Type: Student Visa
University: ${program.universityName}
Program: ${program.name}
Intake: ${program.intake}`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#071330] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 max-w-2xl">
            <UniversityLogo
              id={program.universityId || university?.id}
              name={program.universityName}
              country={program.country}
              size="md"
              layout="badge"
            />

            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                  {program.level} Program
                </span>
                {program.directPayment && (
                  <span className="text-[11px] font-extrabold bg-emerald-500 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Direct University Payment Available*</span>
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                {program.name}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white">{program.universityName}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{program.country}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Stat Metric Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-50 border-b border-slate-200 p-3 sm:p-4 gap-2 sm:gap-3 text-center">
          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <Clock className="w-3 h-3 text-blue-600" />
              <span>Duration</span>
            </div>
            <p className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{program.duration}</p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <Calendar className="w-3 h-3 text-emerald-600" />
              <span>Intake</span>
            </div>
            <p className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{program.intake}</p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <FileCheck2 className="w-3 h-3 text-amber-600" />
              <span>IELTS</span>
            </div>
            <p className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{program.ielts}</p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <UserCheck className="w-3 h-3 text-purple-600" />
              <span>Age Limit</span>
            </div>
            <p className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{program.ageLimit || 'Flexible*'}</p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-4 sm:px-6 bg-white overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'requirements', label: 'Entry Requirements' },
            { id: 'documents', label: 'Documents Required' },
            { id: 'payment', label: 'Tuition & Payment' }
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

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 text-slate-800">
          
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* About description */}
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  About the Program
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {program.overview}
                </p>
              </div>

              {/* Highlights Bullet Cards */}
              {program.whyChoose && program.whyChoose.length > 0 && (
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Why Choose This Program?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {program.whyChoose.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-950">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Facts Grid */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Important Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span><strong>Processing Time:</strong> {program.processingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-600" />
                    <span><strong>Medium of Instruction:</strong> {program.mediumOfInstruction || 'English Medium'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    <span><strong>Part-Time Work:</strong> {program.partTimeWork || 'Permitted as per country law'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-amber-600" />
                    <span><strong>Accommodation:</strong> {program.accommodation || 'Student hostels available'}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
                Minimum Entry & Academic Requirements
              </h4>
              <p className="text-xs text-slate-500">
                Admissions are evaluated based on individual academic background. English medium waiver letters are accepted for eligible applicants.
              </p>
              <div className="space-y-2.5 pt-2">
                {program.entryRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
                Required Application Documents
              </h4>
              <p className="text-xs text-slate-500">
                Noble Visa Centre assists with complete certified translations, embassy attestations, and university dossier preparation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {program.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
                    <FileCheck2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {program.directPayment ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Direct In-Hand University Payment Available</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
                    For programs at this institution in {program.country}, students can carry and pay their tuition fees directly by hand upon arrival at the university campus. No middlemen, and zero university payments in Sri Lanka.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-bold text-emerald-950">
                    <div className="bg-white/80 p-2.5 rounded-lg">✓ Pay by hand on arrival</div>
                    <div className="bg-white/80 p-2.5 rounded-lg">✓ Zero fees in Sri Lanka</div>
                    <div className="bg-white/80 p-2.5 rounded-lg">✓ No middleman markups</div>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-blue-950">Accredited University Tuition Structure</h4>
                  <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                    Tuition fees are paid directly to the accredited institution in accordance with official university acceptance and student visa guidelines.
                  </p>
                </div>
              )}

              <p className="text-[11px] text-slate-500 italic">
                * Note: Tuition fees, living expenses, and scholarship concessions vary by academic intake and campus guidelines. Connect with our counselors on WhatsApp for an exact financial breakdown.
              </p>
            </div>
          )}

          {/* Direct Payment Highlight Banner if eligible */}
          {program.directPayment && activeTab !== 'payment' && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct In-Hand Payment: Carry and pay tuition directly to the campus upon arrival in {program.country}. No payment in Sri Lanka.</span>
              </div>
              <button
                onClick={() => setActiveTab('payment')}
                className="text-[11px] font-extrabold text-emerald-700 hover:underline whitespace-nowrap"
              >
                Learn More →
              </button>
            </div>
          )}

        </div>

        {/* Footer CTA Bar */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900">
              Want to know if you are eligible?
            </h5>
            <p className="text-xs text-slate-500">
              Chat with our experts on WhatsApp for immediate application assessment.
            </p>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={handleWhatsAppConsult}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>Get Free Consultation on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
