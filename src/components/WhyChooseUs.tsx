import React, { useState } from 'react';
import { Home, Clock, UserCheck, Layers, Smile, TrendingUp, Heart } from 'lucide-react';
import { WHY_FAMILIES_CHOOSE_US } from '../data/quranAcademyData';

export const WhyChooseUs: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return Home;
      case 'Clock':
        return Clock;
      case 'UserCheck':
        return UserCheck;
      case 'Layers':
        return Layers;
      case 'Smile':
        return Smile;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F5F0E7]/40 relative overflow-hidden bg-islamic-stars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Dedicated Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            Why Families Choose Us
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            We blend rigorous Islamic scholarship with modern online teaching convenience, making high-caliber Quran learning accessible for every home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Side Card: Family Learning Online */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E3EDE7] bg-white">
              {!imgError ? (
                <img
                  src="/images/learning-family.jpg"
                  alt="Father and son attending an interactive online Quran class together happily"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-[#EEF7F2] flex items-center justify-center text-[#0F5C4D]">
                  <Heart className="w-12 h-12" />
                </div>
              )}
              <div className="p-5 bg-white border-t border-[#E3EDE7]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-[#0F5C4D]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#173B35]">
                      Family-Centered Approach
                    </h4>
                    <p className="text-[11px] text-[#5E6D68]">
                      Parents receive continuous updates on their child's reading milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_FAMILIES_CHOOSE_US.map((benefit, idx) => {
              const Icon = getIcon(benefit.iconName);
              return (
                <div
                  key={idx}
                  className="bg-white/90 hover:bg-white p-5 rounded-xl border border-[#E3EDE7] hover:border-[#0F5C4D]/30 transition-all duration-200 shadow-xs hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#173B35] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
