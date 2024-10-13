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
    <div className="basis-full md:basis-2/4 flex flex-col gap-8 md:gap-14 items-center justify-center p-4">
      <h2 className="text-xl md:text-2xl w-full md:w-[70%] font-bold text-center md:text-left">
        {testimonials[currentSlide].text}
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src={testimonials[currentSlide].authorAvatar}
              width={50}
              height={50}
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-md md:text-lg">{testimonials[currentSlide].author}</h3>
            <p className="text-slate-400 text-xs md:text-sm">
              {testimonials[currentSlide].authorLocation}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="p-3 md:p-5 rounded-full bg-white hover:bg-secondary text-primary font-bold text-xl"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-5 rounded-full bg-white hover:bg-secondary text-primary font-bold text-xl"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialDetail;
