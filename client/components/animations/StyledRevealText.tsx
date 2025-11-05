import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StyledRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  splitBy?: 'words' | 'lines' | 'chars';
}

export const StyledRevealText: React.FC<StyledRevealTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 30,
  stagger = 0.05,
  splitBy = 'words'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    contextRef.current = gsap.context(() => {
      const animateAfterRender = () => {
        const textNodes: Text[] = [];
        const walker = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT,
          null
        );

        let node: Node | null;
        while ((node = walker.nextNode())) {
          const text = node.textContent?.trim();
          if (text) {
            textNodes.push(node as Text);
          }
        }

        const spans: HTMLSpanElement[] = [];

        textNodes.forEach(textNode => {
          const text = textNode.textContent || '';
          let splitText: string[] = [];

          switch (splitBy) {
            case 'words':
              splitText = text.split(' ').filter(t => t !== '');
              break;
            case 'lines':
              splitText = text.split('\n').filter(t => t !== '');
              break;
            case 'chars':
              splitText = text.split('');
              break;
          }

          if (splitText.length === 0) return;

          const parent = textNode.parentNode;
          if (!parent) return;

          const tempDiv = document.createElement('div');
          tempDiv.style.display = 'contents';

          splitText.forEach((part, index) => {
            const span = document.createElement('span');
            span.className = 'inline reveal-text-part';
            span.style.display = 'inline';
            span.textContent = part;
            tempDiv.appendChild(span);
            spans.push(span);

            if (splitBy === 'words' && index < splitText.length - 1) {
              const spaceSpan = document.createElement('span');
              spaceSpan.className = 'inline reveal-text-part';
              spaceSpan.style.display = 'inline';
              spaceSpan.innerHTML = '&nbsp;';
              tempDiv.appendChild(spaceSpan);
            }
          });

          try {
            parent.insertBefore(tempDiv, textNode);
            parent.removeChild(textNode);
          } catch (e) {
            // Continue if manipulation fails
          }
        });

        if (spans.length > 0) {
          gsap.set(spans, { y, opacity: 0 });
          gsap.to(spans, {
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
      };

      requestAnimationFrame(animateAfterRender);
    });

    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
        contextRef.current = null;
      }
    };
  }, [delay, duration, y, stagger, splitBy, children]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
