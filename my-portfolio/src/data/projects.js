const projectsData = [
  {
    id: 1,
    title: 'AI Interview Coach',
    summary:
      'Gemini-powered interview preparation experience that generates tailored question sets, scoring, and coaching prompts in real time.',
    details: [
      'Designed prompt-engineered workflows that adapt to seniority, stack, and difficulty, returning structured JSON for the UI layer.',
      'Built a typed Node.js API with session-aware authentication, usage metering, and cache layers on MongoDB.',
      'Implemented analytics dashboards to surface progress insights and question difficulty trends for learners.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    githubLink: 'https://github.com/aakashpawar49',
    liveLink: null,
  },
  {
    id: 2,
    title: 'LabAdmin Platform',
    summary:
      'Role-based laboratory operations hub that centralises asset tracking, issue reporting, and regulatory workflows.',
    details: [
      'Shipped a JWT-secured ASP.NET Core API with EF Core and MySQL, delivering fine-grained RBAC for four user personas.',
      'Automated ticket lifecycles—from initial report through resolution—with audit logs, notifications, and SLA tracking.',
      'Crafted a responsive React dashboard with data visualisations (Recharts) for equipment health and request throughput.',
    ],
    tech: ['React', 'ASP.NET Core', 'MySQL', 'JWT'],
    githubLink: 'https://github.com/aakashpawar49',
    liveLink: null,
  },
  {
    id: 3,
    title: 'Shopper Commerce Suite',
    summary:
      'End-to-end fashion commerce experience featuring curated storefronts, secure checkout, and a modular admin console.',
    details: [
      'Implemented token-based auth with role-sensitive controls for shoppers, merchants, and administrators.',
      'Integrated Stripe for PCI-compliant payments, receipts, and settlement tracking.',
      'Delivered an admin portal for catalogue management, promotion scheduling, and sales analytics.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
    githubLink: 'https://github.com/aakashpawar49',
    liveLink: null,
  },
];

export default projectsData;