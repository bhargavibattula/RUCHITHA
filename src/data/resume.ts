// Single source of truth for all resume content.
// Edit this file to update the site — every section reads from here.

export const profile = {
  name: "Ruchitha Gedela",
  roles: [
    "AI Engineer",
    "AI/ML Engineer",
    "GenAI & Agentic AI Builder",
    "RAG Systems Engineer",
    "Robotics & ML Researcher",
  ],
  location: "Dehradun, Uttarakhand, India",
  email: "satyaruchitha59@gmail.com",
  phone: "+91 XXXXXXXXXX",
  linkedin: "https://www.linkedin.com/in/ruchitha-gedela",
  github: "https://github.com/Ruchitha6659",
  leetcode: "https://leetcode.com/u/Ruchigedela/",
  image: "/profile.png",
  resumeFile: "https://drive.google.com/file/d/1o8pj8XHzVM-KoMjd5mr21D_FvmlDaIfg/view?usp=sharing",
  summary:
    "B.Tech AI & ML student building production AI systems — from retrieval-augmented chatbots to a published VS Code extension with 1,000+ installs. I care about systems that ship, not just systems that demo.",
  longSummary:
    "I'm a final-year AI & ML student at Uttaranchal University with an 8.5 CGPA and a habit of turning coursework into shipped products. During my internship at IIIT Allahabad, I worked at the intersection of machine learning and robotics — closing feedback loops across hardware sensors and deploying trained models onto embedded systems. Outside of that, I build end-to-end AI products: a RAG pipeline that answers from real documents with cited sources, and a VS Code extension that over a thousand developers now use daily. I like the parts of AI/ML work that don't show up in a notebook — inference latency, deployment cost, developer experience, and the unglamorous plumbing that makes a demo into a product.",
};

export const stats = [
  { value: 1000, suffix: "+", label: "VS Code extension installs" },
  { value: 25, suffix: "%", label: "Robotic decision accuracy improvement" },
  { value: 80, suffix: "%", label: "RAG retrieval accuracy" },
  { value: 14, suffix: "ms", label: "Retrieval latency" },
];

export const experience = [
  {
    id: "iiit-allahabad",
    company: "Indian Institute of Information Technology (IIIT) Allahabad",
    role: "Robotics and Machine Learning Intern",
    location: "Allahabad, India",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Engineered feedback control loops across 3 robotic modules by integrating 4+ hardware sensors, boosting decision accuracy by 25%",
      "Deployed 2 trained ML models to embedded robotic hardware, cutting manual intervention by 40% in real-time testing",
      "Optimized data pipeline architecture with the research team, reducing inference lag by 30% and accelerating model execution",
    ],
    metrics: [
      { label: "Decision accuracy", value: "+25%" },
      { label: "Manual intervention", value: "−40%" },
      { label: "Inference lag", value: "−30%" },
    ],
  },
];

export const projects = [
  {
    id: "ai-pair-programmer",
    title: "AI Pair Programmer",
    subtitle: "VS Code Extension",
    period: "Jun 2026 – Present",
    description:
      "A VS Code extension that brings AI code explanation, error diagnosis, and in-editor chat directly into the workflow — grounded in real function-level context, not just the open file.",
    longDescription:
      "Most AI coding assistants treat your file as an island. AI Pair Programmer doesn't — it parses cross-file imports across JS/TS, Python, and Java to ground every response in how your code actually connects. It hooks directly into the VS Code Diagnostics API to surface inline fix suggestions the moment an error appears, cutting the time developers spend alt-tabbing between editor and browser.",
    stack: ["TypeScript", "VS Code Extension API", "Groq Llama 3.1 8B", "Axios"],
    features: [
      "In-editor AI chat, error diagnosis, and code explanation",
      "Custom cross-file import parser for JS/TS, Python, and Java",
      "Inline fix suggestions via the VS Code Diagnostics API",
      "Production release with MIT licensing and versioned publishing",
    ],
    metrics: [
      { label: "Installs", value: "1,000+" },
      { label: "Context-switch time", value: "−60%" },
      { label: "Post-launch critical bugs", value: "0" },
    ],
    image: "/projects/vscode-extension.png",
    links: {
      github: "https://github.com",
      live: "https://open-vsx.org",
      liveLabel: "Open VSX",
    },
  },
  {
    id: "rag-chatbot",
    title: "AI-Powered Customer Support Chatbot",
    subtitle: "RAG Pipeline",
    period: "Apr 2026 – Jun 2026",
    description:
      "An end-to-end retrieval-augmented chatbot that answers from a real document base — with cited sources, sub-2-second responses, and zero dependency on third-party embedding APIs.",
    longDescription:
      "Built to answer support questions the way a well-trained human agent would: cite the source, stay fast, and don't hallucinate. The pipeline processes hundreds of document chunks through on-device HuggingFace embeddings (no third-party embedding API calls), retrieves with ChromaDB, and generates with Groq's Llama 3.1 for sub-2-second response times. Supabase backs persistent chat history so users can pick up conversations across sessions, deployed on Streamlit Cloud at zero added infrastructure cost.",
    stack: [
      "Python",
      "LangChain",
      "ChromaDB",
      "HuggingFace Transformers",
      "Groq Llama 3.1",
      "Streamlit",
      "Supabase",
    ],
    features: [
      "780 document chunks indexed with on-device HuggingFace embeddings",
      "Source-cited responses generated via Groq Llama 3.1",
      "Persistent chat history backed by Supabase",
      "Deployed on Streamlit Cloud, zero added infra cost",
    ],
    metrics: [
      { label: "Retrieval accuracy", value: "80%" },
      { label: "Retrieval latency", value: "14ms" },
      { label: "Response time", value: "<2s" },
    ],
    image: "/projects/chatbot-ui.png",
    links: {
      github: "https://github.com",
      live: "https://streamlit.io",
      liveLabel: "Live Demo",
    },
  },
  {
    id: "ai-resume-screener",
    title: "AI Resume Screener",
    subtitle: "Llama-based NLP Screener",
    period: "Jul 2026 – Aug 2026",
    description:
      "An AI-based system for parsing, ranking, and screening resumes using Llama LLMs and natural language processing techniques.",
    longDescription:
      "A high-performance pipeline that extracts key information (skills, experience, education) from PDF and Word resumes. It uses Llama model prompting for fine-grained ranking, comparing candidate profiles against target job descriptions. The system generates matching scores and summarizes candidate fit with clear, objective reasoning.",
    stack: ["Python", "Llama 3", "NLP", "LangChain", "PyPDF", "Streamlit"],
    features: [
      "Automated PDF/Word resume parsing and text extraction",
      "Candidate ranking powered by Llama 3 LLM prompt scoring",
      "Semantic matching for job description requirements",
      "Clean web dashboard for HR and recruiting managers",
    ],
    metrics: [
      { label: "Screening time", value: "−85%" },
      { label: "Ranking accuracy", value: "92%" },
      { label: "Resumes processed", value: "500+" },
    ],
    image: "/projects/resume-screener.png",
    links: {
      github: "https://github.com/Ruchitha6659/AI-Resume-Screener-Using-LLama",
      live: "https://github.com/Ruchitha6659/AI-Resume-Screener-Using-LLama",
      liveLabel: "Source Code",
    },
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detector",
    subtitle: "NLP Credibility Analysis",
    period: "May 2026 – Jun 2026",
    description:
      "A machine learning application utilizing NLP classifiers to detect misinformation and fake news articles with high reliability.",
    longDescription:
      "Misinformation spreads quickly. This project implements machine learning and deep learning classification models (LSTM, PassiveAggressiveClassifier) to verify text credibility. It pre-processes articles via TF-IDF vectorization, tokenization, and stop-word removal, and visualizes prediction confidence scores on a clean front-end UI.",
    stack: ["Python", "Scikit-Learn", "NLTK", "Flask", "Pandas", "NumPy"],
    features: [
      "Text preprocessing and TF-IDF semantic vectorization",
      "Real-time article classification using PassiveAggressiveClassifier",
      "Visual confidence credibility gauge",
      "Performance metrics reporting and comparison charts",
    ],
    metrics: [
      { label: "Model accuracy", value: "94.2%" },
      { label: "Analysis time", value: "<1s" },
      { label: "F1 Score", value: "0.93" },
    ],
    image: "/projects/news-detector.png",
    links: {
      github: "https://github.com/Ruchitha6659/fake-news-detection",
      live: "https://github.com/Ruchitha6659/fake-news-detection",
      liveLabel: "Source Code",
    },
  },
  {
    id: "finsolve-chatbot",
    title: "FinSolve Chatbot",
    subtitle: "Financial Advisory Assistant",
    period: "Mar 2026 – Apr 2026",
    description:
      "An AI-powered financial advisory chatbot providing real-time investment advice, stock insights, and portfolio guidance.",
    longDescription:
      "FinSolve helps users navigate complex financial planning. Leveraging LangChain pipelines and financial market APIs, it answers investment queries, tracks live market indices, and creates tailored portfolio allocation suggestions. It features persistent memory and safe-guard parameters to avoid giving unqualified financial tips.",
    stack: ["Python", "LangChain", "Yahoo Finance API", "OpenAI GPT-4", "Streamlit"],
    features: [
      "Real-time stock price and market data retrieval",
      "Personalized asset allocation and portfolio modeling",
      "Secure session memory for ongoing advice chats",
      "Financial guardrails and advice disclaimers",
    ],
    metrics: [
      { label: "Query latency", value: "1.2s" },
      { label: "Advice accuracy", value: "88%" },
      { label: "Advisory sessions", value: "300+" },
    ],
    image: "/projects/finsolve-chatbot.png",
    links: {
      github: "https://github.com/Ruchitha6659/finsolve_chatbot",
      live: "https://github.com/Ruchitha6659/finsolve_chatbot",
      liveLabel: "Source Code",
    },
  },
  {
    id: "codealpha-translator",
    title: "CodeAlpha Translator",
    subtitle: "Multilingual Translation Web App",
    period: "Jan 2026 – Feb 2026",
    description:
      "A responsive, high-performance web-based translator application powered by open translation APIs and rich modern styling.",
    longDescription:
      "A translation application built to showcase smooth CSS and reactive UI transitions. Deployed with a modern dark-mode design, it translates between 10+ languages instantly with voice synthesis support, copy-to-clipboard actions, and a highly responsive design optimized for mobile and desktop screens.",
    stack: ["JavaScript", "HTML5", "Vanilla CSS", "MyMemory Translation API"],
    features: [
      "Instant translation between 10+ major languages",
      "Text-to-speech voice synthesis for translations",
      "One-click copy to clipboard functionality",
      "Premium responsive CSS layout with modern purple accents",
    ],
    metrics: [
      { label: "Supported languages", value: "10+" },
      { label: "Translation latency", value: "250ms" },
      { label: "User satisfaction", value: "95%" },
    ],
    image: "/projects/translator-app.png",
    links: {
      github: "https://github.com/Ruchitha6659/CodeAlpha_LanguageTranslator",
      live: "https://github.com/Ruchitha6659/CodeAlpha_LanguageTranslator",
      liveLabel: "Source Code",
    },
  },
];

export const skillGroups = [
  {
    category: "GenAI / Agentic AI",
    skills: ["LLMs", "RAG", "Prompt Engineering", "Vector Databases", "LangChain", "LangGraph", "CrewAI"],
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "Deep Learning", "Feature Engineering", "Supervised Learning"],
  },
  {
    category: "Languages",
    skills: ["Python", "C++", "C", "SQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["ChromaDB", "Supabase", "Pandas", "NumPy"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"],
  },
];

export const certifications = [
  {
    title: "Robotics and Machine Learning",
    issuer: "IIIT Allahabad",
    year: "2025",
    credentialId: "AIR2025STOP050",
  },
  {
    title: "STEP — C, C++",
    issuer: "AH Career Academy of Skills",
    year: "2024",
    credentialId: "U93000TC2013PTC0912173",
  },
];

export const education = {
  institution: "Uttaranchal University",
  location: "Dehradun, Uttarakhand, India",
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  specialization: "",
  period: "Aug 2023 – May 2027 (Expected)",
  cgpa: "8.5 / 10.0",
};

export const achievements = [
  {
    label: "VS Code Extension",
    value: "1,000+",
    detail: "developers using AI Pair Programmer in production",
  },
  {
    label: "Robotics Internship",
    value: "25%",
    detail: "improvement in robotic decision accuracy at IIIT Allahabad",
  },
  {
    label: "RAG Pipeline",
    value: "780",
    detail: "document chunks processed at 80% retrieval accuracy",
  },
  {
    label: "Academic Record",
    value: "8.5",
    detail: "CGPA in B.Tech AI & ML",
  },
];
