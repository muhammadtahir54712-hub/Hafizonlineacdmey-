import React from 'react';
import { BookOpen, Calendar, HeartHandshake, ShieldCheck, Award, Moon, ArrowRight } from 'lucide-react';
import { SPECIAL_PROGRAMS } from '../data/quranAcademyData';

interface SpecialProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const SpecialPrograms: React.FC<SpecialProgramsProps> = ({ onSelectProgram }) => {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return BookOpen;
      case 'Calendar':
        return Calendar;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Award':
        return Award;
      case 'Moon':
      default:
        return Moon;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#DDEDE5]/35 border-y border-[#DDEDE5]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#0F5C4D]">
            <span>Tailored Tracks</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-3">
            Special Learning Programs
          </h2>
          <p className="text-sm sm:text-base text-[#5E6D68]">
            Targeted formats designed around specific life stages, busy school routines, and spiritual goals.
          </p>
        </div>

        {/* 6 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIAL_PROGRAMS.map((prog) => {
            const Icon = getProgramIcon(prog.icon);
            return (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog.title)}
                className="bg-white/90 hover:bg-white rounded-xl p-5 border border-[#DDEDE5] hover:border-[#0F5C4D]/40 shadow-xs hover:shadow transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center group-hover:bg-[#0F5C4D] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0F5C4D] bg-[#DDEDE5]/50 px-2.5 py-0.5 rounded-full">
                      {prog.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#173B35] group-hover:text-[#0F5C4D] transition-colors mb-1.5">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E3EDE7]/60 flex items-center justify-between text-xs font-medium text-[#0F5C4D]">
                  <span>Explore Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
