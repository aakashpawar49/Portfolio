import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import profile from '../data/profile';
import { hardSkills } from '../data/skills';

const ROW_ONE = profile.hero.keywords;
const ROW_TWO = [...new Set(Object.values(hardSkills).flat())].slice(0, 10);

const Row = ({ items, x, outlined }) => (
  <motion.div style={{ x }} className="flex w-max items-center gap-10 whitespace-nowrap">
    {[...items, ...items].map((item, i) => (
      <span key={`${item}-${i}`} className="flex items-center gap-10">
        <span className={outlined ? 'text-outline' : 'text-fg'}>{item}</span>
        <span className="text-[0.45em] text-accent">✦</span>
      </span>
    ))}
  </motion.div>
);

// Two oversized rows of tech names that slide in opposite directions as the page scrolls.
const Marquee = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const forward = useTransform(scrollYProgress, [0, 1], reduce ? ['-10%', '-10%'] : ['0%', '-28%']);
  const backward = useTransform(scrollYProgress, [0, 1], reduce ? ['-18%', '-18%'] : ['-28%', '0%']);

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="relative overflow-x-clip border-y border-line bg-ink-2/60 py-10 sm:py-14"
    >
      <div className="space-y-3 text-5xl leading-[1.1] font-semibold tracking-[-0.04em] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:text-7xl lg:text-8xl">
        <Row items={ROW_ONE} x={forward} />
        <Row items={ROW_TWO} x={backward} outlined />
      </div>
    </section>
  );
};

export default Marquee;
