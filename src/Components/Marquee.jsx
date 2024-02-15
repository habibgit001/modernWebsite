import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-30 rounded-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden gap-10 border-zinc-300'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 4}} className='text-[15vw] leading-none font-semibold uppercase  pt-10 mb-[7vw] '>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 4}} className='uppercase text-[15vw] leading-none font-semibold  pt-10  mb-[7vw]'>we are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee