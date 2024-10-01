import React from 'react'
import LatestBlog from './blogs/latestBlog'
import TrendingBlogs from './blogs/trendingBlogs'
import Link from 'next/link'
import { latestBlogFetch, trendingBlogFetch } from '@/app/blogs/fetchBlogs';
import { BlogType } from '@/types';
async function Feature() {
  const latestBlogObj = await latestBlogFetch();
  const trendingBlogs = await trendingBlogFetch();
  return (
    <div className='max-w-7xl my-10 mx-auto flex gap-5'>
    <LatestBlog blog={latestBlogObj}/>
      <div className='basis-1/3 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>
            Trending Blogs
        </h2>
        <p className='text-sm'>
            <Link href={'/blogs'}>
            See All
            </Link>
        </p>
        </div>
       { trendingBlogs.map((blog: BlogType) => {
          return (
            <TrendingBlogs key={blog._id} blog={blog} />
          )
        })
      }


      </div>
    </div>
    )
    }

export default Feature