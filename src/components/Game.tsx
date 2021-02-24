import React, { useContext, useState } from 'react'
import QuizMain from './QuizMain';
import StartButton from './StartButton';
import ApiHelper from '../API';
import { Difficulty, Question } from '../types';
import { QuestionContext } from '../context/QuestionContext';

export default function Game() {

    const [ isStarted, startGame ] = useState<boolean>( false );
    const [ question, setQuestion ] = useState<Question>( {} as Question );

    const onGameStart = () => {
        startGame( true );
        ApiHelper.getQuestions({
            amount: 1,
            difficulty: Difficulty.EASY,
            type: 'multiple'
        }).then( ( questions : Question[] ) =>  {
            setQuestion( questions[0] );
            console.log( questions[0] );
        } );
    }
    
    return (
        <QuestionContext.Provider value={ question }>
            <div className="game-main">
                <StartButton startFn={ onGameStart }/>
                <QuizMain/>
            </div>
        </QuestionContext.Provider>
    )
}