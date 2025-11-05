import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface JustifiedRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  splitBy?: 'words' | 'lines' | 'chars';
}

export const JustifiedRevealText: React.FC<JustifiedRevealTextProps> = ({
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

    const selectAllTextNodes = (element: Element): Text[] => {
      const textNodes: Text[] = [];
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );

      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node.textContent?.trim()) {
          textNodes.push(node as Text);
        }
      }
      return textNodes;
    };

    const textNodes = selectAllTextNodes(container);
    const spans: HTMLSpanElement[] = [];

    textNodes.forEach(textNode => {
      const text = textNode.textContent || '';
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

      const parentNode = textNode.parentNode;
      if (!parentNode || splitText.length === 0) return;

      const fragment = document.createDocumentFragment();

      splitText.forEach((part, index) => {
        if (part.trim() || splitBy === 'chars') {
          const span = document.createElement('span');
          span.className = 'reveal-text-part';
          span.style.display = 'inline';
          span.style.whiteSpace = 'nowrap';
          span.textContent = part;
          fragment.appendChild(span);
          spans.push(span);
        }

        if (splitBy === 'words' && index < splitText.length - 1) {
          const spaceNode = document.createTextNode(' ');
          fragment.appendChild(spaceNode);
        }
      });

      try {
        parentNode.replaceChild(fragment, textNode);
      } catch (e) {
        console.warn('Could not replace text node:', e);
      }
    });

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
