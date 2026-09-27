import React from 'react';
import { BookOpen, BookMarked, Volume2, Award, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { WHAT_WE_TEACH, ServiceItem } from '../data/quranAcademyData';

interface ServicesSectionProps {
  onSelectCourse: (courseName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCourse }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'quran-reading':
        return BookOpen;
      case 'noorani-qaida':
        return BookMarked;
      case 'tajweed-rules':
        return Volume2;
      case 'quran-memorization':
        return Award;
      case 'namaz-duas':
      case 'tafseer-meaning':
        return HeartHandshake;
      case 'correct-recitation':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FBF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Comprehensive Curriculum</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            What We Teach
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            Structured Quran learning for every stage of your journey, whether starting from the first Arabic letter or mastering advanced Tajweed recitation.
          </p>
        </div>

        {/* 6 Service Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_TEACH.map((service: ServiceItem) => {
            const Icon = getIcon(service.id);
            return (
              <div
                key={service.id}
                onClick={() => onSelectCourse(service.title)}
                className="group relative bg-white hover:bg-[#EEF7F2]/40 rounded-2xl p-6 sm:p-7 border border-[#E3EDE7] hover:border-[#0F5C4D]/40 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Arabic Title */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center group-hover:bg-[#0F5C4D] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-arabic text-sm text-[#0F5C4D]/70 font-semibold" dir="rtl">
                      {service.arabicTitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#173B35] group-hover:text-[#0F5C4D] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5E6D68] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-[#E3EDE7]/60">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#5E6D68]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#0F5C4D] pt-2">
                  <span className="text-[11px] text-[#5E6D68] font-normal">
                    {service.level}
                  </span>
                  <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Inquire Class</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0F5C4D]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
