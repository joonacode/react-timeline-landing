import React from 'react'
import { Logo } from '../../assets'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar shadow p-10'>
      <div className='flex flex-col'>
        <img src={Logo} className='h-10 w-10 mb-10' alt='logo' />
        <a href='/' className='mb-7 text-gray-800 hover:opacity-90 text-lg'>
          HOME
        </a>
        <a
          href='/'
          className='mb-7 text-gray-800 hover:opacity-90 text-lg opacity-50'
        >
          PLANS
        </a>
        <a
          href='/'
          className='mb-7 text-gray-800 hover:opacity-90 text-lg opacity-50'
        >
          FEATURES
        </a>
        <a
          href='/'
          className='mb-7 text-gray-800 hover:opacity-90 text-lg opacity-50'
        >
          CONTACT
        </a>{' '}
      </div>
    </div>
  )
}

export default Sidebar
