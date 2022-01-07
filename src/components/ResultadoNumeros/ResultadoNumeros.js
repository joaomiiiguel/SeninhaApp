import React from 'react'
import ListaNumeros from '../ListaNumeros/ListaNumeros'

import './styles.css'

export default function ResultadoNumeros({ numConcurso, listNumberos }) {
    return (
        <div className='containerCardResult'>
            <p>Concurso: {numConcurso}</p>
            <ListaNumeros listNumberos={listNumberos} />
            
        </div>
    )
}
