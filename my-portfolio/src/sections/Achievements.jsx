// src/sections/Achievements.jsx
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
    <section id="achievements" className="bg-surface py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Recognition & Certifications
          </h2>
          <p className="mt-2 text-xs text-text-muted sm:text-sm md:text-base">
            Milestones highlighting learning, experimentation, and industry collaboration.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Trophy className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
              <h3 className="text-base font-semibold text-white sm:text-lg">Competitive Achievements</h3>
            </div>
            <div className="space-y-2.5 sm:space-y-3">
              {achievementsData.map((item) => {
                const IconComponent = iconMap[item.icon] || Award;
                return (
                  <article
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-xl border border-secondary/20 bg-white/5 p-3 shadow-lg shadow-black/10 sm:gap-3 sm:p-4"
                  >
                    <IconComponent className="h-5 w-5 flex-shrink-0 text-secondary sm:h-6 sm:w-6" />
                    <div>
                      <p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
                      <p className="mt-1 text-xs text-text-muted">{item.description}</p>
                      <span className="mt-1 inline-flex rounded-full border border-secondary/30 px-2 py-0.5 text-xs uppercase tracking-wide text-secondary/80 sm:mt-1.5">
                        {item.year}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <GraduationCap className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              <h3 className="text-base font-semibold text-white sm:text-lg">Professional Certifications</h3>
            </div>
            <div className="space-y-2.5 sm:space-y-3">
              {certificationsData.map((item) => {
                const IconComponent = iconMap[item.icon] || Code;
                return (
                  <article
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-white/5 p-3 shadow-lg shadow-black/10 sm:gap-3 sm:p-4"
                  >
                    <IconComponent className="h-5 w-5 flex-shrink-0 text-primary sm:h-6 sm:w-6" />
                    <div>
                      <p className="text-sm font-semibold text-white sm:text-base">{item.title}</p>
                      <p className="mt-1 text-xs text-text-muted">{item.details}</p>
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
