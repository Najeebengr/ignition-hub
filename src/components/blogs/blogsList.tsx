'use client'
import React from 'react'
import Image from 'next/image'
import PublishDetail from './publishDetail'
import Button from '../ui/button'
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link'
import { BlogType } from '@/types'

export default function BlogsList({ blogs }: { blogs: BlogType[] }) {
  return (
    blogs.map((blog: BlogType) => {
      return (
        <div key={blog._id} className='flex flex-col gap-4'>
          <div className='flex flex-col md:flex-row justify-between gap-6'> 
            <div className='basis-full md:basis-3/4'>
              <Link href={`/blogs/${blog._id}`}>
                <Image
                  className='max-w-full h-auto'
                  src={urlFor(blog.blogImage).width(450).height(250).fit('max').url()}
                  width={450}
                  height={250}
                  alt='blog image'
                />
              </Link>
            </div>
            <div className='flex flex-col gap-3 justify-center'>
              <Link href={`/blogs/${blog._id}`}>
                <h3 className='text-xl font-bold'>
                  {blog.title}
                </h3>
              </Link>
              <PublishDetail date={blog.publishDate} author={blog.author} />
              <p className='text-sm leading-8'>
                {blog.description.length > 300 ? `${blog.description.substring(0, 300)}...` : blog.description}
              </p>
              <div>
                <Link href={`/blogs/${blog._id}`}>
                  <Button variant='secondary' text='Read More' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
