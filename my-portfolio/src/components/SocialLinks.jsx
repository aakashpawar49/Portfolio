import { Linkedin, Github, Mail, Globe, Link as LinkIcon } from 'lucide-react';

const iconMap = {
  Linkedin,
  Github,
  Mail,
  Website: Globe,
  Link: LinkIcon,
};

const SocialLinks = ({ links = [], className = '' }) => {
  if (!links.length) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const IconComponent = iconMap[link.icon] || iconMap.Link;

        return (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text-light transition hover:border-primary/40 hover:text-primary"
          >
            <IconComponent className="h-4 w-4" />
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;