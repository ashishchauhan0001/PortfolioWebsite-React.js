import aboutImg from "../assets/demox.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About=()=>{
    return(
        <>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
             whileInView={{y:0,opacity:1}}
             initial={{y:-100,opacity:0}}
             transition={{duration:1.5}}
            className="my-20 text-center text-4xl">
                About <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                {/* left */}
                <motion.div 
                 whileInView={{opacity:1,x:0}}
                 initial={{x:-100,opacity:0}}
                 transition={{duration:0.5}}
                className="w-full md:w-1/2 md:p-8">
                <div className="flex items-center justify-center">
                    <img className=" rounded-2xl" src={aboutImg} alt="about" />
                </div>
                </motion.div>
                {/* right */}
                <motion.div
                 whileInView={{opacity:1,x:0}}
                 initial={{x:100,opacity:0}}
                 transition={{duration:0.5}}
                className="w-full md:w-1/2">
                <div className="flex justify-center md:justify-start">
                    <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
                </div>
                </motion.div>
            </div>
        </div>
        
        </>
    )
}
export default About;
