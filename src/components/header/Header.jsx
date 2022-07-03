import React from 'react'
import './header.css'
import CV from'../../assets/CV Skills updated (1).pdf'
import ME from '../../assets/Elif cv photo.jpeg'
import HeaderSocials from './HeaderSocials'

function Header() {

  return (
   <header>
    <div className="container header-container">
      <a href="#" className='web__name'> Elif Edman</a>
      <div className="header__links">
          <h2><a href="#about" > About Me</a></h2>
          <h2><a href="#experience">  Experience</a></h2>
          <h2><a href="#skills">  Skills</a></h2>
          <h2><a href="#project">  Projects</a></h2>
          <h2><a href="#contact">  Contact Me</a></h2>
      </div>
      <HeaderSocials/>

      <div className='img__header'>
          <img src={ME} alt="" className='image__me'/>
          <div className="hello">
          <p id='hello__me'>Hello, I am Elif.</p>
          <p id="passionate">I am a new graduate from Atilim University.I am passionate about becoming a web developer. To become a good web developer, I have written many projects.<br/> On this website, you will learn more about my interests, skills, and much more.  </p>
          <button className="download__CV"><a href={CV} download>Download CV</a></button>
          </div>
        </div>
      </div>
   

   </header>

  )
}

export default Header
