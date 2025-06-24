import React, { useRef, useEffect, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        node.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

export default FadeInSection;
