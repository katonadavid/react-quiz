import React from 'react'
import './Header.scss'

export default function Header() {
    
    return (
        <header>
            <h1>{ process.env.REACT_APP_APP_NAME }</h1>
        </header>
    )
}
