import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    const coursess = courses.data;

    // const [quizes, setQuizes] = useState([]);

    //     useEffect( (course_id) => {
    //         fetch(`https://openapi.programming-hero.com/api/quiz/${course_id}`) 

    //     },[])

    // const clickHandlar =(course_id) => {
    //     // console.log('Quiz button clicked');  
    //     // console.log(course_id);
    //     const quizData = useEffect(course_id)
        
    // }

    return (
        <div className='main_container'>
            <h2>Play quiz on</h2>
            <div className='courses_container'>
                {
                    coursess.map(course => <Course 
                    key={course.id} 
                    course = {course}
                    // clickHandlar = {clickHandlar}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;