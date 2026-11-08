import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { EASE } from '@/lib/motion';

// Counts up to a label such as "05+" once visible, keeping zero-padding and suffix.
const Counter = ({ value }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const width = match ? match[1].length : 0;
  const suffix = match ? match[2] : '';

  const count = useMotionValue(0);
  const text = useTransform(count, (v) => String(Math.round(v)).padStart(width, '0'));

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      count.set(target);
      return undefined;
    }
    const controls = animate(count, target, { duration: 1.8, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, target, count]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
};

export default Counter;
