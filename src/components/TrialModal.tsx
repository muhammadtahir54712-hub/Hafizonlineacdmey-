import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, BookOpen } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/quranAcademyData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, defaultCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: defaultCourse || 'Online Quran Classes (Women & Families)',
    studentCategory: 'Child',
    timeOfDay: 'Evening'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Assalamu Alaikum,\n\nI want to schedule my free Quran trial class.\nName: ${formData.name || 'Student'}\nCourse: ${formData.course}\nTime: ${formData.timeOfDay}\nCategory: ${formData.studentCategory}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FBF8F1] rounded-2xl shadow-2xl border border-[#DDEDE5] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0F5C4D] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#DFCA9A]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Schedule Free Trial Class</h3>
              <p className="text-[11px] text-[#DDEDE5]">30-minute private evaluation · No fees</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#EEF7F2] text-[#0F5C4D] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#173B35]">
                Trial Request Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-[#5E6D68] max-w-sm mx-auto">
                JazakAllah Khair! We have queued your evaluation session for <strong>{formData.course}</strong>. We will message your number shortly.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleLaunchWhatsApp}
                  type="button"
                  className="w-full py-2.5 px-4 bg-[#0F5C4D] hover:bg-[#123F38] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-xs text-[#5E6D68] hover:text-[#173B35] py-1"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#173B35] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima Tariq"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E3EDE7] bg-white text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173B35] mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 (555) 234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E3EDE7] bg-white text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#173B35] mb-1">
                    Student Category
                  </label>
                  <select
                    value={formData.studentCategory}
                    onChange={(e) => setFormData({ ...formData, studentCategory: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E3EDE7] bg-white text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D]"
                  >
                    <option value="Child (Ages 5-14)">Child</option>
                    <option value="Adult Sister">Adult Sister</option>
                    <option value="Adult Brother">Adult Brother</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173B35] mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.timeOfDay}
                    onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E3EDE7] bg-white text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D]"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173B35] mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E3EDE7] bg-white text-xs sm:text-sm text-[#173B35] focus:outline-none focus:border-[#0F5C4D]"
                >
                  <option value="Tajweed Foundations">Tajweed Foundations</option>
                  <option value="Online Quran Classes (Women & Families)">Online Quran Classes (Women & Families)</option>
                  <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
                  <option value="Noorani Qaida for Beginners">Noorani Qaida for Beginners</option>
                  <option value="Kids Quran Program">Kids Quran Program</option>
                  <option value="Namaz & Masnoon Duain">Namaz & Masnoon Duain (طریقہ نماز و دعائیں)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0F5C4D] hover:bg-[#123F38] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free Trial Session</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
