import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Body = styled.styled.div`
  display: flex;
  justify-content: center;
`;

export const Ecommerce = styled.styled.div`
  display: grid;
  grid-template: 1fr / 20% 60% 20%;
  flex-grow: 1;
  margin: 10px;
  max-width: 1400px;
`;
