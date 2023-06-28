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
        {/* <p>R$ {product.price.toFixed(2).replace('.',',')}</p> */}
        <p>{product.price.toLocaleString('de-DE', {style: 'currency', currency: 'BRL'})}</p>
        <button onClick={() => addProductToCart(product)} >Adicionar ao Carrinho</button>
      </ProductDescription>
    </Card>
  );
};

export default ProductCard;