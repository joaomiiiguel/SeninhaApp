import React from 'react'

import './styles.css'

export default function ContagemRegressiva() {
    return (
        <div className="containerCount">
            <p className="TitleCount">Próximo Sorteio: <b>26 de Setembro 2021</b></p>
            <div className="ListCount">
                <div>
                    <div>
                        <p className="numberCount">00</p>
                        <p>dias</p>
                    </div>
                </div>
                <div className="dividerCount">:</div>
                <div>
                    <div>
                        <p className="numberCount">00</p>
                        <p>horas</p>
                    </div>
                </div>
                <div className="dividerCount">:</div>
                <div>
                    <div>
                        <p className="numberCount">00</p>
                        <p>minutos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
