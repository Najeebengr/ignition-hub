import React from 'react'
import Link from 'next/link'
import SingleListedBlog from './blogs/singleListedBlog'
import { categoryBlogFetch } from '@/app/blogs/fetchBlogs'
import { BlogType } from '@/types';

async function CategorySection({category}: {category: string}) {
    const teslaBlogs = await categoryBlogFetch({category}); // Fetch Tesla blogs
    return (
        <div className='max-w-7xl my-10 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>
                    {category}
                </h2>
                <p className='text-sm font-bold'>
                    <Link href={'/blogs'}>
                        See All
                    </Link>
                </p>
            </div>
            
            <div className='flex justify-between gap-4'>
                {teslaBlogs.map((blog: BlogType, index: number) => (
                    <SingleListedBlog key={index}  blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default CategorySection;
