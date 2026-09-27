import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, Laptop, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, ACADEMY_EMAIL } from '../data/quranAcademyData';

interface ContactSectionProps {
  selectedCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedCourse }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    course: selectedCourse || 'Tajweed Foundations',
    studentType: 'Child (Ages 5-14)',
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected course if prop changes
  React.useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsappNumber.trim()) {
      setErrorMsg('Please enter your full name and WhatsApp / phone number.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    // Simulate front-end form handling (configured to easily connect to Formspree / PHP mailer on Hostinger)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Assalamu Alaikum,\n\nI would like to inquire about Quran classes.\nName: ${formData.fullName || 'Student'}\nCourse: ${formData.course}\nPreferred Time: ${formData.preferredTime}\nStudent: ${formData.studentType}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FBF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-4">
            Enroll or Schedule a Free Trial
          </h2>
          <p className="text-base text-[#5E6D68] leading-relaxed">
            Fill out the form below and our admissions coordinator will reach out via WhatsApp or email within 2 hours to confirm your free trial class.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E3EDE7] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173B35]">
                    WhatsApp & Phone
                  </h3>
                  <p className="text-xs text-[#5E6D68] mb-1">
                    Direct line for admissions, schedules & trial classes:
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#0F5C4D] hover:underline block mb-3"
                  >
                    +92 302 1490138
                  </a>
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent("Assalamu Alaikum, I would like to know more about your Quran classes.");
                      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
                    }}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F5C4D] hover:text-[#123F38] bg-[#EEF7F2] hover:bg-[#DDEDE5] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Message +92 302 1490138</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E3EDE7] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173B35]">
                    Direct Email
                  </h3>
                  <p className="text-xs text-[#5E6D68] mb-1">
                    Send detailed inquiries, custom syllabi, or parent requests.
                  </p>
                  <a
                    href={`mailto:${ACADEMY_EMAIL}`}
                    className="text-xs font-semibold text-[#0F5C4D] hover:underline"
                  >
                    {ACADEMY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Class Formats & Timings Card */}
            <div className="bg-[#EEF7F2]/60 p-6 rounded-2xl border border-[#DDEDE5]">
              <h4 className="font-serif text-base font-bold text-[#173B35] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0F5C4D]" />
                <span>Class Timings & Platforms</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#5E6D68]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C4D]" />
                  <span><strong>Schedule:</strong> 24 hours / 7 days (Custom to your timezone)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C4D]" />
                  <span><strong>Platforms:</strong> Zoom, Google Meet & Microsoft Teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C4D]" />
                  <span><strong>Class Duration:</strong> 30 min or 45 min 1-on-1 private lessons</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Registration & Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[#E3EDE7] shadow-sm">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#EEF7F2] text-[#0F5C4D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173B35]">
                  JazakAllah Khair! Application Received
                </h3>
                <p className="text-sm text-[#5E6D68] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have logged your request for <strong>{formData.course}</strong>. Our academic counselor will reach you on WhatsApp ({formData.whatsappNumber}) within 2 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleDirectWhatsApp}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details Instantly to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="px-4 py-2 text-xs font-medium text-[#5E6D68] hover:text-[#173B35]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E3EDE7] pb-3 mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#173B35]">
                    Book Your Free 30-Minute Trial
                  </h3>
                  <p className="text-xs text-[#5E6D68]">
                    No obligation. You will receive teacher credentials and class link.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Brother Ahmed / Sister Aisha"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. family@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      Course Interested In
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                    >
                      <option value="Tajweed Foundations">Tajweed Foundations</option>
                      <option value="Online Quran Classes (Women & Families)">Online Quran Classes (Women & Families)</option>
                      <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
                      <option value="Noorani Qaida for Beginners">Noorani Qaida for Beginners</option>
                      <option value="Kids Quran Program">Kids Quran Program</option>
                      <option value="Namaz & Masnoon Duain">Namaz & Masnoon Duain (طریقہ نماز و مسنون دعائیں)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      Student Category
                    </label>
                    <select
                      name="studentType"
                      value={formData.studentType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                    >
                      <option value="Child (Ages 5-14)">Child (Ages 5-14)</option>
                      <option value="Adult Sister (Female Tutor)">Adult Sister (Female Tutor)</option>
                      <option value="Adult Brother">Adult Brother</option>
                      <option value="Multiple Family Members">Multiple Family Members</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173B35] mb-1">
                      Preferred Timing
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="Night / Flexible">Night / Flexible (Specify in note)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173B35] mb-1">
                    Learning Goals or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the student's current reading level, specific Surahs, or preferences..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E3EDE7] bg-[#FBF8F1]/40 text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Free Trial Class</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#5E6D68] mt-2">
                    🔒 We respect your privacy. Your information is never shared or sold.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
