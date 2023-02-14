import React, { useEffect, useState } from 'react';
import AnimationChar from './../animationChar/AnimationChar';
import   './skills.scss';

export default function Skills() {
  const [classChar, setclassChar] = useState('animat-text');
  const skillsArr = ['s','k','i','l','l','s','','&','','e','x','p','e','r','i','e','n','c','e'];
  useEffect(() => {
    setTimeout(()=>{
      setclassChar('animat-text-hover about-hover')
    },4000)
  }, [])
  return (
    <div className="box-container skills">
       <div className="text-zone">
      <h1>
      <AnimationChar charIndex={15} charsArr={skillsArr} charClass={classChar}/>
      </h1>
      <p>
            Expert in front-end development including technologies like
            <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">jQuery</span>,
            <span className="tech-tag">React</span>,
            <span className="tech-tag">TypeScript</span>,
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">Sass</span>,
            <span className="tech-tag">Git</span>, etc.
     </p>
          <p>
            Visit my
            <a target="// eslint-disable-next-line_blank" href="https://www.linkedin.com/in/youssef-essam-708732226/">LinkedIn </a>profile for more details. Also you can checkout my cv on this
            <a target="// eslint-disable-next-line_blank" href="https://drive.google.com/file/d/1NyH8MwSvfsPBDVA89-BW7FjMrf2kkvj9/view?usp=sharing">link</a>
          </p>
      </div>
      <div className='skills-chart'>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar">
          <span>JavaScript</span>
          <span>90%</span>
        </div>
        </div>
      </div>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar" style={{width:'80%'}}>
          <span>React</span>
          <span>80%</span>
        </div>
        </div>
      </div>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar" style={{width:'90%'}}>
          <span>HTML</span>
          <span>90%</span>
        </div>
        </div>
      </div>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar" style={{width:'90%'}}>
          <span>Css</span>
          <span>90%</span>
        </div>
        </div>
      </div>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar" style={{width:'90%'}}>
          <span>Bootstrap</span>
          <span>90%</span>
        </div>
        </div>
      </div>
      <div className="skill">
        <div className="chart-progres">
        <div className="content-bar" style={{width:'90%'}}>
          <span>Sass</span>
          <span>90%</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
