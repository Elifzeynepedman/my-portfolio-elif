import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'
import {GiGraduateCap} from 'react-icons/gi'
import {MdLanguage} from 'react-icons/md'
export default function About() {
  return (
      <section id="about">
        <div className='about__container'>
        <p id='gettoknow'> Get To Know</p>
        <p id='aboutme'> About ME </p>
        </div>

        <div className='education'>
           <h4><GiGraduateCap size='40px' className='edu__icon'/>&emsp;Education</h4>
           <p><bold>Bachelor</bold>&emsp;&emsp;&emsp; Atilim University/ Information Systems Engineering &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 09/2018 - 06/2022</p>
           <p><bold>High School</bold>&nbsp;&nbsp;&emsp;Rachel Carson High School of Coastal Studies &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;  09/2014 - 06/2015 </p>
           <p>&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp; Mehmet Emin Resulzade Anadolu Lisesi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;08/2015 - 06/2018</p>
        </div>

        <div className='language'>
          <h4><MdLanguage size='32px' className='mdLang'/>&emsp;Languages</h4>
            <div className='lang__cards'>
              <article className='lang__card'>
                <h5>English</h5>
                <small className='lang_style'> Native</small>
              </article>
              <article className='lang__card'>
                <h5> Turkish</h5>
                <small className='lang_style'> Native</small>
              </article>
              <article className='lang__card'>
                <h5> Korean</h5>
                <small className='lang_style'> Intermediate</small>
              </article>
              <article className='lang__card'>
                <h5> French</h5>
                <small className='lang_style'> Intermediate</small>
              </article>
            </div>
        </div>
      </section>
  )
}
