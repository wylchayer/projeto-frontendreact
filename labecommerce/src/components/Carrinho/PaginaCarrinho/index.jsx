import React from "react";
import { CarrinhoNav, ListaItens } from "./style";
import Itens from "../Itens";

const PaginaCarrinho = (props) => {

  const {cart, setCart, amount, setAmount} = props

  return (
    <CarrinhoNav>
      <h2>Carrinho</h2>
      <ListaItens>
        <Itens />
        <Itens />
      </ListaItens>
      <p>Valor Total: 0</p>
    </CarrinhoNav>
  );
};

export default PaginaCarrinho;
