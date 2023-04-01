import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMarkName, setBookMarkName] = useState([])
    const[readTimeNumber, setReadTimeNumber] = useState([])
    const[newReadTime, setNewReadTime] = useState([])

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    function bookMark(name){
        const newBookMark = [...bookMarkName,name];
        setBookMarkName(newBookMark);
    }

    function readTime(time){
        const timeNum = parseInt(time);
        const newReadTime =[...readTimeNumber, timeNum];
        setReadTimeNumber(newReadTime);
        let totalArr = newReadTime.reduce((previousValue, currentValue)=>
        previousValue += currentValue);
        console.log(totalArr);
        setNewReadTime(totalArr)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    bookMark = {bookMark}
                    markRead = {readTime}
                    ></Blog>)
            }
            </div>
            <div className='m-2'>
                <h1 className='lg:text-2xl font-bold text-purple-800 p-6 border border-violet-700 rounded-2xl bg-purple-200 '>Spent time on read: {newReadTime} min</h1>
                <div className='bg-zinc-200 mt-6 p-6'>
                <h1 className='lg:text-2xl font-bold mb-6'>bookMarkBlogs:{bookMarkName.length}</h1>
                {
                    bookMarkName.map(singleBookMark =>
                        <SideCart 
                        singleBookMark ={singleBookMark}
                        ></SideCart>
                        )
                }
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;