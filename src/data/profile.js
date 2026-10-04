import countryList from "../Assets/Projects/countrylistapi.png";
import focusOnToday from "../Assets/Projects/focusontoday.png";
import trackExpense from "../Assets/Projects/trackexpense.png";
import foodie from "../Assets/Projects/foodie.png";

export const profile = {
  name: "Avanish Tiwari",
  shortName: "AT.",
  role: "React & Frontend Developer",
  location: "India",
  experience: "3.5+ years",
  intro:
    "I build modern, responsive web applications with React and JavaScript, with a focus on clear interfaces and products people can actually use.",
  github: "https://github.com/Avanish-Tiwari",
  linkedin: "https://www.linkedin.com/in/avanishtiwari1205/",
  resume: "/resume.pdf",
  interests: ["Playing games", "Learning new technologies", "Travelling"],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "PostgreSQL",
    "Vite",
  ],
  tools: ["Git", "VS Code", "Postman"],
};

export const projects = [
  {
    title: "Private AI",
    stack: ["React", "Vite", "JavaScript", "Transformers", "WebLLM"],
    description:
      "A privacy-focused AI app built with React and Vite, designed for local-first AI experiences with lightweight model integrations and a clean user experience.",
    github: "https://github.com/Avanish-Tiwari/private-ai",
  },
  {
    title: "AI TaskFlow",
    stack: ["React", "Node.js", "PostgreSQL", "Groq"],
    description:
      "A full-stack task manager. New tasks are categorized and prioritized with Groq, and signed-in users can ask for suggestions, a productivity tip, or what to focus on first.",
    github: "https://github.com/Avanish-Tiwari/Ai-TaskFlow",
    demo: "https://ai-task-flow-five.vercel.app",
  },
  {
    title: "Job Tracker",
    stack: ["React", "Express", "PostgreSQL", "JWT"],
    description:
      "A private job-application board. Register, log company and role, then update status, dates, and notes. Each list is limited to the signed-in user.",
    github: "https://github.com/Avanish-Tiwari/job-tracker",
    demo: "https://job-tracker-sage-seven.vercel.app",
  },
  {
    title: "Next.js Dashboard",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    description:
      "A full-stack dashboard with email login, protected routes, and a PostgreSQL database. Built with Next.js, TypeScript, Tailwind CSS, and NextAuth.",
    github: "https://github.com/Avanish-Tiwari/Nextjs-DashBoard",
    demo: "https://nextjs-dash-board-blond.vercel.app",
  },
  {
    title: "Next.js Countries",
    stack: ["Next.js", "Tailwind", "REST API"],
    description:
      "A countries explorer with search, region filters, and detail pages for capital, population, currencies, languages, and bordering countries.",
    github: "https://github.com/Avanish-Tiwari/NextJsCountriey",
    demo: "https://next-js-countriey.vercel.app",
  },
  {
    title: "Country List API",
    image: countryList,
    stack: ["React", "REST API"],
    description:
      "A responsive React app for exploring countries. Search and open details such as population, area, and capital, with live data from a REST API. Deployed on Netlify.",
    github: "https://github.com/Avanish-Tiwari/ContryList",
    demo: "https://countrieslist-api.netlify.app/",
  },
  {
    title: "Focus On Today",
    image: focusOnToday,
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A small productivity app for daily priorities. Add, edit, and remove tasks from a simple interface built with HTML, CSS, and JavaScript.",
    github: "https://github.com/Avanish-Tiwari/Focus-on-Today",
    demo: "https://focusontodayproj.netlify.app/",
  },
  {
    title: "Track Expenses",
    image: trackExpense,
    stack: ["JavaScript", "Web app"],
    description:
      "A personal finance app for logging daily spending and setting budgets, so spending habits are easier to see and manage.",
    github: "https://github.com/Avanish-Tiwari/Track-Expense",
    demo: "https://trackexpenseapp.netlify.app/",
  },
  {
    title: "Foodie Hamburger",
    image: foodie,
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A visual recipe site for hamburgers, built with HTML, CSS, and JavaScript. Visitors can move through the recipes without a heavy framework.",
    github: "https://github.com/Avanish-Tiwari/Foodie-Hamburger-Project",
    demo: "https://foodiehamburgerproject.netlify.app/",
  },
];
