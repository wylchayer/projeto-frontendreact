import { styled } from "styled-components";

export const NavCart = styled.nav`
  border-top: 1px solid #6f9fc8;
  padding: 10px;
  flex-grow: 1;

  h2 {
    margin-bottom: 10px;
    color: #6f9fc8;
    /* text-align: center; */
  }
`;

export const TotalClear = styled.div`
  margin: 2vh;
  display: grid;
  grid-template: 1fr / 70% 1fr;
  align-items: center;

  p{
    text-align: center;
    flex-grow: 1;
    font-weight: bold;
  }

  span{
    font-weight: bold;
    color: #6f9fc8;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;