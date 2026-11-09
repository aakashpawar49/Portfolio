// Helpers so a project can have one repository (`githubLink`) or several (`repos`).

export const getRepos = (project) =>
  project.repos ?? (project.githubLink ? [{ label: 'Source code', href: project.githubLink }] : []);

export const hasLiveLink = (project) => Boolean(project.liveLink && project.liveLink !== '#');

// Short name shown in the mock-up window title, e.g. "Interview-Platform".
export const projectSlug = (project) =>
  project.slug ?? getRepos(project)[0]?.href.split('/').filter(Boolean).pop() ?? 'project';
