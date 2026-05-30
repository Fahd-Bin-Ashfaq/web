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

// ── Infinite Logos Marquee ─────────────────────────────────
window.addEventListener('load', function () {
  const track = document.querySelector('.logos-track');
  if (!track) return;

  track.style.animation = 'none';
  track.style.transform  = 'translateX(0)';

  const halfWidth = track.scrollWidth / 2;
  let x = 0;

  function marquee() {
    x -= 1.2;
    if (-x >= halfWidth) x += halfWidth;
    track.style.transform = 'translateX(' + x + 'px)';
    requestAnimationFrame(marquee);
  }

  requestAnimationFrame(marquee);
});
