import React from 'react'
import { Logo } from '../../assets'

const Navbar = () => {
  return (
    <div className='container mx-auto py-7 '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div>
            <img src={Logo} className='h-10 w-10' alt='logo' />
          </div>
          <div className='ml-20 flex items-center'>
            <a href='/' className='mr-10 text-sm'>
              HOME
            </a>
            <a href='/' className='mr-10 text-sm opacity-50'>
              PLANS
            </a>
            <a href='/' className='mr-10 text-sm opacity-50'>
              FEATURES
            </a>
            <a href='/' className='mr-10 text-sm opacity-50'>
              CONTACT
            </a>
          </div>
        </div>
        <button className='bg-purple-700 hover:bg-purple-500 z-10 text-white rounded-full px-8 py-2 font-bold focus:outline-none'>
          Download
        </button>
      </div>
    </div>
  )
}

export default Navbar
