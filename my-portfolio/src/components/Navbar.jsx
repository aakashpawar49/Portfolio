import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import profile from '../data/profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-base font-semibold text-text-light sm:text-lg"
        >
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.initials}</span>
        </a>

        <div className="hidden items-center gap-6 text-xs font-medium text-text-muted md:gap-8 md:text-sm lg:flex">
          {profile.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-primary focus-visible:text-primary"
            >
              {item.name}
            </a>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-2.5 py-0.5 text-xs uppercase tracking-wide text-primary md:px-3 md:py-1">
            {profile.role}
          </span>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-text-light transition hover:border-primary/60 hover:text-primary lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 space-y-1 rounded-xl border border-white/10 bg-surface/95 px-4 py-3 text-sm font-medium shadow-xl">
            {profile.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2 text-text-light transition hover:bg-primary/10 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs uppercase tracking-wide text-primary">
              {profile.role}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;