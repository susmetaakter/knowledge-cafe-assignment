import React from 'react';

const Blog = (props) => {
    const {blogCoverImage, authorImage, authorName, publishDate,bookMark, readTime, blogTitle,aboutRead} = props.blog;
    const addToCart = (blogTitle) =>{
        console.log('item added', blogTitle)
    }
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-16'>
        <div className='mt-5 mb-5'>
            <img className='rounded' src={blogCoverImage}/>
            <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3'>
                <div>
                 <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <img className='h-10 w-10 rounded-full' src={authorImage}/>
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
                    <p onClick={() => addToCart(blogTitle)}><img className='h-6 w-6' src={bookMark} /></p>
                </div>
            </div>
            <hr/>
            </div>
            <div>
            <div>
                <p className=' w-60 mt-5 bg-violet-100 font-bold px-2 py-2 text-indigo-800 rounded ml-5'>Spent time on read : 177 min</p>
            </div>
            <div>
            <p className=' bg-slate-100 px-2 py-2 font-bold rounded w-60 mt-5 ml-5'>Bookmarked Blogs:</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;