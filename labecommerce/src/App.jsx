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

  useEffect(() => {
    const getShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    getShoppingCart && setCart(getShoppingCart);
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
      sumAmount();
    }
  }, [cart]);

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

  const sumAmount = () => {
    setAmount(
      cart.reduce((totalValue, product) => {
        return totalValue + product.value * product.quantity;
      }, 0)
    );
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
      if (!productToRemove.length) {
        localStorage.removeItem("shoppingCart");
        setAmount(0)
      }
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
          return currentProduct;
      }
    });

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
          ordination={ordination}
          setOrdination={setOrdination}
          handleChange={handleChange}
          addProductToCart={addProductToCart}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          removeProductToCart={removeProductToCart}
        />
      </Ecommerce>
    </Body>
  );
}

export default App;
