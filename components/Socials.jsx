import React from 'react'
import Link from 'next/link'
import {FaGithub , FaLinkedin , FaInstagram} from "react-icons/fa"


const socials = [
    {
        icon  : <FaGithub/> , path : "https://github.com/abufadda01"
    },
    {
        icon  : <FaLinkedin/> , path : "https://linkedin.com/in/laith-abu-fadda"
    },
    {
        icon  : <FaInstagram/> , path : "https://www.instagram.com/abu.fadda/"
    },
]



const Socials = ({containerStyle , iconsStyle}) => {
  return (
    <div className={containerStyle}>
        {socials.map((social , index) => (
            <Link href={social.path} key={index} className={iconsStyle}>{social.icon}</Link>
        ))}
    </div>
  )
}

export default Socials