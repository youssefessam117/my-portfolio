import   './animation.scss'
import React from 'react'

export default function AnimationChar({charsArr , charClass,charIndex}) {
  console.log(charClass)
  console.log(charsArr)
  return (
    <span>
      {
        charsArr.map((char,index)=>{
          return<span key={index} className={`${charClass} char_${charIndex+index}`}>
            {char}
          </span>
        })
        
      }
    </span>
  )
}




