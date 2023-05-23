import React from "react";
import { StylePaginaCarrinho } from "./style";
import Itens from "../Itens";

const PaginaCarrinho = () => {
  return (
    <>
      <StylePaginaCarrinho>Página Carrinho</StylePaginaCarrinho>
      <Itens />
    </>
  );
};

export default PaginaCarrinho;
