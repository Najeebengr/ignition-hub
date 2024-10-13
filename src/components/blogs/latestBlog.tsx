import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'
import PublishDetail from './publishDetail'
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { BlogType } from '@/types';

function LatestBlog({ blog }: { blog: BlogType }) {
  return (
    <div className='flex flex-col basis-full md:basis-2/3 gap-5'> 
      <h2 className='text-3xl font-bold mb-5'>
        Latest
      </h2>
      <Link href={`/blogs/${blog._id}`}>
        <Image
          className='max-w-full h-auto'
          src={urlFor(blog.blogImage).width(750).height(400).fit('max').url()}
          alt='blog image'
          width={750}
          height={400}
        />
      </Link>
      <PublishDetail date={blog.publishDate} author={blog.author} />
      <div className='flex flex-col gap-3'>
        <h3 className='text-2xl font-bold'>
          {blog.title}
        </h3>
        <p className='text-sm leading-8'>
          {blog.description.length > 300 ? `${blog.description.substring(0, 300)}...` : blog.description}
        </p>
      </div>
      <div>
        <Link href={`/blogs/${blog._id}`}>
          <Button variant='secondary' text='Read More' />
        </Link>
      </div>
    </div>
  )
}

export default LatestBlog;
