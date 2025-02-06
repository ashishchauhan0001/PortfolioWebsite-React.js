import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `
I am a passionate full stack developer specializing in building robust and scalable web applications. With experience in front-end technologies like React.js and back-end technologies like Node.js, Express.js, and MongoDB, I aim to create innovative solutions that drive business growth and enhance user experiences. My projects, including an e-commerce site and BookBaazar, showcase my skills in user authentication plus efficient database management, and API integration`;

export const ABOUT_TEXT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience through internships and personal projects, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Through my work on projects such as an e-commerce website and BookBaazar, I have showcased my ability to implement user authentication, manage databases efficiently, and integrate APIs, demonstrating my dedication to high-quality web development.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "SDE Intern",
    company: "Tradealone",
    description: `Analyzed stock datasets from 10+ companies using Python and Apache Spark to derive insights,
 Worked on the frontEnd of the website for TrendLine and also implemented a code base that makes API calls to Yahoo Finance.`,
    technologies: ["Spark", "MySQL", "Numpy", "Pandas"],
  },
  {
    year: "2023 June - 2023 July",
    role: "Web Developer",
    company: "CodSoft",
    description: `Established a full-featured web applications using the MERN stack,Built a MERN stack bookBaazar,Integrated more than 1 APIs using JavaScript for various projects.`,
    technologies: ["Express.js", "MongoDB","React.js", "Node.js"],
  },
  {
    year: "June 2021 - July 2024",
    role: "Camp Coordinator",
    company: "Light De Literacy",
    description: `
In my first year of college, I joined the NGO Light De Literacy (LDL) as a volunteer. I regularly attended camps to teach underprivileged children, which brought me a profound sense of peace. By the end of my second year, due to my dedication and hard work, I was promoted to Camp Coordinator of Fortis Campus. I continued my efforts with LDL until July 2024. This experience has been incredibly rewarding, and I remain committed to making these children's lives happier and more fulfilling in the future.`,
    technologies: ["Communication", "Leadership", "Time Management"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    demo:'https://shopper-one-topaz.vercel.app/',
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Express.js", "ContextAPI", "React", "Node.js", "MongoDB"],
  },
  {
    title: "BookBaazar",
    image: project2,
    demo:'https://book-baazar.vercel.app/',
    description:
      "A MERN stack application 'BookBaazar' with user authentication and user authentication for accessing premium books about 100 user at a time can be handeled ",
    technologies: ["Express.js", "APIs", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Cricekter’s Ranker",
    image: project3,
    demo:'https://icc-rankings.000webhostapp.com/',
    description:
      "A PHP and MySQL project for ranking cricketers with admin authentication for all 4 data management(CRUD) and Deployed using cPanel for showcasing functionality.",
    technologies: ["HTML", "CSS", "PHP", "MYSQL"],
  },
  {
    title: "Covid-19 Data Analysis",
    image: project4,
    demo:'https://github.com/ashishchauhan0001/Covid-19_DataAnalysis/blob/main/Covid-19.ipynb',
    description:
      "In this project, I utilized Pandas to analyze global data on confirmed, deaths, and recovered cases. I identified regions with the highest number of confirmed and death cases, specifically highlighting Pakistan's statistics.",
    technologies: ["Juypter Notebook", "Pandas", "Matplotlib"],
  },
  {
    title: "CampusNest",
    image: project5, 
    demo: 'https://campusnest-eight.vercel.app/', 
    description:
      "A MERN stack application 'CampusNest' designed to provide accommodation and room rental services with user authentication and a booking management system, capable of handling 100+ concurrent users.",
    technologies: ["Express.js", "APIs", "React", "Node.js", "MongoDB","Firebase"],
},{
  title: "Singh Building Material",
  image: project6, 
  demo: 'https://singh-building-material.vercel.app/', 
  description:
    "A Next.js and Tailwind CSS-based website for 'Singh Building Material,' showcasing a comprehensive product catalog, shop details, and an embedded map for easy location access. The website also features a dedicated 'Contact Us' page for customer inquiries.",
  technologies: ["Next.js", "Tailwind CSS", "APIs", "Google Maps", "React"],
}


];

export const CONTACT = {
  address: "Noida Sector-62, 203109 ,U.P, India ",
  phoneNo: "+91 8171065385",
  email: "asch20080@gmail.com",
};
