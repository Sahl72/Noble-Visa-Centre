import React from 'react';
import { Shield, FileCheck2, Users } from 'lucide-react';
import { WhatsAppIcon } from './Header';

interface TrustStatsBarProps {
  className?: string;
}

export const TrustStatsBar: React.FC<TrustStatsBarProps> = ({ className = '' }) => {
  const stats = [
    {
      icon: Shield,
      value: '15+',
      label: 'Years of Experience',
      iconBg: 'bg-blue-50 text-blue-600',
      iconColor: 'text-blue-600',
    },
    {
      icon: FileCheck2,
      value: '25,000+',
      label: 'Visas Processed',
      iconBg: 'bg-blue-50 text-blue-600',
      iconColor: 'text-blue-600',
    },
    {
      icon: Users,
      value: '98%',
      label: 'Visa Success Rate',
      iconBg: 'bg-blue-50 text-blue-600',
      iconColor: 'text-blue-600',
    },
    {
      icon: WhatsAppIcon,
      value: '< 1 Hour',
      label: 'Response on WhatsApp',
      iconBg: 'bg-emerald-50 text-emerald-500',
      iconColor: 'text-emerald-500',
      isWhatsApp: true,
    },
  ];

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div 
        id="noble-trust-stats-bar"
        className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-6 transition-all duration-300"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center lg:justify-start"
              >
                {/* Circular Icon Badge */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 ${stat.iconBg}`}>
                  {stat.isWhatsApp ? (
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500" />
                  ) : (
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.iconColor} stroke-[1.75]`} />
                  )}
                </div>

                {/* Stat Numbers and Label */}
                <div className="space-y-0.5 text-left">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
