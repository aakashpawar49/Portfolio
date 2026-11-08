import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Check, Copy, MapPin, Send } from 'lucide-react';
import profile from '../data/profile';
import Magnetic from '../components/Magnetic';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';

const inputClass =
  'mt-2 w-full rounded-xl border border-line bg-ink/60 px-4 py-3.5 font-sans text-sm tracking-normal normal-case text-fg placeholder:text-muted/60 transition focus:border-accent/70 focus:bg-ink focus:ring-4 focus:ring-accent/15 focus:outline-none';
const labelClass = 'block font-mono text-[11px] tracking-[0.2em] text-muted uppercase';

const Contact = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  // Giant headline slides sideways as the section scrolls past.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const headlineX = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['12%', '-18%']);

  // No backend: hand the message to the visitor's mail app, pre-filled.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app should now open with the message ready to send.');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-x-clip pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div
        aria-hidden="true"
        className="aurora-violet pointer-events-none absolute bottom-0 left-1/2 h-160 w-240 -translate-x-1/2 rounded-full opacity-70"
      />

      <div className="relative">
        <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-muted uppercase">
              <span className="h-px w-8 bg-accent" />
              04 — Contact
            </p>
          </Reveal>
        </div>

        <motion.h2
          style={{ x: headlineX }}
          className="px-5 text-[17vw] leading-[0.9] font-semibold tracking-[-0.06em] whitespace-nowrap text-fg sm:px-8 lg:text-[13vw]"
        >
          Let’s <span className="text-gradient pr-[0.05em] font-serif font-normal italic">collaborate</span>
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-7xl gap-12 px-5 sm:mt-24 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-lg text-xl leading-relaxed text-fg/90 sm:text-2xl">{profile.contactBlurb}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-accent-2/30 bg-accent-2/10 px-4 py-2 text-sm text-accent-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
                </span>
                {profile.availability}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-12">
                <p className={labelClass}>Email</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group relative text-xl font-medium tracking-tight text-fg sm:text-3xl"
                  >
                    {profile.email}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-accent to-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent/50 hover:text-fg"
                  >
                    {copied ? <Check className="h-4 w-4 text-accent-2" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <span role="status" className="sr-only">
                    {copied ? 'Email address copied' : ''}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <p className={labelClass}>Based in</p>
                <p className="mt-3 inline-flex items-center gap-2 text-fg">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{profile.locationNote}</p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <SocialLinks links={profile.socialLinks} className="mt-10" />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-line bg-ink-2/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-fg">Send a message</h3>
              <p className="mt-2 text-sm text-muted">
                Share a few details about your project and I’ll be in touch soon.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Name
                  <input type="text" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
                </label>
                <label className={labelClass}>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className={`${labelClass} mt-5`}>
                Project details
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about the goals, users, timelines, or questions you have."
                  className={`${inputClass} resize-none`}
                />
              </label>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p role="status" className="text-sm text-accent-2">
                  {status}
                </p>
                <Magnetic>
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-fg px-7 py-4 text-sm font-semibold text-ink sm:w-auto"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-accent to-accent-2 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative">Send message</span>
                    <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>

        <div className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-fg"
          >
            Prefer a document? Download my résumé
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
