import React from 'react'
import Header from '../../components/Header/Header'

import ResultImg from '../../assets/podium.png'
import ResultadoNumeros from '../../components/ResultadoNumeros/ResultadoNumeros'

import './styles.css'
import '../../globalStyles.css'
import ListaNumeros from '../../components/ListaNumeros/ListaNumeros'

const datalistNumberos = [
    {
        id: 1,
        number: '11',
    },
    {
        id: 2,
        number: '01',
    },
    {
        id: 3,
        number: '25',
    },
    {
        id: 4,
        number: '11',
    },
    {
        id: 5,
        number: '01',
    },
    {
        id: 6,
        number: '25',
    },
]

export default function Resultado() {
    return (
        <div className='container'>
            <Header nameHeader={"Resultado"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                <img src={ResultImg} alt='trofeu' className='trofeuImg' />
                <div>
                    <p className='titleResult'>Resultado da Semana</p>
                    <ResultadoNumeros numConcurso={'5254'} listNumberos={datalistNumberos} />
                </div>
                <div>
                    <p className='titleResult'>Últimos Resultado</p>
                    <div>
                        <p style={{marginTop: 10}}>Concurso: 5253</p>
                        <ListaNumeros listNumberos={datalistNumberos} />
                    </div>
                    <div>
                        <p style={{marginTop: 10}}>Concurso: 5252</p>
                        <ListaNumeros listNumberos={datalistNumberos} />
                    </div>
                    <div>
                        <p style={{marginTop: 10}}>Concurso: 5251</p>
                        <ListaNumeros listNumberos={datalistNumberos} />
                    </div>
                    <div>
                        <p style={{marginTop: 10}}>Concurso: 5250</p>
                        <ListaNumeros listNumberos={datalistNumberos} />
                    </div>
                </div>
            </div>
        </div>
    )
}
