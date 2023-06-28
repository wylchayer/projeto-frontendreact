import React from "react";
import { Modal, Container, SpaceShip, Infos, Details, Icon } from "./style";

import iconArmor from "../../../assets/icon-armor.png";
import iconShield from "../../../assets/icon-shield.png";
import iconWeapon from "../../../assets/icon-weapon.png";
import iconSpeed from "../../../assets/icon-speed.png";
import iconConsumption from "../../../assets/icon-consumption.png";
import iconCapacity from "../../../assets/icon-capacity.png";

const ModalProduct = ({ product, setChangeModal, addProductToCart }) => {
  
  document.onkeyup = function(e) {
    if (e.key ==='Escape') setChangeModal(false);
  }

  const closeModal = (e) => {
    if (e.target.id === 'modal') setChangeModal(false)
  }

  return (
    <Modal id='modal' onClick={closeModal} >
      <Container>
        <SpaceShip>
          <figure>
            <img src={product.imageUrl} alt="img not found" />
          </figure>
          <Infos>
            <Details>
              <h4>Descrição:</h4>
              <br />
              <p>
                <span>Nave:</span>{" "}
                <span>
                  <strong>{product.name}</strong>
                </span>
              </p>
              <p>
                <span>Tipo:</span>{" "}
                <span>{product.type === "combat" ? "Combate" : "Civil"}</span>
              </p>
              <p>
                <span>Preço:</span>
                <span>
                  {product.price.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </p>
              <br />
              <button onClick={() => addProductToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </Details>

            <Details>
              <h4>Dados Técnicos: </h4>
              <br />
              <p>
                <span>
                  <Icon src={iconArmor} alt="" />
                  <span>Armadura:</span>
                </span>
                <span>{product.armor.toLocaleString("de-DE")}</span>
              </p>
              <p>
                <span>
                  <Icon src={iconShield} alt="" />
                  <span>Escudo:</span>
                </span>
                <span>{product.shield.toLocaleString("de-DE")}</span>
              </p>
              <p>
                <span>
                  <Icon src={iconWeapon} alt="" />
                  <span>Armas:</span>
                </span>
                <span>{product.weapon.toLocaleString("de-DE")}</span>
              </p>
              <br />
              <p>
                <span>
                  <Icon src={iconSpeed} alt="" />
                  <span>Velocidade:</span>
                </span>
                <span>{product.speed.toLocaleString("de-DE")}</span>
              </p>
              <p>
                <span>
                  <Icon src={iconConsumption} alt="" />
                  <span>Consumo:</span>
                </span>
                <span>{product.consumption.toLocaleString("de-DE")}</span>
              </p>
              <p>
                <span>
                  <Icon src={iconCapacity} alt="" />
                  <span>Capacidade:</span>
                </span>
                <span>{product.capacity.toLocaleString("de-DE")}</span>
              </p>
            </Details>
          </Infos>
        </SpaceShip>
      </Container>
    </Modal>
  );
};

export default ModalProduct;
