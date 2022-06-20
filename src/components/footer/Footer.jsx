import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li> 
        <li><a href="#about">About Me</a></li>   
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#skills">Skills</a></li>   
        <li><a href="#project">Projects</a></li>   
        <li><a href="#contact">Contact Me</a></li>   
      </ul>    
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/elif-edman-b4b425167/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Elifzeynepedman' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/elif.edman/'  target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
         <small>&copy; Elif Edman. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
