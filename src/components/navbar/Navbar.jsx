import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEye, faGear, faHome, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo-s.png'
import textLogo from '../../assets/images/logo_sub.png'
import style from './navbar.module.scss'

export default function Navbar() {
  return (
    <>
    <div className={`${style.sideBar}`}>
      <Link to='/' className={style.logo}>
        <img src={logo} alt="logo" />
        <img className={style.text} src={textLogo} alt="text" />
      </Link>
      <div className={`${style.nav_button}`}>
        <NavLink exact='true' activeclassname={style} to='/'>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname={style} className={style.about} to='/about'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname={style} className={style.skills} to='/skills'>
        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname={style.active} className={style.tips} to='/tips'>
        <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname={style.active} className={style.mywork} to='/mywork'>
        <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname={style.active} className={style.contact} to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </div>
      <div className={`${style.social_icon}`}>
        <a target={`_blank`} href="https://www.linkedin.com/in/youssef-essam-708732226/">
          <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
        </a>
        <a target={`_blank`} href="https://github.com/youssefessam117">
          <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
        </a>
      </div>
    </div>
    </>
  )
}
