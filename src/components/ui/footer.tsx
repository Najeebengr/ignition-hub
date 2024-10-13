import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='bg-primary text-primary'>
      <div className='max-w-7xl py-10 mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
          <div className='flex flex-col gap-5 items-center md:items-start text-center md:text-left'>
            <Image
              src={'/assets/footer-logo.png'}
              width={130}
              height={130}
              className="w-[130px] h-auto"
              alt='Ignition Hub Logo'
            />
            <p className='text-sm text-white'>
              Finstreet 118 2561 abctown<br/>
              example@femail.com 001 21345 442
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end'>
            <ul className='flex flex-wrap justify-center md:justify-end items-center text-white gap-5'>
              {navItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link className='px-2 md:px-5' href={item.link}>{item.name}</Link>
                  </li>
                )
              })}
            </ul>
            <div className='flex mt-7 gap-5 justify-center text-white'>
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
