import { styled } from "styled-components";

export const CartaoProduto = styled.div`
  border: 1px solid black;
  min-width: 10px;

  img {
    border: 1px solid black;
    height: 300px;
    width: 200px;
  }
`;

export const DescricaoProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`