import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300 text-white rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-transparent border-2 border-[#14C8BE] text-base font-medium text-[#14C8BE] px-2 py-0.5 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask