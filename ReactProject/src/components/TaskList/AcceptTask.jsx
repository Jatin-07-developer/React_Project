import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300 rounded-xl text-white'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-transparent border-2 border-[#14C8BE] text-base font-medium text-[#14C8BE] px-2 py-0.5 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-15 gap-3 '>
                <button className="px-1 py-0 rounded-xl border border-[#14C8BE] bg-[#14C8BE]/10 text-[#2DD4BF] font-light transition-all duration-300 hover:bg-[#14C8BE] hover:text-white hover:shadow-[0_0_20px_rgba(20,200,190,0.35)] hover:-translate-y-0.5 cursor-pointer" onClick={() => {
                    alert("The Task is Marked as Completed")
                }}>Mark as Completed</button>
                <button className="px-5 py-2.5 rounded-xl border border-red-500 bg-transparent text-red-400 font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:-translate-y-0.5 cursor-pointer" onClick={() => {
                    alert("The Task is Marked as Failed")
                } }>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask