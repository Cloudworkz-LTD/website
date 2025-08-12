import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Función para procesar nodos de texto y crear spans preservando estilos
    const processTextNodes = (element: Element): void => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Text[] = [];
      let node;
      
      while (node = walker.nextNode()) {
        if (node.textContent?.trim()) {
          textNodes.push(node as Text);
        }
      }

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

        if (splitText.length > 0) {
          const fragment = document.createDocumentFragment();
          
          splitText.forEach((part, index) => {
            // Solo crear span si la parte no está vacía (para words y lines)
            if (part.trim() || splitBy === 'chars') {
              const span = document.createElement('span');
              span.className = 'inline-block reveal-text-part';
              span.textContent = part;
              fragment.appendChild(span);
            }
            
            // Agregar espacio después de cada palabra (excepto la última)
            if (splitBy === 'words' && index < splitText.length - 1) {
              const spaceSpan = document.createElement('span');
              spaceSpan.className = 'inline-block reveal-text-part';
              spaceSpan.innerHTML = '&nbsp;';
              fragment.appendChild(spaceSpan);
            }
          });

          textNode.parentNode?.replaceChild(fragment, textNode);
        }
      });
    };

    // Procesar todos los elementos con texto
    processTextNodes(container);

    // Obtener todos los spans creados
    const spans = container.querySelectorAll('.reveal-text-part');

    if (spans.length > 0) {
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
    }
  }, [delay, duration, y, stagger, splitBy]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};