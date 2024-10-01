import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data'
import { FaFacebook } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
function Footer() {
  return (
    <footer className='bg-primary text-primary'>
      <div className='max-w-7xl py-10 mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-5'>
                <Image
                src={'/assets/footer-logo.png'}
                width={130}
                height={130}
                className="w-[130px] h-auto"
                alt='Ignition Hub Logo'
                />
                <p className='text-sm text-white'>
                Finstreet 118 2561 abctown<br/>
                example@femail.com  001 21345 442
                </p>
                
            </div>
            <div>
            <ul className='flex items-center text-white'>
                {navItems.map((item)=>{
                  return(
                    <li key={item.name}>
                      <Link className='px-5' href={item.link}>{item.name}</Link>
                    </li>
                  )
                })}
                </ul>
                <div className='flex mt-7 gap-5 justify-center text-white'>
            <BsFacebook/>
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
