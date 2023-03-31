import React from 'react';

const Blog = (props) => {
    const {blogCoverImage, authorImage, authorName, publishDate,bookMark, readTime, blogTitle,aboutRead} = props.blog;
    return (
        <div className='mt-5 ml-40'>
            <p><img src={blogCoverImage}/></p>
            <div className='flex gap-80'>
                <div className='flex'>
                  <p><img className='h-10 w-10 rounded-full' src={authorImage}/></p>
                    <div>
                       <p className='ml-2 font-bold'>{authorName}</p> 
                       <p>{publishDate}</p>     
                    </div>
                </div>
                <div className='gap-1 flex'>
                <p>{readTime}</p>
                <p><img className='h-6 w-6' src={bookMark} /></p>
                </div>
            </div>
            <h1 className='font-bold text-xl'>{blogTitle}</h1>
            <p>{aboutRead}</p>
        </div>
    );
};

export default Blog;