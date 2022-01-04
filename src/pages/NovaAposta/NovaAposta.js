import React from 'react'
import Header from '../../components/Header/Header'

export default function NovaAposta() {
    return (
        <div className='container'>
            <Header nameHeader={"Nova Aposta"} linkBack={"/dashboard"} />
            <div className='bodyContainer'>
                Nova Aposta
            </div>
        </div>
    )
}
