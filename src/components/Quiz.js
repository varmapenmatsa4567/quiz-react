import React, { useEffect, useState } from 'react'
import Option from './Option'
import { shuffledQuestions } from '../data/questions';
import Result from './Result';
import { useParams } from 'react-router-dom';
import database from '../appwrite.config';
import { Query } from 'appwrite';

// const qsns = shuffledQuestions();

const Quiz = () => {
  const [qsns, setQsns] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [wrong, setWrong] = useState('');
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    database.listDocuments(
      '65a230973c351e1620d9',
      '65a2b9cbb3bfa7ca38d1',
      [
        Query.equal('$id', id),
      ],
    ).then((response) => {
      console.log(response);
      setTitle(response.documents[0].title);
    }
    )

    database.listDocuments(
      '65a230973c351e1620d9',
      '65a2ba2824be8bd209e0',
      [
        Query.equal('did', id),
      ],
    ).then((response) => {
      setQsns(response.documents);
    }
    )
  }, [])

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswer('');
    setWrong('');
    setScore(0);
  }

  const selectAnswer = (option) => {
    if(option == qsns[currentQuestion].answer){
      setScore((prevScore) => prevScore + 1 );
    }
    else{
      setWrong(option);
    }
    setAnswer(qsns[currentQuestion].answer);
    setTimeout(() => {
      setCurrentQuestion((prevCurrent) => prevCurrent+1);
      setAnswer('');
      setWrong('');
    }, 1000)
  }

  return (
    <div className='bg-[#0B2055] h-screen w-screen flex justify-center items-center'>
        <div className='bg-white rounded-md p-8 w-2/5'>
            <h1 className='text-center text-2xl font-semibold'>{title}</h1>
            <div className='border-b border-black my-2'></div>
            {qsns && qsns.length > currentQuestion && <div>
              <h1 className='text-lg font-medium'>{currentQuestion+1}. {qsns[currentQuestion].question}</h1>
              <div className='my-4 flex flex-col gap-3' id='options'>
                {qsns[currentQuestion].options.map((opt, index) => {
                  return <Option title={opt} wrong={wrong} answer={answer} key={index} onClick={() => selectAnswer(opt)}/>
                })}
              </div>
            </div> }
            {qsns && qsns.length == currentQuestion && <Result onClick={resetQuiz} score={score+" out of " + qsns.length}/>}
        </div>
    </div>
  )
}

export default Quiz