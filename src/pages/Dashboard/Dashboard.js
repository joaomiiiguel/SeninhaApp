import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import ContagemRegressiva from '../../components/Contagem/Contagem'
import LanceJogada from '../../components/Lance/Lance'
import ButtonComp from '../../components/ButtonHome/ButtonGrande';
import './Dashboard.css'

import NovaApostaIcon from '../../assets/image-7.png'
import PremioIcon from '../../assets/image-8.png'
import RankingIcon from '../../assets/image-9.png'
import RegulamentoIcon from '../../assets/image-10.png'


export default function Dashboard() {
    const [, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const proximoSorteio = '01/30/2022'
    const target = new Date(`${proximoSorteio}  23:59:59`);

    function countdown() {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);


            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000)

        return () => clearInterval(interval);
    }

    useEffect(() => {
        countdown()
    })


    return (
        <div className="Dashboard">
            <div className="contentDash">
                <p className="Title">Olá, <b>Miguel</b></p>
                <p>Já fez sua aposta hoje?</p>
            </div>
            <div className="contentDash">
                <ContagemRegressiva days={days} minutes={minutes} hours={hours} seconds={seconds} />
            </div>
            <div className="contentDash">
                <p className="Title"><b>Sua Jogada</b></p>
                <LanceJogada />
            </div>
            <div className="contentDash ListButton">
                <ButtonComp linkBtn="/NovaAposta" nameButton="Nova Aposta" urlImg={NovaApostaIcon} />
                <ButtonComp linkBtn="/Premiacao" nameButton="Premiação" urlImg={PremioIcon} />
                <ButtonComp linkBtn="/Resultado" nameButton="Resultado" urlImg={RankingIcon} />
            </div>
            <Link to="/regulation">
                <button className="ButtonLong">
                    <img src={RegulamentoIcon} className="iconReg" alt='icones imagem' />
                    <p>Confira o nosso Regulamento</p>
                </button>
            </Link>

        </div>
    )
}
