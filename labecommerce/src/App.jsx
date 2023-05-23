import GlobalStyle from "./GlobalStyle";
import Filtros from "./components/Filtros";
import PaginaListaProdutos from "./components/ListaProdutos/PaginaListaProdutos";
import PaginaCarrinho from "./components/Carrinho/PaginaCarrinho";


function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Filtros />
        <PaginaListaProdutos />
        <PaginaCarrinho />
      </div>
    </>
  );
}

export default App;
