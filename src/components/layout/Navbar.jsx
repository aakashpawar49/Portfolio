import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import profile from '@/data/profile';
import useActiveSection from '@/hooks/useActiveSection';
import { EASE } from '@/lib/motion';

const SECTION_IDS = profile.navigation.map((item) => item.href.slice(1));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();

  // Hide while scrolling down, reveal on scroll up; frost the bar once off the top.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > previous && y > 480);
  });

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const showBar = !hidden || open;

  return (
    <>
      <motion.header
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: showBar ? 0 : -96, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-2.5 py-2 transition-[background-color,border-color,box-shadow] duration-500 ${
            scrolled || open
              ? 'border-line bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="group flex items-center gap-3 pl-1" aria-label={`${profile.name}, back to top`}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-fg font-mono text-xs font-semibold text-ink transition-transform duration-700 group-hover:rotate-[360deg]">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {profile.navigation.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition hover:bg-white sm:inline-flex"
            >
              Résumé
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition hover:border-accent/50 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink/95 px-6 pt-28 pb-10 backdrop-blur-2xl md:hidden"
          >
            <ul className="space-y-1">
              {profile.navigation.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-4xl font-semibold tracking-tight text-fg"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-ink"
            >
              Download résumé
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
