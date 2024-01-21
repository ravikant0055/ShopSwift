import React from 'react'

function Logo({link, className}) {
    console.log(link, className)
  return (
    <div className='flex w-[100%] justify-center' >
        <img src={link}
        alt='logo'
        className={className}
        />
    </div>
  )
}

export default Logo