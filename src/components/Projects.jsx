import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
         whileInView={{y:0,opacity:1}}
         initial={{y:-100,opacity:0}}
         transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap md:justify-center'>
                    <motion.div 
                     whileInView={{x:0,opacity:1}}
                     initial={{x:-100,opacity:0}}
                     transition={{duration:1.5}}
                    className='w-full md:w-1/4'>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                   <img src={project.image} width={250} height={250} alt={project.title} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div 
                     whileInView={{x:0,opacity:1}}
                     initial={{x:100,opacity:0}}
                     transition={{duration:1.5}}
                    className='w-full max-w-xl md:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span 
                        key={index} 
                        className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-900 hover:bg-purple-900 hover:shadow-[0_0_10px_4px_rgba(128,0,128,0.5)] transition duration-300 hover:text-white"
                    >
                        {tech}
                    </span>
                    
                    
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects