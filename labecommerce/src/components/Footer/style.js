import { styled } from "styled-components";

export const FooterStyle = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #6f9fc8;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  >img{
    height: 50px;
  }
`;

export const HiperLink = styled.a`
  text-decoration: none;

  > em {
    color: #6f9fc8;
  }
`;
