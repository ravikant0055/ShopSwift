import React from 'react'

const Input = React.forwardRef(function Input({
    icon,
    label,
    type='text', 
    className="", 
    labelClassName="", 
    name, 
    id, 
    star,
    errors,
    ...props
  },ref) 
  {
    console.log(errors)
  return (
    <div className='w-full relative'>
      {label && <label 
      className={`inline-block ${labelClassName}`}
      htmlFor={id}
      >
        {label}
      </label>}
      <input 
      type={type}
      className={`${className} ${icon? 'pl-10': ''}`}
      placeholder='' 
      ref={ref}
      id={id}
      name={name}
      {...props}
      />
      {errors&&<span className='text-red-600 text-[12px] font-bold'>{errors.email?.message}</span>}
      {icon && <span className='absolute top-0'>
        {icon}
      </span>}
    </div>
  )
})

export default Input