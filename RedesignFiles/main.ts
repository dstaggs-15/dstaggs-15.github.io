// Daniel Staggs — Portfolio
// main.ts — compiled to main.js for local use
// Handles: nav scroll state, mobile menu, scroll reveal animations

// ─── Nav scroll state ─────────────────────────────────────────────────────────

const nav = document.getElementById('nav') as HTMLElement;

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ─── Mobile nav toggle ────────────────────────────────────────────────────────

const navToggle = document.getElementById('navToggle') as HTMLButtonElement;
const navLinks = document.querySelector('.nav-links') as HTMLElement;

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link: Element) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── Scroll reveal ────────────────────────────────────────────────────────────

const revealElements = (): void => {
  const elements = document.querySelectorAll<HTMLElement>(
    '.about-grid, .project-card, .skill-group, .timeline-item, .stat-card, .section-title, .section-sub, .section-label'
  );

  elements.forEach((el: HTMLElement) => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Stagger children if it's a grid parent
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el: HTMLElement) => observer.observe(el));
};

// ─── Stagger project cards ────────────────────────────────────────────────────

const staggerCards = (): void => {
  const cards = document.querySelectorAll<HTMLElement>('.project-card');
  cards.forEach((card: HTMLElement, i: number) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  const statCards = document.querySelectorAll<HTMLElement>('.stat-card');
  statCards.forEach((card: HTMLElement, i: number) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  const skillGroups = document.querySelectorAll<HTMLElement>('.skill-group');
  skillGroups.forEach((group: HTMLElement, i: number) => {
    group.style.transitionDelay = `${i * 0.08}s`;
  });

  const timelineItems = document.querySelectorAll<HTMLElement>('.timeline-item');
  timelineItems.forEach((item: HTMLElement, i: number) => {
    item.style.transitionDelay = `${i * 0.1}s`;
  });
};

// ─── Active nav link highlighting ────────────────────────────────────────────

const highlightActiveNav = (): void => {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navAnchors = document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a: HTMLAnchorElement) => {
            a.style.color = '';
            if (a.getAttribute('href') === `#${id}`) {
              a.style.color = 'var(--text)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section: HTMLElement) => observer.observe(section));
};

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  revealElements();
  staggerCards();
  highlightActiveNav();
});
