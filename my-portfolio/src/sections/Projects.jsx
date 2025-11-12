// src/sections/Projects.jsx
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import profile from '../data/profile';

const Projects = () => {
  const githubLink =
    profile.socialLinks.find((link) => link.name.toLowerCase().includes('github'))?.href ??
    'https://github.com';

  return (
    <section id="projects" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Selected Work</h2>
          <p className="mt-2 text-xs text-text-muted sm:text-sm md:text-base">
            Products and platforms demonstrating resilient systems and refined user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-text-light transition hover:border-primary/40 hover:text-primary sm:px-6 sm:py-2.5 sm:text-sm"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
