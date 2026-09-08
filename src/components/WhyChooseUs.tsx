import React from 'react';
import { 
  UserCheck, 
  Globe2, 
  ShieldCheck, 
  FileCheck2, 
  Building2, 
  Award 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-noble" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout: Full Left Copy & Centered Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Header + 6 Feature Cards + Footnote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Header */}
            <div className="mb-8 text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1a56db]">
                WHY CHOOSE NOBLE VISA CENTRE?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a193b] mt-1.5 tracking-tight">
                Clear Guidance. Verified Pathways. <br className="hidden sm:inline" />
                Transparent Support.
              </h2>
            </div>

            {/* 6 Feature Cards (2 cols on sm/md) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              
              {/* 1. Expert Counsellors */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <UserCheck className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">Expert Counsellors</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experienced team providing honest and personalised guidance.
                  </p>
                </div>
              </div>

              {/* 2. Transparent Processes */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <FileCheck2 className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">Transparent Processes</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clear documentation, fees and step-by-step guidance.
                  </p>
                </div>
              </div>

              {/* 3. Wide Range of Destinations */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <Globe2 className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">Wide Range of Destinations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Study, visit, work and settle in top countries worldwide.
                  </p>
                </div>
              </div>

              {/* 4. Direct University Payment Options */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <Building2 className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">Direct University Payment Options</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For selected institutions in Russia, Malaysia & Singapore, students may pay fees directly to the university*.
                  </p>
                </div>
              </div>

              {/* 5. End-to-End Support */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">End-to-End Support</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    From choosing the right option to visa approval and beyond.
                  </p>
                </div>
              </div>

              {/* 6. Proven Track Record */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 shadow-2xs">
                  <Award className="w-6 h-6 text-[#1a56db]" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-[#0a193b]">Proven Track Record</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thousands of successful students and satisfied clients since 2009.
                  </p>
                </div>
              </div>

            </div>

            {/* Footnote matching screenshot */}
            <p className="text-[11px] text-slate-400 italic mt-6 pt-3 border-t border-slate-200 text-left">
              *For selected institutions and eligible programs, direct university-payment options may be available. Terms, payment deadlines, and procedures vary by university.
            </p>
          </div>

          {/* Right Column: Counselling Photo + "Since 2009 | 15+ Years of Trust & Experience" Badge */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src="https://res.cloudinary.com/fivl3klo/image/upload/v1788445347/8f1cc42f-c2c8-4201-92bf-399b7525ba7c.png" 
                alt="Noble Visa Centre Counselling Team and Students"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a193b]/60 via-transparent to-transparent"></div>

              {/* "Since 2009 | 15+ Years of Trust & Experience" Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-[#0a1b42] text-white px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-2xl border border-blue-500/30 flex items-center gap-3.5 sm:gap-4">
                <div className="flex flex-col text-right border-r border-blue-700/80 pr-3 sm:pr-3.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Since</span>
                  <span className="text-lg sm:text-xl font-extrabold text-amber-400">2009</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold text-white leading-tight">15+ Years</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight">of Trust & Experience</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
