"use client"

import React from 'react'
import Link from 'next/link'
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from 'framer-motion'


const services = [
  {
    num : "01" ,
    href : "",
    title : "Front End Developer" ,
    desc : "I am a highly skilled Front-End Developer, adept at creating responsive and visually appealing web applications using modern frameworks and technologies."
  },
  {
    num : "02" ,
    href : "",
    title : "Back End Developer" ,
    desc : "I am a proficient Back-End Developer, experienced in building robust and scalable server-side applications using modern technologies and best practices."
  },
  {
    num : "03" ,
    href : "",
    title : "Full Stack Developer" ,
    desc : "I am a skilled Full Stack Developer, adept at creating comprehensive web applications by seamlessly integrating front-end and back-end technologies to deliver optimal performance and user experience."
  },
  {
    num : "04" ,
    href : "",
    title : "Software Engineer:" ,
    desc : "I am a versatile Software Engineer with a strong background in designing, developing, and maintaining complex software solutions across various domains, ensuring high-quality and efficient performance."
  },
]



const Services = () => {
  return (

    <section id='services' className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-8'>

      <h1 className='h1 text-center mb-20 text-accent'>Services .</h1>

      <div className='container mx-auto'>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-[70px]' initial={{opacity : 0}} animate={{opacity : 1 , transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"} }}>
          
          {services.map((service , index) => (
            
          <div className='flex-1 flex flex-col justify-center gap-6 group' key={index}>

            <div className='w-full flex justify-between items-center'>

                <div className='cursor-pointer text-5xl font-extrabold text-accent text-outline text-transparent group-hover:text-outline-hover'>{service.num}</div> 

                <Link className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45' href={service.href}>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              
            </div>
            
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
            
            <p className='text-white/60'>{service.desc}</p>

            <div className='border-b border-white/20 w-full'></div>

          </div>

          ))}

        </motion.div>
      
      </div>
    
    </section>
  )
}

export default Services