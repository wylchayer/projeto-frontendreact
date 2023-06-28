import React from "react";
import {
  Item,
  MiniImage,
  ProductData,
  ProductName,
  NamePrice,
  Buttons,
} from "./style";

const ItemsCard = ({ product, removeProductToCart, addProductToCart }) => {
  return (
    <Item>
      <MiniImage>
        <img src={product.imageUrl} alt="" />
      </MiniImage>
      <ProductData>
        <ProductName>{product.name}</ProductName>
        <NamePrice>
          <p>{product.quantity}x</p>
          <p>
            {(product.quantity * product.price).toLocaleString("de-DE", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </NamePrice>
      </ProductData>
      <Buttons>
        <button onClick={() => addProductToCart(product)}>+</button>
        <button onClick={() => removeProductToCart(product)}>-</button>
      </Buttons>
    </Item>
  );
};

export default ItemsCard;
