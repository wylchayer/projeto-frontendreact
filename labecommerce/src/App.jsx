import { useEffect, useState } from "react";
import { GlobalStyle, Ecommerce, Body } from "./GlobalStyle";
import Filters from "./components/Filters";
import Home from "./components/ProductList/Home";
import Cart from "./components/ShoppingCart/Cart";
import arrayProductList from "./assents/arrayProductList";

function App() {
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordination, setOrdination] = useState("");

  const handleChange = (event, setStatus) => {
    setStatus(event.target.value);
  };

  const addProductToCart = (product) => {
    const newProduct = cart.find((item) => {
      return item.id === product.id;
    });

    if (newProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === newProduct.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCart(updatedCart);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const removeProductToCart = (product) => {
    if (product.quantity > 1) {
      const quantityToRemove = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(quantityToRemove);
    } else {
      const productToRemove = cart.filter((item) => {
        return item.id !== product.id;
      });
      setCart(productToRemove);
    }
  };

  const productListRender = arrayProductList
    .filter((product) => {
      if (product.name.toLowerCase().includes(searchFilter.toLowerCase())) {
        return product;
      } else if (!searchFilter) {
        return arrayProductList;
      }
    })
    .filter((product) => {
      return product.value >= minFilter || !minFilter;
    })
    .filter((product) => {
      return product.value <= maxFilter || !maxFilter;
    })
    .sort((currentProduct, nextProduct) => {
      switch (ordination) {
        case "Crescente":
          return currentProduct.value - nextProduct.value;
        case "Decrescente":
          return nextProduct.value - currentProduct.value;
        default:
          return currentProduct
      }
    });

  console.log(`Valor mínimo: ${minFilter}
      Valor máximo: ${maxFilter}
      Busca nome: ${searchFilter}
      Ordenação: ${ordination}`);
  console.log(productListRender);

  return (
    <Body>
      <GlobalStyle />
      <Ecommerce>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          handleChange={handleChange}
        />
        <Home
          productListRender={productListRender}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          ordination={ordination}
          setOrdination={setOrdination}
          handleChange={handleChange}
          addProductToCart={addProductToCart}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          removeProductToCart={removeProductToCart}
        />
      </Ecommerce>
    </Body>
  );
}

export default App;
