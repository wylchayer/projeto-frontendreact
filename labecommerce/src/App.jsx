import { useState } from "react";
import { GlobalStyle, Ecommerce, Body } from "./GlobalStyle";
import Filtros from "./components/Filtros";
import PaginaListaProdutos from "./components/ListaProdutos/PaginaListaProdutos";
import PaginaCarrinho from "./components/Carrinho/PaginaCarrinho";
import productsList from "./assents/productsList";


function App() {

  const [minFilter, setMinFilter] = useState()
  const [maxFilter, setMaxFilter] = useState()
  const [searchFilter, setSearchFilter] = useState('teste')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState()

  const handleChange = (event, setStatus) => {
    setStatus(event.target.value)
  }

  return (
    <Body>
      <GlobalStyle />
      <Ecommerce >
        <Filtros
          setMinFilter={setMinFilter}
          setMaxFilter={setMaxFilter}
          setSearchFilter={setSearchFilter}
          handleChange={handleChange}
        />
        <PaginaListaProdutos
          productsList={productsList}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
        <PaginaCarrinho
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </Ecommerce>
    </Body>
  );
}

export default App;
