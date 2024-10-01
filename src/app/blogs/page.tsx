import BlogsList from '@/components/blogs/blogsList'
import Hero from '@/components/hero'
import {heroSectionContent } from '@/data'
import React from 'react'
import { getData } from './fetchBlogs';


async function Blogs() {
   const allBlogs = await getData();
  return (
    <main>
      <Hero page='blogs' content={heroSectionContent[1]} />
      <div className='max-w-7xl my-10 mx-auto'>
      <h2 className='text-3xl font-bold mb-5 border-b-2 border-slate-100 pb-5'>
        All posts
    </h2>
    <div className='flex flex-col gap-8'>
        <BlogsList blogs={allBlogs} />
    </div>
      </div>
    </main>
  )
}

export default Blogs
