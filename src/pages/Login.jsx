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
    <div className=' flex h-screen justify-center border items-center '>
      <div className='flex flex-col border h-auto py-7 items-center w-[70%]'>
        <span className='text-4xl mb-8'>Login</span>
        <form>
          <Input
            placeholder='Email or username'
          />
          <Input 
            placeholder='Password'
          />
        </form>
        <span>Forget Password?</span>
        <button className='border'>Login</button>
        <div className='flex'>
          <span>Or login with:</span>
          <FcGoogle />
          <FaFacebook className='text-blue-600' />
          <AiFillTwitterCircle className='text-blue-500' />
        </div>
      </div>
    </div>
  )
}

export default Login