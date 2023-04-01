import React from 'react';

const SideCart = (props) => {
    return (
        <div className='card lg:w-96 sm:w-64 bg-base-100 shadow-xl mb-5 rounded'>
            <div className='card-body'>
            <ul>
                <li className='font-bold'>{props.singleBookMark}</li>
            </ul>
            </div>
        </div>
    );
};

export default SideCart;