import React from 'react';

const Blog = (props) => {
    const {blogCoverImage, authorImage, authorName, publishDate,bookMark,readTime, blogTitle} = props.blog;
    
    const handleBookmark = props.bookMark;
    const handleReadTime = props.markRead;

    return (
        <div className='lg:px-12 my-2'>
        <div>
         <img className='rounded' src={blogCoverImage} alt="" />
         <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-2 lg:gap-[205px]'>
         <div className='flex flex-cols-1 md:flex-cols-2 lag:flex-cols-2 gap-2'>
            <img className='w-10 h-10 rounded-full' src={authorImage} alt="" />
            <div>
            <p className='font-bold'>{authorName}</p>
            <p className='text-sm w-36 text-gray-500'>{publishDate}</p>
         </div>
         </div>
        <div className='flex flex-cols-1 md:flex-cols-2 lg:flex-cols-2 gap-2'>
            <p>{readTime} minutes read</p>
            <p onClick={() => handleBookmark(blogTitle)}><img className='h-6 w-6' src={bookMark} /></p>
        </div>
        </div>
        <p className='font-bold text-xl mb-2'>{blogTitle}</p>
        <button onClick={() => handleReadTime(readTime)} className='underline text-blue-700 mb-3'>Mark as Read</button>
        <hr />
        </div>
        </div>
    );
};

export default Blog;