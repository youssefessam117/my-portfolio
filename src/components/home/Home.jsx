import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import   './home.scss'
import AnimationChar from './../animationChar/AnimationChar';

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
    </div>
    </>
  )
}
