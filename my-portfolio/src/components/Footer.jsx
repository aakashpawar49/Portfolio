import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import profile from '../data/profile';
import Magnetic from './Magnetic';

const YEAR = new Date().getFullYear();

const Footer = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['45%', '0%']);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            Full-stack engineer building <span className="text-fg">AI-integrated</span> web applications from{' '}
            {profile.location}.
          </p>

          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted uppercase">Navigate</p>
            <ul className="space-y-2.5">
              {profile.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-fg/80 transition hover:text-fg">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted uppercase">Connect</p>
            <ul className="space-y-2.5">
              {profile.socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg/80 transition hover:text-fg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="text-sm text-fg/80 transition hover:text-fg">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <Magnetic>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-14 w-14 place-items-center rounded-full border border-line text-fg transition hover:border-accent/60 hover:bg-white/4"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </Magnetic>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {YEAR} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Motion &amp; Tailwind CSS.</p>
        </div>
      </div>

      <motion.p
        aria-hidden="true"
        style={{ y: wordmarkY }}
        className="pointer-events-none -mb-[0.22em] bg-linear-to-b from-white/14 to-transparent bg-clip-text text-center text-[15vw] leading-none font-semibold tracking-[-0.06em] whitespace-nowrap text-transparent select-none"
      >
        {profile.name}
      </motion.p>
    </footer>
  );
};

export default Footer;
