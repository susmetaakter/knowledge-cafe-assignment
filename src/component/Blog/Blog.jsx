import React from 'react';

const Blog = (props) => {
    const {blogCoverImage, authorImage, authorName, publishDate,bookMark, readTime, blogTitle,aboutRead} = props.blog;
    return (
        <div>
        <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='mt-5 ml-48 mb-5'>
            <p><img src={blogCoverImage}/></p>
            <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3'>
                <div>
                 <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <p><img className='h-10 w-10 rounded-full' src={authorImage}/></p>
                        <div>
                        <p className='ml-2 font-bold'>{authorName}</p> 
                        <p>{publishDate}</p>               
                     </div>
                    </div>
                    <h1 className='font-bold text-xl mt-3'>{blogTitle}</h1>
                    <p className=' text-indigo-600 underline mb-3 mt-3'>{aboutRead} </p>
                </div>
                <div className='gap-1 flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <p className=' w-28'>{readTime}</p>
                    <p><img className='h-6 w-6' src={bookMark} /></p>
                </div>
            </div>
            <hr/>
            </div>
            <div>
                <p className=' mx-48 w-52 mt-3'>Spent time on read : 177 min</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;