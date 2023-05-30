import { GlobalStyle, Ecommerce, Body } from "./GlobalStyle";
import Filtros from "./components/Filtros";
import PaginaListaProdutos from "./components/ListaProdutos/PaginaListaProdutos";
import PaginaCarrinho from "./components/Carrinho/PaginaCarrinho";


function App() {
  return (
    <Body>
      <GlobalStyle />
      <Ecommerce >
        <Filtros />
        <PaginaListaProdutos />
        <PaginaCarrinho />
      </Ecommerce>
    </Body>
  );
}

export default App;
