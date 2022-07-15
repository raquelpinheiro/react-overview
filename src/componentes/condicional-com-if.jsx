import React from 'react';
import If from './if';

export default props => {
    return (
        <div>
            <h2>Número {props.numero}</h2>
            <If condicao={props.numero % 2 === 0}>
                <span>Par</span>
            </If>

            <If condicao={props.numero % 2 !== 0}>
                <span>Impar</span>
            </If>
        </div>
    )
}