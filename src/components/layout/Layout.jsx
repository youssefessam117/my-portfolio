import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import   './layout.scss'

export default function Layout() {
  return (
    <div className='app'>
      <Navbar/>
      <div className='outlet'>
        <span className='tags top-tags'>&lt;body&gt;</span>
      <Outlet/>
      <span className='tags'>&lt;/body&gt;
      <br />
      <span className='html'>&lt;/HTML&gt;</span>
      </span>
      </div>
    </div>
  )
}
