import React from 'react';
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
    return (
        <div className="Dashboard">
            <div className="contentDash">
                <p className="Title">Olá, <b>Miguel</b></p>
                <p>Já fez sua aposta hoje?</p>
            </div>
            <div className="contentDash">
                <ContagemRegressiva />
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
                    <img src={RegulamentoIcon} className="iconReg" alt='icones imagem'/>
                    <p>Confira o nosso Regulamento</p>
                </button>
            </Link>

        </div>
    )
}
