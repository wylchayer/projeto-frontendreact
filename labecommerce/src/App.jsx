import { useEffect, useState } from "react";
import { GlobalStyle, Ecommerce, Body } from "./GlobalStyle";
import Filters from "./components/Filters";
import Home from "./components/ProductList/Home";
import Cart from "./components/ShoppingCart/Cart";
import arrayProductList from "./assents/arrayProductList";

function App() {
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();
  const [searchFilter, setSearchFilter] = useState("teste");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

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
      setCart(quantityToRemove) 
    } else {
      const productToRemove = cart.filter((item) => {return item.id !== product.id})
      setCart(productToRemove)
    }
  };

  return (
    <Body>
      <GlobalStyle />
      <Ecommerce>
        <Filters
          setMinFilter={setMinFilter}
          setMaxFilter={setMaxFilter}
          setSearchFilter={setSearchFilter}
          handleChange={handleChange}
        />
        <Home
          arrayProductList={arrayProductList}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
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
