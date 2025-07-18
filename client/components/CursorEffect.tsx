import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CursorEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function CursorEffect({
  children,
  className,
}: CursorEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current];

    if (!container || !cursor || shapes.some((shape) => !shape)) return;

    const handleMouseMove = (evt: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = evt.clientX - rect.left;
      const mouseY = evt.clientY - rect.top;

      // Update cursor position
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      // Update shapes with stagger effect
      gsap.to(shapes, {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      gsap.to(shapes, { opacity: 0.9, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      gsap.to(shapes, { opacity: 0, duration: 0.3 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative cursor-none ${className || ""}`}
      style={{ isolation: "isolate" }}
    >
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 bg-cloudworkz-primary rounded-full pointer-events-none z-[10000] opacity-0"
        style={{
          marginLeft: "-10px",
          marginTop: "-10px",
          willChange: "transform",
        }}
      />

      {/* Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shape 1 - Large CloudWorkz blue */}
        <div
          ref={shape1Ref}
          className="absolute rounded-full opacity-0"
          style={{
            background: "linear-gradient(135deg, #126AF9, #3B82F6)",
            width: "650px",
            height: "650px",
            marginLeft: "-325px",
            marginTop: "-325px",
            willChange: "transform",
          }}
        />

        {/* Shape 2 - Medium cyan-teal */}
        <div
          ref={shape2Ref}
          className="absolute rounded-full opacity-0"
          style={{
            background: "linear-gradient(135deg, #06B6D4, #14B8A6)",
            width: "440px",
            height: "440px",
            marginLeft: "-220px",
            marginTop: "-220px",
            willChange: "transform",
          }}
        />

        {/* Shape 3 - Small light blue */}
        <div
          ref={shape3Ref}
          className="absolute rounded-full opacity-0"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #38BDF8)",
            width: "270px",
            height: "270px",
            marginLeft: "-135px",
            marginTop: "-135px",
            willChange: "transform",
          }}
        />
      </div>

      {/* Content with blend mode */}
      <div
        className="relative z-10"
        style={{
          mixBlendMode: "screen",
          isolation: "isolate",
        }}
      >
        {children}
      </div>
    </div>
  );
}
