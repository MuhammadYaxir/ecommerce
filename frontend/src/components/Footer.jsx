import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer id='contact' className='bg-tertiary mx-auto max-w-[1440px] px-6 lg:px-12 text-white py-12 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <Link to={"/"} className='bold-24 mb-4'>
          <h3>Rosyz<span className='text-secondary'>Mart</span></h3>
          </Link>
          <p className='text-center md:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, veritatis facilis eos fuga, ipsum assumenda modi, repudiandae dolor rerum temporibus reprehenderit.</p>
        </div>
        {/* Quick links */}
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='bold-20 mb-4'>Quick Links</h4>
            <ul className='space-y-2 regular-15 text-gray-30'>
              <li><a href="/" className='hover:text-secondary'>Categories</a></li>
              <li><a href="/" className='hover:text-secondary'></a>Shop</li>
              <li><a href="/" className='hover:text-secondary'></a>Contact us</li>
              <li><a href="/" className='hover:text-secondary'>Home</a></li>
            </ul>
          
        </div>
        {/* Contact Information  */}
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='text-lg mb-4'>Contact Us</h4>
          <p>Email: <a href='' className='hover:text-secondary'>yasirtech129@gmail.com</a></p>
          <p>Phone: <a href="" className='hover:text-secondary'>+923068735104</a></p>
          <p>Address: Ward no.8 Fateh pur Tehsil Karor District Layyah, Punjab, Pakistan</p>
        </div>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <SocialIcons/>
        <hr className='h-[1px] w-full max-w-screen-md my-4 border-white'/>
        <p className='text-center text-sm'>&copy; {new Date().getFullYear()}Rosyz Mart | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer