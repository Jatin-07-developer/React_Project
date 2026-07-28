import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[45%] flex item-center justify-start gap-5 flex-nowrap w-full mt-10'>
      <div className='shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
      <div className='shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
      <div className='shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
      <div className='shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
      <div className='shrink-0 h-full w-[300px] p-5 bg-gray-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
      <div className='shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor amet laboriosam repellat similique nostrum sed est autem culpa! Possimus!</p>
      </div>
    </div>
  )
}

export default TaskList