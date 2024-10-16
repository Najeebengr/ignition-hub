import React from 'react'
import Button from './ui/button'
import { FiSend } from 'react-icons/fi'
import { heroSectionContentType } from '@/types'

function Hero({ page, content }: { page: string, content: heroSectionContentType }) {
  return (
    <div
      className={`h-[30rem] md:h-[46vw] bg-cover bg-no-repeat ${
        page === 'home' ? 'hero-section-home' : 'hero-section-blogs'
      }`}
    >
      <div className='max-w-7xl h-full mx-auto flex justify-start items-center px-4 md:px-0'>
        <div className='basis-full md:basis-2/4 text-white flex flex-col gap-4 md:gap-6'>
          <h1
            className='text-4xl md:text-6xl lg:text-7xl font-bold'
            style={{ whiteSpace: 'pre-line' }}
          >
            {content.title}
          </h1>
          <p className='text-base md:text-lg'>
            {content.text}
          </p>
          <div>
            <Button variant='secondary' text='Subscribe' icon={<FiSend />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
