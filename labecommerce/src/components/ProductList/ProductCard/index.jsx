import React from "react";
import { Card, ProductDescription } from "./style";

const ProductCard = ({product, addProductToCart}) => {
  return (
    <Card>
      <figure>
        <img src={product.imageUrl} alt="img not found" />
      </figure>
      <ProductDescription>
        <p>{product.name}</p>
        <p>{product.value}</p>
        <button onClick={() => addProductToCart(product)} >Adicionar ao Carrinho</button>
      </ProductDescription>
    </Card>
  );
};

export default ProductCard;