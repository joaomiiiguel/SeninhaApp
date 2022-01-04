import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
export default function ButtonComp({ nameButton, urlImg, linkBtn }) {
    return (
        <Link className="btnLink" to={linkBtn}>
            <button className="ButtonHome">
                <img src={urlImg} alt='Btn Icone'/>
                {nameButton}
            </button>
        </Link>
    )
}
