import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders'
import AnimationChar from './../animationChar/AnimationChar';
import './home.scss';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const [classChar, setclassChar] = useState('animat-text');
  const nameArr = ['o','u','s','s','e','f'];
  const jobArr = ['w','e','b','','d','e','v','e','l','o','p','e','r','.'];
  useEffect(() => {
    setTimeout(()=>{
      setclassChar('animat-text-hover')
    },4000)
  }, [])
  
  return (
    <>
    <div className='box-container home'>
        <div className="text-zone">
        <h1>
          <span className={`${classChar} char_11`}>H</span>
          <span className={`${classChar} char_12`}>i,</span>
          <br />
          <span className={`${classChar} char_13`}>I</span>
          <span className={`${classChar} char_14`}>'m</span>
          <y>Y</y><AnimationChar charIndex={15} charsArr={nameArr} charClass={classChar}/>
          <br />
          <AnimationChar charIndex={22} charsArr={jobArr} charClass={classChar}/>
        </h1>
        <h2>
        Front End Developer / JavaScript Expert / Freelancer 
        </h2>
        <Link className='contact-button' to='/contact'>CONTACT ME</Link>
      </div>
      <div className="icon-liks">
        <ul className=''>
          <li className='linkedin'><a target={`_blank`} href="https://www.linkedin.com/in/youssef-essam-708732226/"> <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" /> Linkedin</a></li>
          <li className='github'><a target={`_blank`}  href="https://github.com/youssefessam117"> <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" /> Github</a></li>
          <li className='resume'><a target={`_blank`} href="https://drive.google.com/file/d/1NyH8MwSvfsPBDVA89-BW7FjMrf2kkvj9/view?usp=sharing"> <FontAwesomeIcon icon={faFile}  color="#4d4d4e" /> resume</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}
