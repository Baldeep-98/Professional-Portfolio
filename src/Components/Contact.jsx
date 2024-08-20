import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
<>
 <div className="container contact" id="contact">
 <h1>Contact </h1>
 <div className="contact-icon">
<a href="https://www.instagram.com" target="_blank"className="items">
    <FaInstagram className='icons'/>
</a>
<a href="https://www.github.com" target="_blank" className="items">
    <FaGithub className='icons'/>
</a>
<a href="https://www.LinkedIn.com" target="_blank" className="items">
<FaLinkedin className='icons'/>
</a>
<a href="mailto:sharmadipti058@gmail.com" target="_blank" className="items">
    <SiGmail className='icons'/>
</a>


 </div>
 </div>
</>  
)
}

export default Contact