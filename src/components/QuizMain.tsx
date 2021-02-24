import React from 'react'
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Question } from '../types';

export default function QuizMain() {

    return (
        <QuestionContext.Consumer>
            { ( questionData ) => {
                console.log( questionData.question );
                
                return (
                    <h1>{ questionData.question }</h1>
                )
            }}
        </QuestionContext.Consumer>
    )
}
