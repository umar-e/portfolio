document.documentElement.classList.add('js');

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Nav border once scrolled
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the current section in the nav
const navLinks = [...document.querySelectorAll('.nav__links a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach((a) => {
  const section = document.querySelector(a.getAttribute('href'));
  if (section) sectionObserver.observe(section);
});

// Project filters
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.project');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-pressed', c === chip);
    });
    projects.forEach((p) => {
      p.hidden = filter !== 'all' && p.dataset.status !== filter;
    });
  });
});

// Footer: year + Islamabad local time
document.getElementById('year').textContent = new Date().getFullYear();
const clock = document.getElementById('clock');
const tick = () => {
  const t = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' }).format(new Date());
  clock.textContent = `Islamabad · ${t} PKT`;
};
tick();
setInterval(tick, 30000);
