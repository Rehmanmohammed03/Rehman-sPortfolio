import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import jandjlogo from "../assets/company/jandjlogo.png";
import regionofpeellogo from "../assets/company/regionofpeellogo.png";


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
    title: "Back End Engineer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "OT Cyber Security Intern",
    company_name: "Johnson & Johnson",
    icon: jandjlogo, // Updated to use Johnson & Johnson logo
    iconBg: "#EB1600",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Leading the DCOM Remediation project to enhance server network security, achieving a 40% reduction in vulnerabilities and a 50% faster patching process using Tanium’s real-time data monitoring",
      "Developed automated scripts to enhance the security of data warehouses, reducing unauthorized access incidents by 30% using Python and SQL",
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "Johnson & Johnson",
    icon: jandjlogo, // Updated to use Johnson & Johnson logo
    iconBg: "#EB1600",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Delivered a crucial data pipeline development project, enhancing data processing speed by 30% through the implementation of Python, SQL, and Apache Spark, resulting in more efficient data analysis and reporting",
      "Developed Tableau dashboards with Alteryx, improving business decision-making by 40% through enhanced real-time KPI analytics, and engineered Alteryx macros to reduce manual effort by 50%",
      "Integrated Alteryx automation into the Weekly Non-Conformance Report workflow, cutting manual efforts by 50% and enabling real-time non-conformance resolution for better quality control",
      "Transitioned from an obsolete Excel system to an advanced Alteryx workflow, enhancing data processing efficiency by 70% and improving supply chain operations using J&J Employee Database queries",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Region of Peel",
    icon: regionofpeellogo,
    iconBg: "#030708",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Automated repetitive reporting tasks using VBA, reducing manual update time by 50% and cutting report generation time from 4 hours to 2 hours",
      "Engineered a data consolidation solution by developing a robust data aggregation system that integrated data from 300+ disparate documents, enhancing the accuracy and accessibility of piping, material, and testing requirements across 10 major Ontario cities",
      "Supported 5+ project managers and clients, streamlining coordination for the Peel Region Waste Water Asset CCTV Inspection Manual project, leading to a 20% increase in project efficiency",
      "Evaluated over 15 engineering designs for municipal infrastructure using ArcGIS, ensuring data integrity across 3 integrated systems and reducing data inconsistencies by 30%",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
