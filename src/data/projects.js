// Fields:
//   isMajor      true = featured card, false = "More projects" list
//   githubLink   single repository; or `repos: [{ label, href }]` for several
//   privateRepos true = repositories are private: links are hidden and a "private codebase" note shows
//   liveLink     public demo URL or null
//   icon         lucide-react icon name used in the card mock-up
const projectsData = [
    // -----------------------------------------------------
    // Stravn Clothing: API + storefront + mobile app (isMajor: true)
    // -----------------------------------------------------
    {
        id: 6,
        title: 'Stravn Clothing — D2C E-Commerce Platform',
        slug: 'stravn-clothing',
        summary:
            'Complete commerce system for an Indian direct-to-consumer clothing brand: a REST API, a Next.js storefront with a role-based admin panel, and a mobile app, all served by one API.',
        details: [
            'Designed an **Express 5 + TypeScript** REST API on **PostgreSQL** (Prisma, Supabase): catalog, inventory that can never go negative, checkout with 15-minute stock holds, coupons, gift cards and GST.',
            'Integrated **Razorpay** UPI-first payments with webhook and background reconciliation, refunds and RTO, behind five staff roles and an audit log of every admin change.',
            'Built the **Next.js 16** storefront and admin panel (typo-tolerant search, SEO, consent and data erasure); a **React Native + Expo** app is in planning on the same API.',
        ],
        icon: 'Shirt',
        tech: ['TypeScript', 'Express 5', 'Prisma', 'PostgreSQL', 'Next.js 16', 'Razorpay', 'Cloudinary', 'React Native'],
        repos: [
            { label: 'API', href: 'https://github.com/aakashpawar49/stravn-clothing-be' },
            { label: 'Storefront', href: 'https://github.com/aakashpawar49/stravn-clothing-fe' },
            { label: 'Mobile app', href: 'https://github.com/aakashpawar49/stravn-clothing-mobile' },
        ],
        privateRepos: true,
        liveLink: null,
        isMajor: true,
    },
    // -----------------------------------------------------
    // PROJECT 1: Python ETL Pipeline (NEW - HIGH RELEVANCE, isMajor: true)
    // -----------------------------------------------------
    {
        id: 4,
        title: 'Medical Chatbot with RAG Pipeline', 
        summary: 'A Python-based Retrieval-Augmented Generation (RAG) pipeline for efficient, local processing and semantic querying of large, unstructured documents (e.g., threat intelligence feeds).',
        details: [
            'Architected a full **ETL-like pipeline** using Python, leveraging PyPDFLoader to ingest and chunk unstructured data.',
            'Processed data into vector embeddings and stored them in **Pinecone/FAISS** for fast semantic retrieval.',
            'Integrated the **HuggingFace** LLM for grounded, AI-driven analysis, demonstrating **AI-driven intelligence** in data analysis.',
        ],
        icon: 'Bot',
        tech: ['Python', 'Streamlit', 'FAISS', 'Pinecone', 'LangChain', 'Hugging Face LLMs'],
        githubLink: 'https://github.com/aakashpawar49/Medical-Chatbot-Generative-AI',
        liveLink: null,
        isMajor: true,
    },
    // -----------------------------------------------------
    // PROJECT 2: Secure API Platform (EXISTING - SECURITY FOCUS, isMajor: true)
    // -----------------------------------------------------
    {
        id: 2,
        title: 'LabAdmin - Laboratory Management System',
        summary:
            'A role-based application that centralises operational tracking, leveraging a highly secure backend architecture for user segmentation and data protection.',
        details: [
            'Provides a highly secure ASP.NET Core Web API, implementing JWT authentication with Role-Based Access Control(RBAC) to protect sensitive endpoints.',
            'Automated the end-to-end ticket lifecycle (report-to-resolution) with audit logs, notifications, and SLA tracking, demonstrating automation capacity.',
            'Crafted a dynamic React dashboard with data visualisations (Recharts) for real-time monitoring metrics.',
        ],
        icon: 'FlaskConical',
        tech: ['React', 'ASP.NET Core', 'MySQL', 'JWT'],
        githubLink: 'https://github.com/aakashpawar49/LabAdmin',
        liveLink: null,
        isMajor: true,
    },
    // -----------------------------------------------------
    // PROJECT 3: AI Interview Coach (EXISTING - AI/JSON FOCUS, isMajor: true)
    // -----------------------------------------------------
    {
        id: 1,
        title: 'AI Interview Platform (Gemini API Integration)',
        summary:
            'Gemini-powered application that generates personalized question sets and coaching prompts in real time, built on a robust, scalable backend.',
        details: [
            'Designed prompt-engineered workflows that return structured JSON for the UI layer, essential for data interoperability.',
            'Built a robust, secure RESTful API with token-based authentication and modular express routing, with logical API integration.',
            'Integrated Context API for user session handling and real-time AI-powered explanations.',
        ],
        icon: 'BrainCircuit',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
        githubLink: 'https://github.com/aakashpawar49/Interview-Platform',
        liveLink: 'https://interview-platform-orpin-one.vercel.app/',
        isMajor: true,
    },
    // -----------------------------------------------------
    // PROJECT 4: Python Algorithmic Logic (NEW - CORE PYTHON, isMajor: false)
    // -----------------------------------------------------
    {
        id: 5,
        title: 'Python Based Chess Engine', 
        summary: 'A Python-based application demonstrating command-of-complex logic, state management, and algorithmic AI development.',
        details: [
            'Developed core Python logic and data structures for complex state representation and efficient rule validation.',
            'Implemented a highly modular, Object-Oriented structure that emphasizes clean, reusable backend code.',
            'Designed the AI using minimax search, showing competency in developing intelligent, rule-based systems (analogous to **log analysis rules**).',
        ],
        icon: 'Crown',
        tech: ['Python', 'Pygame', 'OOP', 'Minimax Algorithm'],
        githubLink: 'https://github.com/aakashpawar49/Chess-Engine',
        liveLink: null,
        isMajor: false,
    },
    // -----------------------------------------------------
    // PROJECT 5: Shopper Commerce Suite (EXISTING - CI/CD HINT, isMajor: false)
    // -----------------------------------------------------
    {
        id: 3,
        title: 'Shopper - E-Commerce Platform',
        summary:
            'A scalable, end-to-end commerce experience featuring robust backend logic, secure authentication, and a professionally managed deployment pipeline.',
        details: [
            'Leveraged token-based authentication and role-based access control (RBAC) to segment user access across the application.',
            'Structured the codebase into modular client/server directories and configured GitHub Actions for continuous integration (CI/CD) pipelines.',
            'Integrated Stripe for PCI-compliant payments and implemented scalable database querying logic.',
        ],
        icon: 'ShoppingBag',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
        githubLink: 'https://github.com/aakashpawar49/Shopper',
        liveLink: 'https://shopper-ochre.vercel.app/',
        isMajor: false,
    },
];

export default projectsData;