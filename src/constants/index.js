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
  tripguide,
  threejs,
} from "../assets";

import jandjlogo from "../assets/company/jandjlogo.png";
import regionofpeellogo from "../assets/company/regionofpeellogo.png";
import quanserrobotrecycle from "../assets/company/quanserrobotrecycle.png";
import threedspatialpic from "../assets/company/threedspatialpic.png";
import financeaichatbott from "../assets/company/financeaichatbott.png";



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
    date: "July 2023 - Jan 2024",
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
    date: "May 2022 - Aug 2022",
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
      "I had the pleasure of working with Rehman during his co-op. He is a quick and self-motivated learner. He taught himself Tableau and Alteryx and quickly came up to speed on existing workflows and visualizations. He was able to troubleshoot production issues and is a great communicator. He is always asking deeper questions and is dedicated to his work. Rehman will be an asset to any team that he joins in the future.",
    name: "Joseph Cappelluti",
    designation: "Staff Supplier Quality Engineer",
    company: "Johnson & Johnson MedTech",
    image: "/jcappelluti.png",
  }
  
];

const projects = [
  {
    name: "Automated Robotic Sorting Disposal System",
    description:
      "Developed a robotic arm system programmed in Python, using muscle sensors to automate sorting and disposal of containers. It integrates ultrasonic and infrared sensors for accurate positioning and identification, and employs Quanser-Bot technology to handle containers based on weight and ID, enhancing efficiency and precision in recycling operations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Quanser Interactive Software",
        color: "green-text-gradient",
      },
    
    ],
    image: quanserrobotrecycle,
    source_code_link: "https://github.com/Rehmanmohammed03/Automated-Robotic-Sorting-Disposal-System",
  },
  {
    name: "3D Spatial Mapping Sensor",
    description:
      "Developed a spatial measurement system using the VL53L1X Time-of-Flight sensor for 360-degree mapping and precise distance measurements up to 4.5 feet. The system uses I2C and UART protocols for efficient data transfer to PCs, complemented by a Python-based program with Open3D for 3D visualization and environment reconstruction",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Open3D",
        color: "pink-text-gradient",
      },
      {
        name: "Pyserial",
        color: "red-text-gradient",
      },
    ],
    image: threedspatialpic,
    source_code_link: "https://github.com/Rehmanmohammed03/3D-Spatial-Mapping-Sensor",
  },
  {
    name: "Financial Advisor AI Chatbot",
    description:
      "Developed a robust AI-powered chatbot that delivers accurate financial guidance to users while combating misinformation in the financial sector, including cryptocurrency. The platform is built with Node.js and Next.js for high performance and scalability, integrated with OpenAI's GPT models to provide personalized advice, and deployed on Amazon EC2 to ensure reliable performance and uptime",
    tags: [
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "red-text-gradient",
      },
      {
        name: "Amazon EC2",
        color: "purple-text-gradient",
      },
      
    ],
    image: financeaichatbott,
    source_code_link: "https://github.com/Rehmanmohammed03/Financial-Advisor-AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
