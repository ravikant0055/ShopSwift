import React from 'react'
import Input from '../components/common/Input'
import Logo from '../components/common/Logo'

function Login() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex-1 w-full'>
        <h1>Login</h1>
        <form>
          <Input
           placeholder='Email or Username' 
           className='outline-none' 
           name='email' 
           id='email' 
          />
          <Input placeholder='Password' className='outline-none' name='password' id='password' />
          
        </form>
      </div>
    </div>
  )
}

export default Login