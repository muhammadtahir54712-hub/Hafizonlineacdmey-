/**
 * Hafiz Online Learning Hub - Data Configuration
 * Configurable for real client deployment on Hostinger or any web host.
 */

// WEBSITE OWNER CONFIGURATION:
export const WHATSAPP_NUMBER = "923021490138";
export const CONTACT_PHONE = "+923021490138";
export const CONTACT_PHONE_DISPLAY = "+92 302 1490138";
export const ACADEMY_EMAIL = "admissions@hafizquranacademy.com";
export const ACADEMY_NAME = "Hafiz Quran Academy";
export const ACADEMY_LEGAL_NAME = "Hafiz Online Learning Hub";
export const ACADEMY_TAGLINE = "Learn Quran. Live with Guidance.";

export interface ServiceItem {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
}

export const WHAT_WE_TEACH: ServiceItem[] = [
  {
    id: "quran-reading",
    title: "Quran Reading",
    arabicTitle: "قراءة القرآن",
    description: "Learn to read the Quran correctly from the basics with proper phonetic articulation and continuous guided practice.",
    duration: "30-45 mins / class",
    level: "Beginner to Intermediate",
    features: ["Arabic alphabet mastery", "Joining letter rules", "Smooth sentence reading", "Daily reading fluency"]
  },
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    arabicTitle: "القاعدة النورانية",
    description: "Build an unbreakable foundation in Arabic phonetics, vowel signs (Harakat), and letter recognition designed for young learners & new readers.",
    duration: "30 mins / class",
    level: "Complete Beginners & Kids",
    features: ["Step-by-step primer", "Makharij recognition", "Child-friendly pacing", "Color-coded exercises"]
  },
  {
    id: "tajweed-rules",
    title: "Tajweed Rules",
    arabicTitle: "أحكام التجويد",
    description: "Master Quranic recitation according to the authentic rules of Tajweed, Makharij (points of articulation), and Sifaat (characteristics).",
    duration: "45 mins / class",
    level: "All Ages & Levels",
    features: ["Noon & Meem Sakinah rules", "Madd & elongation types", "Qalqalah & Ghunnah", "Audio-visual feedback"]
  },
  {
    id: "quran-memorization",
    title: "Quran Memorization",
    arabicTitle: "حفظ القرآن الكريم",
    description: "Structured Hifz program customized to each student's capacity, combining systematic new memorization with rigorous daily revision.",
    duration: "45-60 mins / class",
    level: "Dedicated Students",
    features: ["Daily Sabaq, Sabqi & Manzil", "Retention tracking", "One-on-one Hafiz tutor", "Quarterly certification"]
  },
  {
    id: "namaz-duas",
    title: "Namaz & Masnoon Duain",
    arabicTitle: "الصلاة والأدعية المسنونة",
    description: "Learn complete practical method of Namaz (Salah), Wudu, Azan, 6 Kalimas, and essential daily Masnoon Duas with correct Arabic pronunciation.",
    duration: "30-45 mins / class",
    level: "Children, Youth & Adults",
    features: ["Step-by-step Namaz method", "Wudu & Taharah fundamentals", "Daily Masnoon Duain & Azkar", "Six Kalimas with translation"]
  },
  {
    id: "correct-recitation",
    title: "Correct Recitation",
    arabicTitle: "تصحيح التلاوة",
    description: "Refine your recitation fluency, rhythm, and confidence under the direct listening and corrective ear of an experienced teacher.",
    duration: "30-45 mins / class",
    level: "Intermediate to Advanced",
    features: ["Waqf & Ibtida (Stopping rules)", "Breath control techniques", "Melodic & reverent tone", "Error correction"]
  }
];

export interface CoursePackage {
  id: string;
  name: string;
  arabicName: string;
  badge?: string;
  targetAudience: string;
  recommendedFor: string;
  curriculum: string[];
  ctaText: string;
  highlighted?: boolean;
}

export const FEATURED_COURSES: CoursePackage[] = [
  {
    id: "tajweed-foundations",
    name: "Tajweed Foundations",
    arabicName: "أساسيات التجويد",
    targetAudience: "For Kids & Adults",
    recommendedFor: "Beginners wanting pristine pronunciation and foundational Tajweed rules.",
    curriculum: [
      "Quran reading fundamentals & letter recognition",
      "Comprehensive Noorani Qaida modules",
      "Essential Tajweed & points of articulation (Makharij)",
      "Daily guided recitation and gentle correction",
      "Practical exercises in short Surahs (Juz Amma)"
    ],
    ctaText: "Enroll in Foundations",
    highlighted: false
  },
  {
    id: "online-quran-classes",
    name: "Online Quran Classes",
    arabicName: "فصول القرآن التفاعلية",
    badge: "Most Popular",
    targetAudience: "For Women & Families",
    recommendedFor: "Busy households, sisters, and children seeking personalized one-on-one lessons.",
    curriculum: [
      "Live 1-on-1 private video or audio lessons",
      "Flexible schedule with 24/7 rescheduling support",
      "Dedicated qualified female tutors available for sisters",
      "Integrated Quran reading, Tajweed & daily Dua supplications",
      "Monthly parent progress reports and student assessments"
    ],
    ctaText: "Book a Free Trial",
    highlighted: true
  },
  {
    id: "quran-memorization-hifz",
    name: "Quran Memorization",
    arabicName: "برنامج التحفيظ والإتقان",
    badge: "Hifz Program",
    targetAudience: "Full & Partial Hifz",
    recommendedFor: "Students aspiring to memorize the Holy Quran or specific Surahs with strong retention.",
    curriculum: [
      "Personalized memorization blueprint & daily quotas",
      "Triple-tier revision method: Sabaq, Sabqi, and Manzil",
      "Strict Tajweed enforcement during memorization",
      "Direct guidance by certified Sanad-holding Huffaz",
      "Flexible pacing adapted to school or work commitments"
    ],
    ctaText: "Explore Hifz Program",
    highlighted: false
  }
];

export const SPECIAL_PROGRAMS = [
  {
    id: "prog-1",
    title: "Quran Reading for Beginners",
    description: "Zero-barrier introduction for those who have never read Arabic before.",
    icon: "BookOpen",
    tag: "Ages 5+"
  },
  {
    id: "prog-2",
    title: "Weekend Quran Classes",
    description: "Specially designed 2-day schedules for busy school children and working professionals.",
    icon: "Calendar",
    tag: "Flexible"
  },
  {
    id: "prog-3",
    title: "Kids Quran Program",
    description: "Engaging, visual, and rewarding teaching style that makes children love learning Quran.",
    icon: "HeartHandshake",
    tag: "Engaging"
  },
  {
    id: "prog-4",
    title: "Women’s Quran Classes",
    description: "Comfortable, private one-on-one sessions led by certified female Islamic scholars.",
    icon: "ShieldCheck",
    tag: "Private"
  },
  {
    id: "prog-5",
    title: "Hifz & Intensive Revision",
    description: "Solidify previously memorized Surahs and overcome common retention hurdles.",
    icon: "Award",
    tag: "Intensive"
  },
  {
    id: "prog-6",
    title: "Ramadan Quran Preparation",
    description: "Focused recitation and Tajweed polish to complete the Quran during blessed months.",
    icon: "Moon",
    tag: "Seasonal"
  }
];

export const WHY_FAMILIES_CHOOSE_US = [
  {
    title: "Learn From Home",
    description: "Safe, comfortable, and distraction-free learning from the convenience of your living room.",
    iconName: "Home"
  },
  {
    title: "Flexible Class Timings",
    description: "Schedule classes around school, work, and family routines across all worldwide timezones.",
    iconName: "Clock"
  },
  {
    title: "One-to-One Guidance",
    description: "Every student receives 100% of the teacher's dedicated attention without crowded classroom delays.",
    iconName: "UserCheck"
  },
  {
    title: "Step-by-Step Learning",
    description: "Structured curriculum advancing systematically from the basic alphabet to beautiful fluent recitation.",
    iconName: "Layers"
  },
  {
    title: "Friendly Teaching Environment",
    description: "Patient, polite, and encouraging instructors who cultivate genuine love and reverence for Allah's words.",
    iconName: "Smile"
  },
  {
    title: "Progress-Focused Lessons",
    description: "Regular feedback, measurable milestones, and transparent monthly progress updates for parents.",
    iconName: "TrendingUp"
  }
];

export const THREE_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Send us a quick message or book online. Tell us your goals, preferred timings, and current Quran reading level."
  },
  {
    step: "02",
    title: "Choose Your Course",
    description: "Take an introductory 100% free trial class, get evaluated by a senior teacher, and choose your custom schedule."
  },
  {
    step: "03",
    title: "Start Learning",
    description: "Join your private interactive video classroom and embark on a rewarding lifelong relationship with the Quran."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The lessons are easy to understand, and the step-by-step approach has helped my 7-year-old son transition from struggling with letters to reading full Quran verses with confidence.",
    author: "Zainab Al-Hassan",
    role: "Parent of Student",
    location: "London, United Kingdom",
    rating: 5,
    course: "Noorani Qaida & Reading"
  },
  {
    quote: "As a working professional, I struggled to find evening timings. My teacher is extraordinarily patient with my Tajweed mistakes and explains the articulation points in clear English.",
    author: "Dr. Farhan Tariq",
    role: "Adult Quran Student",
    location: "Toronto, Canada",
    rating: 5,
    course: "Tajweed & Recitation"
  },
  {
    quote: "Having a qualified female tutor for my daughters was our primary requirement. The academy exceeded our expectations. The children genuinely look forward to their class every day.",
    author: "Fatima & Omar K.",
    role: "Parents of Two Students",
    location: "Dallas, Texas, USA",
    rating: 5,
    course: "Kids Quran Program"
  },
  {
    quote: "I restarted my Quran revision after a long gap. The structured revision plan and daily accountability have allowed me to complete 5 Juz revision in just 3 months with proper Tajweed.",
    author: "Bilal Mansoor",
    role: "Online Hifz Student",
    location: "Sydney, Australia",
    rating: 5,
    course: "Quran Memorization"
  }
];

export const FAQS = [
  {
    question: "Do you offer a free trial class?",
    answer: "Yes, absolutely! We offer a completely free, 30-minute one-on-one trial session with no credit card or payment commitment required. This allows you or your child to experience our teaching methodology, meet the instructor, and receive an honest reading level evaluation."
  },
  {
    question: "Are classes available for young children?",
    answer: "Yes. We specialize in teaching children as young as 5 years old. Our certified teachers use engaging, patient, and interactive techniques, digital flashcards, and positive reinforcement to keep young minds attentive and enthusiastic."
  },
  {
    question: "Can women learn from home with female teachers?",
    answer: "Yes, definitely. We have a dedicated team of highly qualified, certified female Quran teachers (Alimaat and Hafizaat) available specifically for sisters, young girls, and mothers who prefer female instructors."
  },
  {
    question: "What timings and days are available?",
    answer: "Our classes run 24 hours a day, 7 days a week to accommodate students across all timezones including North America, the UK, Europe, Australia, and the Middle East. You can choose class timings that fit perfectly into your family's routine."
  },
  {
    question: "Do you teach Tajweed from beginner level?",
    answer: "Yes. Even if you have never studied Tajweed before, we break down rules such as Makharij (pronunciation points), Ghunnah, Qalqalah, and Madd into simple, practical, bite-sized lessons with immediate oral practice."
  },
  {
    question: "Are classes conducted one-to-one or in groups?",
    answer: "All our standard classes are private, one-to-one sessions. This guarantees 100% individual attention from the teacher, allowing lessons to proceed exactly at your personal pace without feeling rushed or held back."
  },
  {
    question: "Can students join from outside Pakistan or their home country?",
    answer: "Yes. Over 90% of our students reside in the United States, Canada, the United Kingdom, Australia, UAE, and Germany. All classes are conducted online via Zoom or Google Meet with high-quality audio and screen sharing."
  },
  {
    question: "How are classes conducted online?",
    answer: "Classes are held using Zoom or Google Meet. The teacher shares high-resolution, color-coded digital Quran pages and Qaida materials on the screen. The student and teacher interact live with audio and pen annotations, making it just as effective as sitting side-by-side in person."
  }
];
