import React from 'react'
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Question } from '../types';
import './QuizMain.scss';

export default function QuizMain() {

    return (
        <QuestionContext.Consumer>
            { ( questionData ) => {
                console.log( questionData.question );
                
                return (
                    <div className="quiz-main">
                        <div className="question">
                                <h1>{ questionData.question }</h1>
                        </div>
                        <div className="options">
                            {
                                questionData.incorrect_answers.concat( questionData.correct_answer ).map( option => {
                                    return (
                                            <div className="option">{ option }</div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                )
            }}
        </QuestionContext.Consumer>
    )
}
