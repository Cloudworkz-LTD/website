import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.1,
  y = 30
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = container.children;

    // Configurar estado inicial
    gsap.set(childElements, { y, opacity: 0 });

    // Crear animación con ScrollTrigger
    const animation = gsap.to(childElements, {
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
  }, [delay, duration, stagger, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};