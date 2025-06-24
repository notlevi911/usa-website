import React, { useEffect, useRef } from 'react';

const GlassCursorEffect: React.FC = () => {
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glassRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        glassRef.current.style.left = `${x - 150}px`;
        glassRef.current.style.top = `${y - 150}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glassRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 300,
        height: 300,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        border: '1.5px solid rgba(255,255,255,0.3)',
        zIndex: 2,
        transition: 'left 0.12s, top 0.12s',
        mixBlendMode: 'lighten',
      }}
    />
  );
};

export default GlassCursorEffect;
