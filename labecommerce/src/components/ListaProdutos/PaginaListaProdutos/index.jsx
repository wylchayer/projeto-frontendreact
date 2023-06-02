import React from "react";
import { useState } from "react";
import Produtos from "../Produtos";
import { Main, CabecalhoListaProdutos, ListaProdutos } from "./style";

const PaginaListaProdutos = ({ productsList }) => {

  const [ordination, setOrdination] = useState('Crescente')

  const handleOrdination = (event) => {
    setOrdination(event.target.value)
  }
  
  return (
    <Main>
      <CabecalhoListaProdutos>
        <p>Quantidade de produtos: {productsList.length}</p>
        <div>
          <p>
            Ordenação:
            <select onChange={handleOrdination} >
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>
          </p>
        </div>
      </CabecalhoListaProdutos>
      <ListaProdutos>
        {productsList.map(element => {
          return (
            <Produtos
              name={element.name}
              value={element.value}
              imageUrl={element.imageUrl}
            />
          )
        })}
      </ListaProdutos>
    </Main>
  );
};

export default PaginaListaProdutos;
