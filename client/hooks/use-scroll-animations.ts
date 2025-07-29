import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenisInstance } from '../lib/lenis-utils';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    
    const lenis = getLenisInstance();
    
    if (lenis) {
      // Integrar ScrollTrigger con Lenis
      lenis.on('scroll', ScrollTrigger.update);
      
      gsap.ticker.lagSmoothing(0);
      
      isInitialized.current = true;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

// Hook para animar elementos individuales
export const useRevealAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    opacity?: number;
    stagger?: number;
  } = {}
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      delay = 0,
      duration = 0.8,
      y = 50,
      opacity = 0,
      stagger = 0.1
    } = options;

    // Configurar estado inicial
    gsap.set(element, { y, opacity });

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
  }, []);
};