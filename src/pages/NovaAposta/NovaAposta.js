import React from 'react'
import Header from '../../components/Header/Header'

import './styles.css'
import '../../globalStyles.css'

export default function NovaAposta() {

    return (
        <div className='container'>
            <Header nameHeader={"Nova Aposta"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                <form className='formAposta'>
                    <div>
                        <h3>Digite os seus números</h3>
                        <div className='listInput'>
                            <input type='number' className='inputNumber' min="0" max="60" size="2" required />
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
                    <div style={{textAlign: 'center'}}>
                        <p>ATENÇÃO</p>
                        <p>- Escolha os números entre 01 e 60</p>
                        <p>- O pagamento deve ser realizado antes do início do sorteio</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input type="reset" value="Limpar Números" className='button Btbranco'/>
                        <input type='submit' value="Confirmar Aposta" className='button Btazul'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
