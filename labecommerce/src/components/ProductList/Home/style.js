import { styled } from "styled-components";

export const Main = styled.main`
  padding: 3vh;

  > p {
    flex-grow: 1;
    margin-bottom: 3vh;
    margin-left: 3vh;
    text-shadow: 2px 2px 2px #000000;
  }

  span{
    color: #6f9fc8;
    font-weight: bold;
  }

`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
