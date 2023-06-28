import { styled } from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: none;
  transition: 3ms;
`;

export const Container = styled.div`
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 0px 10px #000000, -5px 0px 10px #000000, 0px 5px 10px #000000,
    0px -5px 10px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpaceShip = styled.div`
  display: flex;
  gap: 2em;

  > figure {
    height: 200px;
    width: 200px;

    > img {
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  gap: 3em;
`;

export const Details = styled.div`
  width: 13em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  > h4 {
    border-bottom: 1px solid #fff;
  }

  > p {
    align-items: center;
    display: flex;
    justify-content: space-between;

    > span {
      align-items: center;
      display: flex;
      gap: 8px;
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
`;

export const Data = styled.span`
`