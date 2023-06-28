import React, { useState } from "react";
import ProductCard from "../ProductCard";
import ModalProduct from "../ModalProduct";
import { Main, List } from "./style";

const Home = (props) => {
  const { productListRender, addProductToCart } = props;

  const [changeModal, setChangeModal] = useState(false);
  const [productModal, setProductModal] = useState({});

  const handleModal = (product) => {
    changeModal ? setChangeModal(false) : setChangeModal(true);
    setProductModal(product);
  };

  const hasNoProducts = "Não há naves com os filtros informados";
  const renderProducts = productListRender.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard
          product={product}
          addProductToCart={addProductToCart}
          handleModal={handleModal}
        />
        {changeModal ? (
          <ModalProduct
            product={productModal}
            setChangeModal={setChangeModal}
            addProductToCart={addProductToCart}
          />
        ) : null}
      </div>
    );
  });

  return (
    <Main>
      <p>
        Quantidade de produtos: <span>{productListRender.length}</span>
      </p>
      <List>{productListRender.length ? renderProducts : hasNoProducts}</List>
    </Main>
  );
};

export default Home;
