import React from 'react'

const Address = () => {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Name'/>

            <label htmlFor='mobNo'>Name</label>
            <input type='number' id='mobNo' placeholder='Mobile Number'/>

            <label htmlFor='PinCode'>Name</label>
            <input type='number' id='PinCode' placeholder='Pin Code'/>

            <label htmlFor='HNo'>Name</label>
            <input type='text' id='HNo' placeholder='House No / Street Name'/>

            <label htmlFor='town'>Name</label>
            <input type='text' id='town' placeholder='Town'/>
            <div className='cityState'>
                <label htmlFor='city'>Name</label>
                <input type='text' id='city' placeholder='City'/> 

                <label htmlFor='state'>Name</label>
                <input type='text' id='state' placeholder='State'/>       
            </div>
        </form>

    </div>
  )
}

export default Address