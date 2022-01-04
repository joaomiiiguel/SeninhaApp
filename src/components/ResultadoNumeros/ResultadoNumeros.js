import React from 'react'

const listNumberos = [11,22,33,50,40,99]

export default function ResultadoNumeros({ numConcurso }) {
    return (
        <div>
            <p>Concurso:{numConcurso}</p>
            <div>
                {listNumberos.map(number =>(
                    <p>{}</p>
                ))}
            </div>
        </div>
    )
}
