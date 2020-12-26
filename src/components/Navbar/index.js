import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Logo } from '../../assets'
import Sidebar from '../Sidebar'

const Navbar = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  const toggleMenu = () => setIsSidebarShow(!isSidebarShow)
  return (
    <>
      <div className='container mx-auto py-7 px-10'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>
              <img src={Logo} className='h-10 w-10' alt='logo' />
            </div>
            <div className='lg:ml-20 md:ml-10  items-center md:flex hidden'>
              <a
                href='/'
                className='mr-10 text-sm text-gray-800 hover:opacity-90'
              >
                HOME
              </a>
              <a
                href='/'
                className='mr-10 text-sm text-gray-800 hover:opacity-90 opacity-50'
              >
                PLANS
              </a>
              <a
                href='/'
                className='mr-10 text-sm text-gray-800 hover:opacity-90 opacity-50'
              >
                FEATURES
              </a>
              <a
                href='/'
                className='mr-10 text-sm text-gray-800 hover:opacity-90 opacity-50'
              >
                CONTACT
              </a>
            </div>
          </div>
          <button className='md:block hidden bg-purple-700 hover:bg-purple-500 z-10 text-white rounded-full px-8 py-2 font-bold focus:outline-none'>
            Download
          </button>
          <span
            onClick={toggleMenu}
            className='md:hidden cursor-pointer block z-10 bg-gray-100 p-3 rounded-lg shadow'
          >
            {isSidebarShow ? <FaTimes /> : <FaBars />}
          </span>
        </div>
      </div>
      {isSidebarShow && <Sidebar />}
    </>
  )
}

export default Navbar
