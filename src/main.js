"use strict";
// Daniel Staggs — Portfolio
// main.ts — compiled to main.js for local use
// Handles: nav scroll state, mobile menu, scroll reveal animations
// ─── Nav scroll state ─────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });
// ─── Mobile nav toggle ────────────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});
// ─── Scroll reveal ────────────────────────────────────────────────────────────
const revealElements = () => {
    const elements = document.querySelectorAll('.about-grid, .project-card, .skill-group, .timeline-item, .stat-card, .section-title, .section-sub, .section-label');
    elements.forEach((el) => {
        el.classList.add('reveal');
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Stagger children if it's a grid parent
                const target = entry.target;
                target.classList.add('visible');
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
    });
    elements.forEach((el) => observer.observe(el));
};
// ─── Stagger project cards ────────────────────────────────────────────────────
const staggerCards = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.07}s`;
    });
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
    });
    const skillGroups = document.querySelectorAll('.skill-group');
    skillGroups.forEach((group, i) => {
        group.style.transitionDelay = `${i * 0.08}s`;
    });
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });
};
// ─── Active nav link highlighting ────────────────────────────────────────────
const highlightActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navAnchors.forEach((a) => {
                    a.style.color = '';
                    if (a.getAttribute('href') === `#${id}`) {
                        a.style.color = 'var(--text)';
                    }
                });
            }
        });
    }, { threshold: 0.4 });
    sections.forEach((section) => observer.observe(section));
};
// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    staggerCards();
    highlightActiveNav();
});
