import React from 'react'
import './Teachernavbar.css'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}from 'react-icons/bs'

function Teachernavbar({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/> 
            {/* bsjustify is a slideshow icon */}
            
        </div>
        <div className='header-left'>
            <input type="text" placeholder='Search'/>
            <BsSearch  className='icon'/>
            {/* this is for search icon */}
        </div>
        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            {/* this is for bell icon */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            {/* this is for email icon */}
            {/* <BsPersonCircle className='icon'/> */}
            {/* this is for profile icon */}
        {/* </div> */} 
    </header>
  )
}

export default Teachernavbar;