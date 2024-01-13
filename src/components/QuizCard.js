import React from 'react'

const QuizCard = ({ title, description }) => {
  return (
    <div className='bg-white p-2 rounded-md cursor-pointer shadow-sm hover:shadow-lg flex flex-col'>
        <h1 className='self-center text-xl text-center'>Simple Quisdf asdf sdf asdf aasdfasdfz</h1>
        <p>Description</p>
        <button className='bg-[#0B2055] self-center text-white px-3 p-1 rounded-md'>Play Quiz</button>
    </div>
  )
}

export default QuizCard