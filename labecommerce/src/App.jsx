import { useState } from "react";
import { GlobalStyle, Ecommerce, Body } from "./GlobalStyle";
import Filtros from "./components/Filtros";
import PaginaListaProdutos from "./components/ListaProdutos/PaginaListaProdutos";
import PaginaCarrinho from "./components/Carrinho/PaginaCarrinho";
import productsList from "./assents/productsList";


function App() {

  const [minFilter, setMinFilter] = useState()
  const [maxFilter, setMaxFilter] = useState()
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState()

  return (
    <Body>
      <GlobalStyle />
      <Ecommerce >
        <Filtros />
        <PaginaListaProdutos productsList={productsList} />
        <PaginaCarrinho />
      </Ecommerce>
    </Body>
  );
}

export default App;
