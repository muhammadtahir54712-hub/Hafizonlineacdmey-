import React from 'react';
import { BookOpen, MessageCircle, Mail, MapPin, Globe, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER, ACADEMY_EMAIL, ACADEMY_NAME, ACADEMY_TAGLINE } from '../data/quranAcademyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123F38] text-[#FBF8F1] pt-16 pb-12 border-t border-[#0F5C4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#0F5C4D] text-[#FBF8F1] flex items-center justify-center border border-[#B99A5B]/30">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <path d="M12 7v14" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Hafiz
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B99A5B] mt-0.5">
                  Quran Academy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDEDE5]/80 leading-relaxed max-w-sm">
              An accredited online Quran academy dedicated to teaching children, adults, and families worldwide through patient, personalized 1-on-1 instruction.
            </p>

            <div className="pt-2 text-xs font-semibold text-[#DFCA9A]">
              "{ACADEMY_TAGLINE}"
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEDE5]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Teacher</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">What We Teach</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Courses & Plans</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Academy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEDE5]/80">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Quran Reading for Beginners</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Noorani Qaida for Kids</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Tajweed Foundations</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Quran Memorization (Hifz)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Namaz & Masnoon Duain</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Women’s Quran Classes</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DDEDE5]/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#B99A5B] shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +92 302 1490138
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#B99A5B] shrink-0" />
                <a href="tel:+923021490138" className="hover:text-white">
                  Call: +92 302 1490138
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B99A5B] shrink-0" />
                <a href={`mailto:${ACADEMY_EMAIL}`} className="hover:text-white">
                  {ACADEMY_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#B99A5B] shrink-0" />
                <span>Worldwide Online via Zoom & Meet</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Arabic Inscription */}
        <div className="pt-8 border-t border-[#0F5C4D]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DDEDE5]/70">
          <div>
            © 2026 Hafiz Online Learning Hub. All rights reserved.
          </div>

          {/* Sacred Arabic Phrase & Translation */}
          <div className="flex items-center gap-2 text-center md:text-right">
            <span className="font-arabic text-base text-[#DFCA9A] font-normal" dir="rtl">
              الْقُرْآنُ نُورُ الْحَيَاةِ
            </span>
            <span className="text-[#DDEDE5]/40">·</span>
            <span className="italic text-[#DDEDE5]/80">
              "The Quran is the light of life."
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
