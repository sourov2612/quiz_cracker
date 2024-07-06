import React from 'react';
import './Course.css'
import { NavLink } from 'react-router-dom';

const Course = ({course}) => { 
    const {name, logo, total, id} = course;
    return (
        <div className='course_container'>
            <h3>Topic Name : {name}</h3> 
            <img src={logo} alt="" /> 
            <div className='details'>
                <p>Total question : {total}</p> 
                {/* <button 
                className='btn btn-primary'
                onClick={() => clickHandlar()}
                >Play quiz</button> */}
                <NavLink 
                className='btn btn-primary'
                // onClick={() => clickHandlar(course.id)}
                to={`/home/${id}`}
                >Play quiz</NavLink>
            </div>
        </div>
    );
};

export default Course;