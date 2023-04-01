import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMarkName, setBookMarkName] = useState([])
    const[readTimeNumber, setReadTimeNumber] = useState([])
    const[newReadTime, setNewReadTime] = useState([])
    const [toastCount, setToastCount] = useState(0);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    function bookMark(name){
        const newBookMark = [...bookMarkName,name.blogTitle];
        setBookMarkName(newBookMark);

        setToastCount(prevCounts => {
            const newCounts = { ...prevCounts };
            newCounts[name.id] = (newCounts[name.id] || 0) + 1;
            console.log(newCounts);
            return newCounts;
            
        });
        const clickCount = toastCount[name.id] || 0;

        if (clickCount >= 1) {
            console.log(clickCount)
            toast.warning('You Have Already Bookmarked This Blog');
            //  ('This article is already in the bookmark');
        }

        // if (bookMarkName.includes(description)) {
        //     toast.warning('You Have Already Bookmarked This Blog');
        //   } 
        //     const newBookMark = [...bookMarkName, description];
        //  setBookMarkName(newBookMark);
        //  setClickCount(clickCount + 1);
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
            <div className=' mr-14'>
                <h1 className='lg:text-2xl font-bold text-purple-800 p-6 border border-violet-700 rounded-2xl bg-purple-200'>Spent time on read: {newReadTime} min</h1>
                <div className='bg-zinc-200 mt-6 p-6'>
                <h1 className='lg:text-2xl font-bold mb-6'>bookMarkBlogs:{bookMarkName.length}</h1>
                {
                    bookMarkName.map(singleBookMark =>
                        <SideCart 
                        singleBookMark ={singleBookMark}
                        toastCount ={toastCount}
                        ></SideCart>
                        )
                }
                </div>
                <ToastContainer />
            </div>
        </div>
        
    );
};

export default Blogs;