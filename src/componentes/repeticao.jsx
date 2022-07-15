import React  from "react";
import todosProdutos from '../data/produtos'

export default () => {

    function GetProdutos(){
        let produtos = todosProdutos();
        return produtos.map(p => {
            return <li key={p.id}> {p.nome} - R$ {p.preco}</li>
        });
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
               {GetProdutos()}
            </ul>
        </div>
    )
}