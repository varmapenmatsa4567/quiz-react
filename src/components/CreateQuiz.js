import React, { useState } from 'react'
import CreateOption from './CreateOption'
import database from '../appwrite.config';
import { ID } from 'appwrite';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const createQuiz = () => {
        setLoading(true);
        database.createDocument(
            '65a230973c351e1620d9',
            '65a2b9cbb3bfa7ca38d1',
            ID.unique(),
            {
                title: title,
                description: description,
            }
        ).then((response) => {
            console.log(response.$id);
            questions.forEach((question) => {
                database.createDocument(
                    '65a230973c351e1620d9',
                    '65a2ba2824be8bd209e0',
                    ID.unique(),
                    {
                        question: question.question,
                        options: question.options,
                        answer: question.options[question.answer],
                        did: response.$id,
                    }
                )
            })
            setLoading(false);
            navigate('/');
        })
    }

    const addOption = (qindex) => {
        const newQuestions = [...questions];
        newQuestions[qindex].options.push('');
        setQuestions(newQuestions);
    }

    const removeOption = (qindex, oindex) => {
        if(questions[qindex].options.length > 2){
            const newQuestions = [...questions];
            newQuestions[qindex].options.splice(oindex, 1);
            setQuestions(newQuestions);
        }
        else{
            alert('Minimum 2 options are required');
        }
    }

    const updateAnswer = (qindex, value) => {
        const newQuestions = [...questions];
        newQuestions[qindex].answer = value;
        setQuestions(newQuestions);
    }

    const updateOption = (qindex, oindex, value) => {
        const newQuestions = [...questions];
        newQuestions[qindex].options[oindex] = value;
        setQuestions(newQuestions);
    }

    const updateQuestion = (qindex, value) => {
        const newQuestions = [...questions];
        newQuestions[qindex].question = value;
        setQuestions(newQuestions);
    }

    const addQuestion = () => {
        setQuestions([...questions, {
            question: '',
            options: [
                '',
                '',
            ],
            answer: '',
        }]);
    }

    // console.log(questions);
  return (
    <div className='bg-[#EFEBF7] min-h-screen w-screen flex justify-center relative'>
        {loading && <div className='absolute w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center'>
            <AiOutlineLoading3Quarters className='text-5xl text-white animate-spin'/>
        </div>}

        <div className='w-1/2 py-4 flex flex-col gap-2'>
            <div className='flex flex-col gap-2 w-full bg-white p-6 rounded-md border border-gray-300 shadow-sm'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full focus:border-blue-900 focus:border-b-2 border-b border-gray-300 outline-none text-3xl py-2' type='text' placeholder='Quiz Title'/>
                <input value={description} onChange={(e) => setDescription(e.target.value)} className='w-full focus:border-blue-900 focus:border-b-2 border-b border-gray-300 outline-none py-1' type='text' placeholder='Quiz Description'/>
            </div>
            {questions && questions.map((question, qsn_index) => {
                return (
                    <div key={qsn_index} className='flex gap-2 flex-col w-full bg-white p-6 rounded-md border border-gray-300 shadow-sm'>
                        <input value={question.question} onChange={(e) => updateQuestion(qsn_index, e.target.value)} className='w-full focus:border-blue-900 focus:border-b-2 text-lg border-b border-gray-300 outline-none py-1' type='text' placeholder='Question'/>
                        {question.options && question.options.map((option, opt_index) => {
                            return (
                                <CreateOption onRemove={() => removeOption(qsn_index, opt_index)} onUpdate={() => updateAnswer(qsn_index, opt_index)} onChange={(e) => updateOption(qsn_index, opt_index, e.target.value)} key={opt_index} option={option} index={opt_index} name={qsn_index}/>
                            )
                        })}
                        <button onClick={() => addOption(qsn_index)} className='bg-gray-200 self-center px-3 p-1 rounded-md'>Add Option</button>
                    </div>
                )
            })}
            <div className='self-center flex gap-2'>
                <button onClick={addQuestion} className='bg-gray-300 self-center px-3 p-1 rounded-md'>+ Add Question</button>
                <button onClick={createQuiz} className='bg-gray-300 self-center px-3 p-1 rounded-md'>Create Quiz</button>
            </div>
        </div>
    </div>
  )
}

export default CreateQuiz