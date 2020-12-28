import React from 'react'
import { Logo } from '../../assets'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar shadow p-10'>
      <div className='flex flex-col'>
        <img src={Logo} className='h-10 w-10 mb-10' alt='logo' />
        <span className='mb-7 cursor-pointer text-gray-800 hover:opacity-90 text-lg'>
          HOME
        </span>
        <span className='mb-7 cursor-pointer text-gray-800 hover:opacity-90 text-lg opacity-50'>
          PLANS
        </span>
        <span className='mb-7 cursor-pointer text-gray-800 hover:opacity-90 text-lg opacity-50'>
          FEATURES
        </span>
        <span className='mb-7 cursor-pointer text-gray-800 hover:opacity-90 text-lg opacity-50'>
          CONTACT
        </span>
        <span className='mb-7 cursor-pointer text-gray-800 hover:opacity-90 text-lg opacity-50'>
          DOWNLOAD
        </span>
      </div>
    </div>
  )
}

export default Sidebar
