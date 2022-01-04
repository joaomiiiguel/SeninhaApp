import React from 'react'
import { Link } from 'react-router-dom'
 import './styles.css'

export default function Header({nameHeader, linkBack}) {
    return (
        <div className="headerRegulation">
            <Link to={linkBack}> Voltar</Link>
            <h1 className='titleHeader'>{nameHeader}</h1>
            <div />
        </div>
    )
}