import React from 'react'
import Link from 'next/link'
import SingleListedBlog from './blogs/singleListedBlog'
import { categoryBlogFetch } from '@/app/blogs/fetchBlogs'
import { BlogType } from '@/types';

async function CategorySection({ category }: { category: string }) {
    const teslaBlogs = await categoryBlogFetch({ category }); 
    return (
        <div className='max-w-7xl my-10 mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                <h2 className='text-2xl font-semibold'>
                    {category}
                </h2>
                <p className='text-sm font-bold mt-4 md:mt-0'>
                    <Link href={'/blogs'}>
                        See All
                    </Link>
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {teslaBlogs.map((blog: BlogType, index: number) => (
                    <SingleListedBlog key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default CategorySection;
