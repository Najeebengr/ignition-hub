import React from 'react'
import Image from 'next/image'
import { navItem } from '@/types'
import Link from 'next/link'
import Button from './button'

function Navbar({ navItems }: { navItems: navItem }) {
  return (
    <header className='w-full top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex py-5 items-center justify-between px-4'>
          <Link href='/'>
            <Image
              src={'/assets/ignition-hub.png'}
              width={130}
              height={130}
              className="w-[130px] h-auto"
              alt='Ignition Hub Logo'
            />
          </Link>
          <div className='hidden md:block'>
            <nav>
              <ul className='flex items-center gap-5'>
                {navItems.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link className='px-3 md:px-5' href={item.link}>{item.name}</Link>
                    </li>
                  )
                })}
                <Button variant='primary' text='Subscribe' />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
