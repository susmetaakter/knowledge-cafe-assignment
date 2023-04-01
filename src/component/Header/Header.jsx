import React from 'react';

const Header = () => {
    return (
        <div className='mt-5 ml-16 mr-80'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-3'>
          <div> 
          <h1 className='text-xl font-bold'>Knowledge Cafe</h1>
          </div> 
          <div>
          <img className='h-10 w-10 rounded-full ml-96' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          </div>
          </div>
          <hr />
       </div>
    );
};

export default Header;