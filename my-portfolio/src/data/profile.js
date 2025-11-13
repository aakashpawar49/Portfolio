// src/data/profile.js

const profile = {
    name: 'Aakash Pawar',
    initials: 'AP',
    role: 'Full-Stack Developer | AI Integration',
    location: 'Vadodara, India',
    email: 'aakashpawar496@gmail.com',
    phone: '+91 94094 94849',
    resumeUrl: '/assets/AakashPawar_Resume.pdf',
    availability: 'Always up for new challanges.',
    
    // Simplified navigation
    navigation: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
    ],
    
    hero: {
        greeting: "Hi, I'm Aakash 👋",
        headline: 'Full-stack engineer building AI-integrated web applications.', 
        subheadline:
            'MERN stack developer focusing on clean architecture, scalable APIs, and seamless user experiences.', 
        keywords: ['MERN Stack', 'Node.js/Express', 'React', 'AI Integration', 'ASP.NET Core', 'Python'], 
    },
    
    highlights: [
        { label: '05+', caption: 'Full-stack products shipped' },
        { label: '08+', caption: 'Collaborative projects completed' },
        { label: '02', caption: 'Hackathon podium finishes' },
    ],
    
    socialLinks: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aakash-pawar/', icon: 'Linkedin' },
        { name: 'GitHub', href: 'https://github.com/aakashpawar49', icon: 'Github' },
    ],
    contactBlurb:
        "Let's connect! I'm always open to discussing web application architecture or new development opportunities.",
};

export default profile;