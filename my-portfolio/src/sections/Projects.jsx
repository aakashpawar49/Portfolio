import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import profile from '../data/profile';

const Projects = () => {
  const githubLink =
    profile.socialLinks.find((link) => link.name.toLowerCase().includes('github'))?.href ??
    'https://github.com';

  return (
    <section id="projects" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Full Project List</h2>
          <p className="mt-4 text-lg text-text-muted">
            A complete overview of personal projects, including demonstrations of Python logic, DevOps tools, and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-text-light transition hover:border-primary/40 hover:text-primary"
          >
            View All Source Code on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;