'use client'
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { testimonialsType } from '@/types';

function TestimonialDetail({ testimonials }: { testimonials: testimonialsType[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="basis-2/4 flex flex-col gap-14 items-center justify-center">
      <h2 className="text-2xl w-[70%] font-bold">
        {testimonials[currentSlide].text}
      </h2>
      <div className="flex gap-20">
        <div className="flex gap-3">
          <div>
            <Image
              src={testimonials[currentSlide].authorAvatar}
              width={50}
              height={40}
              alt="avatar"
              className='rounded-full'
            />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg">{testimonials[currentSlide].author}</h3>
            <p className="text-slate-400 text-sm">
              {testimonials[currentSlide].authorLocation}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="p-5 rounded-full bg-white hover:bg-secondary text-primary font-bold text-xl"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-5 rounded-full bg-white hover:bg-secondary text-primary font-bold text-xl"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialDetail;
