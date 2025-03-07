"use client"

import React from 'react'
import {FaHtml5 , FaCss3 , FaJs , FaReact , FaNodeJs , FaBootstrap } from "react-icons/fa"
import {SiTailwindcss , SiNextdotjs , SiMongodb , SiPostman , SiRedux , SiSocketdotio , SiExpress , SiGraphql , SiTypescript , SiNestjs   } from "react-icons/si"
import { Tabs , TabsContent , TabsList , TabsTrigger } from '@/components/ui/tabs'
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";


const about = {
  title : "About me" ,
  description : "I am a highly skilled Full Stack Web Developer proficient in various programming languages and new cutting-edge technologies." ,
  info : [
    {
      fieldName : "Name" ,
      fieldValue : "Laith Abu Fadda" 
    },
    {
      fieldName : "phone" ,
      fieldValue : "+962 771101109" 
    },
    {
      fieldName : "Experience" ,
      fieldValue : "+2" 
    },
    {
      fieldName : "Email" ,
      fieldValue : "laithfadda4@gmail.com" 
    },
    {
      fieldName : "Freelance" ,
      fieldValue : "Available" 
    },
    {
      fieldName : "Languages" ,
      fieldValue : "Arabic , English" 
    },
  ]
}


const experience = {
  icon : "/assets/resume/badge.svg" ,
  title : "My Experience" ,
  items : [
    {
      company : "The Hope International",
      position : "Front End Developer intern",
      duration : "Apr-2023 - Jul-2023"
    },
    {
      company : "Estarta",
      position : "Software Engineer intern",
      duration : "Aug-2023 - Sep-2023"
    },
    {
      company : "Arrc space",
      position : "Full Stack Web Developer",
      duration : "Sep-2023 - Dec-2023"
    },
    {
      company : "Tajseer",
      position : "Full Stack Web Developer",
      duration : "Dec-2023 - Present"
    },
  ]
}


const education = {
  icon : "/assets/resume/cap.svg",
  title : "My Education" , 
  items : [
    {
      institution : "Computer Information System - JU" ,
      degree : "Bachelor's degree" ,
      duration : "2019-2023"
    }
  ]
}


const skills = {
  title : "My Skills",
  skillList : [
    {
      icon : <FaHtml5/> ,
      name : "html 5"
    },
    {
      icon : <FaCss3/> ,
      name : "css 3"
    },
    {
      icon : <FaJs/> ,
      name : "javascript"
    },
    {
      icon : <FaReact/> ,
      name : "React Js"
    },
    {
      icon : <FaBootstrap/> ,
      name : "Bootstrap"
    },
    {
      icon : <SiTailwindcss/> ,
      name : "tailwind css"
    },
    {
      icon : <SiNextdotjs/> ,
      name : "Next Js"
    },
    {
      icon : <FaNodeJs/> ,
      name : "Node Js"
    },
    {
      icon : <SiMongodb/> ,
      name : "Mongo DB"
    },
    {
      icon : <BiLogoPostgresql/> ,
      name : "Postgres DB"
    },
    {
      icon : <SiPostman/> ,
      name : "Postman"
    },
    {
      icon : <SiSocketdotio/> ,
      name : "Socket io"
    },
    {
      icon : <SiRedux/> ,
      name : "Redux toolkit"
    },
    {
      icon : <SiExpress/> ,
      name : "Express Js"
    },
    {
      icon : <SiGraphql/> ,
      name : "Graph ql"
    },
    {
      icon : <SiNestjs/> ,
      name : "Nest Js"
    },
    {
      icon : <SiTypescript/> ,
      name : "Typescript"
    },
    {
      icon : <DiRedis/> ,
      name : "Redis"
    },
  ]
}




const Resume = () => {
  return (
    
    <motion.div 
      initial={{opacity : 0}} 
      animate={{opacity : 1 , transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >

        <div className="container mx-auto">

            <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>

              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              
              </TabsList>

              <div className='min-h-[70vh] w-full'>


                  <TabsContent value="experience" className="w-full">
                  
                      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  
                        <h3 className='text-4xl font-bold'>{experience.title} <span className='text-accent'>.</span></h3>

                        <ScrollArea className='h-[400px]'>     

                          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>

                            {experience.items.map((item , index) => (

                              <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>

                                <span className='text-accent'>{item.duration}</span>

                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>

                                <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                  <p className='text-white/60'>{item.company}</p>
                                </div>

                              </li>

                            ))}

                          </ul>

                        </ScrollArea>
                      
                      </div>
                  
                  </TabsContent> 



                  <TabsContent value="education" className="w-full">
                      
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                      
                      <h3 className='text-4xl font-bold'>{education.title} <span className='text-accent'>.</span></h3>

                      <ScrollArea className='h-[400px]'>     

                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>

                          {education.items.map((item , index) => (

                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>

                              <span className='text-accent'>{item.duration}</span>

                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>

                              <div className='flex items-center gap-1'>
                                {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                                <p className='text-sm text-white/60 text-md'>{item.institution}</p>
                              </div>

                            </li>

                          ))}

                        </ul>

                      </ScrollArea>
                    
                    </div>    

                  </TabsContent> 



                  <TabsContent value="skills" className="w-full h-full">
                    
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>

                        <div>
                          <h3 className='font-bold text-4xl mb-3'>{skills.title} <span className='text-accent'>.</span></h3>
                        </div>

                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[40px]'>

                          {skills.skillList.map((skill , index) => (

                            <li key={index}>

                              <TooltipProvider delayDuration={100}>

                                <Tooltip>

                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                  </TooltipTrigger>

                                  <TooltipContent>
                                    <p className='capitalize'>{skill.name}</p>
                                  </TooltipContent>

                                </Tooltip>

                              </TooltipProvider>

                            </li>

                          ))}

                        </ul>

                    </div>

                  </TabsContent> 



                  <TabsContent value="about" className="w-full text-center xl:text-left">

                      <div className='flex flex-col gap-[30px]'>

                        <h3 className='text-4xl font-bold'>{about.title} <span className='text-accent'>.</span></h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>

                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>

                          {about.info.map((i , index) => (

                            <li className='flex items-center justify-center xl:justify-start gap-4' key={index}>
                              <span className='text-white/60'>{i.fieldName}</span>
                              <span className='text-xl text-accent'>{i.fieldValue}</span>
                            </li>

                          ))}

                        </ul>

                      </div>

                  </TabsContent> 


              </div>

            </Tabs>

        </div>
    
    </motion.div>
  )
}


export default Resume