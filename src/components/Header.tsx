import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, MessageCircle, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/quranAcademyData';

interface HeaderProps {
  onOpenTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What We Teach', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Assalamu Alaikum, I would like to inquire about Quran classes at Hafiz Quran Academy.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F1]/95 backdrop-blur-md shadow-sm border-b border-[#E3EDE7] py-3'
          : 'bg-[#FBF8F1] border-b border-[#E3EDE7]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Single clean element) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-[#0F5C4D] hover:opacity-90 transition-opacity"
            aria-label="Hafiz Quran Academy - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4D] text-[#FBF8F1] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              {/* Refined Book & Crescent SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M12 7v14" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0F5C4D] leading-none">
                Hafiz
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B99A5B] mt-0.5">
                Quran Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#173B35] hover:text-[#0F5C4D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0F5C4D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              type="button"
              className="p-2.5 text-[#0F5C4D] hover:bg-[#EEF7F2] rounded-xl transition-colors border border-[#DDEDE5]"
              title="Message on WhatsApp"
              aria-label="Message on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTrial}
              type="button"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTrial}
              type="button"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0F5C4D] rounded-lg"
            >
              Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#173B35] hover:text-[#0F5C4D] rounded-lg hover:bg-[#EEF7F2]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F1] border-b border-[#E3EDE7] shadow-lg animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-[#173B35] hover:bg-[#EEF7F2] hover:text-[#0F5C4D] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E3EDE7] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                type="button"
                className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl shadow-sm"
              >
                Book a Free Trial Class
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#0F5C4D] bg-[#EEF7F2] hover:bg-[#DDEDE5] rounded-xl border border-[#DDEDE5]"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
