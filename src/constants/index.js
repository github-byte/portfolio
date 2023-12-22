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
  starbucks,
  tesla,
  shopify,
  travclan,
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Node.js Developer",
    icon: web,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Travclan",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer II",
    company_name: "Travclan",
    icon: travclan,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Getting actively involved in POCs (for implementing any new architecture or new libraries).",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Currently working on the most elusive, high-impact project of package booking which involves complex calculations of prices and selection for users and finding ways to optimize for a seamless experience.",
      "Mentoring interns and discussing good coding practices while keeping the deliverables on time."
    ],
  },
  {
    title: "Software Developer I",
    company_name: "Travclan",
    icon: travclan,
    iconBg: "#383E56",
    date: "Sept 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Revamped the entire website keeping the current architecture and applications in mind, which resulted in a 30% increase in user engagement.",
      "Worked on developing a content management platform/engine that generates templates that are visually stunning and cross-platform(compatibility with different UI frameworks like Bootstrap, material-ui, etc.)"
    ],
  },
  {
    title: "Software Engineer Trainee",
    company_name: "Travclan",
    icon: travclan,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Sept 2022",
    points: [
      "Contributed to major projects of the company e.g. (Flights, hotels, and agent websites). Also debugged issues related to the payment system which resulted in the improvement of the payment system by 40%.",
      "Delved deep into react framework, familiarised with the code base and agile development process."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Awarded esops for being top 10% performer in company.",
    link: 'https://photos.app.goo.gl/456rinPQ9bk4ewEb9'
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Awarded top performer for work on holidays/packages and goodies.",
      link:"https://photos.app.goo.gl/AgBCuUh3VZArbBt98"
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Awarded shining star award during internship.",
      link: "https://drive.google.com/file/d/1oCE7YnCPcKMWqvGaFfN4Uk5gRZZd_2vC/view"
    // name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
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
