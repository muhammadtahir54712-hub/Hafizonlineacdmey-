import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/quranAcademyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const message = encodeURIComponent("Assalamu Alaikum, I would like to know more about your Quran classes.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#173B35] px-3.5 py-2 rounded-xl shadow-lg border border-[#E3EDE7] text-xs font-medium animate-fadeIn">
          <span>Need help? Chat with an Advisor</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#5E6D68] hover:text-[#173B35] p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        type="button"
        className="w-13 h-13 rounded-full bg-[#0F5C4D] hover:bg-[#123F38] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/60"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
