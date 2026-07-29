import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[45%] flex item-center justify-start gap-5 flex-nowrap w-full mt-10'>
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  )
}

export default TaskList