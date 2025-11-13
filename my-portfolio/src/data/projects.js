const projectsData = [
    // -----------------------------------------------------
    // PROJECT 1: Python ETL Pipeline (NEW - HIGH RELEVANCE)
    // -----------------------------------------------------
    {
        id: 4,
        title: 'Python ETL Pipeline for Unstructured Data Analysis', // Strategic Python title
        summary: 'A Python-based Retrieval-Augmented Generation (RAG) pipeline for efficient, local processing and semantic querying of large, unstructured documents (e.g., threat intelligence feeds).',
        details: [
            // Uses ETL keyword
            'Architected a full **ETL-like pipeline** using Python, leveraging PyPDFLoader to ingest and chunk unstructured data.',
            // Focuses on high-volume data handling
            'Processed data into vector embeddings (MiniLM-L6) and stored them in **Pinecone/FAISS** for fast semantic retrieval.',
            // Aligns with AI/intelligence requirement
            'Integrated the **HuggingFace** `flan-t5-base` model for grounded, AI-driven analysis, demonstrating **AI-driven intelligence** in data analysis.',
        ],
        tech: ['Python', 'Streamlit', 'FAISS', 'Pinecone', 'LangChain', 'Hugging Face LLMs'],
        githubLink: 'https://github.com/aakashpawar49/Medical-Chatbot-Generative-AI',
        liveLink: null,
    },
    // -----------------------------------------------------
    // PROJECT 2: Python Algorithmic Logic (NEW - CORE PYTHON)
    // -----------------------------------------------------
    {
        id: 5,
        title: 'Python Algorithmic Engine with Modular Logic', // Strategic Python title
        summary: 'A 100% Python-based application demonstrating command-of-complex logic, state management, and algorithmic AI development.',
        details: [
            // Focus on efficient/reusable code
            'Developed core Python logic and data structures for complex state representation and efficient rule validation.',
            'Implemented a highly **modular, Object-Oriented** structure that emphasizes clean, reusable backend code.',
            // Links algorithmic logic to security
            'Designed the AI using minimax search, showing competency in developing intelligent, rule-based systems (analogous to **log analysis rules**).',
        ],
        tech: ['Python', 'Pygame', 'OOP', 'Minimax Algorithm'],
        githubLink: 'https://github.com/aakashpawar49/Chess-Engine',
        liveLink: null,
    },
    // -----------------------------------------------------
    // PROJECT 3: LabAdmin Platform (EXISTING - SECURITY FOCUS)
    // -----------------------------------------------------
    {
        id: 2,
        title: 'Secure, Role-Based API Platform (LabAdmin)', // Renamed for security focus
        summary:
            'A role-based application that centralises operational tracking, leveraging a highly secure backend architecture for user segmentation and data protection.',
        details: [
            // Highly emphasizes security keywords
            'Engineered a highly secure ASP.NET Core Web API, implementing **JWT authentication** and fine-grained **Role-Based Access Control (RBAC)** to protect sensitive endpoints.',
            'Automated the end-to-end ticket lifecycle (report-to-resolution) with audit logs, notifications, and SLA tracking, demonstrating automation capacity.',
            'Crafted a dynamic React dashboard with data visualisations for real-time reporting (Recharts), crucial for monitoring metrics.',
        ],
        tech: ['React', 'ASP.NET Core', 'MySQL', 'JWT'],
        githubLink: 'https://github.com/aakashpawar49/LabAdmin',
        liveLink: null,
    },
    // -----------------------------------------------------
    // PROJECT 4: AI Interview Coach (EXISTING - AI/JSON FOCUS)
    // -----------------------------------------------------
    {
        id: 1,
        title: 'AI Interview Coach (Gemini API Integration)',
        summary:
            'Gemini-powered application that generates personalized question sets and coaching prompts in real time, built on a robust, scalable backend.',
        details: [
            // Emphasizes structured data (JSON)
            'Designed prompt-engineered workflows that return structured **JSON/YAML** for the UI layer, essential for data interoperability.',
            // Focuses on security/APIs
            'Built a robust, secure **RESTful API** with token-based authentication and modular express routing, demonstrating strong backend logic essential for API integration.',
            'Implemented analytics dashboards to surface progress insights and question difficulty trends for learners.',
        ],
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
        githubLink: 'https://github.com/aakashpawar49/Interview-Platform',
        liveLink: null,
    },
    // -----------------------------------------------------
    // PROJECT 5: Shopper Commerce Suite (EXISTING - CI/CD HINT)
    // -----------------------------------------------------
    {
        id: 3,
        title: 'E-commerce Backend and CI/CD Setup', // Renamed for operational focus
        summary:
            'A scalable, end-to-end commerce experience featuring robust backend logic, secure authentication, and a professionally managed deployment pipeline.',
        details: [
            'Leveraged token-based authentication and **role-based access control (RBAC)** to segment user access across the application.',
            'Structured the codebase into modular client/server directories and configured **GitHub Actions for continuous integration (CI/CD) pipelines.**',
            'Integrated Stripe for PCI-compliant payments and delivered an admin portal for catalogue management and analytics.',
        ],
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
        githubLink: 'https://github.com/aakashpawar49/Shopper',
        liveLink: null,
    },
];

export default projectsData;