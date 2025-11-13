import profile from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/90 py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center text-xs text-text-muted sm:flex-row sm:justify-between sm:gap-4 sm:text-left sm:text-sm">
        <p>
          &copy; {currentYear} {profile.name}. Crafted with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;