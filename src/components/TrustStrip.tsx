import React from 'react';
import { Award, UserCheck, Clock, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TrustStrip: React.FC = () => {
  const { currentTheme } = useTheme();

  const trustItems = [
    {
      icon: Award,
      title: "Experienced Teaching",
      desc: "Certified Huffaz with authentic Ijazah credentials"
    },
    {
      icon: UserCheck,
      title: "One-to-One Attention",
      desc: "Private sessions tailored to your individual pace"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      desc: "24/7 scheduling to fit busy family routines"
    },
    {
      icon: Globe,
      title: "Online From Anywhere",
      desc: "Accessible globally via Zoom & Google Meet"
    }
  ];

  return (
    <section className="bg-white border-y border-[var(--color-border-subtle)] py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-200"
                  style={{
                    backgroundColor: currentTheme.primarySoft,
                    color: currentTheme.primary,
                    borderColor: currentTheme.primaryBorder,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text-main)] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] mt-0.5 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

