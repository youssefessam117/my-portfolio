import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import   './layout.scss'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className='app'>
      <div className='outlet container'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet/>
      <span className='tags'>&lt;/body&gt;
      <br />
      <span className='html'>&lt;/HTML&gt;</span>
      </span>
      </div>
    </div>
    </>
  )
}
