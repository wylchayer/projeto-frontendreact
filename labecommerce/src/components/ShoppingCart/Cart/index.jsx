import React from "react";
import { NavCart, ItemsList, TotalClear } from "./style";
import ItemsCard from "../ItemsCard";

const Cart = (props) => {
  const { cart, amount, removeProductToCart, clearCart, addProductToCart } =
    props;

  const renderCart = cart.map((product) => {
    return (
      <ItemsCard
        key={product.id}
        product={product}
        removeProductToCart={removeProductToCart}
        addProductToCart={addProductToCart}
      />
    );
  });

  return (
    <NavCart>
      <h2>Carrinho</h2>
      <TotalClear>
        <p>
          Valor Total:{" "}
          <span>
            {amount.toLocaleString("de-DE", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <button onClick={clearCart}>Limpar Carrinho</button>
      </TotalClear>
      <ItemsList>{renderCart}</ItemsList>
    </NavCart>
  );
};

export default Cart;
