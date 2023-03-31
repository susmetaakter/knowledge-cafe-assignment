import React from 'react';

const Header = () => {
    return (
        <div className='mx-40 ml-40 mt-5'>
          <div className='flex justify-between mb-3'>
          <h1 className='text-xl font-bold'>Knowledge Cafe</h1>
          <img className='h-10 w-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          </div>
          <hr />
       </div>
    );
};

export default Header;