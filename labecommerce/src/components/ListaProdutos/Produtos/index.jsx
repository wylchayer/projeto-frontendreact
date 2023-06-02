import React from "react";
import { CartaoProduto, DescricaoProduto } from "./style";

const Produtos = ({name, value, imageUrl}) => {
  return (
    <CartaoProduto>
      <figure>
        <img src={imageUrl} alt="img not found" />
      </figure>
      <DescricaoProduto>
        <p>{name}</p>
        <p>{value}</p>
        <button>Adicionar ao Carrinho</button>
      </DescricaoProduto>
    </CartaoProduto>
  );
};

export default Produtos;
