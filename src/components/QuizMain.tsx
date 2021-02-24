import React from 'react'
import { QuestionContext } from '../context/QuestionContext';
import { shuffleOptions } from '../utils';
import './QuizMain.scss';

export default function QuizMain() {
    console.log( 'quiz main');
    
    return (
        <QuestionContext.Consumer>
            { ( questionData ) => {
                console.log( questionData.question);
                
                console.log( unescape( questionData.question ) );
                
                return (
                    <div className="quiz-main">
                        <div className="question-frame">
                            <div className="question">
                                    <h1 dangerouslySetInnerHTML={ { __html: questionData.question} }></h1>
                            </div>
                        </div>
                        {
                            shuffleOptions( questionData.incorrect_answers.concat( questionData.correct_answer ) ).map( option => {
                                return (
                                        <div id={ option } className="option">{ option }</div>
                                    )
                                })
                        }
                    </div>
                )
            }}
        </QuestionContext.Consumer>
    )
}
