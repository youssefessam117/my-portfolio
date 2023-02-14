import React, { useEffect, useState } from 'react'
import AnimationChar from './../animationChar/AnimationChar';
import   './mywork.scss';
import moviePic from '../../assets/images/movie.png' ;
import weatherPic from '../../assets/images/weather.png';
import yummy from '../../assets/images/yummy.png';
import bookmarker from '../../assets/images/bookmarker.png';
import DANIELS from '../../assets/images/blog.png';
import qute from '../../assets/images/qute.png';
import defolio from '../../assets/images/defolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function MyWork() {
  const [classChar, setclassChar] = useState('animat-text');
  const workArr = ['M','y','','P','r','o','j','e','c','t','s'];
  useEffect(() => {
    setTimeout(()=>{
      setclassChar('animat-text-hover about-hover')
    },3000)
  }, [])
  return (
    <>
    
    
    <div className='box-container MyWork'>
        <div className="text-zone">
        <h1>
        <AnimationChar charIndex={15} charsArr={workArr} charClass={classChar} />
        </h1>
        <div className="projects-container">
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              Noxe-Movie-DB
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={moviePic} alt="noxe" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Sass
            </div>
            <div className="badge">
              React
            </div>
            <div className="badge">
            Redux-Toolkit
            </div>
            <div className="badge">
            redux-persist
            </div>
            <div className="badge">
            Responsive
            </div>
            <div className="badge">
            React Router
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://noxemovie.netlify.app/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/noxe-movie-db-app"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              Weather app 
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={weatherPic} alt="weatherapp" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
              JS
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/weatherApp/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/weatherApp"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>   
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              yummy
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={yummy} alt="yummy app" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
              JS
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            <br />
            <div className="badge">
            JQuery
            </div>
            <div className="badge">
             RegEx
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/meal-api/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/meal-api"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              Bookmarker
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={bookmarker} alt="yummy app" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
              JS
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/Bookmarker/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/Bookmarker"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              DANIELS
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={DANIELS} alt="DANIELS" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/Daniels-portfolio/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/Daniels-portfolio"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              Quote of the Day 
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={qute} alt="DANIELS" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            <div className="badge">
            JS
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/Quote-of-the-Day/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/Quote-of-the-Day"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
          <div className="project-item">
            <div className="border-box">
              <div className='border-icon'>
              <FontAwesomeIcon icon={faCircle} color={'red'} />
              <FontAwesomeIcon icon={faCircle} color={'#ffbd2e'} />
              <FontAwesomeIcon icon={faCircle} color={'#28ca41'} />
              </div>
              <div className="name">
              DevFolio 
              </div>
            </div>
          <div className="img-box">
          <img className='w-100' src={defolio} alt="DevFolio" />
          <div className="desc">
            <div className='text-center mb-4'>
            <div className="badge">
              HTML
            </div>
            <div className="badge">
              Css
            </div>
            <div className="badge">
            Bootstrap 5
            </div>
            </div>
            <div className=''>
            <div className="badge live">
            <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://youssefessam117.github.io/DevFolio/"}>Live Demo</a> 
            </div>
            <div className="badge git">
              <a className=' text-decoration-none' target={'// eslint-disable-next-line_blank'} href={"https://github.com/youssefessam117/DevFolio"}>Github Code</a>
            </div>
            </div>
          </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
