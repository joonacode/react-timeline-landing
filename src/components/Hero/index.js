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
    <div className='container mx-auto px-16 relative'>
      <div className='flex items-center justify-center'>
        <div className='w-3/5 relative'>
          <h1 className='text-7xl font-bold hero-title'>
            Stunning Design Tools
          </h1>
          <p className='mt-5 mb-7 opacity-50'>
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </p>
          <button className='bg-purple-700 text-white rounded-full px-10 py-3 font-bold hover:bg-purple-500 focus:outline-none'>
            Get Started
          </button>
          <div className='flex items-center mt-10'>
            <img src={ICPlay} className='h-11 w-11 cursor-pointer' alt='play' />
            <div className='ml-3'>
              <p className='opacity-50'>
                The Freedom to Create the Websites You Want
              </p>
              <span>watch the video</span>
            </div>
          </div>
        </div>
        <div className='ml-32 pt-5 relative'>
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
