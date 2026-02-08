import {
  mobile,
  backend,
  creator,
  web,
  python,
  cpp,
  java,
  html,
  css,
  javascript,
  c,
  assembly,
  bashscript,
  sql,
  matlab,
  group_amana,
  sfs,
  beyond_learning,
  japan,
  robot,
  medication,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
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
    name: "C",
    icon: c,
  },
  {
    name: "x86 Assembly",
    icon: assembly,
  },
  {
    name: "Bash Script",
    icon: bashscript,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
];

const experiences = [
  {
    title: "Finance and Accounts Intern",
    company_name: "Group AMANA",
    icon: group_amana,
    iconBg: "#383E56",
    date: "Summer 2023",
    points: [
      "Assisted with accounts receivable and payable processes, including advance payments, retentions, progress billings, and subcontractor payables.",
      "Prepared and posted supplier and tax invoices, matched delivery notes across multiple branches, and maintained proper filing documentation.",
      "Performed bank statement reconciliations, petty cash handling, expense sheet checking, and payment preparation with system posting.",
      "Supported financial controls and guarantees, including letters of credit, letters of guarantee, project insurance, and pre-payments using Excel (VLOOKUP, Pivot Tables).",
    ],
  },
  {
    title: "Sales Intern",
    company_name: "Al Sultan Food Stuff",
    icon: sfs,
    iconBg: "#E6DEDD",
    date: "Summer 2021",
    points: [
      "Observed and learned business operations, including how client meetings are conducted and agreements are completed.",
      "Gained exposure to client communication strategies, relationship building, and professional business interactions.",
      "Developed understanding of business etiquette, negotiation flow, and long-term client relationship management.",
    ],
  },
  {
    title: "Program Assistant Intern",
    company_name: "Beyond Learning",
    icon: beyond_learning,
    iconBg: "#383E56",
    date: "Summer 2019",
    points: [
      "Assisted instructors in managing and delivering daily activities for a class within a large summer program serving 500+ students.",
      "Coordinated communication between instructors, staff, and students to ensure smooth execution of schedules, trips, and activities.",
      "Supported organization and logistics of events and off-site trips, contributing to safe and efficient operations.",
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
    name: "Optimal Route Finding in Japan",
    description:
      "Built and evaluated AI search algorithms (BFS, Greedy Best-First, A*) to solve a real-world route-finding problem using Japanese city data modeled as a weighted graph with custom heuristics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "aisearchalgorithms",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: japan,
    source_code_link: "https://github.com/HoussamAlTurk",
  },
  {
    name: "Autonomous Delivery Robot",
    description:
      "Modeled a stochastic navigation environment as an MDP and applied Value Iteration to learn optimal policies, analyzing how rewards and discount factors affect agent behavior.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "valueiteration",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/HoussamAlTurk",
  },
  {
    name: "Medication Adherence Prediction",
    description:
      "Developed and compared machine learning models on 24k+ patient records to predict medication adherence, achieving strong performance with Gradient Boosting (AUC = 0.90).",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: medication,
    source_code_link: "https://github.com/HoussamAlTurk",
  },
];

export { services, technologies, experiences, testimonials, projects };
