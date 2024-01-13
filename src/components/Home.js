import React, { useState } from 'react'
import QuizCard from './QuizCard'
import database from '../appwrite.config';

const Home = () => {
    const [quizzes, setQuizzes] = useState([]);
    database.listDocuments(
        '65a230973c351e1620d9',
        '65a2317b42f729a01abc',
        [],
    ).then((response) => {
        setQuizzes(response.documents);
    })
  return (
    <div className='w-screen min-h-screen bg-gray-300 p-10'>
        <div className='w-ful p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <QuizCard/>
        </div>
    </div>
  )
}

export default Home