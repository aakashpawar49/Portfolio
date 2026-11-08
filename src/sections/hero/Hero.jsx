import { Fragment, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import profile from '@/data/profile';
import CodeWindow from '@/sections/hero/CodeWindow';
import Counter from '@/components/motion/Counter';
import Magnetic from '@/components/motion/Magnetic';
import SocialLinks from '@/components/ui/SocialLinks';
import useMediaQuery from '@/hooks/useMediaQuery';
import { EASE } from '@/lib/motion';

const { hero, highlights, resumeUrl, location, socialLinks, email } = profile;
const ACCENT_WORDS = new Set((hero.headlineAccent ?? '').split(' ').filter(Boolean));
const HEADLINE = hero.headline.split(' ');
const HERO_LINKS = [...socialLinks, { name: 'Email', href: `mailto:${email}`, icon: 'Mail' }];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  // Copy and visual split apart only on the two-column layout; stacked on mobile they would leave a gap.
  const wide = useMediaQuery('(min-width: 1024px)');

  // Scroll parallax: each layer leaves the viewport at its own speed.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const depth = (distance, enabled = true) => (reduce || !enabled ? [0, 0] : [0, distance]);
  const gridY = useTransform(scrollYProgress, [0, 1], depth(140));
  const auroraY = useTransform(scrollYProgress, [0, 1], depth(360));
  const copyY = useTransform(scrollYProgress, [0, 1], depth(-160, wide));
  const visualY = useTransform(scrollYProgress, [0, 1], depth(110, wide));
  const fade = useTransform(scrollYProgress, [0, 0.7], wide ? [1, 0] : [1, 1]);

  // Pointer parallax, normalised to -0.5…0.5 and smoothed.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 60, damping: 18 });
  const violetX = useTransform(smoothX, [-0.5, 0.5], [-70, 70]);
  const violetY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);
  const mintX = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const mintY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  const handlePointerMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return;
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-24 sm:pt-32"
    >
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: gridY }}
          className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        />
        <motion.div style={{ y: auroraY }} className="absolute inset-0">
          <motion.div style={{ x: violetX, y: violetY }} className="absolute -top-56 left-[2%] h-176 w-176">
            <div className="aurora-violet animate-drift h-full w-full rounded-full" />
          </motion.div>
          <motion.div style={{ x: mintX, y: mintY }} className="absolute top-[18%] -right-[12%] h-152 w-152">
            <div className="aurora-mint animate-drift h-full w-full rounded-full [animation-delay:-6s]" />
          </motion.div>
          <div className="absolute bottom-[-10%] left-[35%] h-104 w-104">
            <div className="aurora-coral animate-drift h-full w-full rounded-full [animation-delay:-11s]" />
          </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div style={{ y: copyY, opacity: fade }}>
          <motion.p
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/3 py-1.5 pr-4 pl-1.5 text-sm text-fg/90 backdrop-blur"
          >
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wider text-accent uppercase">
              Portfolio
            </span>
            {hero.greeting}
          </motion.p>

          <h1 className="mt-7 text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.045em] text-balance text-fg sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
            {HEADLINE.map((word, i) => {
              const clean = word.replace(/[.,]/g, '');
              const isAccent = ACCENT_WORDS.has(clean);
              return (
                <Fragment key={`${word}-${i}`}>
                  <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                    <motion.span
                      className={`inline-block ${isAccent ? 'text-gradient pr-[0.06em] font-serif font-normal italic' : ''}`}
                      initial={{ y: '115%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 1, delay: 0.15 + i * 0.06, ease: EASE }}
                    >
                      {word}
                    </motion.span>
                  </span>{' '}
                </Fragment>
              );
            })}
          </h1>

          <motion.p {...fadeUp(0.55)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subheadline}
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-fg px-7 py-4 text-sm font-semibold text-ink sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-accent to-accent-2 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">View projects</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={resumeUrl}
                download
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white/3 px-7 py-4 text-sm font-semibold text-fg backdrop-blur transition hover:border-white/25 hover:bg-white/6 sm:w-auto"
              >
                Download résumé
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div {...fadeUp(0.75)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SocialLinks links={HERO_LINKS} variant="icon" />
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              {location}
            </span>
          </motion.div>

          <motion.dl
            {...fadeUp(0.85)}
            className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-line border-t border-line pt-8"
          >
            {highlights.map((item) => (
              <div key={item.caption} className="px-4 first:pl-0">
                <dt className="sr-only">{item.caption}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  <Counter value={item.label} />
                </dd>
                <dd className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">{item.caption}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div style={{ y: visualY }} className="relative">
          <CodeWindow pointerX={smoothX} pointerY={smoothY} />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        style={{ opacity: fade }}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted transition hover:text-fg sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="animate-scroll-dot absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-transparent to-fg" />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
