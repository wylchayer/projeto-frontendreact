import React from "react";
import { CartaoProduto, DescricaoProduto } from "./style";

const Produtos = () => {
  return (
    <CartaoProduto>
      <figure>
        <img src="https://picsum.photos/200/300" alt="img not found" />
      </figure>
      <DescricaoProduto>
        <p>Nome do Produto</p>
        <p>Valor</p>
        <button>Adicionar ao Carrinho</button>
      </DescricaoProduto>
    </CartaoProduto>
  );
};

export default Produtos;
