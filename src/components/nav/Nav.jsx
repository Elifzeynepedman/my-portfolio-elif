import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {GiBookCover} from 'react-icons/gi'
import {useState} from 'react'


function Nav() {
    const[activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#"  onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#project" onClick={()=> setActiveNav('#project')} className={activeNav==='#project' ? 'active': ''}><GiBookCover/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><AiOutlineMail/></a>


    </nav>
  )
}
export default Nav
