import React from 'react'

import './styles.css'

export default function ContagemRegressiva({ days, hours, minutes, seconds }) {
   
    
    return (
        <div className="containerCount">
            <p className="TitleCount">Próximo Sorteio: <b>26 de Setembro 2021</b></p>
            <div className="ListCount">
                <div>
                    <div>
                        <p className="numberCount">{days <= 9 ? `0${days}` : days}</p>
                        <p>dias</p>
                    </div>
                </div>
                <div className="dividerCount">:</div>
                <div>
                    <div>
                        <p className="numberCount">{hours <= 9 ? `0${hours}` : hours}</p>
                        <p>horas</p>
                    </div>
                </div>
                <div className="dividerCount">:</div>
                <div>
                    <div>
                        <p className="numberCount">{minutes <= 9 ? `0${minutes}` : minutes}</p>
                        <p>minutos</p>
                    </div>
                </div>
                <div className="dividerCount">:</div>
                <div>
                    <div>
                        <p className="numberCount">{seconds <= 9 ? `0${seconds}` : seconds}</p>
                        <p>segundos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
