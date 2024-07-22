import { HERO_CONTENT } from "../constants/index.js";
import { useState,useEffect } from "react";
import profilePic from "../assets/demo2.jpg";
import "../index.css";
import {motion} from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }
});

export const Hero = () => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const updateImgSrc = () => {
      if (window.innerWidth >= 768) {
        setImgSrc('https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=33&letterSpacing=-0.025&pause=1000&color=7A15F3&width=435&lines=Software+Developer;Web+Developer;Data+Analyst');
      } else {
        setImgSrc('https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=36&letterSpacing=-0.025&pause=1000&color=871BC8&center=true&vCenter=true&width=435&lines=Software+Developer;Web+Developer;Data+Analyst');
      }
    };

    // Initial check
    updateImgSrc();

    // Update on resize
    window.addEventListener('resize', updateImgSrc);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateImgSrc);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 md:mb-35">
      <div className="flex flex-wrap">
        {/* Left Half*/}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1 
             variants={container(0)}
             initial="hidden"
             animate="visible"
             className="mt-10 pb-16 text-4xl font-semibold tracking-tight md:mt-16 md:text-7xl text-purple-600">
              Ashish Chauhan
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl 
                 tracking-tight text-transparent"
            >
             <img className="mt-0 md:h-30" src={imgSrc} alt="Typing SVG" />
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify ">
              {HERO_CONTENT}
            </motion.p>
            {/* <button className="btn-custom mb-7 md:mb-0">
      Resume
    </button> */}
          </div>
        </div>
        {/* Right Half Image */}
        <div className="w-full md:w-1/2 md:p-8 order-1 md:order-2">
          <div className="flex justify-center">
            <motion.img
            className="rounded-3xl"
             initial={{x:100,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration:1,delay:1.2}}
             src={profilePic} alt="Ashish Chauhan" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
