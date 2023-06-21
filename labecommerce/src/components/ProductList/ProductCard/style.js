import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  min-width: 10px;

  figure {
    max-width: 200px;
  }

  img {
    border: 1px solid black;
    height: auto;
    width: 100%;
  }
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
`