import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const CreateOption = ({ onRemove, onUpdate, onChange, option, index, name }) => {
  return (
    <div className='flex gap-2 items-center'>
        <input onChange={onUpdate} type='radio' name={name} className='w-4 font-bold'/>
        <input onChange={onChange} value={option} className='w-full focus:border-blue-900 focus:border-b-2 hover:border-b border-gray-300 outline-none py-1' type='text' placeholder={'Option '+(index+1)}/>
        <RxCross2 onClick={onRemove} className='w-6 h-6 text-gray-500 cursor-pointer'/>
    </div>
  )
}

export default CreateOption