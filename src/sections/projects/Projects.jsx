import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import projectsData from '@/data/projects';
import profile from '@/data/profile';
import ProjectCard from '@/sections/projects/ProjectCard';
import Magnetic from '@/components/motion/Magnetic';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import useMediaQuery from '@/hooks/useMediaQuery';
import { EASE } from '@/lib/motion';

const featured = projectsData.filter((project) => project.isMajor);
const others = projectsData.filter((project) => !project.isMajor);
const githubProfile = profile.socialLinks.find((link) => link.icon === 'Github')?.href ?? 'https://github.com';

const Projects = () => {
  const stackRef = useRef(null);
  const stacked = useMediaQuery('(min-width: 1024px)');
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="relative overflow-x-clip py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-40 h-144 w-144 rounded-full opacity-60 aurora-violet"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          label="Selected work"
          title="Featured projects"
          accent="projects"
          description="Core full-stack applications demonstrating API architecture, complex backend logic, and MERN proficiency."
        />

        <div ref={stackRef} className="relative">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={featured.length}
              stackProgress={scrollYProgress}
              stacked={stacked}
            />
          ))}
        </div>

        {others.length ? (
          <div className="mt-24 lg:mt-32">
            <Reveal>
              <h3 className="font-mono text-xs tracking-[0.25em] text-muted uppercase">More projects</h3>
            </Reveal>
            <ul className="mt-6 border-t border-line">
              {others.map((project, i) => {
                const hasLiveLink = Boolean(project.liveLink && project.liveLink !== '#');
                return (
                  <motion.li
                    key={project.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -12% 0px' }}
                    transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
                    className="group relative isolate grid gap-5 overflow-hidden border-b border-line py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-white/2.5 transition-transform duration-500 ease-out group-hover:scale-y-100"
                    />
                    <span className="font-mono text-sm text-muted">
                      {String(featured.length + i + 1).padStart(2, '0')}
                    </span>
                    <div>
                        <h4 className="text-2xl font-semibold tracking-[-0.03em] text-fg sm:text-3xl">
                          {/* ::after stretches the link over the whole row */}
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="after:absolute after:inset-0 after:content-['']"
                          >
                            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                              {project.title}
                            </span>
                          </a>
                        </h4>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>
                        <p className="mt-3 font-mono text-[11px] text-fg/60">{project.tech.join('  ·  ')}</p>
                      </div>
                      <div className="relative z-10 flex gap-2">
                        {hasLiveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-4 text-sm text-fg transition hover:bg-fg hover:text-ink"
                          >
                            Live <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : null}
                        <span
                          aria-hidden="true"
                          className="grid h-12 w-12 place-items-center rounded-full border border-line text-fg transition duration-500 group-hover:rotate-45 group-hover:bg-fg group-hover:text-ink"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </span>
                      </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <Reveal className="mt-16 flex justify-center">
          <Magnetic>
            <a
              href={`${githubProfile}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-line bg-white/3 px-7 py-4 text-sm font-semibold text-fg transition hover:border-white/25 hover:bg-white/6"
            >
              <Github className="h-4 w-4" />
              View all projects on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
