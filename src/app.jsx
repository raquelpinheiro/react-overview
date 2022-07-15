import './app.css'
import React from 'react';
import Card from './componentes/layout/card'
import ComParametro from './componentes/com-parametro';
import ComFilhos from './componentes/com-filhos';
import Primeiro from './componentes/primeiro';
import Repeticao from './componentes/repeticao';
import CondicionaIfTernario from './componentes/condicional-if-ternario';
import ConficionalComIf from './componentes/condicional-com-if'

export default (props) =>
    <div className="app">
        <Card titulo="Componente com parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o sub título"></ComParametro>
        </Card>
        <Card titulo="Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Rafael</li>
                    <li>Mariana</li>
                    <li>Vanessa</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Primeiro componente">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Condicional if ternario">
            <CondicionaIfTernario numero={11}></CondicionaIfTernario>
        </Card>
        <Card titulo="Condicional if">
            <ConficionalComIf numero={10}></ConficionalComIf>
        </Card>
    </div>