// src/sections/Hero.jsx
import { ArrowRight, Download, MapPin } from 'lucide-react';
import profile from '../data/profile';
import SocialLinks from '../components/SocialLinks';
import logoImage from '../assets/logo.jpg';

const Hero = () => {
  const { hero, highlights, resumeUrl, location, socialLinks } = profile;
  const linkedInLink = socialLinks.find((link) => link.name === 'LinkedIn')?.href;

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-b from-background via-background to-surface pt-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_rgba(17,24,39,0))]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 pb-8 pt-6 sm:gap-10 sm:px-6 sm:pb-12 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="w-full space-y-5 text-center sm:space-y-6 lg:w-3/5 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            {hero.greeting}
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="text-sm font-medium text-text-muted sm:text-base md:text-lg">
              {hero.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
            {hero.keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-text-light sm:px-4 sm:py-2 sm:text-sm"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 sm:px-8 sm:py-3 sm:text-sm"
            >
              View Portfolio
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-text-light transition hover:border-primary/40 hover:text-primary sm:px-8 sm:py-3 sm:text-sm"
            >
              Download Resume
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-text-muted sm:flex-row sm:justify-center sm:gap-4 sm:text-sm lg:justify-start lg:gap-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              <span>{location}</span>
            </div>
            {linkedInLink ? (
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary transition hover:text-primary/80"
              >
                Let's connect on LinkedIn
                <ArrowRight className="h-3 w-3" />
              </a>
            ) : null}
          </div>

          <SocialLinks links={socialLinks} className="justify-center lg:justify-start" />
        </div>

        <div className="relative flex w-full items-center justify-center sm:w-2/3 lg:w-2/5">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-primary/70 via-primary/30 to-secondary/40 shadow-[0_20px_45px_rgba(99,102,241,0.35)] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div className="h-44 w-44 overflow-hidden rounded-full border border-white/20 shadow-inner shadow-black/40 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80">
              <img
                src={logoImage}
                alt={`${profile.name} logo`}
                className="h-full w-full object-cover"
              />
              <span className="sr-only">Logo of {profile.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-5xl gap-3 px-4 pb-8 sm:grid-cols-3 sm:gap-4 sm:px-6 sm:pb-12 lg:px-8">
        {highlights.map((item) => (
          <div
            key={item.caption}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center shadow-lg shadow-black/10 backdrop-blur sm:px-4 sm:py-4"
          >
            <p className="text-xl font-bold text-white sm:text-2xl">{item.label}</p>
            <p className="mt-1 text-xs text-text-muted">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
