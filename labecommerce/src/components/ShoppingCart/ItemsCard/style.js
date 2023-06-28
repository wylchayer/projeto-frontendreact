import { styled } from "styled-components";

export const Item = styled.div`
  border: 1px solid #6f9fc8;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  p {
    text-align: center;
  }

  div {
    display: flex;
    gap: 5px;
  }
`;

export const MiniImage = styled.div`
  height: 50px;

  >img{
    border-radius: 10px;
  }
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 10px;
`;

export const ProductName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  align-self: center;
  color: #6f9fc8;
`;

export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    padding: 2px 10px;
  }
`;