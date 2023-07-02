import React from "react";
import { FooterStyle, HiperLink } from "./style";

const Footer = ({logo}) => {
  return (
    <FooterStyle>
      <img src={logo} alt="" />
      <h3>
        Imagens e informações obtidas em{" "}
        <HiperLink href="http://wiki.ogame.org/" target="_blank">
          <em>OGame Wiki</em>
        </HiperLink>
      </h3>
    </FooterStyle>
  );
};

export default Footer;
