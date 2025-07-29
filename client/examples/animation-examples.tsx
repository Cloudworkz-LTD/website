// Ejemplos de uso de los componentes de animación

import { RevealText, FadeInUp, StaggerContainer } from '@/components/animations';

// Ejemplo 1: Texto que aparece palabra por palabra
<RevealText 
  className="text-4xl font-bold" 
  splitBy="words" 
  stagger={0.1}
  delay={0.2}
>
  Your Portal To Practical Growth
</RevealText>

// Ejemplo 2: Texto que aparece carácter por carácter (efecto typewriter)
<RevealText 
  className="text-2xl" 
  splitBy="chars" 
  stagger={0.02}
  duration={0.6}
>
  Powered by Smart Systems
</RevealText>

// Ejemplo 3: Contenedor que aparece con fade in desde abajo
<FadeInUp delay={0.3} duration={1} y={60}>
  <p className="text-lg">
    Step into a workspace where structure accelerates momentum.
  </p>
</FadeInUp>

// Ejemplo 4: Lista de elementos que aparecen escalonados
<StaggerContainer stagger={0.15} delay={0.5}>
  <div className="service-item">Sales-as-a-Service</div>
  <div className="service-item">The Cloudworkz App</div>
  <div className="service-item">Growth Engineering</div>
</StaggerContainer>

// Ejemplo 5: Combinando animaciones
<FadeInUp delay={0.2}>
  <RevealText 
    className="text-6xl font-kenyan" 
    splitBy="words" 
    stagger={0.08}
    delay={0.5}
  >
    Beyond Now
  </RevealText>
</FadeInUp>