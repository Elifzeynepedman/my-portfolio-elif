import React from 'react'
import './skills.css'

import{AiOutlineCheckCircle} from 'react-icons/ai'
function Skills() {
  return (
    <section id='skills'>
        <p id='skills_header'>My Skills</p>
        <div className='my__skills'>
            <article className='frontend'>
                <h5> Frontend Development</h5>
                <div className='skills__box'>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  Html</p>
                    <hr id='html'/> 
                    <small>&emsp;90%</small>
                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  CSS</p>
                    <hr id='css'/>
                    <small>&emsp;90%</small>
                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  Javascript</p>
                    <hr id='javascript'/>
                    <small>&emsp;90%</small>
                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  React</p>
                    <hr id='react'/>
                    <small>&emsp;60%</small>
                </div>
                </div>
            </article>
            <article className='frontend'>
                <h5> Backend Development</h5>
                <div className='skills__box'>

                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  Java</p>
                    <hr id='java'/>
                    <small>&emsp;70%</small>                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  PHP</p>
                    <hr id='php'/>
                    <small>&emsp;70%</small>                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  C</p>
                    <hr id='c__lang'/>
                    <small>&emsp;50%</small>                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  Kotlin</p>
                    <hr id='kotlin'/>
                    <small>&emsp;30%</small>                </div>
                <div className='frontend__skills'>
                    <p><AiOutlineCheckCircle className='check__icon'/>  MySQL</p>
                    <hr id='mysql'/>
                    <small>&emsp;70%</small>                </div>
                </div>
            </article>

        </div>
    
    </section>
  )
}

export default Skills
