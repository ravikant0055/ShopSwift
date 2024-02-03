import React, {useState} from 'react'
import { CiHeart } from "react-icons/ci";
import SizeButton from './SizeButton';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {useForm} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function CardForm() {
    const [selectedSize, setSelectedSize] = useState(null);
    const form = useForm();
    const {register, control, handleSubmit, fomrState, setValue, getValues} = form;

    const onSubmit = (data) => {
        console.log('Form submitted', data);
      }
console.log(selectedSize)
  return (
    <div className='cardForm_wrapper'>
        <div className='cardForm_form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center mb-2'>
                    <div className='py-2'>
                        <span className='text-[12px] font-semibold'>SIZE</span>
                        <div className='relative'>
                            <div className='flex items-center space-x-2 pt-2 pb-6'>
                            {['XS', 'S', 'M', 'XL', 'XXL'].map((size) => (<SizeButton
                                key={size}
                                size={size}
                                selected={selectedSize === size}
                                onClick={() => {setSelectedSize(size)}}
                                />
                            ))}
                            </div>
                            {selectedSize && <span className='absolute bottom-0 text-base cursor-pointer hover:font-semibold' onClick={() =>setSelectedSize(null) }>Clear</span>}
                        </div>
                    </div>
                    
                </div>
                {/* <div>            //confirm it first
                        <button className=''>Size Chart</button>
                    </div> */}
                <div className=''>
                    <div className='flex gap-5 items-center mb-7'>
                        <div className='border border-gray-500 flex items-center justify-center h-11 w-full rounded-md'>
                            <button className='w-full flex justify-center' onClick={() => {setValue('quantity',parseInt(getValues('quantity'))-1 )}} type="button">
                                <FaMinus className='text-gray-500 text-[12px]'/>
                            </button>
                            <input 
                                type='number' 
                                className='w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none text-center' 
                                id='quantity'
                                value={1}
                                {...register('quantity')}
                            />
                            <button className='w-full flex justify-center ' onClick={() => {setValue('quantity',parseInt(getValues('quantity'))+1 )}} type="button">
                                <FaPlus className='text-gray-500 text-[12px]' />                        
                            </button>
                        </div>
                        <button className='flex text-center items-center justify-center w-full border border-gray-500 h-11 rounded-md'>
                            <CiHeart className='text-xl mr-2 font-semibold flex pt-[2px] ' />
                            <span className='text-sm font-semibold flex '>WISHLIST</span>
                        </button>
                    </div>
                    <div>
                        <button className='border w-full text-sm border border-gray-500 font-semibold py-[13px] text-center mr-4 rounded-md mb-7 ' type="submit">ADD TO CART</button>
                        <button className='border w-full text-sm border border-gray-500 font-semibold py-[13px] text-center mr-4 rounded-md bg-black text-white ' type="button">BUY IT NOW</button>
                    </div>
                </div>
            </form>
        </div>
        <DevTool control={control} />
    </div>
  )
}

export default CardForm