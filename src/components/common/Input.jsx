import React from 'react'

const Input = React.forwardRef(function Input({
    label,
    type='text', 
    className="", 
    labelClassName="", 
    name='', 
    id, 
    ...props
  },ref) 
  {
  return (
    <div className='w-full'>
      {label && <label 
      className={`inline-block ${labelClassName}`}
      htmlFor={id}
      >
        {label}
      </label>}
      <input 
      type={type}
      className={`${className}`}
      placeholder='' 
      ref={ref}
      id={id}
      {...props}
      />
    </div>
  )
})

export default Input