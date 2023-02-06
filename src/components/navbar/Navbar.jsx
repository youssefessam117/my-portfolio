import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEye, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
  return (
    <>
    <div className='sideBar'>
    <NavLink className='name' to='/'> youssef</NavLink>
      <div className='nav_button'>
        <NavLink exact='true' activeclassname='active' to='/'>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname='active' className='about' to='/about'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname='active' className='skills' to='/skills'>
        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname='active' className='mywork' to='/mywork'>
        <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
      </div>
      <div className='social_icon'>
        <a target={`_blank`} href="https://www.linkedin.com/in/youssef-essam-708732226/">
          <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
        </a>
        <a target={`_blank`} href="https://github.com/youssefessam117">
          <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
        </a>
        <a target={`_blank`} href="https://www.instagram.com/youssefessam11/">
          <FontAwesomeIcon icon={faInstagram}  color="#4d4d4e" />
        </a>
      </div>
    </div>
    </>
  )
}
