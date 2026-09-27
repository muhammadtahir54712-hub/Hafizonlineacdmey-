import React from 'react';
import { ArrowRight, MessageSquare, BookOpen, Video } from 'lucide-react';
import { THREE_STEPS } from '../data/quranAcademyData';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return MessageSquare;
      case 1:
        return BookOpen;
      case 2:
      default:
        return Video;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FBF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Effortless Onboarding</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            Start Your Quran Journey in 3 Simple Steps
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            Begin learning within 24 hours. No complicated software, no credit cards, and no long-term contracts.
          </p>
        </div>

        {/* 3 Steps with Connector Line on Desktop */}
        <div className="relative mb-14">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#DDEDE5] via-[#0F5C4D]/40 to-[#DDEDE5] -translate-y-1/2 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {THREE_STEPS.map((step, idx) => {
              const Icon = getStepIcon(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-[#E3EDE7] shadow-xs text-center flex flex-col items-center group hover:border-[#0F5C4D]/40 transition-all duration-200"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center font-serif text-xl font-bold border border-[#DDEDE5] group-hover:bg-[#0F5C4D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#B99A5B] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173B35] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strong CTA Beneath */}
        <div className="text-center">
          <button
            onClick={onOpenTrial}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book Your Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#5E6D68] mt-3">
            Takes less than 1 minute to schedule · 100% Free
          </p>
        </div>

      </div>
    </section>
  );
};
