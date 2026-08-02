import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex bg-linear-to-tr from-[#0a0a0a] to-[#3a4452] h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-[#3a4452] shadow-[0px_3px_15px_rgba(113,115,119,0.5)] p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-[#3a4452] font-medium text-lg text-white py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-[#3a4452] font-medium text-lg text-white py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none font-semibold bg-teal-500 hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(14,165,164,.45)] transition-all duration-300 cursor-pointer text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login