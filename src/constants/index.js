import {
  backend,
  creator,
  web,
  javascript,
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
  _999,
  bookheaven,
  textutils,
  golf,
  virtualassistant,
  employee,
  famStyle,
  deecare,
  codeTech,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    link: "https://www.linkedin.com/company/codtechitsolutions/",
    title: "Full-Stack Web Developer Intern",
    company_name: "CODTECH IT SOLUTIONS",
    icon: codeTech,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    location: "· Remote",
    points: [
      "Successfully developed a real-time collaborative document editor using React, Node.js, and WebSockets.",
      "Gained hands-on experience in full-stack development, teamwork, and problem-solving in a professional environment.",
    ],
  },
  {
    link: "https://www.linkedin.com/company/999logistics/",
    title: "Web Developer Intern",
    company_name: "999Logistics",
    icon: _999,
    iconBg: "#383E56",
    date: "Apr 2024 - Jun 2024",
    location: "Bengaluru, Karnataka, India · Remote",
    points: [
      "Enhanced user experience with a responsive React.js & MUI frontend.",
      "Improved scalability and performance using Amazon S3.",
      "Automated employee ID processing, saving time and streamlining operations.",
      "Optimized database structure, decreasing storage space, leading to cost savings and improved system efficiency.",
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
    name: "Employee Management Web App",
    description:
      "Streamlined employee registration with unique ID card generation using Material-UI, React.js, Node.js, Postman, MongoDB, and Amazon S3.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Amazon Web Services (AWS)",
        color: "orange-text-gradient",
      },
      {
        name: "Postman API",
        color: "white-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "text-yellow-500",
      },
    ],
    image: employee,
    source_code_link:
      "https://github.com/deepanshu921372/999-manager-app-id-card",
    live_link: "https://admin.999logistics.in/",
  },
  {
    name: "DeeCare - Full-Stack Hospital Management System",
    description:
      "DeeCare is a responsive Hospital Management System using MongoDB, Express.js, React, Node.js, and Cloudinary for appointment booking and doctor management.",
    tags: [
    {
        name: "React.js",
        color: "blue-text-gradient",
    },
    {
        name: "Tailwind CSS",
        color: "text-cyan-500",
    },
    {
        name: "Express",
        color: "text-gray-500",
    },
    {
        name: "MongoDB",
        color: "green-text-gradient",
    },
    {
        name: "Node.js",
        color: "green-text-gradient",
    },

    ],
    image: deecare,
    source_code_link: "https://github.com/deepanshu921372/HMS_Frontend_And_Admin",
    live_link: "https://deecare-hms.netlify.app",
  },
  {
    name: "FamStyle | Clothing Store",
    description:
      "A modern clothing e-commerce platform with seamless shopping experience and admin inventory management system.",
    tags: [
      {
        name: "nextjs",
        color: "text-pink-800",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-cyan-500",
      },
    ],
    image: famStyle,
    source_code_link: "https://github.com/deepanshu921372/e-commerce",
    live_link: "https://famstyle.vercel.app/",
  },
  {
    name: "Book Heaven",
    description:
      "An e-commerce platform where users can purchase books and admins can manage inventory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "text-gray-500",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "text-purple-500",
      },
      {
        name: "tailwind",
        color: "text-cyan-500",
      },
      {
        name: "rest api",
        color: "text-orange-500",
      },
    ],
    image: bookheaven,
    source_code_link: "https://github.com/deepanshu921372/bookheaven",
    live_link: "https://bookheavenstore.netlify.app/",
  },
  {
    name: "Virtual Assistant Nova",
    description:
      "Created Virtual Assistant Nova, a web-based application that lets users interact with a smart voice assistant using natural language. Built with HTML, CSS, and JavaScript, Nova answers questions, opens websites.",
    tags: [
      {
        name: "HTML5",
        color: "text-violet-500",
      },
      {
        name: "Cascading Style Sheets (CSS)",
        color: "text-cyan-500",
      },
      {
        name: "JavaScript",
        color: "text-emerald-500",
      },
      {
        name: "Spline",
        color: "text-amber-500",
      },
    ],
    image: virtualassistant,
    source_code_link: "https://github.com/deepanshu921372/VirtualAssistant",
    live_link: "https://virtualassistantnova.netlify.app/",
  },
  {
    name: "TextUtils",
    description:
      "TextUtils is a React app built with React.js and Material-UI, designed for efficient text manipulation. It offers features like word counting, character counting, removing extra spaces, and converting text to uppercase and lowercase, showcasing proficiency in creating functional and user-friendly web applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "text-yellow-500",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/deepanshu921372/TextUtils-React",
    // live_link: "https://dsgolfclub.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
