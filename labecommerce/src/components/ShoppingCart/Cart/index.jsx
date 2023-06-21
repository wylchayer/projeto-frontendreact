import React from "react";
import { NavCart, ItemsList } from "./style";
import ItemsCard from "../ItemsCard";

const Cart = (props) => {

  const {cart, amount, removeProductToCart} = props

  const renderCart = cart.map((product) => {
    return <ItemsCard key={product.id} product={product} removeProductToCart={removeProductToCart} />
  })

   return (
    <NavCart>
      <h2>Carrinho</h2>
      <ItemsList>
        {renderCart}
      </ItemsList>
      <p>Valor Total no carrinho: R${amount.toFixed(2).replace('.',',')}</p>
    </NavCart>
  );
};

export default Cart;
