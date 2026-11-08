import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import useMediaQuery from '@/hooks/useMediaQuery';

// Soft light that trails the mouse across the page (mouse/trackpad only).
const CursorGlow = () => {
  const finePointer = useMediaQuery('(pointer: fine)');
  const reduce = useReducedMotion();
  const enabled = finePointer && !reduce;

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const smoothX = useSpring(x, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 24 });
  const background = useMotionTemplate`radial-gradient(560px circle at ${smoothX}px ${smoothY}px, rgb(139 124 255 / 0.075), transparent 70%)`;

  useEffect(() => {
    if (!enabled) return undefined;
    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return <motion.div aria-hidden="true" style={{ background }} className="pointer-events-none fixed inset-0 z-30" />;
};

export default CursorGlow;
