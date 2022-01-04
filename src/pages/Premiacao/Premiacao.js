import React from 'react'
import Header from '../../components/Header/Header'

import '../../globalStyles.css'
import './styles.css'

import TrofelImg from '../../assets/trophy.png'


export default function Premiacao() {
    return (
        <div className='container'>
            <Header nameHeader={"Premiação"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                <div>
                    <p style={{fontSize:13}}>Grupo:</p>
                    <p style={{fontWeight: 'bold'}}>2545</p>
                </div>
                <img src={TrofelImg} alt='trofeu' className='trofeuImg' />
                <div className='ResultadoPontuacao'>
                    <p className='MaiorPonto'>R$ 54.587,00</p>
                    <p className='TitleMaior'>Maior Ponto</p>
                </div>
                <div className='ResultadoPontuacao'>
                    <p className='MenorPonto'>R$ 6.570,00</p>
                    <p className='TitleMenor'>Menor Ponto</p>
                </div>
                <div className='cardImportante'>
                    <div style={{textAlign: 'center'}}>
                        <p className='TitleImportante'>IMPORTANTE</p>
                    </div>
                    <p><b>Maior Ponto -</b> Para quem marcar 10 Pontos</p>
                    <p><b>Menor Ponto -</b> Para quem marcar a menor pontuação</p>
                    <p>Caso tenha <b>mais de 01 ganhador</b>, o prêmio será dividido</p>
                </div>

            </div>
        </div>
    )
}
