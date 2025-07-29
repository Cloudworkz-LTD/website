import Lenis from 'lenis';

// Instancia global de Lenis para acceso desde cualquier componente
let lenisInstance: Lenis | null = null;

export const setLenisInstance = (instance: Lenis) => {
  lenisInstance = instance;
};

export const getLenisInstance = () => lenisInstance;

// Función para hacer scroll suave a un elemento
export const scrollToElement = (target: string | HTMLElement, offset = 0) => {
  if (!lenisInstance) return;
  
  lenisInstance.scrollTo(target, {
    offset,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
};

// Función para hacer scroll al top
export const scrollToTop = () => {
  if (!lenisInstance) return;
  
  lenisInstance.scrollTo(0, {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
};

// Función para detener el scroll
export const stopScroll = () => {
  if (!lenisInstance) return;
  lenisInstance.stop();
};

// Función para reanudar el scroll
export const startScroll = () => {
  if (!lenisInstance) return;
  lenisInstance.start();
};