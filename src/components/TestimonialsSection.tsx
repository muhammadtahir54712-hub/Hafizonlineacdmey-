import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/quranAcademyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F0E7]/60 border-t border-[#E3EDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Student Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            What Our Students Say
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            Real feedback from parents and learners benefiting from personalized one-on-one Quran and Tajweed instruction.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E3EDE7] shadow-xs flex flex-col justify-between hover:border-[#0F5C4D]/30 transition-all duration-200"
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 text-[#B99A5B] fill-[#B99A5B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#DDEDE5]" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#173B35] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E3EDE7]/70">
                <div className="font-serif text-sm font-bold text-[#173B35]">
                  {t.author}
                </div>
                <div className="text-xs text-[#0F5C4D] font-medium">
                  {t.role}
                </div>
                <div className="text-[11px] text-[#5E6D68]">
                  {t.location} · {t.course}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
