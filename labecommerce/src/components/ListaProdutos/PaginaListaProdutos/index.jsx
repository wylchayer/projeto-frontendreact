import React from "react";
import Produtos from "../Produtos";
import { Main, CabecalhoListaProdutos, ListaProdutos } from "./style";

const PaginaListaProdutos = () => {
  return (
    <Main>
      <CabecalhoListaProdutos>
        <p>Quantidade de produtos:</p>
        <div>
          <p>
            Ordenação:
            <select>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>
          </p>
        </div>
      </CabecalhoListaProdutos>
      <ListaProdutos>
        <Produtos />
        <Produtos />
        <Produtos />
      </ListaProdutos>
    </Main>
  );
};

export default PaginaListaProdutos;
