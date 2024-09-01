"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser';

import { 
  Select , 
  SelectContent , 
  SelectGroup , 
  SelectItem , 
  SelectLabel , 
  SelectTrigger , 
  SelectValue 
} from '@/components/ui/select'

import { motion } from 'framer-motion'

import {FaPhoneAlt , FaEnvelope , FaLinkedin} from "react-icons/fa"


const info = [
  {
    icon : <FaPhoneAlt/> ,
    title : "Phone" ,
    desc : "+962 771101109"
  },
  {
    icon : <FaEnvelope/> ,
    title : "Email" ,
    desc : "laithfadda4@gmail.com"
  },
  {
    icon : <FaLinkedin/> ,
    title : "Linkedin" ,
    desc : "Laith Abu Fadda"
  },
]









const Contact = () => {

  const {register , handleSubmit , formState : {errors}} = useForm()
  
  const onSubmit = data => {
  
    const templateParams = {
      to_name : "Laith" ,
      from_name : data.name ,
      from_email : data.email,
      from_phone : data.phone,
      message : data.message
    }
    
    sendEmail(templateParams)
  }
  


  

const sendEmail = (params) => {
  
  emailjs
  .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    limitRate : {
      throttle : 5000
    }
  } )
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );
};

console.log(errors);


  return (
    <motion.section className='py-6' initial={{opacity : 0}} animate={{opacity : 1 , transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"}}}>

        <div className='container mx-auto'>

          <div className='flex flex-col xl:flex-row gap-[30px]'>

            <div className='xl:h-[54%] order-2 xl:order-none'>

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>

                <h3 className='text-4xl mb-2 text-accent'>Let's work together</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Input {...register("name" , {required : true})} type="firstname" placeholder="Firstname"/>
                  <Input {...register("last_name" , {required : true})} type="lastname" placeholder="Lastname"/>
                  <Input {...register("email" , {required : true})} type="email" placeholder="name@example.com"/>
                  <Input type="phone" {...register("phone" , {required : true})} placeholder="phone number"/>
                </div>

                
                <Select>

                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a service"/>
                  </SelectTrigger>

                  <SelectContent>

                    <SelectGroup>

                      <SelectLabel>Select a service</SelectLabel>

                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Backend Services</SelectItem>
                      <SelectItem value="mst">Database Design</SelectItem>

                    </SelectGroup>

                  </SelectContent>

                </Select>


                <Textarea {...register("message" , {required : true})} className="h-[200px]" placeholder="Type your message here"/>

                <Button type="submit" size="md" className="max-w-40 p-2">Send message</Button>

              </form>

            </div>

            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              
              <ul className='flex flex-col gap-10'>

                {info.map((item , index) => (

                  <li key={index} className='flex items-center gap-6'>

                    <div className='w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>

                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.desc}</h3>
                    </div>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

    </motion.section>
  )
}

export default Contact