import React from 'react';

const Header = () => {
    return (
        <div className='navbar bg-base-100 px-12 my-6'>
         <div className='flex-1'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
         </div>
         <div className='flex-none gap-2'>
            <div className='dropdown dropdown-end'>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                    <div className='w-10 rounded-full'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                </label>
            </div>
         </div>
       </div>
    );
};

export default Header;