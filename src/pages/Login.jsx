import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../components/common/Input'
import Logo from '../components/common/Logo'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { DevTool } from '@hookform/devtools';

function Login() {
  
  // form related data
  const form = useForm();
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    console.log(errors)
  }

  // end

  const logoLink = 'https://img.freepik.com/free-vector/woman-shopping-fashion-store-customer-with-bags-mannequin-accessory-flat-vector-illustration-consumerism-consumer-clothes-purchase-concept_74855-10194.jpg?w=1060&t=st=1705559541~exp=1705560141~hmac=4dcc038cf09e94f04dead5a7dfe1856471754e31007229ea6e1424449a491853';
  return (
    <div className='flex justify-center h-screen items-center w-full px-14 mx-auto gap-28'>
      <div className='flex-[0.6] items-center justify-center flex-col hidden md:flex'>
        <Logo 
        link = {logoLink}
        className={'justify-center w-[100%] h-auto max-w-full object-contain hidden md:block'}
        />
        <span className=''>Create an Account?</span>
      </div>
      <div className='md:flex-[0.4] flex-[1] mx-auto flex flex-col md:items-start justify-center items-center h-auto w-[100%] pb-10'>
        <h1 className='text-[30px] pb-[30px] font-medium md:text-[40px] lg:text-[50px]'>Login</h1>
        
        <form className='w-[90%]' onSubmit={handleSubmit(onSubmit)} noValidate>  
        {/* noValidate is for browser.It ensures that browser dont apply any validation so that react-hook-form can apply its own validation. */}
          <Input
           placeholder='Email or Username' 
           className='outline-none w-[100%] h-11 px-[1px] font-medium border-b border-black mb-[40px]' 
           id='email'
           {...register('email', {required: 'Email is required.', pattern:{}})} 
          />
          <Input 
            placeholder='Password' 
            className='outline-none w-[100%] h-11 px-[1px] font-medium border-b border-black mb-[15px]' 
            id='password'
            errors={errors}
            {...register('password', {required:'Password is required.'})}
          />
          <span className='flex justify-end'>Forgot Password?</span>
          <button className='border px-11 py-1'>Login</button>
        </form>
        <DevTool control={control} />
        <div className='pt-10 flex w-auto h-auto'>
          <span className=''>Or login with:</span>
          <div className='flex gap-4'>
          <FcGoogle />
          <FaFacebook className='text-blue-900' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login