import React from 'react'

export default function StartButton( props: any ) {

    const startFn = props.startFn;

    return (
        <button onClick={ startFn }>Start Game</button>
    )
}
