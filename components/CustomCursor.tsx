import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, input, select, textarea, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, input, select, textarea, [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  const outlineSize = isHovering ? 60 : 40;
  const dotSize = isHovering ? 0 : 8;

  return (
    <div className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
      <div
        className="cursor__dot absolute rounded-full transition-all duration-300 ease-in-out"
        style={{
          transform: `translate(${position.x - dotSize / 2}px, ${position.y - dotSize / 2}px)`,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
        }}
      />
      <div
        className="cursor__outline absolute rounded-full transition-all duration-300 ease-in-out"
        style={{
          transform: `translate(${position.x - outlineSize / 2}px, ${position.y - outlineSize / 2}px)`,
          width: `${outlineSize}px`,
          height: `${outlineSize}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
