import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#162235] border rounded-xl border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all text-white duration-300'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-transparent border-2 border-[#14C8BE] text-base font-medium text-[#14C8BE] px-2 py-0.5 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-20'>
                <button className="w-full py-1 rounded-xl border border-[#14C8BE] bg-[#14C8BE]/10 text-[#2DD4BF] font-semibold transition-all duration-300 hover:bg-[#14C8BE] hover:text-white hover:shadow-[0_0_20px_rgba(20,200,190,0.35)]">Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask