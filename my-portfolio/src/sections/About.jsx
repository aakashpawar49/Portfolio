import { hardSkills, softSkills } from '../data/skills';
import profile from '../data/profile';
import { Briefcase, Zap, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-surface py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">About Me & Core Skills</h2>
          {/* PROFESSIONAL REWRITE */}
          <p className="mt-2 text-xs text-text-muted sm:text-sm md:text-base">
            Full Stack Dev integrating Python for automation with secure backend logic and exploring cloud.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-6">
            {/* Box 1: Professional Background - Minimalist Styling */}
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <Briefcase className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
                <h3 className="text-base font-semibold text-white sm:text-lg">Professional Background</h3>
              </div>
              {/* PROFESSIONAL REWRITE */}
              <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
                Backend-focused engineer specializing in MERN stack, RESTful API design, and modular architecture.
              </p>
              {/* PROFESSIONAL REWRITE */}
              <p className="rounded-lg border border-secondary/20 bg-secondary/10 p-2.5 text-xs text-text-light sm:p-3">
                My experience at MamoTechnolabs LLP involved owning the full solution architecture and secure API implementation for ERP and e-commerce backends—translating complex business logic into secure, scalable backend services.
              </p>
            </div>

            {/* Box 2: What I'm Focused On - Minimalist Styling */}
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <Target className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <h3 className="text-base font-semibold text-white sm:text-lg">Career Goals</h3>
              </div>
              <p className="text-xs leading-relaxed text-text-muted sm:text-sm">{profile.availability}</p>
              {/* Changed highlights rendering to be more subtle (no background/border) */}
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {profile.highlights.map((item) => (
                  <div
                    key={item.caption}
                    className="p-2.5 sm:p-3" // Simplified styling for minimalism
                  >
                    <p className="text-lg font-semibold text-white sm:text-xl">{item.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Soft Skills - Minimalist Styling */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/10 sm:p-5">
              <div className="mb-2.5 flex items-center gap-2 sm:mb-3 sm:gap-3">
                <Lightbulb className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
                <h3 className="text-base font-semibold text-white sm:text-lg">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-text-light sm:px-2.5 sm:py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Expertise section retained for high visibility */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              <h3 className="text-base font-semibold text-white sm:text-lg">Technical Expertise</h3>
            </div>
            {Object.entries(hardSkills).map(([category, skills]) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-background/80 p-4 shadow-lg shadow-black/10 sm:p-5"
              >
                <h4 className="text-sm font-semibold text-white sm:text-base">{category}</h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-text-light sm:px-3 sm:py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;