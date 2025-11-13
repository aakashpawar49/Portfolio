const projectsData = [
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
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
        githubLink: 'https://github.com/aakashpawar49/Shopper',
        liveLink: 'https://shopper-ochre.vercel.app/',
        isMajor: false,
    },
];

export default projectsData;