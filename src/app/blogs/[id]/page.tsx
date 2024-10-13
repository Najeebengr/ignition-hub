import React from 'react'
import Image from 'next/image'
import PublishDetail from '@/components/blogs/publishDetail'
import { urlFor } from '@/sanity/lib/image';
import { singleBlog } from '../fetchBlogs';

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

async function BlogTemplate({ params }: BlogDetailPageProps) {
  const blog = await singleBlog(params.id);
  if (!blog) {
    return (
      <div className='max-w-7xl mx-auto h-[100vh] flex justify-center items-center font-bold text-3xl'>
        Blog not found.
      </div>
    );
  }
  return (
    <main className='flex flex-col gap-8 max-w-7xl mx-auto mb-10 px-4'>
      <div className='relative w-full h-0 pb-[56.25%]'> 
        <Image
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={urlFor(blog.blogImage.asset).url()}
          layout='fill'
          alt={'Blog Image'}
        />
      </div>
      <h2 className='text-3xl font-bold'>
        {blog?.title}
      </h2>
      <PublishDetail date={blog?.publishDate} author={blog?.author} />
      <p>
        {blog?.description}
      </p>
    </main>
  );
}

export default BlogTemplate;
