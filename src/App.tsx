/**
 * Hafiz Quran Academy (Hafiz Online Learning Hub)
 * Complete, production-ready, client-deliverable online Quran learning website.
 * Suitable for direct deployment on Hostinger or any static/cloud hosting.
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { SpecialPrograms } from './components/SpecialPrograms';
import { AboutTeacher } from './components/AboutTeacher';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('Online Quran Classes (Women & Families)');

  const handleOpenTrial = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForForm(courseName);
    }
    setTrialModalOpen(true);
  };

  const handleSelectCourseAndScroll = (courseName: string) => {
    setSelectedCourseForForm(courseName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTrialModalOpen(true);
    }
  };

  const handleScrollToCourses = () => {
    const courseElem = document.getElementById('courses');
    if (courseElem) {
      courseElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F1] text-[#173B35]">
      {/* 1. Sticky Navigation Header */}
      <Header onOpenTrial={() => handleOpenTrial()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenTrial={() => handleOpenTrial()}
          onViewCourses={handleScrollToCourses}
        />

        {/* 3. Trust / Introduction Strip */}
        <TrustStrip />

        {/* 4. What We Teach (Services Section) */}
        <ServicesSection onSelectCourse={handleSelectCourseAndScroll} />

        {/* 5. Courses Section */}
        <CoursesSection onEnroll={handleSelectCourseAndScroll} />

        {/* 6. Special Programs / Highlights */}
        <SpecialPrograms onSelectProgram={handleSelectCourseAndScroll} />

        {/* 7. About the Teacher */}
        <AboutTeacher onOpenTrial={() => handleOpenTrial()} />

        {/* 8. Why Families Choose Us */}
        <WhyChooseUs />

        {/* 9. How It Works (3 Steps) */}
        <HowItWorks onOpenTrial={() => handleOpenTrial()} />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. Final Emerald CTA */}
        <FinalCta onOpenTrial={() => handleOpenTrial()} />

        {/* 13. Contact & Enrollment Area */}
        <ContactSection selectedCourse={selectedCourseForForm} />
      </main>

      {/* 14. Multi-Column Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

      {/* 16. Free Trial Schedule Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultCourse={selectedCourseForForm}
      />
    </div>
  );
}
