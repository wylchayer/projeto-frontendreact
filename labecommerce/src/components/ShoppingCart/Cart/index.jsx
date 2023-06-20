import React from "react";
import { NavCart, ItemsList } from "./style";
import ItemsCard from "../ItemsCard";

const Cart = (props) => {

  const {cart, setCart, amount, setAmount, removeProductToCart} = props

  const renderCart = cart.map((product) => {
    return <ItemsCard key={product.id} product={product} removeProductToCart={removeProductToCart} />
  })

  const totalCartValue = cart.reduce((totalValue, product) => {return totalValue + (product.value * product.quantity)}, 0)

   return (
    <NavCart>
      <h2>Carrinho</h2>
      <ItemsList>
        {renderCart}
      </ItemsList>
      <p>Valor Total no carrinho: R${totalCartValue.toFixed(2).replace('.',',')}</p>
    </NavCart>
  );
};

export default Cart;
