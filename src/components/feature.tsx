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
    <div className='max-w-7xl my-10 mx-auto flex flex-col lg:flex-row gap-8 px-4'>
      <LatestBlog blog={latestBlogObj} />

      <div className='flex-1 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            Trending Blogs
          </h2>
          <p className='text-sm'>
            <Link href={'/blogs'}>
              See All
            </Link>
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          {trendingBlogs.map((blog: BlogType) => (
            <TrendingBlogs key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
