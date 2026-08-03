import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-8 bg-[#1E293B] border border-[#334155] rounded-2xl mt-5 shadow-[0_8px_25px_rgba(0,0,0,0.35)]'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full text-white h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id=""></textarea>
                    <button className="bg-[#14C8BE] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#1BE6D8] hover:shadow-[0_0_20px_rgba(20,200,190,0.35)] hover:scale-[1.02] active:scale-95 w-full mt-3 cursor-pointer">Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask