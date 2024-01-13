import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import database from '../appwrite.config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    const startQuiz = (id) => {
        navigate(`/quiz/${id}`);
    }

    useEffect(() => {
        database.listDocuments(
            '65a230973c351e1620d9',
            '65a2b9cbb3bfa7ca38d1',
            [],
        ).then((response) => {
            setQuizzes(response.documents);
            console.log(quizzes[0]);
        })
    }, []);
  return (
    <div className='w-screen min-h-screen bg-gray-300 p-10'>
        <div className='w-ful p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {quizzes && quizzes.map((quiz) => <QuizCard quiz={quiz} onClick={() => startQuiz(quiz.$id)}/>)}
        </div>
    </div>
  )
}

export default Home