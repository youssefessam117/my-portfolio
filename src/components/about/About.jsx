import { faCss3, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AnimationChar from './../animationChar/AnimationChar';
import './about.scss';

export default function About() {
  const [classChar, setclassChar] = useState('animat-text');
  const aboutArr = ['A','b','o','u','t','','m','e'];

  useEffect(() => {
    setTimeout(()=>{
      setclassChar('animat-text-hover about-hover')
    },3000)
  }, [])
  
  return (
    <>
    <div className='box-container about-comp'>
    <div className="text-zone">
      <h1>
      <AnimationChar charIndex={15} charsArr={aboutArr} charClass={classChar}/>
      </h1>

      <p>
        I’m a very ambitious FullStack developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. 
      </p>
      <p>
        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      </p>
      </div>
        <div className="box-cup">
        <div className="box-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJs} color='#efd81d' />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color='forestgreen' />
          </div>
        </div>
      </div> 
      
    </div>
   </>
  )
}
