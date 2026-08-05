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
                <button className="w-full py-3 rounded-xl border border-red-500 bg-red-500/10 text-red-400 font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer" onClick={() => {
                    alert("The Task is Marked as Failed")
                }}>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask