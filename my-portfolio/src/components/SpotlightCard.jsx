import { useRef } from 'react';

// Card whose border and surface glow follow the pointer (see .spotlight in index.css).
const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty('--x', `${event.clientX - rect.left}px`);
    element.style.setProperty('--y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={`spotlight rounded-3xl border border-line bg-ink-2/80 ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
