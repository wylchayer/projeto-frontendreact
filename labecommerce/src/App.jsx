import { useEffect, useState } from "react";
import {
  GlobalStyle,
  Ecommerce,
  LateralMenu,
  Body,
  Header,
} from "./GlobalStyle";
import Filters from "./components/Filters";
import Home from "./components/ProductList/Home";
import Cart from "./components/ShoppingCart/Cart";
import Footer from "./components/Footer";
import arrayProductList from "./assets/spaceShipsList";

import logo from "./assets/logo.png";

function App() {
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordination, setOrdination] = useState("");
  const [type, setType] = useState("");

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
        return totalValue + product.price * product.quantity;
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
        setAmount(0);
      }
    }
  };

  const clearFilters = () => {
    setMinFilter("");
    setMaxFilter("");
    setSearchFilter("");
    setType("");
    setOrdination("");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shoppingCart");
    setAmount(0);
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
      return product.price >= minFilter || !minFilter;
    })
    .filter((product) => {
      return product.price <= maxFilter || !maxFilter;
    })
    .filter((product) => {
      switch (type) {
        case "Combate":
          return product.type === "combat";
        case "Civil":
          return product.type === "civil";
        default:
          return product;
      }
    })
    .sort((currentProduct, nextProduct) => {
      switch (ordination) {
        case "menoresPrecos":
          return currentProduct.price - nextProduct.price;
        case "maioresPrecos":
          return nextProduct.price - currentProduct.price;
        default:
          return currentProduct;
      }
    });

  return (
    <>
      <Body>
        <GlobalStyle />
        <Ecommerce>
          <LateralMenu>
            <Header>
              <img src={logo} alt="" />
            </Header>
            <Filters
              minFilter={minFilter}
              setMinFilter={setMinFilter}
              maxFilter={maxFilter}
              setMaxFilter={setMaxFilter}
              searchFilter={searchFilter}
              setSearchFilter={setSearchFilter}
              type={type}
              setType={setType}
              ordination={ordination}
              setOrdination={setOrdination}
              handleChange={handleChange}
              clearFilters={clearFilters}
            />
            <Cart
              cart={cart}
              setCart={setCart}
              amount={amount}
              removeProductToCart={removeProductToCart}
              clearCart={clearCart}
              addProductToCart={addProductToCart}
            />
          </LateralMenu>
          <Home
            productListRender={productListRender}
            addProductToCart={addProductToCart}
          />
        </Ecommerce>
        <Footer logo={logo} />
      </Body>
    </>
  );
}

export default App;
