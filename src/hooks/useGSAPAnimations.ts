import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-content', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out',
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Animate project cards
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      });
    });

    // Animate skill bars
    gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
      gsap.from(bar, {
        width: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
