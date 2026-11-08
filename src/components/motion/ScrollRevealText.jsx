import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

// Splits text into words; each word is a list of parts so "**stack**," keeps its comma attached
// while only "stack" is highlighted.
const toWords = (text) => {
  let strong = false;
  return text
    .split(' ')
    .filter(Boolean)
    .map((raw) =>
      raw
        .split('**')
        .map((part, i) => {
          if (i > 0) strong = !strong;
          return { part, strong };
        })
        .filter(({ part }) => part),
    );
};

const Word = ({ parts, progress, range, reduce }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity: reduce ? 1 : opacity }}>
        {parts.map(({ part, strong }, i) => (
          <span key={i} className={strong ? 'text-gradient' : undefined}>
            {part}
          </span>
        ))}
      </motion.span>{' '}
    </>
  );
};

// Paragraph whose words light up one after another as it scrolls through the viewport.
const ScrollRevealText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = toWords(text);

  return (
    <p ref={ref} className={className}>
      {words.map((parts, i) => (
        <Word
          key={i}
          parts={parts}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          reduce={reduce}
        />
      ))}
    </p>
  );
};

export default ScrollRevealText;
