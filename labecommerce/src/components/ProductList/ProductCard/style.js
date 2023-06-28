import { styled } from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 20px;
  min-width: 10px;
  padding: 5px;
  box-shadow: 5px 0px 10px #000000, -5px 0px 10px #000000, 0px 5px 10px #000000,
    0px -5px 10px #000000;

  figure {
    max-width: 200px;
  }

  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;
