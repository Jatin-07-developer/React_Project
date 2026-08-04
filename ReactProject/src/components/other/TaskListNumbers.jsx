import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300'>
            <h2 className='text-3xl text-blue-400 font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 text-white font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300'>
            <h2 className='text-3xl text-teal-400 font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 text-white font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300'>
            <h2 className='text-3xl text-yellow-400 font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-white font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#162235] border border-[#334155] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-[#14C8BE] transition-all duration-300'>
            <h2 className='text-3xl text-red-400 font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 text-white font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers