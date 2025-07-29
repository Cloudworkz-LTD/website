import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dividir el texto según la opción seleccionada
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

    // Crear spans para cada parte del texto
    container.innerHTML = splitText
      .map(part => `<span class="inline-block">${part}${splitBy === 'words' ? '&nbsp;' : ''}</span>`)
      .join('');

    const spans = container.querySelectorAll('span');

    // Configurar estado inicial
    gsap.set(spans, { y, opacity: 0 });

    // Crear animación con ScrollTrigger
    const animation = gsap.to(spans, {
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

    return () => {
      animation.kill();
    };
  }, [delay, duration, y, stagger, splitBy]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};