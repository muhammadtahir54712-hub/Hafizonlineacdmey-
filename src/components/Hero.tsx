import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Star, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenTrial: () => void;
  onViewCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onViewCourses }) => {
  const [imageError, setImageError] = useState(false);
  const { currentTheme } = useTheme();

  const heroBenefits = [
    "Learn Quran reading from the basics with Noorani Qaida",
    "Master authentic Tajweed rules & precise pronunciation",
    "Flexible 24/7 online classes from the comfort of home",
    "100% personal attention from patient, experienced teachers"
  ];

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[var(--color-canvas)]">
      {/* Decorative ambient elements */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: currentTheme.primaryBorder }}
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-2xl pointer-events-none -z-10 opacity-40"
        style={{ backgroundColor: currentTheme.surface }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Arabic Bismillah & Clean Eyebrow */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
              <span
                className="font-arabic text-sm font-normal"
                style={{ color: currentTheme.primary }}
                dir="rtl"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span style={{ color: currentTheme.accent }}>·</span>
              <span
                className="uppercase tracking-widest font-semibold text-[11px]"
                style={{ color: currentTheme.accent }}
              >
                Online Quran Academy
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[var(--color-text-main)] tracking-tight leading-[1.18] mb-6 max-w-2xl text-balance">
              Learn the Quran with{' '}
              <span className="relative inline-block" style={{ color: currentTheme.primary }}>
                Confidence
                <span
                  className="absolute bottom-1 left-0 w-full h-[6px] -z-10 rounded-full opacity-60"
                  style={{ backgroundColor: currentTheme.primaryBorder }}
                />
              </span>{' '}
              & Tajweed
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl mb-8">
              Build a lifelong connection with the Holy Quran through clear, personalized, and step-by-step 1-on-1 online lessons designed for children, adults, sisters, and families worldwide.
            </p>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              {heroBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: currentTheme.primarySoft, color: currentTheme.primary }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[var(--color-text-main)] leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenTrial}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer hover:brightness-95"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewCourses}
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium bg-white hover:bg-black/5 border border-[var(--color-border-subtle)] rounded-xl transition-all duration-200 cursor-pointer"
                style={{ color: currentTheme.primary }}
              >
                View Courses
              </button>
            </div>

            {/* Trust Micro-Row */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[var(--color-text-muted)]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: currentTheme.primary }} />
                <span>No Credit Card Required</span>
              </div>
              <span className="text-[var(--color-border-subtle)]">·</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4" style={{ color: currentTheme.accent, fill: currentTheme.accent }} />
                <span>4.9/5 from 450+ Happy Students</span>
              </div>
              <span className="text-[var(--color-border-subtle)]">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.primary }} />
                <span>Female Tutors Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Arched Framing & Floating Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Subtle Islamic Arch Background Motif */}
            <div
              className="absolute -inset-4 rounded-3xl -rotate-1 -z-10 opacity-70"
              style={{
                background: `linear-gradient(to top right, ${currentTheme.primaryBorder}, ${currentTheme.surface})`
              }}
            />

            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border-subtle)] bg-white">
              {!imageError ? (
                <img
                  src="/images/hero-quran.jpg"
                  alt="Open Quran on handcrafted wooden rehal with warm daylight in a serene study sanctuary"
                  className="w-full h-auto aspect-[4/3] object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div
                  className="w-full aspect-[4/3] flex flex-col items-center justify-center p-8 text-center"
                  style={{ backgroundColor: currentTheme.primarySoft }}
                >
                  <div
                    className="w-16 h-16 rounded-full text-white flex items-center justify-center mb-4"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-1" style={{ color: currentTheme.primary }}>
                    Holy Quran & Tajweed Academy
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Personalized 1-on-1 Online Learning
                  </p>
                </div>
              )}

              {/* Floating Badge Over Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[var(--color-canvas)]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[var(--color-border-subtle)] shadow-md flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg text-white flex items-center justify-center shrink-0"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: currentTheme.accent }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-main)]">
                    Quran · Tajweed · Guidance
                  </div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">
                    1-on-1 Zoom & Google Meet Classes
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

