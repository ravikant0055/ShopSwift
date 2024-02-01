import React from 'react'
import { Form, useForm } from 'react-hook-form';
import Input from '../components/common/Input'
import Logo from '../components/common/Logo'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
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
    <div className=' flex justify-center items-center h-auto
        lg:gap-9 lg:px-20
    '>
      <div className='hidden 
      
      lg:block lg:flex lg:flex-col lg:w-2/3 lg:justify-center lg:items-center'>
        <Logo link={logoLink} className='' />
        <span>Create an account?</span>
      </div>
      <div className='
          flex flex-col justify-center shadow-xl h-auto py-7 border items-center w-[75%] max-w-[26rem] px-6 rounded-3xl
          md:py-12 
          lg:border-none lg:shadow-none lg:justify-start lg:items-start
          '>
        
        <span className='
          text-3xl sm:text-4xl mb-8 font-bold
          md:text-5xl
        '>Login</span>
        <form className='w-[100%] flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <Input
           placeholder='Email or Username' 
           className='outline-none w-[100%] h-11 px-[1px] font-medium border-b border-black mb-[15px] 
           md:h-12 md:text-xl
           ' 
           id='email'
           star={true}
           errors={errors?.email && errors.email.message}
           {...register('email', {required: 'Email is required.', pattern:{}})} 
          />
          <Input 
            placeholder='Password' 
            className='outline-none w-[100%] h-11 px-[1px] font-medium border-b border-black
            md:h-12 md:text-xl
            ' 
            id='password'
            star={true}
            errors={errors?.password && errors.password.message}
            {...register('password', {required:'Password is required.'})}
          />
          
          <span className=' text-[13px] ml-auto my-[20px] 
            md:text-[15px]
          '>Forget Password?</span>
          
          <button className='border px-8 h-9 text-center rounded-xl bg-gradient-to-r border-none from-cyan-500 to-white w-2/5
            md:text-lg md:font-medium
          '>Login</button>
        
        </form>
        <div className='flex mt-8 items-center h-auto '>
          <span className='mr-4 text-[13px] sm:text-[15px]
          md:text-[15px]
          '>Or login with:</span>
          <div className='flex gap-5 items-center'>
            <FcGoogle className='text-3xl sm:text-[40px]' />
            <FaFacebook className='text-blue-600 text-3xl sm:text-[40px]' />
            <AiFillTwitterCircle className='text-blue-500 text-3xl sm:text-[44px]' />
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </div>
  )
}

export default Login