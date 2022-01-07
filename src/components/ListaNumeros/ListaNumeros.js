import React from 'react'

import './styles.css'
export default function ListaNumeros({ listNumberos }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            {listNumberos.map(number => (
                <div key={number.id} className='boxNumber'>
                    <p className='numberText'>{number.number}</p>
                </div>
            ))}
        </div>
    )
}
