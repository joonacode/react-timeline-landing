import React from 'react'
import {
  Designer1,
  Designer2,
  Designer3,
  Designer4,
  Designer5,
  ICPlay,
  IMGHero,
  IMGPopup,
  Oval1,
  Oval2,
  Oval3,
  Oval4,
} from '../../assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='container mx-auto sm:px-16 px-10 xl:mt-0 md:mt-10 sm:mt-8 mt-5 relative'>
      <div className='flex sm:flex-row flex-col lg:space-x-28 sm:space-x-14 items-center justify-center'>
        <div className='lg:w-3/5 md:w-full relative'>
          <h1 className='xl:text-7xl md:text-5xl sm:text-4xl text-gray-800 text-4xl font-bold hero-title'>
            Stunning Design Tools
          </h1>
          <p className='mt-5 mb-7 opacity-50 z-10'>
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </p>
          <div className='pt-5 relative sm:hidden block sm:mb-0 mb-10'>
            <img src={IMGHero} alt='hero' />
            <img src={IMGPopup} className='img-popup h-32' alt='popup' />
            <img src={Designer1} className='position-d1 h-14' alt='designer1' />
            <img src={Designer5} className='position-d5 h-12' alt='designer5' />
            <img src={Designer3} className='position-d3 h-14' alt='designer3' />
            <img src={Designer2} className='position-d2 h-10' alt='designer2' />
            <img src={Designer4} className='position-d4 h-10' alt='designer4' />
            <img src={Oval1} className='position-o1 h-8 w-8' alt='oval1' />
            <img src={Oval4} className='position-o4' alt='oval4' />
            <img src={Oval3} className='position-o3' alt='oval3' />
            <img src={Oval2} className='position-o2' alt='oval2' />
          </div>
          <button className='bg-purple-700 text-white rounded-full md:px-10 md:py-3 px-7 py-2 font-bold hover:bg-purple-500 focus:outline-none'>
            Get Started
          </button>
          <div className='flex items-center mt-10 sm:mb-0 mb-10'>
            <img src={ICPlay} className='h-11 w-11 cursor-pointer' alt='play' />
            <div className='ml-3'>
              <p className='opacity-50'>
                The Freedom to Create the Websites You Want
              </p>
              <span>watch the video</span>
            </div>
          </div>
        </div>
        <div className='pt-5 relative sm:block hidden'>
          <img src={IMGHero} alt='hero' />
          <img src={IMGPopup} className='img-popup h-32' alt='popup' />
          <img src={Designer1} className='position-d1 h-14' alt='designer1' />
          <img src={Designer5} className='position-d5 h-12' alt='designer5' />
          <img src={Designer3} className='position-d3 h-14' alt='designer3' />
          <img src={Designer2} className='position-d2 h-10' alt='designer2' />
          <img src={Designer4} className='position-d4 h-10' alt='designer4' />
          <img src={Oval1} className='position-o1 h-8 w-8' alt='oval1' />
          <img src={Oval4} className='position-o4' alt='oval4' />
          <img src={Oval3} className='position-o3' alt='oval3' />
          <img src={Oval2} className='position-o2' alt='oval2' />
        </div>
      </div>
    </div>
  )
}

export default Hero
