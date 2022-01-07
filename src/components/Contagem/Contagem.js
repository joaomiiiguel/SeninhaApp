import React, { useEffect, useState } from 'react'

import './styles.css'

export default function ContagemRegressiva({ proximoSorteio }) {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const target = new Date(`${proximoSorteio}  23:59:59`);
    
    useEffect(() => {
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
    })

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
