import React from 'react'
import Image from 'next/image'
import PublishDetail from '../blogs/publishDetail'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { BlogType } from '@/types'

function SingleListedBlog({ blog }: { blog: BlogType }) {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className='bg-[#F4F0F8] flex flex-col gap-3 p-4 my-2 rounded-md'>
        <Image
          className='max-w-full h-auto rounded-md' 
          src={urlFor(blog.blogImage).width(350).height(200).fit('max').url()}
          alt=' Blogs'
          width={350}
          height={200}
        />
        <h3 className='text-sm font-semibold min-h-[60px]'>
          {blog.title}
        </h3>
        <PublishDetail date={blog.publishDate} author={blog.author} />
      </div>
    </Link>
  )
}

export default SingleListedBlog
