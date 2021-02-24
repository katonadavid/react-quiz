import React, { useContext, useState } from 'react'
import QuizMain from './QuizMain';
import StartButton from './StartButton';
import ApiHelper from '../API';
import { Difficulty, Question } from '../types';
import { QuestionContext } from '../context/QuestionContext';
import Loader from './Loader';
import './Game.scss';

export default function Game() {

    const [ isStarted, startGame ] = useState<boolean>( false );
    const [ question, setQuestion ] = useState<Question>( {} as Question );
    const [ isLoading, setLoading ] = useState( false )

    const onGameStart = () => {
        setLoading( true );
        startGame( true );
        ApiHelper.getQuestions({
            amount: 1,
            difficulty: Difficulty.EASY,
            type: 'multiple'
        }).then( ( questions : Question[] ) =>  {
            setQuestion( questions[0] );
            setLoading( false );
        } );
    }
    
    return (
        <>
            { !isStarted && <StartButton startFn={ onGameStart }/> }
            <QuestionContext.Provider value={ question }>
                <div className="game-main">
                    { isLoading && <Loader/> }
                    { ( !isLoading && isStarted ) && <QuizMain/> }
                </div>
            </QuestionContext.Provider>
        </>
    )
}
