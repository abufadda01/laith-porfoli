"use client"

import React , {useState} from 'react'
import { motion } from 'framer-motion'
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight , BsGithub } from 'react-icons/bs'
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import SliderButtons from '@/components/SliderButtons'


const projects = [
  {
    num : "01" ,
    category : "Frontend",
    title : "brainwave" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"}] ,
    image : "/assets/work/pro-1.jpg",
    github : "https://github.com/abufadda01/brainwave"      
  }, 
  { 
    num : "02" ,
    category : "Fullstack",
    title : "Laith shop" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Redux Toolkit"} , {name : "Node JS"} , {name : "Express JS"} , {name : "Mongo DB"} , {name : "PayPal"}] ,
    image : "/assets/work/pro-2.jpg",
    github : "https://github.com/abufadda01/e-commerce-mern"     
  },
  {
    num : "03" ,
    category : "Fullstack",
    title : "Tomato e-shop" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Redux Toolkit"} , {name : "Node JS"} , {name : "Express JS"} , {name : "Mongo DB"} , {name : "Stripe"}] ,
    image : "/assets/work/pro-3.jpg",
    github : "https://github.com/abufadda01/mern-food-app"     
  },
  {
    num : "04" ,
    category : "Fullstack",      
    title : "Music composer" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Redux Toolkit"} , {name : "Node JS"} , {name : "Express JS"} , {name : "Mongo DB"} , {name : "ffmpeg"}] ,
    image : "/assets/work/pro-4.jpg",
    github : "/"     
  },
  {
    num : "05" ,
    category : "Frontend",
    title : "AI image generator" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Open AI"}] ,
    image : "/assets/work/pro-10.png",
    github : "/"     
  },
  {
    num : "06" ,
    category : "Frontend",
    title : "Tasker" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Context Api"}] ,
    image : "/assets/work/pro-5.jpg",
    github : "https://github.com/abufadda01/Tasker"     
  },
  { 
    num : "07" ,
    category : "BookNook",
    title : "Music composer" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Redux Toolkit"} , {name : "Node JS"} , {name : "Express JS"} , {name : "Mongo DB"} , {name : "PayPal"}] ,
    image : "/assets/work/pro-14.png",
    github : "https://github.com/abufadda01/booking-website"     
  },
  {
    num : "08" ,
    category : "Frontend",
    title : "Far-Away" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Context Api"}] ,
    image : "/assets/work/pro-16.png",
    github : "https://github.com/abufadda01/far-away"     
  },
  {
    num : "09" ,
    category : "Frontend",
    title : "Eat-n-Split" ,
    stack : [{name : "React JS"} , {name : "Tailwind css" } , {name : "Javascript"} , {name : "Context Api"}] ,
    image : "/assets/work/pro-11.png",
    github : "https://github.com/abufadda01/eat-n-split"     
  },
]





const Work = () => {

  const [project , setProject] = useState(projects[0])


  const handleSlideChange = (swiper) => {

    const currentIndex = swiper.activeIndex;

    if (currentIndex >= 0 && currentIndex < projects.length) {
      setProject(projects[currentIndex]);
    } else {
      console.error(`Invalid currentIndex: ${currentIndex}`);
    }
  }




  return ( 
    <motion.div initial={{opacity : 0}} animate={{opacity : 1 , transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>

        <div className='container mx-auto'>

            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>


              <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                  {project?.num}
                </div>

                <h2 className='text-[42px] mt-2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project?.category} project</h2>
                <h3 className='text-[22px] mt-4 font-bold leading-none text-accent/20 group-hover:text-accent transition-all duration-500 capitalize'>{project?.title} project</h3>

                <ul className='flex mt-5 mb-3 flex-wrap gap-4 max-w-[400px]'>
                  {project?.stack?.map((sta , index) => (
                    <li className='text-xl max-w-[320px] text-accent' key={index}>
                      {sta?.name}
                      {index !== project?.stack?.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
                
                <div className='border border-white/20'></div>

                <div className='flex mt-4 items-center gap-4'>

                  <Link href={project?.github || "#"}>

                    <TooltipProvider delayDuration={100}>

                        <Tooltip>

                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>Github Repo</p>
                          </TooltipContent>

                        </Tooltip>

                    </TooltipProvider>

                  </Link>

                </div>
              
              </div>


              <div className='w-full xl:w-[40%]'>

                  <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                    
                    {projects.map((project , index) => {

                      return (

                      <SwiperSlide key={index}>
                        
                        <div className='h-[400px] relative group flex justify-center items-center bg-pink-50/20'>

                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                            </div>

                            <div className='relative w-full h-full'>
                              <Image fill className='object-contain' alt='project image' src={project?.image}/>
                            </div>

                        </div>

                      </SwiperSlide>)

                    })}

                    <SliderButtons 
                      containerStyles="flex mt-6 gap-2 absolute right-0 bottom-0 [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                      btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                      />
                      
                  </Swiper>

              </div> 


            </div>

        </div>

    </motion.div>
  )
}

export default Work