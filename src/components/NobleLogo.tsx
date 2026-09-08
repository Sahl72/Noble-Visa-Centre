import React, { useState } from 'react';

export const NobleEmblem: React.FC<{ className?: string; variant?: 'light' | 'dark' | 'color' }> = ({ 
  className = "w-full h-full",
  variant = 'color'
}) => (
  <svg 
    viewBox="0 0 200 220" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id={`noble-emblem-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {variant === 'light' ? (
          <>
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="40%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </>
        )}
      </linearGradient>
    </defs>
    <g fill={`url(#noble-emblem-grad-${variant})`}>
      <polygon points="100,20 112,32 100,44 88,32" />
      <polygon points="82,46 94,58 82,70 70,58" />
      <polygon points="118,46 130,58 118,70 106,58" />
      <polygon points="64,74 76,86 64,98 52,86" />
      <polygon points="100,74 112,86 100,98 88,86" />
      <polygon points="136,74 148,86 136,98 124,86" />
      <polygon points="46,104 58,116 46,128 34,116" />
      <polygon points="82,104 94,116 82,128 70,116" />
      <polygon points="118,104 130,116 118,128 106,116" />
      <polygon points="154,104 166,116 154,128 142,116" />
      <polygon points="30,136 42,148 30,160 18,148" />
      <polygon points="65,135 77,147 65,159 53,147" />
      <polygon points="100,133 111,144 100,155 89,144" />
      <polygon points="135,135 147,147 135,159 123,147" />
      <polygon points="170,136 182,148 170,160 158,148" />
      <polygon points="16,168 28,178 18,188 6,178" />
      <polygon points="48,166 60,177 50,188 38,177" />
      <polygon points="81,164 92,174 83,184 72,174" />
      <polygon points="119,164 128,174 117,184 108,174" />
      <polygon points="152,166 162,177 150,188 140,177" />
      <polygon points="184,168 194,178 182,188 172,178" />
      <polygon points="8,198 20,204 12,214 0,208" />
      <polygon points="34,196 46,204 38,214 26,206" />
      <polygon points="63,194 74,202 68,212 57,204" />
      <polygon points="137,194 143,204 132,212 126,202" />
      <polygon points="166,196 174,206 162,214 154,204" />
      <polygon points="192,198 200,208 188,214 180,204" />
    </g>
  </svg>
);

export const NOBLE_LOGO_URL = "https://res.cloudinary.com/fivl3klo/image/upload/f_auto,q_auto/noble_visa_logo-01_1";

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

  // Height configurations for the official logo image (increased for prominence)
  const imageSizeClasses = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-11 sm:h-13 lg:h-14 w-auto',
    lg: 'h-14 sm:h-16 lg:h-18 w-auto',
    xl: 'h-20 sm:h-24 w-auto'
  }[size];

  const primaryTextColor = variant === 'light' ? '#ffffff' : '#071330';
  const taglineColor = variant === 'light' ? '#93c5fd' : '#4b5563';

  const typographySizes = {
    sm: { title: 'text-sm sm:text-base', sub: 'text-[9px]', tag: 'text-[8px]' },
    md: { title: 'text-base sm:text-lg lg:text-xl', sub: 'text-[10px] sm:text-xs', tag: 'text-[9px] sm:text-[10px]' },
    lg: { title: 'text-xl sm:text-2xl lg:text-3xl', sub: 'text-xs sm:text-sm', tag: 'text-[11px] sm:text-xs' },
    xl: { title: 'text-3xl sm:text-4xl lg:text-5xl', sub: 'text-sm sm:text-base', tag: 'text-xs sm:text-sm' }
  }[size];

  // SVG Fallback Icon
  const MarkSVG = () => (
    <svg 
      viewBox="0 0 200 220" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${imageSizeClasses} flex-shrink-0`}
    >
      <defs>
        <linearGradient id={`noble-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {variant === 'light' ? (
            <>
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="60%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </>
          )}
        </linearGradient>
      </defs>
      <g fill={`url(#noble-grad-${variant})`}>
        <polygon points="100,20 112,32 100,44 88,32" />
        <polygon points="82,46 94,58 82,70 70,58" />
        <polygon points="118,46 130,58 118,70 106,58" />
        <polygon points="64,74 76,86 64,98 52,86" />
        <polygon points="100,74 112,86 100,98 88,86" />
        <polygon points="136,74 148,86 136,98 124,86" />
        <polygon points="46,104 58,116 46,128 34,116" />
        <polygon points="82,104 94,116 82,128 70,116" />
        <polygon points="118,104 130,116 118,128 106,116" />
        <polygon points="154,104 166,116 154,128 142,116" />
        <polygon points="30,136 42,148 30,160 18,148" />
        <polygon points="65,135 77,147 65,159 53,147" />
        <polygon points="100,133 111,144 100,155 89,144" />
        <polygon points="135,135 147,147 135,159 123,147" />
        <polygon points="170,136 182,148 170,160 158,148" />
        <polygon points="16,168 28,178 18,188 6,178" />
        <polygon points="48,166 60,177 50,188 38,177" />
        <polygon points="81,164 92,174 83,184 72,174" />
        <polygon points="119,164 128,174 117,184 108,174" />
        <polygon points="152,166 162,177 150,188 140,177" />
        <polygon points="184,168 194,178 182,188 172,178" />
        <polygon points="8,198 20,204 12,214 0,208" />
        <polygon points="34,196 46,204 38,214 26,206" />
        <polygon points="63,194 74,202 68,212 57,204" />
        <polygon points="137,194 143,204 132,212 126,202" />
        <polygon points="166,196 174,206 162,214 154,204" />
        <polygon points="192,198 200,208 188,214 180,204" />
      </g>
    </svg>
  );

  const LogoIcon = !imageError ? (
    <img
      src={NOBLE_LOGO_URL}
      alt="Noble Visa Centre Emblem"
      className={`${imageSizeClasses} object-contain select-none flex-shrink-0 drop-shadow-sm`}
      onError={() => setImageError(true)}
      referrerPolicy="no-referrer"
    />
  ) : (
    <MarkSVG />
  );

  if (layout === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {LogoIcon}
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {LogoIcon}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span 
              className={`font-black tracking-wider uppercase font-sans ${typographySizes.title}`}
              style={{ color: primaryTextColor }}
            >
              NOBLE
            </span>
            <span 
              className={`font-black tracking-wider uppercase font-sans ${typographySizes.title}`}
              style={{ color: variant === 'light' ? '#60a5fa' : '#2563eb' }}
            >
              VISA
            </span>
          </div>
          <span 
            className={`font-extrabold tracking-[0.3em] uppercase leading-none mt-1 ${typographySizes.sub}`}
            style={{ color: variant === 'light' ? '#cbd5e1' : '#475569' }}
          >
            CENTRE
          </span>
          {showTagline && (
            <span 
              className={`font-medium italic tracking-tight leading-none mt-1.5 ${typographySizes.tag}`}
              style={{ color: taglineColor }}
            >
              Your Journey, Our Expertise
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup (Enlarged Official Emblem + Crisp High-Contrast Brand Name & Tagline)
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {LogoIcon}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center gap-1.5 leading-tight">
          <span 
            className={`font-black tracking-wider uppercase font-sans ${typographySizes.title}`}
            style={{ color: primaryTextColor }}
          >
            NOBLE
          </span>
          <span 
            className={`font-black tracking-wider uppercase font-sans ${typographySizes.title}`}
            style={{ color: variant === 'light' ? '#60a5fa' : '#2563eb' }}
          >
            VISA
          </span>
        </div>
        <span 
          className={`font-extrabold tracking-[0.3em] uppercase leading-tight mt-0.5 ${typographySizes.sub}`}
          style={{ color: variant === 'light' ? '#cbd5e1' : '#475569' }}
        >
          CENTRE
        </span>
        {showTagline && (
          <span 
            className={`font-medium italic tracking-tight leading-tight mt-0.5 hidden sm:inline-block ${typographySizes.tag}`}
            style={{ color: taglineColor }}
          >
            Your Journey, Our Expertise
          </span>
        )}
      </div>
    </div>
  );
};
