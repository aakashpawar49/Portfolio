// src/data/profile.js

const profile = {
    name: 'Aakash Pawar',
    initials: 'AP',
    role: 'Full-Stack Developer | AI Integration',
    location: 'Vadodara, India',
    email: 'aakashpawar496@gmail.com',
    phone: '+91 94094 94849',
    resumeUrl: '/assets/AakashPawar_Resume.pdf',
    availability: 'Always up for new challenges.',

    navigation: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ],

    hero: {
        greeting: "Hi, I'm Aakash 👋",
        headline: 'Full-stack engineer building AI-integrated web applications.',
        // Word(s) from the headline rendered in the italic accent style.
        headlineAccent: 'AI-integrated',
        subheadline:
            'MERN stack developer focusing on clean architecture, scalable APIs, and seamless user experiences.',
        keywords: ['MERN Stack', 'Node.js/Express', 'React', 'AI Integration', 'ASP.NET Core', 'Python'],
    },

    about: {
        title: 'About me & core skills',
        titleAccent: 'core skills',
        description:
            'Full Stack Dev integrating Python for automation with secure backend logic and exploring cloud.',
        // **double asterisks** mark highlighted phrases in the scroll-reveal statement.
        statement:
            'Backend-focused engineer specializing in **MERN stack**, **RESTful API design**, and **modular architecture**. My experience at **MamoTechnolabs LLP** involved owning the full solution architecture and secure API implementation for ERP and e-commerce backends—translating complex business logic into secure, scalable backend services.',
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
    locationNote:
        'Currently based in Vadodara, India, and available for remote collaboration.',
};

export default profile;
