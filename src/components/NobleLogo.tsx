import React, { useState } from 'react';

// Official Cloudinary URL for the new Noble Universal / Noble Visa Centre emblem
export const NOBLE_LOGO_URL = "https://res.cloudinary.com/fivl3klo/image/upload/v1789227957/noble-universal-logo.png";

export const NobleEmblem: React.FC<{ className?: string; variant?: 'light' | 'dark' | 'color' }> = ({ 
  className = "w-full h-full",
}) => (
  <img
    src={NOBLE_LOGO_URL}
    alt="Noble Emblem"
    className={`${className} object-contain`}
    referrerPolicy="no-referrer"
  />
);

interface NobleLogoProps {
  variant?: 'light' | 'dark' | 'color';
  layout?: 'horizontal' | 'vertical' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const NobleLogo: React.FC<NobleLogoProps> = ({
  variant = 'light',
  layout = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true
}) => {
  const [imageError, setImageError] = useState(false);

  // Height configurations for the official logo image
  const imageSizeClasses = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-11 sm:h-13 lg:h-14 w-auto',
    lg: 'h-13 sm:h-15 lg:h-16 w-auto',
    xl: 'h-18 sm:h-22 w-auto'
  }[size];

  // SVG Fallback Icon if image fails to load
  const MarkFallback = () => (
    <div className={`${imageSizeClasses} aspect-square rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center font-black text-blue-400 text-xs flex-shrink-0`}>
      NVC
    </div>
  );

  const LogoIcon = !imageError ? (
    <img
      src={NOBLE_LOGO_URL}
      alt="Noble Visa Centre"
      className={`${imageSizeClasses} object-contain select-none flex-shrink-0 drop-shadow-md`}
      onError={() => setImageError(true)}
      referrerPolicy="no-referrer"
    />
  ) : (
    <MarkFallback />
  );

  if (layout === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {LogoIcon}
      </div>
    );
  }

  // Text color styling based on variant
  const isLight = variant === 'light';
  const nobleColor = isLight ? 'text-white' : 'text-[#071330]';
  // Theme blue for "Visa"
  const visaColor = isLight ? 'text-[#38bdf8]' : 'text-[#1a56db]';
  const centreColor = isLight ? 'text-white' : 'text-[#071330]';
  
  // Parent Company: Noble Universal Centre (light grey that goes closely with white)
  const parentCompanyColor = isLight ? 'text-slate-200' : 'text-slate-500';
  
  // Green color for "Founded by - Nuwan Ranjan"
  const founderColor = isLight ? 'text-[#4ade80]' : 'text-[#16a34a]';

  // Typography scale
  const typography = {
    sm: {
      main: 'text-sm sm:text-base font-black tracking-wide',
      parent: 'text-[9px] sm:text-[10px] font-semibold tracking-wider',
      founder: 'text-[8px] sm:text-[9px] font-semibold tracking-normal'
    },
    md: {
      main: 'text-base sm:text-lg lg:text-xl font-black tracking-tight',
      parent: 'text-[10px] sm:text-[11px] font-semibold tracking-wider',
      founder: 'text-[9px] sm:text-[10px] font-semibold tracking-normal'
    },
    lg: {
      main: 'text-lg sm:text-xl lg:text-[22px] font-black tracking-tight leading-none',
      parent: 'text-[11px] sm:text-xs font-semibold tracking-wide leading-tight',
      founder: 'text-[9.5px] sm:text-[10.5px] font-semibold tracking-normal leading-tight'
    },
    xl: {
      main: 'text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight',
      parent: 'text-xs sm:text-sm font-semibold tracking-wide',
      founder: 'text-[11px] sm:text-xs font-semibold tracking-normal'
    }
  }[size];

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {LogoIcon}
        <div className="flex flex-col items-center leading-snug">
          {/* Main Business Name: Noble Visa Centre (High size, Visa in theme blue) */}
          <span className={`${typography.main} uppercase`}>
            <span className={nobleColor}>Noble </span>
            <span className={visaColor}>Visa </span>
            <span className={centreColor}>Centre</span>
          </span>
          
          {/* Parent Company: Noble Universal Centre */}
          <span className={`${parentCompanyColor} ${typography.parent} mt-0.5 uppercase`}>
            Noble Universal Centre
          </span>

          {/* Founder line: in green color */}
          <span className={`${founderColor} ${typography.founder} mt-0.5 italic`}>
            Founded by - Nuwan Ranjan
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {LogoIcon}
      <div className="flex flex-col text-left justify-center select-none">
        {/* Line 1 (Dominant/High Size): Noble Visa Centre with "Visa" in theme blue */}
        <div className="flex items-center leading-tight">
          <span className={`${typography.main} uppercase tracking-tight`}>
            <span className={nobleColor}>Noble </span>
            <span className={visaColor}>Visa </span>
            <span className={centreColor}>Centre</span>
          </span>
        </div>

        {/* Line 2: Noble Universal Centre (Parent Company) */}
        <div className="flex items-center leading-tight mt-0.5">
          <span className={`${parentCompanyColor} ${typography.parent} uppercase`}>
            Noble Universal Centre
          </span>
        </div>

        {/* Line 3: Founded by - Nuwan Ranjan (in green color) */}
        <div className="flex items-center leading-tight mt-0.5">
          <span className={`${founderColor} ${typography.founder} italic font-semibold`}>
            Founded by - Nuwan Ranjan
          </span>
        </div>
      </div>
    </div>
  );
};
