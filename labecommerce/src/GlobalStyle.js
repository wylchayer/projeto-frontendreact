import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  * {
    background-color: #000000;
    background-image: url("http://wiki.ogame.org/skins/ogame/images/og_background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    font-family: Tahoma, sans-serif;
  }

  button {
    border: none;
    background-image: none;
    background-color: #6f9fc8;
    border-radius: 10px;
    color: #000000;
    font-weight: bold;
    padding: 10px;

    &:hover {
      background-color: #000000;
      color: #6f9fc8;
      cursor: pointer;
    }

    &:active {
      box-shadow: 2px 0px 5px #6f9fc8,
                  -2px 0px 5px #6f9fc8,
                  0px 2px 5px #6f9fc8,
                  0px -2px 5px #6f9fc8;
    }
  }
`;

export const Body = styled.styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const LateralMenu = styled.styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  border-right: 1px solid #6f9fc8;
`;

export const Ecommerce = styled.styled.div`
  display: grid;
  grid-template: 1fr / 330px 1fr;
  max-width: 1400px;
`;
