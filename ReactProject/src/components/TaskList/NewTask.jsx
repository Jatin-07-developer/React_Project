import React from 'react'

const NewTask = ({data}) => {
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
            <div className='mt-6'>
                <button className="w-full py-3 rounded-xl border border-amber-400 bg-amber-400/10 text-amber-300 font-semibold transition-all duration-300 hover:bg-amber-400 hover:text-slate-900 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:-translate-y-0.5 cursor-pointer" onClick={() => {
                    alert("The Task is Accepted")
                }}>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask