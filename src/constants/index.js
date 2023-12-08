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
  dkit,
  gym,
  thunt,
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
  carrent,
  codenitw,
  jobit,
  tripguide,
  threejs,
  Note,
} from "../assets";


const socials = [
	{
		name: 'linkedin',
		icon: mongodb,
		link: 'https://www.linkedin.com/in/exslym/',
	},
	{
		name: 'github',
		icon: mongodb,
		link: 'https://github.com/exslym/',
	},
	{
		name: 'discord',
		icon: mongodb,
		link: 'https://discordapp.com/users/794645643518803978/',
	},
];

export const navLinks = [
  {
    id: "about",
    title: "Skills",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development: React,three.js, HTML, Tailwind-CSS,JavaScript",
    icon: web,
  },
  {
    title: "CP and LeetCode(600+)",
    icon: mobile,
  },
  {
    title: "Languages: : C++, JavaScript",
    icon: backend,
  },
  {
    title: "Soft Skills: Singing, Event Hosting, Presentation Skills",
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
    name: "React JS",
    icon: reactjs,
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
 
];

const experiences = [
  {
    title: "National Institute Of Technology, Warangal",
    company_name: "B.Tech",
    icon: web,
    iconBg: "#383E56",
    date: "December 2020 - April 2024",
    points: [
      "Doing my B.Tech in Mechanical Engineering from NITW.",
      "Have Maintained a good CG of 8.24 and among the top performers",
      "In MEA and ROBOTICS Club",
    ],
  },
  {
    title: "INTERMEDIATE From RBS Public School, Hathras, UP",
    company_name: "Intermediate",
    icon: web,
    iconBg: "#383E56",
    date: "may 2019 - may 2020",
    points: [
      "Got 82% marks in Board Exams in Intermediate",
    ],
  },
  {
    title: "HighSchool From RPM Sr Sec School, Hathras, UP",
    company_name: "HighSchool",
    icon: web,
    iconBg: "#383E56",
    date: "may 2017 - may 2019",
    points: [
      "Got 9.8 CG in Board Exams in HighSchool",
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
    name: "CodeNITW",
    description:
      "Created an React based web application for NIT WARANGAL students for SDE preparation. This web application consists DISCUSS Section where announcements are made and students can put their doubts.PROBLEMS section where Strivers SDE sheet along with video solutions is available.CONTESTS section contains all upcoming, past and running contests by CCPD. LEADERBOARD contains the cumulative ranks of all students. DASHBOARD consists of users info and chart showing his/her performance in different contests.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
       
    ],
    image: codenitw,
    source_code_link: "https://codenitw.vercel.app",
    visit_link:"",
  },
  {
    name: "LetsConnect",
    description:
      "Created a RealTime chatting MERN stack web application where a user can message, send files and photos in real time. Technologies used are React, React-router-dom for creating routes, tailwind-css for styling, socket.io-client for rendering messages in real time, Node.js for backend, MongoDB for database, Socket.IO for realtime messaging, bcrypt for hashing password and cloudinary clouds are used to save files.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
        {
        name: "Socket.IO",
        color: "blue-text-gradient",
      },
        {
        name: "Node.js",
        color: "pink-text-gradient",
      },
       
    ],
    image: carrent,
    source_code_link: "https://hay-lets-connect.netlify.app/",
    visit_link:"",
  },
  {
    name: "RealEstate",
    description:
      "Created a Responsive Real Estate website which allows user to sell,rent and buy houses, User can add, edit and delete his listings. Technologies Used are React, React-router-dom for creating routes, Tailwind-CSS for styling, React-leaflet for showing location of house in map, Firebase Database is used for data managements, .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
        {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://real-estate-wheat-one.vercel.app/",
    visit_link:"",
  },
  {
    name: "MovieReviewed",
    description:
      "Created a Responsive movie review web application with dark and lite theme, Technologies Used are  React and Tailwind-css are used for frontend, react-router-dom for routes and the moviedb API for fetching movies data. User can search movie by popularity, top-rated, upcoming or by movie name",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://movie-reviewed.netlify.app/",
    visit_link:"https://movie-reviewed.netlify.app/",
  },
  {
    name: "LetsWorkout",
    description:
      "Created a Responsive Fitness Exercises App with animations. It uses :React and Tailwind-css are used for frontend, react-router-dom for routes and exerciseDB rapid API is used for fetching animation videos and youtube search rapid API for fetching Youtube videos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://lets-workout.vercel.app/",
    visit_link:"",
  },
  {
    name: "Notes",
    description:
      "Created a Note taking web application using React, Tailwind-CSS. React-Draggable is used for making every note draggable, On hovering, Note becomes Large for easy reading.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "React-Draggable",
        color: "pink-text-gradient",
      },
    ],
    image: Note,
    source_code_link: "https://notes-sooty.vercel.app/",
    visit_link:"",
  },
  {
    name: "TreasureHunt",
    description:
      "Created a A Quiz Website using HTML, CSS, JavaScript, and Firebase. User Authentantication using Firebase.There is Admin Dashboard where Admin can watch Performance of different users",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: thunt,
    source_code_link: "https://e-litmus-treasure-hunt.vercel.app/",
    visit_link:"",
  },

];

export { services, technologies, experiences, socials, testimonials, projects };
