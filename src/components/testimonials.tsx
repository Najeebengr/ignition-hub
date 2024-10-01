import React from 'react'
import TestimonialDetail from './testimonials/testimonialDetail'
import testimonials from '@/data'
function Testimonials() {
  return (
    <div className=' bg-primary p-8 text-white'>
        <div className='flex max-w-7xl mx-auto'>
            <div className='flex basis-2/4 '>
            <div className='ml-[25%] border-r-[1px] border-slate-100 flex flex-col gap-4'>
            <h3 className='text-2xl font-normal'>
                Testimonials
            </h3>
            <h2 className='text-3xl font-bold'>
            What people say<br/> about our blog
            </h2>
            <p className='w-[60%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            </div>
            </div>
             <TestimonialDetail testimonials={testimonials}  />
        </div>
      </div>
  )
}

export default Testimonials
