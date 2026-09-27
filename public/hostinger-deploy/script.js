/**
 * Hafiz Quran Academy - Vanilla JavaScript
 * Production-ready for Hostinger static web hosting
 */

// ==========================================
// 1. CONFIGURATION (REPLACE WITH YOUR DETAILS)
// ==========================================
const WHATSAPP_NUMBER = "923021490138"; // Mobile & WhatsApp: +92 302 1490138
const CONTACT_PHONE = "+923021490138";
const ACADEMY_EMAIL = "admissions@hafizquranacademy.com";

// ==========================================
// 2. WHATSAPP HELPER FUNCTIONS
// ==========================================
function openWhatsApp(customText) {
  const defaultText = "Assalamu Alaikum, I would like to know more about your online Quran classes.";
  const textToSend = encodeURIComponent(customText || defaultText);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${textToSend}`, '_blank');
}

// ==========================================
// 3. STICKY HEADER SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// ==========================================
// 4. MOBILE NAVIGATION MENU
// ==========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close menu when clicking any nav link
  const mobileNavLinks = mobileMenu.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// ==========================================
// 5. FAQ ACCORDION
// ==========================================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  if (questionBtn) {
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other open faqs
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  }
});

// ==========================================
// 6. FREE TRIAL MODAL CONTROLS
// ==========================================
const trialModal = document.getElementById('trialModal');
const openTrialBtns = document.querySelectorAll('.open-trial-modal');
const closeTrialBtn = document.getElementById('closeTrialBtn');

function openModal(defaultCourse) {
  if (trialModal) {
    if (defaultCourse) {
      const modalCourseSelect = document.getElementById('modalCourseSelect');
      if (modalCourseSelect) modalCourseSelect.value = defaultCourse;
    }
    trialModal.classList.add('open');
  }
}

function closeModal() {
  if (trialModal) {
    trialModal.classList.remove('open');
  }
}

openTrialBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const course = btn.getAttribute('data-course');
    openModal(course);
  });
});

if (closeTrialBtn) {
  closeTrialBtn.addEventListener('click', closeModal);
}

if (trialModal) {
  trialModal.addEventListener('click', (e) => {
    if (e.target === trialModal) {
      closeModal();
    }
  });
}

// ==========================================
// 7. CONTACT & REGISTRATION FORMS
// ==========================================
const mainContactForm = document.getElementById('mainContactForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');

if (mainContactForm) {
  mainContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value || 'Student';
    const phone = document.getElementById('contactPhone')?.value || '';
    const course = document.getElementById('contactCourse')?.value || 'Quran Course';
    const time = document.getElementById('contactTime')?.value || 'Flexible';

    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and WhatsApp/phone number.');
      return;
    }

    // Hide form, show confirmation state
    mainContactForm.style.display = 'none';
    if (formSuccessMessage) {
      formSuccessMessage.style.display = 'block';
    }
  });
}

const modalForm = document.getElementById('modalTrialForm');
if (modalForm) {
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('modalName')?.value || 'Student';
    const phone = document.getElementById('modalPhone')?.value || '';
    const course = document.getElementById('modalCourseSelect')?.value || 'Quran Course';

    alert(`JazakAllah Khair ${name}! Your free trial request for ${course} has been received. Our coordinator will message you on WhatsApp at ${phone}.`);
    closeModal();
  });
}

// ==========================================
// 8. AUDIO RECITATION PREVIEW
// ==========================================
let recitationAudio = null;
const audioBtn = document.getElementById('recitationAudioBtn');
const audioStatus = document.getElementById('audioStatusText');

if (audioBtn) {
  audioBtn.addEventListener('click', () => {
    if (!recitationAudio) {
      recitationAudio = new Audio('https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3');
      recitationAudio.onended = () => {
        if (audioBtn) audioBtn.innerHTML = '▶';
        if (audioStatus) audioStatus.innerText = 'Audio Preview';
      };
    }

    if (recitationAudio.paused) {
      recitationAudio.play().then(() => {
        audioBtn.innerHTML = '❚❚';
        if (audioStatus) audioStatus.innerText = 'Playing Surah Al-Fatiha';
      }).catch(err => {
        console.error('Audio playback error:', err);
      });
    } else {
      recitationAudio.pause();
      audioBtn.innerHTML = '▶';
      if (audioStatus) audioStatus.innerText = 'Paused';
    }
  });
}
