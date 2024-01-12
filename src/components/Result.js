import React from 'react'

const Result = ({ score, ...props}) => {
  return (
    <div className='flex flex-col'>
        <p className='my-3'>You Scored {score}!</p>
        <button {...props} className='bg-[#0B2055] text-white p-2 px-8 self-center rounded-md'>Play Again</button>
    </div>
  )
}

export default Result