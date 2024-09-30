import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
      <section id='home' className='mx-auto  px-6 lg:px-12 bg-hero bg-center bg-cover h-[777px] w-full bg-no-repeat'>
        <div className=' mx-auto max-w-[1440px] lg:px-12'>
        <div className='relative max-w-[666px] top-44 xs:top-72'>
          <h4 className='flex items-baseline gap-x-2 uppercase text-secondary text-[18px] font-[600]'>Modern Collection</h4>
          <h2 className='text-[41px] leading-tight md:text-[48px] md:leading-[1.3] mb-4 font-bold capitalize'>Grab upto 20% off On selected Products</h2>
          <p className='border-l-4 border-secondary pl-3 my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id in cum aliquid laboriosam odit labore inventore vel. Error, sunt dolorem!</p>
          <div className='flex items-center gap-x-4 mt-7'>
            <Link to={""} className='medium-15 bg-secondary px-7 py-2.5 text-white transition-all rounded-full gap-x-2 flex items-center justify-center'>
            Latest Products
            <FaArrowRight/>
            </Link>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Hero