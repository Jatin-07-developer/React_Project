import React, { useState } from 'react'

const login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        // console.log("email is",email)
        // console.log("password is", password)

        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} required className='m-2 outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-4 px-5 text-xl rounded-full text-white' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-4 px-5 text-xl text-white rounded-full' type="password" placeholder='Enter your password' />
                <button className=' mt-5 text-white outline-none placeholder:text-white border-none bg-emerald-600 py-2 px-4 text-xl rounded-full w-68'>LogIn</button>
            </form>
        </div>
    </div>
  )
}

export default login