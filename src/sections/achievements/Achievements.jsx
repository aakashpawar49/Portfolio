import { Award, Code, GraduationCap, Sparkles, Trophy } from 'lucide-react';
import { achievementsData, certificationsData } from '@/data/achievements';
import Reveal from '@/components/motion/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/motion/SpotlightCard';

const iconMap = { Trophy, Award, Code, GraduationCap, Sparkles };

const ColumnTitle = ({ Icon, children }) => (
  <Reveal>
    <h3 className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-muted uppercase">
      <Icon className="h-4 w-4 text-accent" />
      {children}
    </h3>
  </Reveal>
);

const Achievements = () => (
  <section id="achievements" className="relative overflow-x-clip py-24 sm:py-32">
    <div
      aria-hidden="true"
      className="aurora-mint pointer-events-none absolute top-1/3 -right-40 h-128 w-128 rounded-full opacity-70"
    />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        index="03"
        label="Recognition"
        title="Recognition & certifications"
        accent="certifications"
        description="Milestones showcasing commitment to continuous learning and technical experimentation."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <ColumnTitle Icon={Trophy}>Competitive achievements</ColumnTitle>
          <div className="space-y-4">
            {achievementsData.map((item, i) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <SpotlightCard className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-accent/25 to-accent-2/15 text-fg ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm text-muted">{item.year}</span>
                    </div>
                    <p className="mt-6 text-xl font-semibold tracking-tight text-fg">{item.title}</p>
                    <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div>
          <ColumnTitle Icon={GraduationCap}>Professional certifications</ColumnTitle>
          <Reveal>
            <SpotlightCard className="divide-y divide-line">
              {certificationsData.map((item) => {
                const Icon = iconMap[item.icon] || Code;
                return (
                  <div key={item.title} className="group flex items-start gap-5 p-6 sm:p-8">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/3 text-accent transition duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold tracking-tight text-fg">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
