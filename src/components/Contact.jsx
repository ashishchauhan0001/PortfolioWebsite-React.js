import React from 'react'
import { CONTACT } from '../constants'
import logo from "../assets/kevinRushLogo.png"
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 bg-black'>
        <motion.h1
          whileInView={{y:0,opacity:1}}
          initial={{y:-100,opacity:0}}
          transition={{duration:0.7}}        
        className='my-10 text-center text-4xl'> Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1}}            className='my-3'>{CONTACT.address}</motion.p>
            <motion.p
             whileInView={{x:0,opacity:1}}
             initial={{x:100,opacity:0}}
             transition={{duration:1}}  
            className='my-3'>{CONTACT.phoneNo}</motion.p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
            <p className="text-sm flex justify-center items-center mt-4">
        &copy; 2024 All rights reserved by <img src={logo} width={20} height={20} alt="Logo" className="ml-2" />
      </p>
        
        </div>
    </div>
  )
}

export default Contact