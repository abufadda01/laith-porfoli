"use client"
import { AnimatePresence , motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'


const StairTransition = () => {

    const pathName = usePathname()

  return (
    <>
        <AnimatePresence mode='wait'>
            
            <div key={pathName}>
                
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                    <Stairs/>
                </div>

                <motion.div 
                className="h-full w-full fixed bg-primary pointer-events-none" 
                initial={{opacity : 1}} 
                animate={{
                   opacity : 0 , 
                   transition :  {duration : 0.4 , ease : "easeInOut" , delay : 1}
                }}
            /> 

            </div>
            
        </AnimatePresence>
    
    </>
  )
}

export default StairTransition