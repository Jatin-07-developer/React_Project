import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /> <span className='text-3xl text-white font-semibold'>{data.firstName} 👋</span></h1>
        <button className='bg-red-500 text-white rounded-s-sm text-lg font-medium px-5 py-2'>Log Out</button>
    </div>
  );
};

export default Header