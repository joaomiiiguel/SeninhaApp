import React from 'react'
import Header from '../../components/Header/Header'

import ResultImg from '../../assets/podium.png'
import ResultadoNumeros from '../../components/ResultadoNumeros/ResultadoNumeros'

export default function Resultado() {
    return (
        <div className='container'>
            <Header nameHeader={"Resultado"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                <img src={ResultImg} alt='trofeu' className='trofeuImg' />
                <div>
                    <p>Resultado da Semana</p>
                    <ResultadoNumeros/>
                </div>
            </div>
        </div>
    )
}
