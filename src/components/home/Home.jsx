import React from 'react'
import { Link } from 'react-router-dom';
import   './home.scss'
export default function Home() {
  return (
    <>
    <div className='box-container home'>
      <div className="text-zone">
        <h1>
          Hi,<br />I'm 
          <span>Y</span>oussef
          <br />
          web developer
        </h1>
        <h2>
          Frontend Developer 
        </h2>
        <Link className='contact-button' to='/contact'>CONTACT ME</Link>
      </div>
    </div>
    </>
  )
}
