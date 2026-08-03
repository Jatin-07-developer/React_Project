import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /> <span className='text-3xl text-white font-semibold'>Username 👋</span></h1>
        <button onClick={logOutUser} className='bg-transparent border-2 border-[#14C8BE] text-base font-medium text-[#14C8BE] hover:border-[#1BE6D8] hover:text-[#1BE6D8] px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header