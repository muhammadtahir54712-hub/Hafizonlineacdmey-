import React, { useState, useRef } from 'react';
import { HeartHandshake, CheckCircle2, Award, Sparkles, BookOpen, Volume2, Play, Pause } from 'lucide-react';

interface AboutTeacherProps {
  onOpenTrial: () => void;
}

export const AboutTeacher: React.FC<AboutTeacherProps> = ({ onOpenTrial }) => {
  const [imageError, setImageError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Free public domain authentic recitation sample (Surah Al-Fatiha by Sheikh Mishary Rashid Alafasy)
  const sampleAudioUrl = "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3";

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sampleAudioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const credentials = [
    {
      title: "Patient Teaching",
      desc: "Warm and encouraging guidance for both hesitant children and busy adults."
    },
    {
      title: "Structured Lessons",
      desc: "Clear syllabus from Noorani Qaida to full Quran recitation and Tajweed mastery."
    },
    {
      title: "Individual Attention",
      desc: "Exclusive 1-on-1 focus ensuring zero rush and complete retention."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FBF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Subtle Arched Border & Audio Snippet */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E3EDE7] bg-white">
              {!imageError ? (
                <img
                  src="/images/about-teacher.jpg"
                  alt="Quran teacher study sanctuary with open Quran, Tajweed notes, prayer beads and warm sunlight"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-[#EEF7F2] flex flex-col items-center justify-center p-6 text-center text-[#0F5C4D]">
                  <BookOpen className="w-12 h-12 mb-2" />
                  <p className="font-serif font-bold">Islamic Scholarly Sanctuary</p>
                </div>
              )}

              {/* Recitation Audio Demo Card */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E3EDE7]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleAudio}
                      type="button"
                      className="w-10 h-10 rounded-full bg-[#0F5C4D] text-white flex items-center justify-center hover:bg-[#123F38] transition-colors shadow-sm cursor-pointer shrink-0"
                      aria-label={isPlaying ? "Pause Recitation Sample" : "Play Recitation Sample"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-[#173B35] flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-[#B99A5B]" />
                        <span>Listen to Recitation Standard</span>
                      </div>
                      <div className="text-[11px] text-[#5E6D68]">
                        Surah Al-Fatiha · Pure Tajweed articulation
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#0F5C4D] bg-[#EEF7F2] px-2 py-1 rounded">
                    {isPlaying ? "Playing..." : "Audio Preview"}
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative leaf accent */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#EEF7F2] border border-[#DDEDE5] p-3 rounded-xl shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F5C4D]">
                <Award className="w-4 h-4 text-[#B99A5B]" />
                <span>Certified Ijazah & Hafiz Tutors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#B99A5B]">
              <span>About Your Teacher</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B35] tracking-tight mb-5 leading-tight text-balance">
              Personal Guidance for a Meaningful Quran Journey
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5E6D68] leading-relaxed mb-8">
              <p>
                At Hafiz Quran Academy, our calling is to make Quranic education gentle, accurate, and deeply spiritually rewarding. We believe that learning the words of Allah should inspire calm confidence rather than stress.
              </p>
              <p>
                Whether teaching a 6-year-old their very first Arabic sounds in Noorani Qaida, guiding a sister through Tajweed rules from home, or mentoring an adult striving for flawless recitation, we tailor every lesson to the student's individual learning pace.
              </p>
              <p className="text-xs sm:text-sm text-[#173B35] font-medium bg-[#EEF7F2]/60 p-3.5 rounded-xl border border-[#DDEDE5]">
                "The best among you are those who learn the Quran and teach it." — Sahih Bukhari
              </p>
            </div>

            {/* Compact Credentials / Trust Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#E3EDE7] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F5C4D] mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B99A5B] shrink-0" />
                    <span>{cred.title}</span>
                  </div>
                  <p className="text-xs text-[#5E6D68] leading-snug">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenTrial}
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0F5C4D] hover:bg-[#123F38] rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Meet Your Teacher in a Free Trial
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
