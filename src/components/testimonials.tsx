import React from 'react'
import TestimonialDetail from './testimonials/testimonialDetail'
import testimonials from '@/data'

function Testimonials() {
  return (
    <div className='bg-primary p-8 text-white'>
      <div className='flex flex-col lg:flex-row max-w-7xl mx-auto gap-8'>
        <div className='flex flex-col lg:flex-row lg:basis-2/4 gap-4 lg:gap-0'>
          <div className='lg:ml-[25%] lg:border-r-[1px] border-slate-100 flex flex-col gap-4 lg:pr-8'>
            <h3 className='text-xl md:text-2xl font-normal'>
              Testimonials
            </h3>
            <h2 className='text-2xl md:text-3xl font-bold'>
              What people say<br /> about our blog
            </h2>
            <p className='w-full lg:w-[60%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>

        <TestimonialDetail testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Testimonials
