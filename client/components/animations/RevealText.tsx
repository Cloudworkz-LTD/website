import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  splitBy?: 'words' | 'lines' | 'chars';
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 30,
  stagger = 0.05,
  splitBy = 'words'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent || '';
    let splitText: string[] = [];

    switch (splitBy) {
      case 'words':
        splitText = text.split(' ');
        break;
      case 'lines':
        splitText = text.split('\n');
        break;
      case 'chars':
        splitText = text.split('');
        break;
    }

    const spans: HTMLSpanElement[] = [];
    const fragment = document.createDocumentFragment();

    splitText.forEach((part, index) => {
      const span = document.createElement('span');
      span.className = 'inline-block reveal-text-span';
      span.style.display = 'inline-block';
      span.textContent = part;
      fragment.appendChild(span);
      spans.push(span);

      if (splitBy === 'words' && index < splitText.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'reveal-text-space';
        spaceSpan.style.display = 'inline-block';
        spaceSpan.textContent = ' ';
        fragment.appendChild(spaceSpan);
      }
    });

    container.textContent = '';
    container.appendChild(fragment);

    if (spans.length > 0) {
      gsap.set(spans, { y, opacity: 0 });

      animationRef.current = gsap.to(spans, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        }
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y, stagger, splitBy, children]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
