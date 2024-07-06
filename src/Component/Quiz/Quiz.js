import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion'; 
import './Quiz.css'

const Quiz = () => {
    const quizDetails = useLoaderData() 
    // console.log(quizDetails.data.questions); 
    const quizDatas = quizDetails.data.questions;
    // console.log(quizDatas);
    return (
        <div className='mt-5'>
            <h2>Let's solve the questione...</h2>
            <div className='quiz_container'>
                {
                    quizDatas.map(quizdata => <QuizQuestion 
                    key = {quizdata.id} 
                    quizdata = {quizdata}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;