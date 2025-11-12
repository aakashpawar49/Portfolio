// src/components/Footer.jsx
import profile from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/90 py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center text-xs text-text-muted sm:flex-row sm:justify-between sm:gap-4 sm:text-left sm:text-sm">
        <p>
          &copy; {currentYear} {profile.name}. Crafted with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {profile.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-primary focus-visible:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
