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
    css,
    reactjs,
    tailwind,
    git,
    aws,
    docker,
    lode,
    conciflex,
    datadog,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Java Backend Developer",
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
    },,
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      title: "Technical Support Engineer",
      company_name: "Datadog (SaaS) - Sydney, Australia",
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
      title: "Java Software Engineer",
      company_name: "Lode - We Love Code (SaaS) - Maringá, Brazil",
      icon: lode,
      iconBg: "#383E56",
      date: "August 2020 - March 2023",
      points: [
        "Analysed code and debugged errors to improve system performance.",
        "Implemented Scrum-based Agile software development for analysing, designing and developing applications.",
        "Utilised best practices to identify and remedy bugs in applications within a specific timeframe.",
        "Conducted full lifecycle software development from planning to deployment and maintenance.",
      ],
    },
    {
      title: "Support and Deplyment Engineer",
      company_name: "Conciflex (SaaS) - Maringá, Brazil",
      icon: conciflex,
      iconBg: "#383E56",
      date: "August 2018 - May 2019",
      points: [
        "Addressing inquiries and requests from internal and external users.",
        "Performing corrective and preventive maintenance of software and hardware.",
        "Implementing new functionalities that streamline user's daily activities.",
        "Establishing a backup routine to maintain the security of all company data.",
        "Identifying and proposing improvements to the system and the support process.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };