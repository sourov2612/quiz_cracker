import React from 'react'; 
import './QuizQuestion.css'
import Option from '../Option/Option';

const QuizQuestion = ({quizdata}) => { 
    // console.log(quizdata)
    const {question} = quizdata
    const options = quizdata.options
    // console.log(options)

    const handleCorrectAns = (idFromButton, selectAns) =>{
        // console.log(idFromButton); 
        console.log(selectAns); 
        // const find = quizdata.find(idFromButton); 
        // console.log(find);
        // const selectedAns = 
        // const arrData = [...quizdata]; 
        // console.log(arrData);
        // const matchingObject = quizdata.find((obj) => obj.id === idFromButton); 
        // console.log(matchingObject);
        // const obj = { name: 'John', age: 30 };
        const entryArray = Object.entries(quizdata);
        const selectOptionArr = entryArray[3] 
        const selectOption = selectOptionArr[1]
        console.log(selectOption); 
        if(selectOption === selectAns){
            console.log("True");
        }else{
            console.log("False")
        }
    }

    return (
        <div className='question_container'> 
            <div className='questions my-5 my-5'>
                <h3 className='mt-5'>Question : {question}</h3>
                <div className='p-5'>
                    <div className='option'>

                        <button 
                        onClick={() => handleCorrectAns(quizdata.id, options[0])}
                        className='btn btn-primary'>{options[0]}</button> 

                        <button 
                        onClick={() => handleCorrectAns(quizdata.id)}
                        className='btn btn-primary'>{options[1]}</button> 

                        <button 
                        onClick={() => handleCorrectAns(quizdata.id)}
                        className='btn btn-primary'>{options[2]}</button> 

                        <button 
                        onClick={() => handleCorrectAns(quizdata.id)}
                        className='btn btn-primary'>{options[3]}</button> 

                        {/* {
                            options.map(option => <Option data = {option}></Option>)
                        } */}
                    </div>
                    <div className='right_container'>
                        <div className='right'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;