import {
    ai,
    fastapi,
    github,
    javascript,
    mysql,
    nextjs,
    postgresql,
    python,
    react,
    cplusplus,
    sql,
    tailwindcss,
    typescript,
    linkedin,
    twitter,
    onecap,
    costiq,
    solarpanel,
    html,
    css,
    nodejs,
    express,
    git,
    mongodb,
    unity,
    blender
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Languages",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Languages",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Languages",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Languages",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Languages",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Databases",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Databases",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Databases",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tools",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Tools",
    },
    {
        imageUrl: ai,
        name: "LLM APIs, Prompt Engineering, MCP, Agent SDKs",
        type: "AI/Agents",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "3D Modeling and Development Tool",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D Modeling and Animation Tool",
    },
];

export const experiences = [
    {
        title: "Software Development Engineer I",
        company_name: "OneCap Technologies Pvt. Ltd.",
        icon: onecap,
        iconBg: "#2b77e7",
        date: "July 2025 - Present",
        points: [
            "Owned and developed the frontend architecture from the ground up, building and scaling a single application spanning 10-11 distinct products, using Next.js, TypeScript, and React.",
            "Owned matching logic for bank reconciliation as part of the team building OneCap's AI-native reconciliation engine, validated on 2,000+ ledger pairs.",
            "Owned end-to-end a self-serve AI-powered feature letting customers upload CSV, XLS, or PDF statements from any ERP and directly ask questions about their data - no API integration or manual processing required.",
            "Designed and built balance confirmation workflows end-to-end - request creation, customer responses, notifications, and email communication - with RESTful APIs and PostgreSQL schemas.",
            "Led the frontend implementation of a zero-downtime authentication migration for 13 customers with multiple users each, moving from cookie-based auth to JWT-based auth with no user-visible disruption.",
            "Built an internal AI-powered debugging chat tool that replaced manually downloading and cross-referencing multiple files with a single conversational interface; wrote skills to dynamically generate instructions from uploaded files.",
            "Set up GA4 event tracking across the signup funnel, identifying and removing form fields that were causing drop-off.",
        ],
    },
    {
        title: "Software Development Intern",
        company_name: "OneCap Technologies Pvt. Ltd.",
        icon: onecap,
        iconBg: "#2b77e7",
        date: "February 2025 - July 2025",
        points: [
            "Built responsive UIs in Next.js/React for customer-facing financial workflows and integrated them with backend APIs.",
            "Built reusable UI components and forms, reducing repeated work across feature teams.",
            "Partnered with backend engineers to implement business workflows and debug production UI issues.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Shashankhosamani',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shashank-l-h/',
    },
    {
        name: 'X',
        iconUrl: twitter,
        link: 'https://x.com/Shashank__h'
    }
];

export const projects = [
    {
        iconUrl: costiq,
        theme: 'btn-back-blue',
        name: 'Costiq - Personal Expense Tracker',
        description: 'SMS-based automatic expense tracking app built for personal use to automate expense logging without manual entry. v1 shipped and in daily use; currently extending the architecture with multi-tenancy and security hardening to support additional users.',
        link: null,
    },
    {
        iconUrl: solarpanel,
        theme: 'btn-back-black',
        name: 'Solar-Panel Array 3D',
        description: 'Web 3D application that calculates the power generated by each solar panel at a particular location and time using solar radiation.',
        link: 'https://github.com/Shashankhosamani/SolarpanelFabrik',
    },
];
