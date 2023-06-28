import React from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { Main, List } from "./style";

const Home = (props) => {
  const { productListRender, addProductToCart } = props;

  const renderProducts = productListRender.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        addProductToCart={addProductToCart}
      />
    );
  });
  const hasNoProducts = "Não há naves com os filtros informados";

  return (
    <Main>
      <p>
        Quantidade de produtos: <span>{productListRender.length}</span>
      </p>
      <List>{productListRender.length ? renderProducts : hasNoProducts}</List>
    </Main>
  );
};

export default Home;
