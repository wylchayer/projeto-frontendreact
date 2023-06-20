import React from 'react'
import { Item } from './style'

const ItemsCard = ({product, removeProductToCart}) => {

  return (
    <Item>
      <p> {product.quantity}x </p>
      <p> {product.name} </p>
      <p>Total: R${(product.quantity*product.value).toFixed(2).replace('.',',')}</p>
      <button onClick={() => removeProductToCart(product)} >Remover</button>
    </Item>
  )
}

export default ItemsCard