import { ArrowUpRight, Github, Globe, Link as LinkIcon, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  Linkedin,
  Github,
  Mail,
  Website: Globe,
  Link: LinkIcon,
};

const isExternal = (href) => href.startsWith('http');

// variant "icon": round icon buttons. variant "pill": labelled links.
const SocialLinks = ({ links = [], variant = 'pill', className = '' }) => {
  if (!links.length) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || iconMap.Link;
        const external = isExternal(link.href);
        const shared = {
          href: link.href,
          target: external ? '_blank' : undefined,
          rel: external ? 'noopener noreferrer' : undefined,
        };

        if (variant === 'icon') {
          return (
            <a
              key={link.name}
              {...shared}
              aria-label={link.name}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/3 text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          );
        }

        return (
          <a
            key={link.name}
            {...shared}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/3 px-4 py-2.5 text-sm font-medium text-fg transition duration-300 hover:border-accent/50 hover:bg-white/6"
          >
            <Icon className="h-4 w-4 text-muted transition group-hover:text-accent" />
            {link.name}
            <ArrowUpRight className="h-3.5 w-3.5 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
