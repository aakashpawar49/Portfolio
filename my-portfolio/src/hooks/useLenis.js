import { useEffect } from 'react';
import Lenis from 'lenis';

// Inertia-style smooth scrolling. Skipped when the visitor prefers reduced motion.
export default function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      autoRaf: true,
      anchors: { offset: -80 },
    });

    return () => lenis.destroy();
  }, []);
}
