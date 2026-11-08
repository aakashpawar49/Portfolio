import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Reveal from '@/components/motion/Reveal';
import Accent from '@/components/ui/Accent';

// Section label + title, with an oversized outlined index number drifting behind it (parallax).
const SectionHeading = ({ index, label, title, accent, description }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -90]);

  return (
    <div ref={ref} className="relative mb-14 sm:mb-20">
      <motion.span
        aria-hidden="true"
        style={{ y }}
        className="text-outline pointer-events-none absolute -top-10 right-0 select-none font-mono text-[7rem] leading-none font-bold sm:-top-16 sm:text-[13rem]"
      >
        {index}
      </motion.span>

      <Reveal>
        <p className="mb-6 inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-muted uppercase">
          <span className="h-px w-8 bg-accent" />
          {index} — {label}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="relative max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-balance text-fg sm:text-5xl lg:text-6xl">
          <Accent text={title} accent={accent} />
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="relative mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
};

export default SectionHeading;
