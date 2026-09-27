import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, BookOpen } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/quranAcademyData';

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrial }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Assalamu Alaikum, I would like to book a free Quran trial class.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0F5C4D] text-white overflow-hidden bg-emerald-pattern">
      {/* Decorative ambient glowing accents */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B99A5B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Arabic Ayah snippet */}
        <div className="font-arabic text-xl sm:text-2xl text-[#DFCA9A] mb-3 font-normal" dir="rtl">
          وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </div>
        <p className="text-xs uppercase tracking-widest text-[#DFCA9A] font-semibold mb-5">
          "And recite the Quran with measured recitation" · Surah Al-Muzzammil
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 max-w-2xl mx-auto leading-tight text-balance">
          Ready to Begin Your Quran Journey?
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-[#DDEDE5] max-w-xl mx-auto mb-9 leading-relaxed">
          Take the first step toward better Quran reading, Tajweed and deep understanding. Schedule your 30-minute private evaluation class with no obligation.
        </p>

        {/* Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-[#0F5C4D] bg-[#FBF8F1] hover:bg-white rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book a Free Trial</span>
            <ArrowRight className="w-4 h-4 text-[#0F5C4D]" />
          </button>

          <button
            onClick={handleWhatsAppClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-medium text-white hover:bg-white/10 border border-white/30 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#DFCA9A]" />
            <span>Message on WhatsApp</span>
          </button>
        </div>

        {/* Reassurance pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#DDEDE5]/80">
          <span>✓ 100% Free Trial Class</span>
          <span>·</span>
          <span>✓ No Credit Card Needed</span>
          <span>·</span>
          <span>✓ Response Within 2 Hours</span>
        </div>

      </div>
    </section>
  );
};
