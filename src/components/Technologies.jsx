import React from 'react';
import { SiCplusplus, SiExpress, SiMongodb, SiAmazonaws, SiVisualstudiocode, SiNetlify, SiPostman, SiCpanel, SiNumpy, SiPandas } from "react-icons/si";
import { DiMysql, DiNodejs } from "react-icons/di";
import { RiReactjsLine, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  const icons = [
    { component: <SiCplusplus className="text-7xl" />, link: "https://isocpp.org/" },
    { component: <RiReactjsLine className="text-7xl text-cyan-400" />, link: "https://reactjs.org/" },
    { component: <RiJavascriptFill className="text-7xl text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { component: <SiMongodb className="text-7xl text-green-500" />, link: "https://www.mongodb.com/" },
    { component: <SiExpress className="text-7xl text-blue-400" />, link: "https://expressjs.com/" },
    { component: <DiNodejs className="text-7xl text-green-500" />, link: "https://nodejs.org/" },
    { component: <RiTailwindCssFill className="text-7xl text-sky-300" />, link: "https://tailwindcss.com/" },
    { component: <DiMysql className="text-7xl text-sky-700" />, link: "https://www.mysql.com/" },
    { component: <SiNumpy className="text-7xl text-sky-700" />, link: "https://numpy.org/" },
    { component: <SiPandas className="text-7xl text-green-700" />, link: "https://pandas.pydata.org/" },
    { component: <FiGithub className="text-7xl" />, link: "https://github.com/" },
    { component: <SiAmazonaws className="text-7xl text-orange-400" />, link: "https://aws.amazon.com/" },
    { component: <SiVisualstudiocode className="text-7xl text-sky-600" />, link: "https://code.visualstudio.com/" },
    { component: <SiNetlify className="text-7xl text-sky-400" />, link: "https://www.netlify.com/" },
    { component: <SiPostman className="text-7xl text-orange-600" />, link: "https://www.postman.com/" },
    { component: <SiCpanel className="text-7xl" />, link: "https://cpanel.net/" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants(7 - (index % 8))}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              {icon.component}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
