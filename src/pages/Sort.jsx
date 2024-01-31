import React from 'react'

const Sort = ({item}) => {
  return (
    <div className='flex justify-between px-8'>

       <p className='font-semibold text-gray-500'>{`${item.length} Product Available`}</p>
        
        <div>
            <form>
                <label htmlFor='sort'></label>
                <select  name='sort' id='sort' className='border-2 border-gray-500 px-2 py-1 '>
                   <option value="lowest">Price(lowest)</option>
                   <option value="lowest">Price(highest)</option>
                   <option value="lowest">Price(a-z)</option>
                   <option value="lowest">Price(z-a)</option>
                </select>
            </form>
        </div>
    </div>
  )
}

export default Sort;