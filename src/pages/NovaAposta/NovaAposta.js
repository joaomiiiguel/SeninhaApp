import React, { useState } from 'react'
import Header from '../../components/Header/Header'

import './styles.css'
import '../../globalStyles.css'


export default function NovaAposta() {
    const [novaAposta, setNovaAposta] = useState([])
    const [modal, setModal] = useState(false)

    return (
        <div className='container'>
            <Header nameHeader={"Nova Aposta"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                <form className='formAposta'>
                    <div>
                        <h3>Digite os seus números</h3>
                        <div className='listInput'>
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required onSubmit={value => setNovaAposta(value)} />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>ATENÇÃO</p>
                        <p>- Escolha os números entre 01 e 60</p>
                        <p>- O pagamento deve ser realizado antes do início do sorteio</p>
                    </div>
                </form>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 60 }}>
                    <button type="reset" className='button Btbranco' >Limpar Números</button>
                    <button className='button Btazul' onClick={() => setModal(true)} >Confirmar Aposta</button>
                </div>
            </div>

            {modal === true ?
                <div className='modalConfirm' onClick={() => setModal(false)}>
                    <div className='modalContainer'>
                        <p>Modal</p>
                        <button onClick={() => setModal(false)}>Fechar</button>
                    </div>
                </div> : <></>}
        </div>
    )
}
