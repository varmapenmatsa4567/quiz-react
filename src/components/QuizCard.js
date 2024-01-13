import React from 'react'

const QuizCard = ({ quiz, onClick }) => {
  return (
    <div className='bg-white p-2 rounded-md cursor-pointer shadow-sm hover:shadow-lg flex flex-col justify-between'>
        <div>
          <h1 className='self-center text-xl text-center'>{quiz.title}</h1>
          <p>{quiz.description}</p>
        </div>
        <button onClick={onClick} className='bg-[#0B2055] self-center text-white px-3 p-1 rounded-md'>Play Quiz</button>
    </div>
  )
}

export default QuizCard