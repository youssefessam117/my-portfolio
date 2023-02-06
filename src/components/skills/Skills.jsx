import React, { useState } from 'react'
import AnimationChar from './../animationChar/AnimationChar';

export default function Skills() {
  const [classChar, setclassChar] = useState('animat-text');
  return (
    <div>
       <div className="text-zone">
      <h1>
      <AnimationChar charIndex={15} charsArr={['Skills']} charClass={classChar}/>
      </h1>

      <p>
            Expert in front-end development including technologies like
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">jQuery</span>,
            <span class="tech-tag">Angular2</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">TypeScript</span>,
            <span class="tech-tag">Jasmine</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Sass</span>,
            <span class="tech-tag">Git</span>, etc.
          </p>
      <p>
        I'm quietly confident, naturally curious, and perpetually working onimproving my chops one design problem at a time.
      </p>
      </div>
    </div>
  )
}
