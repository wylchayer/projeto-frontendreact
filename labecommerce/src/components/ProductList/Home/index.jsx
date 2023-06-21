import React from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { Main, HeaderProductList, List } from "./style";

const Home = (props) => {

  const {productListRender, ordination, setOrdination, handleChange, addProductToCart} = props
  
  return (
    <Main>
      <HeaderProductList>
        <p>Quantidade de produtos: {productListRender.length}</p>
        <div>
          <p>
            Ordenação:
            <select value={ordination} onChange={(event) => handleChange(event, setOrdination)} >
              <option value="">Sem ordenação</option>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>
          </p>
        </div>
      </HeaderProductList>
      <List>
        {productListRender.map(product => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            />
          )
        })}
      </List>
    </Main>
  );
};

export default Home;
