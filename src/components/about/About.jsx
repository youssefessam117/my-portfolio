import React, { useEffect, useState } from 'react'
import AnimationChar from './../animationChar/AnimationChar';
import   './about.scss'

export default function About() {
  const [classChar, setclassChar] = useState('animat-text');
  const aboutArr = ['A','b','o','u','t','','m','e'];

  useEffect(() => {
    setTimeout(()=>{
      setclassChar('animat-text-hover')
    },3000)
  }, [])
  
  return (
    <div className='box-container about'>
      <div className="text-zone">
      <h1>
      <AnimationChar charIndex={15} charsArr={aboutArr} charClass={classChar}/>
      </h1>

      <p>
        I’m very ambitious front-end developer looking for a role inestablished IT company with the opportunity to work with the latesttechnologies on challenging and diverse projects. 
      </p>
      <p>
        I'm quietly confident, naturally curious, and perpetually working onimproving my chops one design problem at a time.
      </p>
      </div>
      


    </div>
  )
}
