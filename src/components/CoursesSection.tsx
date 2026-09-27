import React, { useState } from 'react';
import { Check, ArrowRight, Star, Sparkles, BookOpen } from 'lucide-react';
import { FEATURED_COURSES, CoursePackage } from '../data/quranAcademyData';

interface CoursesSectionProps {
  onEnroll: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnroll }) => {
  const [courseImgError, setCourseImgError] = useState(false);

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#F5F0E7]/60 border-t border-[#E3EDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Structured Paths</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            Courses Designed Around You
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            Choose a learning path that fits your goals, age, and schedule. Every plan includes a free introductory evaluation class.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {FEATURED_COURSES.map((course: CoursePackage) => {
            const isHighlighted = course.highlighted;
            return (
              <div
                key={course.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#0F5C4D] shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-[#E3EDE7] shadow-sm hover:shadow-md hover:border-[#0F5C4D]/40'
                } p-7 sm:p-8`}
              >
                {/* Popular / Feature Badge */}
                {course.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0F5C4D] text-[#FBF8F1] text-xs font-semibold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B99A5B]" />
                    <span>{course.badge}</span>
                  </div>
                )}

                <div>
                  {/* Category Target */}
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#B99A5B]">
                    <span className="uppercase tracking-wider">{course.targetAudience}</span>
                    <span className="font-arabic text-sm text-[#0F5C4D]" dir="rtl">{course.arabicName}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#173B35] mb-2">
                    {course.name}
                  </h3>

                  {/* Recommended For */}
                  <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed mb-6">
                    {course.recommendedFor}
                  </p>

                  {/* Plan Specs */}
                  <div className="bg-[#FBF8F1] rounded-xl p-3.5 border border-[#E3EDE7] mb-6 flex items-center justify-between text-xs text-[#173B35]">
                    <div>
                      <span className="text-[#5E6D68] block text-[11px]">Class Format</span>
                      <span className="font-semibold">1-on-1 Private Sessions</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#5E6D68] block text-[11px]">Tuition</span>
                      <span className="font-semibold text-[#0F5C4D]">Flexible Monthly Plans</span>
                    </div>
                  </div>

                  {/* Curriculum Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-[#173B35] uppercase tracking-wider">
                      What's Included:
                    </div>
                    {course.curriculum.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#5E6D68] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onEnroll(course.name)}
                    type="button"
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#0F5C4D] hover:bg-[#123F38] text-white shadow-md hover:shadow-lg'
                        : 'bg-white hover:bg-[#EEF7F2] text-[#0F5C4D] border border-[#0F5C4D]'
                    }`}
                  >
                    <span>{course.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-[#5E6D68] mt-2">
                    Free evaluation class included · No long-term lock-in
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Banner: Tajweed Calligraphy Close-Up */}
        <div className="bg-white rounded-2xl border border-[#E3EDE7] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden bg-[#EEF7F2]">
            {!courseImgError ? (
              <img
                src="/images/course-tajweed.jpg"
                alt="Classical Arabic Quran calligraphy showing Tajweed vowel markers"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setCourseImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#EEF7F2] text-[#0F5C4D]">
                <BookOpen className="w-12 h-12 opacity-40" />
              </div>
            )}
          </div>
          <div className="md:col-span-8 p-6 sm:p-8">
            <span className="text-xs font-semibold text-[#B99A5B] uppercase tracking-wider block mb-1">
              Personalized Learning Blueprint
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B35] mb-2">
              Need a Custom Schedule or Curriculum?
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed mb-4">
              Whether you want to prepare your family for Ramadan, read the Quran at your own rhythm, or need specialized weekend timings, we design an individualized study plan for you.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#0F5C4D]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0F5C4D]" /> 30-minute or 45-minute sessions
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0F5C4D]" /> 2 to 5 days per week options
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0F5C4D]" /> Free parent consultations
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
