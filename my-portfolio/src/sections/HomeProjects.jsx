import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const HomeProjects = () => {
    // Filter for projects marked as major (isMajor: true) in src/data/projects.js
    const majorProjects = projectsData.filter(project => project.isMajor);

    return (
        <section id="major-projects" className="bg-background py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg text-text-muted">
                        Core full-stack applications demonstrating API architecture, complex backend logic, and MERN proficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {majorProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/aakashpawar49?tab=repositories" // Links to GitHub repositories
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-text-light transition hover:border-primary/40 hover:text-primary"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;