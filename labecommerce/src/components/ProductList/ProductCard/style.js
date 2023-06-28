import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid #000000;
  border-radius: 20px;
  cursor: pointer;
  min-width: 10px;
  padding: 5px;
  padding-bottom: 10px;
  box-shadow: 5px 0px 10px #000000, -5px 0px 10px #000000, 0px 5px 10px #000000,
    0px -5px 10px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewDetails = styled.div`
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
  gap: 10px;
  padding: 10px;

  > p {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }
`;
