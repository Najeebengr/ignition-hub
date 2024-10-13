import React from 'react'
import PublishDetail from './publishDetail'
import Link from 'next/link'
import { BlogType } from '@/types'

function TrendingBlogs({ blog }: { blog: BlogType }) {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className='p-4 md:p-6 rounded flex flex-col gap-2 hover:text-white hover:bg-secondary transition-colors'>
        <PublishDetail date={blog.publishDate} author={blog.author} />
        <h3 className='text-lg md:text-xl font-bold'>
          {blog.title}
        </h3>
      </div>
    </Link>
  )
}

export default TrendingBlogs
