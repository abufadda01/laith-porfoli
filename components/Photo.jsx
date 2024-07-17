"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const Photo = () => {
  return (

    <div className="w-full h-full relative">

        <motion.div 
            initial={{opacity : 0}} 
            animate={{
                opacity : 1 , 
                transform : 
                    {delay : 2 , duration : 0.4 , ease : "easeIn"}
                }}>

            <div className='w-[288px] h-[288px] xl:w-[478px] xl:h-[478px] mix-blend-lighten absolute'> 
                <Image src={"/assets/photo.png"} priority quality={100} fill alt='profile-image' className='object-contain'/>
            </div>
        

        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            
            <motion.circle 
                cx={"243"}    
                cy={"293"}    
                r={"250"}
                stroke={"#00ff99"}
                strokeWidth={4}
                strokeLinecap={"round"}    
                strokeLinejoin={"round"}
                initial={{strokeDasharray : "24 10 0 0"}}
                animate={{
                    strokeDasharray : ["15 130 45 45" , "36 25 92 72" , "4 250 22 22"] ,
                    rotate : [120 , 360]
                }}
                transition={{
                    duration : 10 ,
                    repeat : Infinity,
                    repeatType : "reverse"
                }}    
            />

        </motion.svg>


        </motion.div>

    </div>
  )
}

export default Photo