import { Github, Link, TerminalSquare } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const hasLiveLink = project.liveLink && project.liveLink !== '#';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition hover:border-primary/40 hover:shadow-primary/20">
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-sm font-semibold uppercase tracking-wide text-text-light sm:h-48 sm:text-base">
        <TerminalSquare className="mr-2 h-8 w-8 text-primary sm:h-10 sm:w-10" />
        <span className="truncate px-2">{project.title}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1.5 border-l-2 border-secondary/60 pl-2.5 text-xs text-text-muted">
            {project.summary}
          </p>
        </div>

        <ul className="space-y-1.5 text-xs text-text-light/80">
          {project.details.slice(0, 3).map((detail) => ( // MODIFIED: Slice to show 3 details instead of 2
            <li key={detail} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-secondary/80" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-text-light"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/5 pt-3 text-xs font-medium sm:gap-4 sm:pt-4 sm:text-sm">
          {hasLiveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary transition hover:text-primary/80 sm:gap-2"
            >
              <Link className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-light transition hover:text-primary sm:gap-2"
          >
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Repository
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;