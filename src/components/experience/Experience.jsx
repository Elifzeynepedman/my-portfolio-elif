import React from 'react'
import './experience.css'
import {GoLocation } from 'react-icons/go'
import {MdWorkOutline} from 'react-icons/md'
import {GoCalendar} from 'react-icons/go'
function Experience() {
  return (
      <section id='experience'>
        <p id='experience__header'>Experiences</p>
        <div className='my__exps'>
          <article className='my__exp'>
            <h5><a href="https://netas.com.tr/?lang=en"  target="_blank">Netaş</a></h5>
            <small><GoCalendar/> June 2021 - July 2021 </small>
            <br/>
            <small><GoLocation/> Ankara, Turkey</small>
          </article>
          <div className='vertical'></div>
          <article className='my__exp'>
            <h5><a href="https://www.jotform.com/about/"  target="_blank">Jotform</a></h5>
            <small><GoCalendar/> July 2021 - August 2021 </small>
            <br/>
            <small><GoLocation/> Ankara, Turkey</small>
          </article>

          
        </div>
      </section>
  )
}

export default Experience
