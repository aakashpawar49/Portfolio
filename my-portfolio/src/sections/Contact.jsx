import { MapPin } from 'lucide-react';
import profile from '../data/profile';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.table(Object.fromEntries(formData.entries()));
    e.currentTarget.reset(); 
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = "Thank you for your message! I will respond within 24 hours.";
    formMessage.classList.remove('hidden');
    setTimeout(() => formMessage.classList.add('hidden'), 5000);
  };

  return (
    <section id="contact" className="bg-linear-to-b from-background to-background/70 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s Collaborate</h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            {profile.contactBlurb || 'Share a few details about your project and I’ll be in touch soon.'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Send a Message</h3>
            <p className="mt-2 text-sm text-text-muted">
              {/* PROFESSIONAL REWRITE */}
              Share your specific challenges or security objectives. We can catch up to it...
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-text-light shadow-inner shadow-black/20 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-text-light shadow-inner shadow-black/20 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Project details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about the goals, users, timelines, or questions you have."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-text-light shadow-inner shadow-black/20 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Success message UI element */}
              <p id="form-message" className="hidden text-center text-sm font-medium text-green-400"></p>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Based in</h3>
              <p className="mt-2 text-sm text-text-muted">
                {/* PROFESSIONAL REWRITE - Location Awareness */}
                I am currently based in Vadodara, India, and prioritize collaboration while being available for remote communication.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-text-light">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </div>
            </div>

            {profile.socialLinks?.length ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Connect Online</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Follow along for updates, experiments, and technical deep dives.
                </p>
                <SocialLinks links={profile.socialLinks} className="mt-4" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;