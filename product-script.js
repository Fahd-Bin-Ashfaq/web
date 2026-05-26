// ── Sticky Bar (show after scrolling 400px) ───────────────
const stickyBar = document.getElementById('stickyBar');
if (stickyBar) {
  window.addEventListener('scroll', () => {
    stickyBar.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

// ── Scroll Reveal ──────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Video Sound Toggle ─────────────────────────────────────
document.querySelectorAll('.sound-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const video = btn.closest('.video-card').querySelector('video');
    if (!video) return;
    video.muted = !video.muted;
    btn.textContent = video.muted ? '🔇 Sound' : '🔊 Sound';
    btn.dataset.muted = video.muted;
  });
});

// ── Button Press Feedback ──────────────────────────────────
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('pointerdown', () => { btn.style.transform = 'scale(0.97)'; });
  btn.addEventListener('pointerup',   () => { btn.style.transform = ''; });
  btn.addEventListener('pointerleave',() => { btn.style.transform = ''; });
});

// ── Smooth Anchor Scroll ───────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
