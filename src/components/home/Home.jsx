import React, { useEffect, useRef, useState } from 'react';
import yLogo from '../../assets/images/Asset 1.png';
import AnimationChar from './../animationChar/AnimationChar';
import './home.scss';


export default function Home() {
  const [classChar, setclassChar] = useState('animat-text');
  const nameArr = ['o','u','s','s','e','f'];
  const jobArr = ['w','e','b','','d','e','v','e','l','o','p','e','r','.'];
  const box = useRef();
  const logo = useRef();
  const solidLogo = useRef();
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
          <img src={yLogo} alt="y" /><AnimationChar charIndex={15} charsArr={nameArr} charClass={classChar}/>
          <br />
          <AnimationChar charIndex={22} charsArr={jobArr} charClass={classChar}/>
        </h1>
        <h2>
        Front End Developer / JavaScript Expert / Freelancer 
        </h2>
        <a target={`_blank`} href="https://drive.google.com/file/d/1NyH8MwSvfsPBDVA89-BW7FjMrf2kkvj9/view?usp=sharing" className='contact-button' >MY RESUME</a>
      </div>
      <div className="icon-liks" ref={box}>
        <img ref={solidLogo} className='logo-img' src={yLogo} alt="y" />
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861.46 999.69">
          <defs>
            <style dangerouslySetInnerHTML={{__html: "\n      .cls-1 {\n        fill: gold;\n      }\n    " }} />
          </defs>
          <g className='svg-strok' id="Layer_1-2" data-name="Layer 1">
              {/* <path ref={logo} d="m134.9.46l54.03,31.19,53.31,576.96L54.47,933.85.34,902.6l187.81-325.31.04-.07v-.08S134.9.46,134.9.46m-.29-.46l53.33,577.17L0,902.69l54.56,31.5,187.94-325.52L189.17,31.5,134.61,0h0Z" /> */}
              {/* <path ref={logo} d="m676.63,313.23l54.05,31.2-368.38,192.4-4.85-56.9,319.18-166.7m0-.29l-319.45,166.84,4.89,57.44,369.11-192.78-54.56-31.5h0Z" /> */}
              <path ref={logo} d="m189.46,31.96l136.02,78.53,31.46,369.31,4.89,57.44.03.37.33-.17,368.99-192.72,129.74,74.9-503.97,252.37-.07.03-.04.07-188.94,327.25-113.02-65.25,187.81-325.31.04-.07v-.08S189.46,31.96,189.46,31.96m-.29-.46l53.33,577.17L54.56,934.19l113.45,65.5,189.06-327.47,504.38-252.58-130.26-75.21-369.11,192.78-4.89-57.44-31.47-369.44L189.17,31.5h0Z" />
          </g>
</svg>

      </div>
    </div>
    </>
  )
}
