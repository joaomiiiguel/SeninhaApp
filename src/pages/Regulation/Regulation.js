import React from 'react'
import Header from '../../components/Header/Header'

import '../../globalStyles.css'

export default function Regulation() {
    return (
        <div className="container">
            <Header nameHeader={"Regulamento"} linkBack={"/dashboard"} />
            <div className="bodyContainer">
                <h3>Regulamento das Apostas</h3>
                <div>
                    <p>Os sorteios serão realizados pela Caixa Econômica Federal aos sábados às 20H. A cada sábado serão sorteadas 06 (Seis) dezenas;<br />
                        O participante que marcar primeiro os 10 (dez) pontos será o ganhador do prêmio de Maior Ponto;<br />
                        O participante que marcar menos pontos será o ganhador doprêmio de Menor Ponto; <br />
                        Cada participante deverá escolher 10 (Dez) números entre 01 (Um) e 60 (Sessenta);<br />
                        Caso tenha mais de 01 (Um) ganhador, o prêmio será dividido.<br /><br />
                    </p>
                </div>
                <div>
                    <p>
                        <b>IMPORTANTE</b><br />
                        SÓ TERÁ DIREITO AO PRÊMIO O GANHADOR QUE TIVER EFETUADO O PAGAMENTO ATÉ O SÁBADO;<br />
                        O ORGANIZADOR TERÁ ATÉ 15 DIAS APÓS O ÚLTIMO SORTEIO PARA REALIZAR O PAGAMENTO.
                    </p>
                </div>

                <div>
                    <h3>Divisão do valor arrecadado</h3>
                    <p>80% para quem Marcar 10 Pontos</p>
                    <p>10% para quem marcar menos Pontos</p>
                    <p>10% para a organização do bolão</p>

                </div>

            </div>

        </div>
    )
}
