import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../components/common/Input'
import Logo from '../components/common/Logo'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { DevTool } from '@hookform/devtools';

function Signup() {
  
  // form related data
  const form = useForm();
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    console.log(errors)
  }

  // end

  const logoLink = 'https://img.freepik.com/free-vector/people-choosing-products-grocery-store-trolley-vegetables-basket-flat-vector-illustration-shopping-supermarket-concept_74855-10122.jpg?w=1060&t=st=1706335138~exp=1706335738~hmac=fb168c5264e9efbe42b9b253988f909e4a153b47be578a36788981f68fa5650e';
  return (
    <div className=' flex h-auto justify-center items-center flex-row-reverse
        lg:gap-9 lg:px-20
    '>
      <div className='hidden 
      
      lg:block lg:flex lg:flex-col lg:w-2/3 lg:justify-center lg:items-center'>
        <Logo link={logoLink} className='' />
        <span>
            Already have an account? 
            <span className='ml-2 font-bold cursor-pointer'>Login</span>
        </span>
      </div>
      <div className='
          flex flex-col justify-center shadow-xl h-auto py-7 border items-center w-[75%] max-w-[26rem] px-6 rounded-3xl
          md:py-12 
          lg:border-none lg:shadow-none lg:justify-start lg:items-start
          '>
        
        <span className='
          text-3xl sm:text-4xl mb-8 font-bold
          md:text-5xl
        '>Signup</span>
        <form className='w-[100%] flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <Input
           placeholder='Email or Username' 
           className='outline-none w-[100%] h-11 px-[1px] font-[600] border-b border-black mb-[15px] 
           md:text-[16px]
           ' 
           id='email'
           star={true}
           errors={errors?.email && errors.email.message}
           {...register('email', {required: 'Email is required.', pattern:{}})} 
          />

          <Input 
            placeholder='Password' 
            className='outline-none w-[100%] h-11 px-[1px] font-[600] border-b border-black mb-[15px]
            md:text-[16px]
            ' 
            id='password'
            star={true}
            errors={errors?.password && errors.password.message}
            {...register('password', {required:'Password is required.'})}
          />
          
          <Input 
            placeholder='Confirm Password' 
            className='outline-none w-[100%] h-11 px-[1px] font-[600] border-b border-black 
            md:text-[16px]
            ' 
            id='confirm_password'
            star={true}
            errors={errors?.password && errors.password.message}
            {...register('confirm_password', {required:'Password is required.'})}
          />
          
          <button className='border px-5 mt-9 h-9 text-center rounded-xl bg-gradient-to-r border from-cyan-500 to-white w-2/5
            md:text-[17px] md:font-[500]
          '>Signup</button>
        
        </form>
        <div className='flex mt-8 items-center h-auto '>
          <span className='mr-4 text-[13px] sm:text-[15px]
          md:text-[15px]
          '>Or login with:</span>
          <div className='flex gap-5 items-center'>
            <FcGoogle className='text-3xl sm:text-[40px] cursor-pointer' />
            <FaFacebook className='text-blue-600 text-3xl sm:text-[40px] cursor-pointer' />
            <AiFillTwitterCircle className='text-blue-500 text-3xl sm:text-[44px] cursor-pointer' />
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </div>
  )
}

export default Signup