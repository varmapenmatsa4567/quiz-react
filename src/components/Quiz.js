import React, { useState } from 'react'
import Option from './Option'
import { shuffledQuestions } from '../data/questions';
import Result from './Result';

const qsns = shuffledQuestions();

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [wrong, setWrong] = useState('');
  const [score, setScore] = useState(0);

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
            <h1 className='text-center text-2xl font-semibold'>Simple Quiz</h1>
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