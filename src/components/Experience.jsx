import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
         whileInView={{y:0,opacity:1}}
         initial={{y:-100,opacity:0}}
         transition={{duration:0.5}}  
        className="my-20 text-center text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience,index)=>(
             <div key={index} className="mb-8 flex flex-wrap md:justify-center">
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:-100,opacity:0}}
                 transition={{duration:1}} 
                className="w-full md:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                </motion.div>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:100,opacity:0}}
                 transition={{duration:1}}
                className="w-full max-w-xl md:w-3/4">
                <h6 className="mb-2 font-semibold">
                    {experience.role}-{" "}
                    <span className="text-sm text-purple-100">
                        {experience.company}
                    </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-900 hover:bg-purple-900 hover:shadow-[0_0_10px_4px_rgba(128,0,128,0.5)] transition duration-300 hover:text-white">{tech}</span>
                ))}
                </motion.div>
                </div>

            ))}
        </div>
      </div>
  );
};
