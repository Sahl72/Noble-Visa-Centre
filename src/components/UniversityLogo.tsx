import React, { useState } from 'react';
import { GraduationCap, Building2, Globe, Award, BookOpen, Star, Sparkles } from 'lucide-react';

export interface UniversityLogoProps {
  id?: string;
  name?: string;
  country?: string;
  domain?: string;
  website?: string;
  logoUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  layout?: 'badge' | 'tile' | 'horizontal' | 'icon-only';
  className?: string;
  showSubtitle?: boolean;
}

export interface OfficialLogoConfig {
  name: string;
  shortName: string;
  logoUrl: string;
  subtitle: string;
  officialRole: string;
  country: string;
  bgClass?: string;
  paddingClass?: string;
}

// 5 Key Official Partner Universities with their exact provided logos
export const OFFICIAL_UNIVERSITY_LOGOS: Record<string, OfficialLogoConfig> = {
  'moscow-ling': {
    name: 'Moscow Linguistic University',
    shortName: 'Moscow Linguistic',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqywag-pDnqezZLyF5yLmY6iy_aO_eirU6eOEAh7g5_W_rYtKUr8_7wU&s=10',
    subtitle: 'State Linguistic University',
    officialRole: 'Official Country Manager • Moscow, Russia',
    country: 'Russia',
    bgClass: 'bg-white',
    paddingClass: 'p-1.5'
  },
  'moscow-pushkin': {
    name: 'Moscow Pushkin University',
    shortName: 'Pushkin University',
    logoUrl: 'https://www.pushkin.institute/wp-content/themes/neve/assets/img/pushkin_logo_hdr_en.svg',
    subtitle: 'Pushkin State Institute',
    officialRole: 'Official Country Manager • Moscow, Russia',
    country: 'Russia',
    bgClass: 'bg-white',
    paddingClass: 'p-1.5'
  },
  'amrita': {
    name: 'Chennai Amirta Campus',
    shortName: 'Chennai Amirta',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcJ0NnQPfKI2Uibi7bvrSgrJJVaUtvwZKbmCfdC5dXg&s=10',
    subtitle: 'Hospitality & Aviation Academy',
    officialRole: 'Official Country Representative • Chennai, India',
    country: 'India',
    bgClass: 'bg-white',
    paddingClass: 'p-1.5'
  },
  'bhms': {
    name: 'Swiss B.H.M.S.',
    shortName: 'Swiss B.H.M.S.',
    logoUrl: 'https://images.seeklogo.com/logo-png/26/1/b-h-m-s-business-hotel-management-school-logo-png_seeklogo-267432.png',
    subtitle: 'Business & Hotel Management',
    officialRole: 'Official Country Representative • Lucerne, Switzerland',
    country: 'Switzerland',
    bgClass: 'bg-white',
    paddingClass: 'p-1.5'
  },
  'finwin': {
    name: 'Fin Win Campus',
    shortName: 'Fin Win Campus',
    logoUrl: 'https://www.finwin.education/medias/contact_page/big/16/campus-logo-landscape.png',
    subtitle: 'Dubai Knowledge Park',
    officialRole: 'Official Country Manager • Dubai, UAE',
    country: 'Dubai (UAE)',
    bgClass: 'bg-white',
    paddingClass: 'p-1.5'
  }
};

// Global lookup for official domains of popular institutions
const KNOWN_UNIVERSITY_DOMAINS: Record<string, string> = {
  // Russia
  'kazan': 'kpfu.ru',
  'kazanfederal': 'kpfu.ru',
  'kfu': 'kpfu.ru',
  'rudn': 'rudn.ru',
  'rudnuniversity': 'rudn.ru',
  'peoplesfriendship': 'rudn.ru',
  'moscowling': 'linguanet.ru',
  'moscowlinguistic': 'linguanet.ru',
  'mslu': 'linguanet.ru',
  'pushkin': 'pushkin.institute',
  'moscowpushkin': 'pushkin.institute',
  'omnis': 'omnis-holding.com',
  'msu': 'msu.ru',
  'lomonosov': 'msu.ru',
  'spbu': 'spbu.ru',
  'saintpetersburg': 'spbu.ru',
  'hse': 'hse.ru',
  'sechenov': 'sechenov.ru',
  'pirogov': 'rsmu.ru',

  // India
  'amrita': 'chennaiamirta.edu.in',
  'amirta': 'chennaiamirta.edu.in',
  'chennaiamirta': 'chennaiamirta.edu.in',
  'iitb': 'iitb.ac.in',
  'iitd': 'iitd.ac.in',
  'iitm': 'iitm.ac.in',

  // Switzerland
  'bhms': 'bhms.ch',
  'swissbhms': 'bhms.ch',
  'ethz': 'ethz.ch',
  'epfl': 'epfl.ch',
  'unige': 'unige.ch',

  // UAE / Dubai
  'finwin': 'finwinedu.com',
  'finwincampus': 'finwinedu.com',
  'uowd': 'uowdubai.ac.ae',
  'heriotwatt': 'hw.ac.uk',
  'mdx': 'mdx.ac.ae',

  // Belarus
  'bsu': 'bsu.by',
  'bsulanguages': 'mslu.by',
  'bsufl': 'mslu.by',
  'bsuir': 'bsuir.by',

  // Malaysia
  'cityuni': 'city.edu.my',
  'cityuniversity': 'city.edu.my',
  'malaysiacityuni': 'city.edu.my',
  'um': 'um.edu.my',
  'ukm': 'ukm.my',
  'upm': 'upm.edu.my',
  'utm': 'utm.my',
  'taylors': 'taylors.edu.my',
  'sunway': 'sunway.edu.my',

  // Singapore
  'psb': 'psb-academy.edu.sg',
  'psbacademy': 'psb-academy.edu.sg',
  'nus': 'nus.edu.sg',
  'ntu': 'ntu.edu.sg',
  'smu': 'smu.edu.sg',

  // UK
  'oxford': 'ox.ac.uk',
  'cambridge': 'cam.ac.uk',
  'imperial': 'imperial.ac.uk',
  'ucl': 'ucl.ac.uk',
  'edinburgh': 'ed.ac.uk',
  'manchester': 'manchester.ac.uk',
  'kcl': 'kcl.ac.uk',
  'coventry': 'coventry.ac.uk',
  'greenwich': 'gre.ac.uk',

  // USA
  'harvard': 'harvard.edu',
  'mit': 'mit.edu',
  'stanford': 'stanford.edu',
  'berkeley': 'berkeley.edu',
  'columbia': 'columbia.edu',
  'nyu': 'nyu.edu',

  // Canada
  'utoronto': 'utoronto.ca',
  'ubc': 'ubc.ca',
  'mcgill': 'mcgill.ca',

  // Australia & NZ
  'unimelb': 'unimelb.edu.au',
  'sydney': 'sydney.edu.au',
  'unsw': 'unsw.edu.au',
  'auckland': 'auckland.ac.nz'
};

function resolveOfficialConfig(id: string, name: string): OfficialLogoConfig | null {
  const normId = (id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const normName = (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normId.includes('moscowling') || normId.includes('mslu') || normName.includes('linguistic') || normName.includes('moscowling') || normId === 'moscow-ling') {
    return OFFICIAL_UNIVERSITY_LOGOS['moscow-ling'];
  }
  if (normId.includes('pushkin') || normName.includes('pushkin') || normId === 'moscow-pushkin') {
    return OFFICIAL_UNIVERSITY_LOGOS['moscow-pushkin'];
  }
  if (normId.includes('amrita') || normId.includes('amirta') || normName.includes('amrita') || normName.includes('amirta') || normName.includes('chennai')) {
    return OFFICIAL_UNIVERSITY_LOGOS['amrita'];
  }
  if (normId.includes('bhms') || normName.includes('bhms') || normName.includes('hotelmanagementschool') || normName.includes('swissbhms')) {
    return OFFICIAL_UNIVERSITY_LOGOS['bhms'];
  }
  if (normId.includes('finwin') || normName.includes('finwin') || normName.includes('finwineducation')) {
    return OFFICIAL_UNIVERSITY_LOGOS['finwin'];
  }
  return null;
}

export const UniversityLogo: React.FC<UniversityLogoProps> = ({
  id = '',
  name = '',
  country = '',
  domain: propDomain = '',
  website = '',
  logoUrl: propLogoUrl = '',
  size = 'md',
  layout = 'badge',
  className = '',
  showSubtitle = true
}) => {
  const [imageError, setImageError] = useState(false);
  const normId = (id || name).toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check for official matching config
  const officialConfig = resolveOfficialConfig(id, name);
  const targetOfficialLogoUrl = propLogoUrl || (officialConfig ? officialConfig.logoUrl : null);

  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-11 h-11',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
    '2xl': 'w-28 h-28'
  };

  const imageSizes = {
    xs: 32,
    sm: 48,
    md: 64,
    lg: 128,
    xl: 128,
    '2xl': 128
  };

  // 1. If we have an official logo URL or explicitly supplied logoUrl and no error, render the crisp image
  if (targetOfficialLogoUrl && !imageError) {
    if (layout === 'tile') {
      return (
        <div className={`flex flex-col items-center text-center group ${className}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 mb-2 border border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-blue-400 group-hover:scale-105 transition-all flex items-center justify-center overflow-hidden">
            <img
              src={targetOfficialLogoUrl}
              alt={officialConfig?.name || name || 'University Logo'}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter drop-shadow-2xs"
              loading="lazy"
            />
          </div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight line-clamp-1">
            {officialConfig?.shortName || name || 'University'}
          </h4>
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight line-clamp-1 mt-0.5">
            {officialConfig?.subtitle || country || 'Partner Campus'}
          </p>
        </div>
      );
    }

    if (layout === 'horizontal') {
      return (
        <div className={`flex items-center gap-3.5 ${className}`}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2 shadow-2xs border border-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={targetOfficialLogoUrl}
              alt={officialConfig?.name || name || 'University Logo'}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter drop-shadow-2xs"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              {officialConfig?.name || name || 'Partner University'}
            </h4>
            {showSubtitle && (
              <p className="text-xs text-blue-700 font-semibold mt-0.5">
                {officialConfig?.officialRole || (country ? `Higher Education Institution • ${country}` : 'Global Partner Campus')}
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-white p-1.5 border border-slate-200/90 shadow-2xs flex-shrink-0 flex items-center justify-center overflow-hidden ${className}`}>
        <img
          src={targetOfficialLogoUrl}
          alt={officialConfig?.name || name || 'University Logo'}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain filter drop-shadow-2xs"
          loading="lazy"
        />
      </div>
    );
  }

  // =========================================================================
  // 2. OMNIS (International Educational Holding OMNIS / ОМНИС)
  // =========================================================================
  if (normId.includes('omnis')) {
    const OmnisSvg = ({ className = 'w-full h-full' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="omnis-top-curve" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
          <path id="omnis-bottom-curve" d="M 172,100 A 72,72 0 0,1 28,100" fill="none" />
          <linearGradient id="omnis-shield-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#144a8b" />
            <stop offset="100%" stopColor="#0a2a54" />
          </linearGradient>
          <linearGradient id="omnis-shield-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a3e8" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#0077c8" strokeWidth="7" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#0077c8" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="#0077c8" strokeWidth="2.5" />
        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="7.5" fontWeight="900" fill="#0077c8" letterSpacing="1">
          <textPath href="#omnis-top-curve" startOffset="50%" textAnchor="middle">
            МЕЖДУНАРОДНЫЙ ОБРАЗОВАТЕЛЬНЫЙ ХОЛДИНГ
          </textPath>
        </text>
        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="6.8" fontWeight="900" fill="#0077c8" letterSpacing="0.8">
          <textPath href="#omnis-bottom-curve" startOffset="50%" textAnchor="middle">
            INTERNATIONAL EDUCATIONAL HOLDING OMNIS
          </textPath>
        </text>
        <polygon points="20,100 24,97 27,100 24,103" fill="#0077c8" />
        <polygon points="180,100 176,97 173,100 176,103" fill="#0077c8" />
        <g>
          <path d="M 100,50 L 58,66 L 58,110 C 58,138 100,158 100,158 Z" fill="url(#omnis-shield-left)" />
          <path d="M 100,50 L 142,66 L 142,110 C 142,138 100,158 100,158 Z" fill="url(#omnis-shield-right)" />
          <path d="M 100,54 L 64,69 L 64,107 C 64,131 100,150 100,150 L 136,107 L 136,69 Z" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="100" y1="50" x2="100" y2="158" stroke="#ffffff" strokeWidth="2.5" />
        </g>
        <g>
          <polygon points="46,101 54,92 54,116 46,123 50,107" fill="#061e3c" stroke="#0077c8" strokeWidth="0.8" />
          <polygon points="154,101 146,92 146,116 154,123 150,107" fill="#061e3c" stroke="#0077c8" strokeWidth="0.8" />
          <polygon points="50,94 150,94 146,118 54,118" fill="#ffffff" stroke="#0a2a54" strokeWidth="2" />
          <text x="100" y="112" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="15" fontWeight="900" fill="#0a2a54" letterSpacing="2.5">
            ОМНИС
          </text>
        </g>
      </svg>
    );

    if (layout === 'tile') {
      return (
        <div className={`flex flex-col items-center text-center group ${className}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1 mb-2 border-2 border-blue-100 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <OmnisSvg className="w-full h-full" />
          </div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
            Omnis International
          </h4>
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
            Educational Holding
          </p>
        </div>
      );
    }

    if (layout === 'horizontal') {
      return (
        <div className={`flex items-center gap-3.5 ${className}`}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shadow-sm border border-slate-200 flex-shrink-0 flex items-center justify-center">
            <OmnisSvg className="w-full h-full" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Omnis International University
            </h4>
            {showSubtitle && (
              <p className="text-xs text-blue-700 font-semibold mt-0.5">
                International Educational Holding OMNIS • Russia
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-white p-1 border border-slate-200/90 shadow-sm flex-shrink-0 flex items-center justify-center ${className}`}>
        <OmnisSvg className="w-full h-full" />
      </div>
    );
  }

  // =========================================================================
  // 3. Kazan Federal University (KFU / КФУ)
  // =========================================================================
  if (normId.includes('kazan') || normId.includes('kfu') || normId.includes('kpfu')) {
    const KazanSvg = ({ className = 'w-full h-full' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kfu-navy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003566" />
            <stop offset="100%" stopColor="#001d3d" />
          </linearGradient>
          <linearGradient id="kfu-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd60a" />
            <stop offset="50%" stopColor="#ffc300" />
            <stop offset="100%" stopColor="#d4a373" />
          </linearGradient>
          <path id="kfu-top-curve" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
          <path id="kfu-bottom-curve" d="M 172,100 A 72,72 0 0,1 28,100" fill="none" />
        </defs>

        <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#003566" strokeWidth="6" />
        <circle cx="100" cy="100" r="88" fill="url(#kfu-navy)" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="url(#kfu-gold)" strokeWidth="1.5" strokeDasharray="3 2" />

        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="7" fontWeight="900" fill="url(#kfu-gold)" letterSpacing="0.8">
          <textPath href="#kfu-top-curve" startOffset="50%" textAnchor="middle">
            КАЗАНСКИЙ ФЕДЕРАЛЬНЫЙ УНИВЕРСИТЕТ
          </textPath>
        </text>
        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="6.5" fontWeight="900" fill="#ffffff" letterSpacing="0.8">
          <textPath href="#kfu-bottom-curve" startOffset="50%" textAnchor="middle">
            EST. 1804 • KAZAN FEDERAL UNIVERSITY
          </textPath>
        </text>

        <g fill="url(#kfu-gold)">
          <polygon points="100,52 64,68 136,68" />
          <rect x="64" y="69" width="72" height="4" rx="1" />
          <rect x="68" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="79" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="90" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="105" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="116" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="127" y="74" width="5" height="30" rx="1" fill="#ffffff" />
          <rect x="62" y="105" width="76" height="5" rx="1" />
        </g>

        <rect x="54" y="118" width="92" height="24" rx="6" fill="#ffffff" stroke="url(#kfu-gold)" strokeWidth="2" />
        <text x="100" y="135" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="14" fontWeight="900" fill="#003566" letterSpacing="2">
          КФУ • KFU
        </text>
      </svg>
    );

    if (layout === 'tile') {
      return (
        <div className={`flex flex-col items-center text-center group ${className}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1 mb-2 border-2 border-blue-100 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <KazanSvg className="w-full h-full" />
          </div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
            Kazan Federal
          </h4>
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
            University
          </p>
        </div>
      );
    }

    if (layout === 'horizontal') {
      return (
        <div className={`flex items-center gap-3.5 ${className}`}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shadow-sm border border-slate-200 flex-shrink-0 flex items-center justify-center">
            <KazanSvg className="w-full h-full" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Kazan Federal University
            </h4>
            {showSubtitle && (
              <p className="text-xs text-blue-700 font-semibold mt-0.5">
                Top 400 QS Global University (Est. 1804) • Kazan, Russia
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-white p-1 border border-slate-200/90 shadow-sm flex-shrink-0 flex items-center justify-center ${className}`}>
        <KazanSvg className="w-full h-full" />
      </div>
    );
  }

  // =========================================================================
  // 4. RUDN University (Peoples' Friendship University of Russia / РУДН)
  // =========================================================================
  if (normId.includes('rudn') || normId.includes('peoplesfriendship')) {
    const RudnSvg = ({ className = 'w-full h-full' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rudn-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0056b3" />
            <stop offset="50%" stopColor="#003d80" />
            <stop offset="100%" stopColor="#002244" />
          </linearGradient>
          <linearGradient id="rudn-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <path id="rudn-top-curve" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
          <path id="rudn-bottom-curve" d="M 172,100 A 72,72 0 0,1 28,100" fill="none" />
        </defs>

        <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#0056b3" strokeWidth="6" />
        <circle cx="100" cy="100" r="88" fill="url(#rudn-blue)" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="url(#rudn-gold)" strokeWidth="1.5" />

        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="7" fontWeight="900" fill="url(#rudn-gold)" letterSpacing="0.8">
          <textPath href="#rudn-top-curve" startOffset="50%" textAnchor="middle">
            РОССИЙСКИЙ УНИВЕРСИТЕТ ДРУЖБЫ НАРОДОВ
          </textPath>
        </text>
        <text fontFamily="'Inter', 'Arial', sans-serif" fontSize="6.8" fontWeight="900" fill="#ffffff" letterSpacing="0.8">
          <textPath href="#rudn-bottom-curve" startOffset="50%" textAnchor="middle">
            RUDN UNIVERSITY • EST. 1960 • MOSCOW
          </textPath>
        </text>

        <circle cx="100" cy="80" r="26" fill="#002244" stroke="url(#rudn-gold)" strokeWidth="2" />
        <ellipse cx="100" cy="80" rx="14" ry="26" fill="none" stroke="url(#rudn-gold)" strokeWidth="1.2" />
        <line x1="74" y1="80" x2="126" y2="80" stroke="url(#rudn-gold)" strokeWidth="1.2" />
        <line x1="100" y1="54" x2="100" y2="106" stroke="url(#rudn-gold)" strokeWidth="1.2" />

        <polygon points="100,58 104,70 116,70 106,78 110,90 100,82 90,90 94,78 84,70 96,70" fill="url(#rudn-gold)" />

        <rect x="52" y="118" width="96" height="24" rx="6" fill="#ffffff" stroke="url(#rudn-gold)" strokeWidth="2" />
        <text x="100" y="135" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="14" fontWeight="900" fill="#003d80" letterSpacing="2.5">
          РУДН • RUDN
        </text>
      </svg>
    );

    if (layout === 'tile') {
      return (
        <div className={`flex flex-col items-center text-center group ${className}`}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1 mb-2 border-2 border-blue-100 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <RudnSvg className="w-full h-full" />
          </div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
            RUDN University
          </h4>
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
            Peoples' Friendship
          </p>
        </div>
      );
    }

    if (layout === 'horizontal') {
      return (
        <div className={`flex items-center gap-3.5 ${className}`}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shadow-sm border border-slate-200 flex-shrink-0 flex items-center justify-center">
            <RudnSvg className="w-full h-full" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              RUDN University
            </h4>
            {showSubtitle && (
              <p className="text-xs text-blue-700 font-semibold mt-0.5">
                Peoples' Friendship University of Russia (Est. 1960) • Moscow, Russia
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-white p-1 border border-slate-200/90 shadow-sm flex-shrink-0 flex items-center justify-center ${className}`}>
        <RudnSvg className="w-full h-full" />
      </div>
    );
  }

  // =========================================================================
  // 5. Belarusian State University of Foreign Languages (BSU-FL)
  // =========================================================================
  if (normId.includes('bsulanguage') || normId.includes('bsufl') || normId.includes('foreignlanguage')) {
    const BsuFlSvg = ({ className = 'w-full h-full' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" fill="#047857" stroke="#fbbf24" strokeWidth="6" />
        <circle cx="100" cy="100" r="86" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        <BookOpen className="w-16 h-16 text-amber-300" x="68" y="52" />
        <rect x="40" y="126" width="120" height="22" rx="4" fill="#ffffff" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="100" y="142" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="12" fontWeight="900" fill="#047857" letterSpacing="1">
          BSU-FL
        </text>
        <text x="100" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" fill="#fef08a">
          MINSK • BELARUS
        </text>
      </svg>
    );

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-[#047857] p-1 border border-emerald-400 shadow-sm flex-shrink-0 flex items-center justify-center ${className}`}>
        <BsuFlSvg className="w-full h-full" />
      </div>
    );
  }

  // =========================================================================
  // 6. BSUIR (Informatics and Radioelectronics)
  // =========================================================================
  if (normId.includes('bsuir') || normId.includes('radioelectronics')) {
    const BsuirSvg = ({ className = 'w-full h-full' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" fill="#0369a1" stroke="#38bdf8" strokeWidth="6" />
        <circle cx="100" cy="100" r="86" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <Sparkles className="w-16 h-16 text-cyan-300" x="68" y="52" />
        <rect x="40" y="126" width="120" height="22" rx="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="100" y="142" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="13" fontWeight="900" fill="#0369a1" letterSpacing="1.5">
          BSUIR
        </text>
        <text x="100" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" fill="#e0f2fe">
          INFORMATICS & TECH
        </text>
      </svg>
    );

    return (
      <div className={`${sizeClasses[size]} rounded-2xl bg-[#0369a1] p-1 border border-cyan-400 shadow-sm flex-shrink-0 flex items-center justify-center ${className}`}>
        <BsuirSvg className="w-full h-full" />
      </div>
    );
  }

  // =========================================================================
  // 7. Dynamic / Global Universities: Live Free Logo API with Clean Fallback
  // =========================================================================
  let resolvedDomain = propDomain;
  if (!resolvedDomain && website) {
    try {
      const urlObj = new URL(website.startsWith('http') ? website : `https://${website}`);
      resolvedDomain = urlObj.hostname.replace(/^www\./, '');
    } catch {
      resolvedDomain = website.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
    }
  }

  if (!resolvedDomain) {
    for (const [key, dom] of Object.entries(KNOWN_UNIVERSITY_DOMAINS)) {
      if (normId.includes(key)) {
        resolvedDomain = dom;
        break;
      }
    }
  }

  const freeApiLogoUrl = resolvedDomain
    ? `https://www.google.com/s2/favicons?domain=${resolvedDomain}&sz=${imageSizes[size] || 128}`
    : null;

  const initials = (name || id || 'University')
    .split(' ')
    .filter(w => !['and', 'of', 'the', '&', 'for', 'in'].includes(w.toLowerCase()))
    .slice(0, 3)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'UNI';

  const colorPalettes = [
    { bg: 'from-blue-600 to-indigo-800', border: 'border-blue-200', text: 'text-blue-900', badgeBg: 'bg-blue-50' },
    { bg: 'from-emerald-600 to-teal-800', border: 'border-emerald-200', text: 'text-emerald-900', badgeBg: 'bg-emerald-50' },
    { bg: 'from-rose-600 to-red-800', border: 'border-rose-200', text: 'text-rose-900', badgeBg: 'bg-rose-50' },
    { bg: 'from-amber-500 to-amber-700', border: 'border-amber-200', text: 'text-amber-900', badgeBg: 'bg-amber-50' },
    { bg: 'from-violet-600 to-purple-800', border: 'border-violet-200', text: 'text-violet-900', badgeBg: 'bg-violet-50' },
    { bg: 'from-cyan-600 to-blue-800', border: 'border-cyan-200', text: 'text-cyan-900', badgeBg: 'bg-cyan-50' }
  ];
  const colorIndex = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colorPalettes.length;
  const palette = colorPalettes[colorIndex];

  const hasLiveLogo = Boolean(freeApiLogoUrl && !imageError);

  const DynamicLogoDisplay = () => {
    if (hasLiveLogo && freeApiLogoUrl) {
      return (
        <div className="w-full h-full flex items-center justify-center p-1 relative">
          <img
            src={freeApiLogoUrl}
            alt={name || 'University Logo'}
            onError={() => setImageError(true)}
            className="w-4/5 h-4/5 object-contain rounded-lg filter drop-shadow-2xs"
            loading="lazy"
          />
        </div>
      );
    }

    return (
      <div className={`w-full h-full rounded-xl bg-gradient-to-br ${palette.bg} text-white flex flex-col items-center justify-center shadow-2xs relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
        <GraduationCap className="w-1/2 h-1/2 text-white/90 drop-shadow-xs relative z-10" />
        <span className="text-[9px] font-black tracking-wider text-white/95 uppercase relative z-10 leading-none mt-0.5">
          {initials}
        </span>
      </div>
    );
  };

  if (layout === 'tile') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 mb-2 border-2 border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-blue-300 group-hover:scale-105 transition-all flex items-center justify-center">
          <DynamicLogoDisplay />
        </div>
        <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight line-clamp-1">
          {name || 'University'}
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
          {country || 'International'}
        </p>
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shadow-2xs border border-slate-200 flex-shrink-0 flex items-center justify-center">
          <DynamicLogoDisplay />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
            {name || 'International University'}
          </h4>
          {showSubtitle && (
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {country ? `Higher Education Institution • ${country}` : 'Global Partner University'}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-2xl bg-white p-1.5 border border-slate-200 shadow-2xs flex-shrink-0 flex items-center justify-center ${className}`}>
      <DynamicLogoDisplay />
    </div>
  );
};
