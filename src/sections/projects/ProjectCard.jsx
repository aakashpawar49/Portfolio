import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  Code,
  Crown,
  FlaskConical,
  Github,
  Lock,
  Shirt,
  ShoppingBag,
} from 'lucide-react';
import RichText from '@/components/ui/RichText';
import { EASE } from '@/lib/motion';
import { getRepos, hasLiveLink, projectSlug } from '@/lib/projects';

const ICONS = { Bot, BrainCircuit, Crown, FlaskConical, Shirt, ShoppingBag };
const ACCENTS = ['#8b7cff', '#3ee6b4', '#ff8a5b', '#5cc8ff'];
const BARS = [
  [38, 62, 48, 80, 56, 92, 70],
  [70, 45, 88, 60, 74, 52, 96],
  [55, 82, 40, 68, 90, 62, 78],
  [64, 50, 76, 92, 58, 84, 66],
];

// Abstract app mock-up standing in for a screenshot; zooms out (parallax) as the card scrolls in.
const ProjectVisual = ({ project, index, accent, progress, reduce }) => {
  const Icon = ICONS[project.icon] ?? Code;
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [1.35, 1]);
  const mockY = useTransform(progress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '0%']);

  return (
    <div
      className="relative order-first h-60 overflow-hidden rounded-2xl border border-line sm:h-80 lg:order-none lg:h-auto lg:min-h-104"
      style={{ background: `linear-gradient(145deg, ${accent}2e, transparent 60%), #0f1118` }}
    >
      <motion.div aria-hidden="true" style={{ scale }} className="absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div
          className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: accent }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: mockY }}
        className="absolute inset-x-5 top-8 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-ink/85 shadow-2xl shadow-black/50 backdrop-blur sm:inset-x-10 sm:top-10"
      >
        <div className="flex items-center gap-1.5 border-b border-white/6 px-3.5 py-2.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 truncate font-mono text-[10px] text-muted">{projectSlug(project)}</span>
        </div>
        <div className="grid grid-cols-[3.5rem_1fr] gap-4 p-4 sm:grid-cols-[4.5rem_1fr]">
          <div className="space-y-2.5 pt-1">
            {[0, 1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-2 rounded-full"
                style={{ background: n === 1 ? accent : 'rgb(255 255 255 / 0.07)', width: `${100 - n * 12}%` }}
              />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${accent}26`, color: accent }}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="space-y-2">
                <div className="h-2.5 w-28 rounded-full bg-white/20" />
                <div className="h-2 w-16 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="mt-6 flex h-24 items-end gap-2 sm:h-28">
              {BARS[index % BARS.length].map((height, n) => (
                <motion.div
                  key={n}
                  className="flex-1 origin-bottom rounded-t-md"
                  style={{ height: `${height}%`, background: `linear-gradient(to top, ${accent}55, ${accent})` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + n * 0.06, ease: EASE }}
                />
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/7" />
              <div className="h-2 w-4/5 rounded-full bg-white/7" />
            </div>
            {/* table-like rows fill the lower half of the mock */}
            <div className="mt-6 hidden divide-y divide-white/5 rounded-lg border border-white/5 sm:block">
              {[0, 1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="h-5 w-5 shrink-0 rounded-full" style={{ background: n === 0 ? accent : 'rgb(255 255 255 / 0.08)' }} />
                  <span className="h-2 flex-1 rounded-full bg-white/7" />
                  <span className="h-2 w-10 rounded-full" style={{ background: n % 2 ? 'rgb(255 255 255 / 0.07)' : `${accent}66` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Featured project. On large screens cards pin and stack; earlier cards shrink as later ones slide over.
const ProjectCard = ({ project, index, total, stackProgress, stacked }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const accent = ACCENTS[index % ACCENTS.length];
  const hasLive = hasLiveLink(project);
  const repos = getRepos(project);

  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(stackProgress, [index / total, 1], [1, stacked && !reduce ? targetScale : 1]);
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ['start end', 'start start'] });

  return (
    <div ref={ref} className="mb-6 lg:sticky lg:top-0 lg:mb-0 lg:flex lg:h-screen lg:items-center">
      <motion.article
        style={{ scale, top: stacked ? `calc(-4vh + ${index * 28}px)` : 0 }}
        className="relative w-full origin-top overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 shadow-[0_-20px_80px_-30px_rgb(0_0_0/0.9)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(640px circle at 0% 0%, ${accent}1f, transparent 60%)` }}
        />

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-xs text-muted">
              <span className="text-fg">{String(index + 1).padStart(2, '0')}</span>
              <span className="h-px w-10 bg-white/15" />
              <span className="tracking-[0.2em] uppercase">Featured</span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-balance text-fg sm:text-3xl xl:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.summary}</p>

            <ul className="mt-6 space-y-3">
              {project.details.slice(0, 3).map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                  <span>
                    <RichText text={detail} />
                  </span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-white/3 px-3 py-1 font-mono text-[11px] text-fg/80"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              {hasLive ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}
              {project.privateRepos ? (
                <p className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted">
                  <Lock className="h-4 w-4" />
                  Private codebase{repos.length > 1 ? ` · ${repos.map((repo) => repo.label).join(', ')}` : ''}
                </p>
              ) : (
                repos.map((repo) => (
                  <a
                    key={repo.href}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-white/25 hover:bg-white/5"
                  >
                    <Github className="h-4 w-4" />
                    {repo.label}
                  </a>
                ))
              )}
            </div>
          </div>

          <ProjectVisual project={project} index={index} accent={accent} progress={enter} reduce={reduce} />
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;
