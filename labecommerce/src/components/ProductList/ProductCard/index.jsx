import React from "react";
import { Card, ProductDescription, ViewDetails } from "./style";

const ProductCard = ({ product, addProductToCart, handleModal }) => {
  return (
    <Card>
      <ViewDetails onClick={() => handleModal(product)} >
        <figure>
          <img src={product.imageUrl} alt="img not found" />
        </figure>
        <ProductDescription>
          <p>{product.name}</p>
          <p>
            {product.price.toLocaleString("de-DE", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </ProductDescription>
      </ViewDetails>
      <button onClick={() => addProductToCart(product)}>
        Adicionar ao Carrinho
      </button>
    </Card>
  );
};

export default ProductCard;
