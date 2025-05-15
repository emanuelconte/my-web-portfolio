import {
    mobile,
    backend,
    web,
    javascript,
    postgresql,
    java,
    spring,
    typescript,
    html,
    python,
    reactjs,
    tailwind,
    git,
    aws,
    docker,
    lode,
    conciflex,
    datadog,
    codeIcon,
    portfolio,
    webLume,
    dashboard,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Back End Developer",
      icon: mobile,
    },
    {
      title: "AWS Cloud Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Backend Developer",
      company_name: "Conciflex (SaaS) - Maringá, Brazil",
      company_link: "https://www.conciflex.com.br",
      icon: conciflex,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Designed and deployed high-throughput financial APIs using Java/Spring Boot & Python, handling 10,000+ TPS with <50ms latency for payment processing and risk analysis.",
        "Developed scalable Microservices with Hexagonal Architecture, integrated GraphQL for flexible data aggregation.",
        "Built REST/SOAP APIs for core banking systems (transactions, KYC, fraud detection), ensuring PCI-DSS compliance and end-to-end encryption (HTTPS, mutual TLS).",
        "Optimized database performance (PostgreSQL/MySQL) via indexing, query tuning, and Redis caching, reducing response times for high-frequency trading data.",
        "Automated CI/CD pipelines (Jenkins/GitHub Actions) with Docker/Kubernetes.",
        "Secured APIs with OAuth2, JWT, and RBAC.",
        "Led migration of legacy monolith to event-driven Microservices (AWS SQS/SNS).",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "WebLume (Freelancer) - Maringá, Brazil",
      company_link: "https://www.weblume.com.br",
      icon: codeIcon,
      iconBg: "#383E56",
      date: "Since March 2024",
      points: [
        "Developed responsive websites (SPAs, landing pages, portfolios) using React + TypeScript, optimizing for speed, SEO, and cross-browser compatibility.",
        "Collaborated directly with clients to transform Figma/XD designs into functional websites, ensuring alignment with business goals.",
        "Deployed and maintained sites on Vercel/Netlify, integrating analytics (Google Tag Manager) and basic SEO enhancements.",
        "Followed Agile workflows to deliver projects on time, with post-launch support and iterative improvements.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company_name: "Datadog (SaaS) - Sydney, Australia",
      company_link: "https://www.datadoghq.com",
      icon: datadog,
      iconBg: "#383E56",
      date: "October 2023 - February 2024",
      points: [
        "Providing technical support on products within Datadog's Technical Solutions team.",
        "Responsible for assisting customers across various platforms, resolving technical issues, and exploring Datadog integrations.",
        "Engage with customers through multiple channels (ticketing system, live chat, and screen-sharing tools) to identify and address technical support requests.",
        "Reproduce technical issues and explore Datadog's 400+ integrations.",
        "Handle urgent escalation cases with the customer and conduct incident management internally or externally.",
        "Facilitate product discussions based on needs and issues learned during customer interactions.",
      ],
    },
    {
      title: "Java Backend Developer",
      company_name: "Lode - We Love Code (SaaS) - Maringá, Brazil",
      company_link: "https://www.lode.com.br",
      icon: lode,
      iconBg: "#383E56",
      date: "August 2020 - March 2023",
      points: [
        "Developed and optimized REST/SOAP APIs for medical applications, ensuring scalability, security, and compliance with healthcare data standards.",
        "Applied Java backend best practices, including clean code principles, SOLID design patterns, and modular architecture to enhance maintainability and performance",
        "Improved system performance by debugging, profiling, and refactoring legacy code.",
        "Followed Agile (Scrum) methodology for end-to-end software development—from requirement analysis to deployment—ensuring iterative delivery of high-quality features.",
        "Collaborated with cross-functional teams (frontend, QA, DevOps) to design scalable microservices using Spring Boot, Hibernate, and Docker.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "WebLume",
      description:
        "WebLume is a digital agency specializing in modern websites, high-converting landing pages, and corporate sites, blending striking design" + 
        " and efficient technology to elevate brands online..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: webLume,
      source_code_link: "https://github.com/emanuelconte/webLume",
    },
    {
      name: "My Portfolio",
      description:
        "My personal portfolio website built with React, TypeScript, and Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/emanuelconte/my-web-portfolio",
    },
    {
      name: "COVID-19 Statistical Dashboard",
      description:
        "The COVID-19 pandemic impacted our planet for over two years. This application is a global COVID-19 dashboard that allows users" + 
        " to select a country on the map and view case statistics, as well as interactive charts displaying case and death trends over time.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://statistic-map.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };