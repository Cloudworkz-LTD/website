import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenisInstance } from '../lib/lenis-utils';

export const useLenis = () => {
  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Hacer la instancia accesible globalmente
    setLenisInstance(lenis);

    // Función para actualizar Lenis en cada frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup al desmontar
    return () => {
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);
};