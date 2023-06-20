import React from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { Main, HeaderProductList, List } from "./style";

const Home = (props) => {

  const {arrayProductList, cart, setCart, amount, setAmount, addProductToCart} = props

  const [ordination, setOrdination] = useState('Crescente')

  const handleOrdination = (event) => {
    console.log(event);
    setOrdination(event.target.value)
  }
  
  return (
    <Main>
      <HeaderProductList>
        <p>Quantidade de produtos: {arrayProductList.length}</p>
        <div>
          <p>
            Ordenação:
            <select onChange={handleOrdination} >
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>
          </p>
        </div>
      </HeaderProductList>
      <List>
        {arrayProductList.map(product => {
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
