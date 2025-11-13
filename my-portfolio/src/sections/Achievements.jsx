import { achievementsData, certificationsData } from '../data/achievements';
import { Trophy, Award, Code, GraduationCap, Sparkles } from 'lucide-react';

const iconMap = {
  Trophy,
  Award,
  Code,
  GraduationCap,
  Sparkles,
};

const Achievements = () => {
  return (
    <section id="achievements" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Recognition & Certifications
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Milestones showcasing commitment to continuous learning and technical experimentation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-semibold text-white">Competitive Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievementsData.map((item) => {
                const IconComponent = iconMap[item.icon] || Award;
                return (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-secondary/20 bg-white/5 p-4 shadow-lg shadow-black/10 transition hover:border-secondary/60"
                  >
                    <IconComponent className="h-6 w-6 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="text-base font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                      <span className="mt-2 inline-flex rounded-full border border-secondary/30 px-3 py-0.5 text-xs uppercase tracking-wide text-secondary/80">
                        {item.year}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-white">Professional Certifications</h3>
            </div>
            <div className="space-y-4">
              {certificationsData.map((item) => {
                const IconComponent = iconMap[item.icon] || Code;
                return (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-primary/20 bg-white/5 p-4 shadow-lg shadow-black/10 transition hover:border-primary/60"
                  >
                    <IconComponent className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-base font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-text-muted">{item.details}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;