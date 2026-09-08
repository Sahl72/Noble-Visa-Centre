import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Globe2, 
  Building2, 
  FileText, 
  Compass, 
  Users, 
  MessageSquare, 
  Plane, 
  CreditCard, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2
} from 'lucide-react';

const RIBBON_ITEMS_1 = [
  { text: "Student Visa Guidance", icon: GraduationCap, isSolid: true, emoji: "🎓" },
  { text: "Global Destinations", icon: Globe2, isSolid: false, emoji: "🌍" },
  { text: "University Admissions", icon: Building2, isSolid: true, emoji: "🏛️" },
  { text: "Document Guidance", icon: FileText, isSolid: false, emoji: "📄" },
  { text: "Expert Visa Advice", icon: Compass, isSolid: true, emoji: "🧭" },
  { text: "End-to-End Support", icon: Users, isSolid: false, emoji: "🤝" },
  { text: "WhatsApp Assistance", icon: MessageSquare, isSolid: true, emoji: "💬" },
  { text: "Travel Guidance", icon: Plane, isSolid: false, emoji: "✈️" },
];

const RIBBON_ITEMS_2 = [
  { text: "Direct University Payment*", icon: CreditCard, isSolid: true, emoji: "💳" },
  { text: "Russia Study Specialists", icon: Globe2, isSolid: false, emoji: "🇷🇺" },
  { text: "University Partnerships", icon: Building2, isSolid: true, emoji: "🏛️" },
  { text: "Multiple Study Pathways", icon: GraduationCap, isSolid: false, emoji: "🎓" },
  { text: "Study Across Destinations", icon: Globe2, isSolid: true, emoji: "🌍" },
  { text: "Transparent Guidance", icon: ShieldCheck, isSolid: false, emoji: "🛡️" },
  { text: "Experienced Consultants", icon: UserCheck, isSolid: true, emoji: "👨‍💼" },
  { text: "Free WhatsApp Consultation", icon: MessageSquare, isSolid: false, emoji: "💬" },
];

export const RibbonTicker: React.FC = () => {
  return (
    <div className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white select-none border-y border-slate-200/50">
      
      {/* Decorative center ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative flex flex-col justify-center items-center py-6 sm:py-8 overflow-hidden min-h-[140px] sm:min-h-[180px]">
        
        {/* Ribbon 1: Angled slightly clockwise (-2deg) moving Left */}
        <div className="w-[120%] -ml-[10%] transform -rotate-2 bg-[#071330] shadow-xl py-3 sm:py-4 border-y-2 border-blue-500/30 flex overflow-hidden z-10">
          <motion.div 
            className="flex items-center space-x-8 sm:space-x-12 whitespace-nowrap will-change-transform"
            animate={{ x: [0, -1400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear",
              },
            }}
          >
            {[...RIBBON_ITEMS_1, ...RIBBON_ITEMS_1, ...RIBBON_ITEMS_1, ...RIBBON_ITEMS_1].map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-900/60 border border-blue-400/40 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-inner text-sm sm:text-base">
                    <span>{item.emoji}</span>
                  </div>
                  {item.isSolid ? (
                    <span className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                      {item.text}
                    </span>
                  ) : (
                    <span className="text-sm sm:text-base font-extrabold text-transparent uppercase tracking-wider [-webkit-text-stroke:1px_#93c5fd] opacity-90">
                      {item.text}
                    </span>
                  )}
                  <span className="text-amber-400/60 font-bold ml-4">•</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Ribbon 2: Angled slightly counter-clockwise (2deg) moving Right (Intersecting Cross) */}
        <div className="w-[120%] -ml-[10%] transform rotate-2 bg-[#0a1e4a] shadow-2xl py-3 sm:py-4 border-y-2 border-amber-400/30 flex overflow-hidden -mt-6 sm:-mt-8 z-20 mix-blend-normal">
          <motion.div 
            className="flex items-center space-x-8 sm:space-x-12 whitespace-nowrap will-change-transform"
            animate={{ x: [-1400, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 26,
                ease: "linear",
              },
            }}
          >
            {[...RIBBON_ITEMS_2, ...RIBBON_ITEMS_2, ...RIBBON_ITEMS_2, ...RIBBON_ITEMS_2].map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-950/80 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-inner text-sm sm:text-base">
                    <span>{item.emoji}</span>
                  </div>
                  {item.isSolid ? (
                    <span className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                      {item.text}
                    </span>
                  ) : (
                    <span className="text-sm sm:text-base font-black text-transparent uppercase tracking-wider [-webkit-text-stroke:1px_#ffffff] opacity-85">
                      {item.text}
                    </span>
                  )}
                  <span className="text-blue-400/60 font-bold ml-4">•</span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </div>
  );
};
