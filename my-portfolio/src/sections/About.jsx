import { BrainCircuit, Code, GitBranch, Layers, Users } from 'lucide-react';
import profile from '../data/profile';
import { hardSkills, softSkills } from '../data/skills';
import Reveal from '../components/Reveal';
import ScrollRevealText from '../components/ScrollRevealText';
import SectionHeading from '../components/SectionHeading';
import SpotlightCard from '../components/SpotlightCard';

const CATEGORY_ICONS = {
  Languages: Code,
  'Frameworks & Runtime': Layers,
  'Data & AI': BrainCircuit,
  'Tools & DevOps': GitBranch,
};

// Bento order: the largest category gets the wide tile.
const LAYOUT = [
  { category: 'Data & AI', span: 'md:col-span-2' },
  { category: 'Languages', span: '' },
  { category: 'Frameworks & Runtime', span: '' },
  { category: 'Tools & DevOps', span: '' },
];

const CardHeader = ({ Icon, title, count }) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/4 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-base font-semibold tracking-tight text-fg">{title}</h3>
    </div>
    {count ? <span className="font-mono text-xs text-muted">{String(count).padStart(2, '0')}</span> : null}
  </div>
);

const About = () => {
  const { about } = profile;
  const categories = LAYOUT.filter(({ category }) => hardSkills[category]);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          label="About"
          title={about.title}
          accent={about.titleAccent}
          description={about.description}
        />

        <ScrollRevealText
          text={about.statement}
          className="max-w-5xl text-2xl leading-[1.35] font-medium tracking-[-0.02em] text-fg sm:text-4xl lg:text-[2.75rem]"
        />

        <div className="mt-24 grid gap-4 md:grid-cols-3">
          {categories.map(({ category, span }, i) => {
            const skills = hardSkills[category];
            return (
              <Reveal key={category} delay={i * 0.06} className={span}>
                <SpotlightCard className="h-full p-6 sm:p-8">
                  <CardHeader Icon={CATEGORY_ICONS[category] ?? Code} title={category} count={skills.length} />
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-white/3 px-3.5 py-1.5 text-sm text-fg/90 transition hover:border-accent/50 hover:text-fg"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}

          <Reveal delay={0.24}>
            <SpotlightCard className="h-full p-6 sm:p-8">
              <CardHeader Icon={Users} title="Soft skills" count={softSkills.length} />
              <ul className="mt-8 space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-fg/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
