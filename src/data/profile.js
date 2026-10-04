import countryList from "../Assets/Projects/countrylistapi.png";
import focusOnToday from "../Assets/Projects/focusontoday.png";
import trackExpense from "../Assets/Projects/trackexpense.png";
import foodie from "../Assets/Projects/foodie.png";

export const profile = {
  name: "Avanish Tiwari",
  shortName: "AT.",
  role: "React & Frontend Developer",
  location: "Noida, India",
  email: "avanishtiwari@outlook.in",
  experience: "4+ years",
  status: "Available for new roles",
  intro:
    "I craft responsive, high-performance web applications with React, Next.js, and modern JavaScript, combining intuitive UX with clean, scalable architecture.",
  github: "https://github.com/Avanish-Tiwari",
  linkedin: "https://www.linkedin.com/in/avanishtiwari1205/",
  resume: "/resume.pdf",
  metrics: [
    { value: "4+", label: "Years Experience" },
    { value: "9+", label: "Projects Shipped" },
    { value: "35%", label: "Code Reusability Boost" },
    { value: "100%", label: "Responsive Design" },
  ],
  skillCategories: [
    {
      category: "Frontend & UI",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux Toolkit",
        "HTML5 / CSS3",
        "Material UI",
      ],
    },
    {
      category: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "JWT Auth", "Groq AI"],
    },
    {
      category: "Tools & Workflow",
      skills: ["Git & GitHub", "Vite", "Webpack", "VS Code", "Postman", "Agile / Jira"],
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Node.js",
    "PostgreSQL",
    "Vite",
    "Material UI",
    "HTML5",
    "CSS3",
  ],
  tools: ["Git", "VS Code", "Postman", "Jira", "Webpack"],
  interests: ["Building AI-powered interfaces", "Open-source exploration", "Gaming", "Travelling"],
  workHistory: [
    {
      company: "Ipsos",
      role: "Senior Scripting Executive / React Developer",
      period: "May 2025 - Present",
      location: "Gurugram, Haryana, India",
      points: [
        "Promoted to Senior Executive for leading React-based survey and data application development.",
        "Engineered modular component architectures, boosting code reusability across teams by 35%.",
        "Optimized SQL-to-API integrations and client-side data rendering speeds.",
        "Mentored junior developers in state management, modern hooks, and clean architecture.",
      ],
    },
    {
      company: "Ipsos",
      role: "Scripting Executive / React Developer",
      period: "Oct 2022 - Apr 2025",
      location: "Gurugram, Haryana, India",
      points: [
        "Built dynamic, accessible web applications with React.js, JavaScript, and SQL.",
        "Created scalable, reusable React design system components.",
        "Integrated robust REST endpoints with rigorous error handling and validation.",
      ],
    },
    {
      company: "Phronesis Partners",
      role: "Scripting Executive",
      period: "Nov 2021 - Oct 2022",
      location: "Noida, India",
      points: [
        "Developed responsive web applications using React.js and modern JavaScript.",
        "Boosted frontend performance, accessibility scores, and SEO rankings.",
      ],
    },
    {
      company: "Ameyo",
      role: "Product Trainee",
      period: "Feb 2021 - Oct 2021",
      location: "Gurugram, Haryana, India",
      points: [
        "Hands-on development and testing using Linux (CentOS), PostgreSQL, and JavaScript.",
        "Collaborated with product engineers to resolve feature bottlenecks and optimize data flow.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "United College of Engineering, AKTU",
      period: "2016 - 2020",
      location: "Delhi NCR",
    },
  ],
  awards: [
    {
      title: "Project Delivery Excellence Award",
      issuer: "Ipsos",
      year: "2024",
    },
    {
      title: "Star of the Month",
      issuer: "Phronesis Partners",
      year: "2022",
    },
    {
      title: "React JS Specialization",
      issuer: "Scaler",
      year: "2024",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2024",
    },
  ],
};

export const projects = [
  {
    title: "Private AI",
    category: "ai",
    featured: true,
    stack: ["React", "Vite", "JavaScript", "Transformers", "WebLLM"],
    description:
      "A privacy-focused AI application running local-first client-side models with WebLLM and HuggingFace Transformers for zero-server inference.",
    highlights: [
      "Client-side local model inference via WebLLM & Transformers",
      "Zero telemetry and total user data privacy",
      "Responsive, clean chat interface with streaming generation",
    ],
    github: "https://github.com/Avanish-Tiwari/private-ai",
    demo: "https://private-ai-two.vercel.app/",
  },
  {
    title: "AI TaskFlow",
    category: "ai",
    featured: true,
    stack: ["React", "Node.js", "PostgreSQL", "Groq AI"],
    description:
      "Intelligent full-stack productivity system where new tasks are categorized and prioritized in real time using Groq AI with instant recommendations.",
    highlights: [
      "AI-driven task categorization and smart priority ranking",
      "Full-stack PostgreSQL backend with JWT authentication",
      "Productivity suggestions and dynamic focus assistant",
    ],
    github: "https://github.com/Avanish-Tiwari/Ai-TaskFlow",
    demo: "https://ai-task-flow-five.vercel.app",
  },
  {
    title: "Next.js Dashboard",
    category: "fullstack",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    description:
      "Full-stack administrative dashboard with email authentication, protected route middleware, and live data charts connected to PostgreSQL.",
    highlights: [
      "NextAuth credential protection & role-based middleware",
      "Real-time analytics and revenue metrics visualization",
      "Server Actions and connection pooling for rapid data queries",
    ],
    github: "https://github.com/Avanish-Tiwari/Nextjs-DashBoard",
    demo: "https://nextjs-dash-board-blond.vercel.app",
  },
  {
    title: "Job Tracker",
    category: "fullstack",
    featured: false,
    stack: ["React", "Express", "PostgreSQL", "JWT"],
    description:
      "A personal job application tracker with user authentication, stage pipelines (applied, interviewed, offered), and detailed company notes.",
    highlights: [
      "Per-user private job application pipelines and timeline notes",
      "Secure REST API with JWT verification and PostgreSQL storage",
      "Dynamic status badges and interview scheduling tracking",
    ],
    github: "https://github.com/Avanish-Tiwari/job-tracker",
    demo: "https://job-tracker-sage-seven.vercel.app",
  },
  {
    title: "Next.js Countries",
    category: "react",
    featured: false,
    stack: ["Next.js", "Tailwind CSS", "REST API"],
    description:
      "A fast, modern country explorer featuring real-time search, region filtering, border links, and dark/light color themes.",
    highlights: [
      "Dynamic routing and search filtering across 250+ countries",
      "Detailed view for currency, capital, population, and bordering states",
      "Fluid Tailwind CSS layout with instant transitions",
    ],
    github: "https://github.com/Avanish-Tiwari/NextJsCountriey",
    demo: "https://next-js-countriey.vercel.app",
  },
  {
    title: "Country List API",
    category: "react",
    image: countryList,
    featured: false,
    stack: ["React", "REST API", "CSS3"],
    description:
      "Interactive React app querying the REST Countries API with instant search, capital lookups, and responsive card layouts.",
    highlights: [
      "Live search input with instant client-side filtering",
      "Key statistics breakdown with responsive grid design",
      "Deployed with continuous deployment on Netlify",
    ],
    github: "https://github.com/Avanish-Tiwari/ContryList",
    demo: "https://countrieslist-api.netlify.app/",
  },
  {
    title: "Focus On Today",
    category: "frontend",
    image: focusOnToday,
    featured: false,
    stack: ["JavaScript", "HTML5", "CSS3"],
    description:
      "Minimalist daily priority app helping users lock in their top 3 goals of the day with persistent progress tracking.",
    highlights: [
      "Interactive progress bar tracking daily task completions",
      "Local storage synchronization for persistent daily goals",
      "Lightweight, framework-free vanilla JavaScript implementation",
    ],
    github: "https://github.com/Avanish-Tiwari/Focus-on-Today",
    demo: "https://focusontodayproj.netlify.app/",
  },
  {
    title: "Track Expenses",
    category: "frontend",
    image: trackExpense,
    featured: false,
    stack: ["JavaScript", "CSS3", "Web App"],
    description:
      "Clean personal finance logging tool to record expenses, calculate running totals, and visualize spending categories.",
    highlights: [
      "Live summary computation of total income vs expenditures",
      "Category tags and sorting for transaction histories",
      "Zero dependencies for instant loading",
    ],
    github: "https://github.com/Avanish-Tiwari/Track-Expense",
    demo: "https://trackexpenseapp.netlify.app/",
  },
  {
    title: "Foodie Hamburger",
    category: "frontend",
    image: foodie,
    featured: false,
    stack: ["JavaScript", "HTML5", "CSS3"],
    description:
      "Visual culinary catalog featuring mouth-watering burger recipes, ingredient breakdowns, and smooth scrolling interactions.",
    highlights: [
      "Engaging food presentation UI with step-by-step recipe cards",
      "Custom responsive navigation and smooth animations",
      "Optimized assets and fast rendering across devices",
    ],
    github: "https://github.com/Avanish-Tiwari/Foodie-Hamburger-Project",
    demo: "https://foodiehamburgerproject.netlify.app/",
  },
];
