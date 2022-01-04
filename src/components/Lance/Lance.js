import React from 'react'

import './styles.css'

export default function lanceJogada() {

    return (
        <div>
            <p>Jogada 1</p>
            <div className="listLance">
                <div className="RowLance">
                    <p className="numberLance">10</p>
                    <p className="numberLance">25</p>
                    <p className="numberLance">20</p>
                    <p className="numberLance">05</p>
                    <p className="numberLance">08</p>
                </div>
                <div  className="RowLance">
                    <p className="numberLance">19</p>
                    <p className="numberLance">40</p>
                    <p className="numberLance">30</p>
                    <p className="numberLance">36</p>
                    <p className="numberLance">70</p>
                </div>

            </div>
        </div>
    )
}
