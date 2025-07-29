import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 50
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configurar estado inicial
    gsap.set(element, { y, opacity: 0 });

    // Crear animación con ScrollTrigger
    const animation = gsap.to(element, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      }
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};